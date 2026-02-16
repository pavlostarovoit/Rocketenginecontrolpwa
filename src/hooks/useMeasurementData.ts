import { useState, useEffect, useCallback, useRef } from 'react';
import { APP_CONFIG } from '../config/app-config';

// Data structure from server
export interface MeasurementData {
  state: string;
  time: string;
  thrust: number;
  samples: number;
  rate: number;
  rssi: number;
}

// Data history for graphing
export interface ThrustDataPoint {
  time: number;
  thrust: number;
}

const SERVER_URL = APP_CONFIG.server.url;
const FETCH_INTERVAL = APP_CONFIG.server.fetchInterval;
const MAX_RETRY_INTERVAL = 5000; // Maximum backoff: 5 seconds
const BACKOFF_MULTIPLIER = 1.5; // Increase interval by 50% on each failure

export function useMeasurementData() {
  const [data, setData] = useState<MeasurementData | null>(null);
  const [thrustHistory, setThrustHistory] = useState<ThrustDataPoint[]>([]);
  const [fullHistory, setFullHistory] = useState<ThrustDataPoint[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshRate, setRefreshRate] = useState(0); // Client-side refresh rate in Hz
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null); // Track first data point time
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState<number | null>(null); // Timestamp of last successful fetch
  
  // Track consecutive failures for exponential backoff
  const consecutiveFailures = useRef(0);
  const currentInterval = useRef(FETCH_INTERVAL);
  const lastErrorLogged = useRef<string | null>(null);
  const lastReceiveTime = useRef<number | null>(null);
  const receiveTimestamps = useRef<number[]>([]); // Track last few receive times for averaging
  const lastState = useRef<string | null>(null); // Track previous state to detect transitions

  // Fetch data from server
  const fetchData = useCallback(async () => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), APP_CONFIG.server.timeout);

      // Simplified fetch to avoid CORS preflight - only use basic GET request
      const fetchOptions: RequestInit = {
        method: 'GET',
        signal: controller.signal,
      };

      // Only add CORS mode if server supports it (configured in app-config)
      if (APP_CONFIG.server.useCors) {
        fetchOptions.mode = 'cors';
        fetchOptions.cache = 'no-cache';
      }

      const response = await fetch(SERVER_URL, fetchOptions);

      clearTimeout(timeoutId);

      if (response.ok) {
        const jsonData: MeasurementData = await response.json();
        setData(jsonData);
        setIsConnected(true);
        setError(null);
        
        // Update fetch timestamp to trigger UI updates (like blinking indicator)
        setLastFetchTimestamp(Date.now());
        
        // Detect transition to State 0 (Ignited)
        // If transitioning to 0, we reset the history to start calculations fresh
        if (jsonData.state === '0' && lastState.current !== '0') {
          setFullHistory([]);
          setThrustHistory([]);
          setSessionStartTime(Date.now());
        }
        
        lastState.current = jsonData.state;
        
        // Calculate refresh rate
        const now = Date.now();
        if (lastReceiveTime.current !== null) {
          // Add timestamp to array
          receiveTimestamps.current.push(now);
          // Keep only last 5 timestamps for averaging
          if (receiveTimestamps.current.length > 5) {
            receiveTimestamps.current.shift();
          }
          
          // Calculate average interval from timestamps
          if (receiveTimestamps.current.length >= 2) {
            const timestamps = receiveTimestamps.current;
            const totalInterval = timestamps[timestamps.length - 1] - timestamps[0];
            const avgInterval = totalInterval / (timestamps.length - 1);
            const hz = avgInterval > 0 ? 1000 / avgInterval : 0;
            setRefreshRate(Math.round(hz * 10) / 10); // Round to 1 decimal
          }
        }
        lastReceiveTime.current = now;
        
        // Reset backoff on successful connection
        consecutiveFailures.current = 0;
        currentInterval.current = FETCH_INTERVAL;
        lastErrorLogged.current = null;

        // Add to thrust history for graph
        setThrustHistory((prev) => {
          const newPoint: ThrustDataPoint = {
            time: Date.now(),
            thrust: jsonData.thrust,
          };
          
          // Set session start time on first data point
          if (prev.length === 0) {
            setSessionStartTime(newPoint.time);
          }
          
          // Keep last N data points based on config
          const updated = [...prev, newPoint];
          return updated.slice(-APP_CONFIG.graph.maxDataPoints);
        });

        // Add to full history for calculations
        setFullHistory((prev) => {
          const newPoint: ThrustDataPoint = {
            time: Date.now(),
            thrust: jsonData.thrust,
          };
          
          // Detect state change to 'R' to potentially reset history?
          // For now, we simply accumulate. Ideally we should reset when recording starts.
          // But existing logic doesn't explicitly reset "thrustHistory" either.
          // We'll follow the pattern of accumulating.
          return [...prev, newPoint];
        });
        
        // Update last fetch timestamp
        setLastFetchTimestamp(now);
      } else {
        handleConnectionFailure('Server responded with error');
      }
    } catch (err) {
      // Only log first occurrence and changes in error type to reduce console noise
      const errorMessage = err instanceof Error ? err.message : 'Connection failed';
      if (lastErrorLogged.current !== errorMessage) {
        console.warn(`Connection to ${SERVER_URL} failed:`, errorMessage);
        lastErrorLogged.current = errorMessage;
      }
      handleConnectionFailure(errorMessage);
    }
  }, []);

  // Handle connection failures with exponential backoff
  const handleConnectionFailure = (errorMessage: string) => {
    setIsConnected(false);
    setError(errorMessage);
    setRefreshRate(0); // Reset refresh rate on disconnect
    lastReceiveTime.current = null;
    receiveTimestamps.current = [];
    consecutiveFailures.current += 1;

    // Implement exponential backoff
    if (consecutiveFailures.current > 3) {
      currentInterval.current = Math.min(
        currentInterval.current * BACKOFF_MULTIPLIER,
        MAX_RETRY_INTERVAL
      );
    }
  };

  // Setup polling interval with dynamic backoff
  useEffect(() => {
    // Fetch immediately on mount
    fetchData();

    // Setup interval for continuous fetching with dynamic interval
    let intervalId: NodeJS.Timeout;
    
    const scheduleNext = () => {
      intervalId = setTimeout(() => {
        fetchData();
        scheduleNext();
      }, currentInterval.current);
    };
    
    scheduleNext();

    return () => {
      clearTimeout(intervalId);
    };
  }, [fetchData]);

  return {
    data,
    thrustHistory,
    fullHistory,
    isConnected,
    error,
    refreshRate, // Export the calculated refresh rate
    sessionStartTime, // Export session start time for time labels
    lastFetchTimestamp, // Export timestamp of last fetch for UI updates
  };
}