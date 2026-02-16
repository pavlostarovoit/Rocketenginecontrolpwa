import { useState, useEffect } from 'react';
import { MeasurementData, ThrustDataPoint } from './useMeasurementData';

/**
 * Mock data hook for testing without actual hardware
 * Simulates realistic thrust measurement data
 * 
 * To use: Replace useMeasurementData with useMockData in App.tsx
 */
export function useMockData() {
  const [data, setData] = useState<MeasurementData | null>(null);
  const [thrustHistory, setThrustHistory] = useState<ThrustDataPoint[]>([]);
  const [isConnected] = useState(true);
  const [error] = useState<string | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.2); // Increment by 200ms

      // Generate realistic thrust curve (simulates motor burn)
      const t = time;
      let thrust = 0;
      
      if (t < 0.5) {
        // Ignition spike
        thrust = t * 6;
      } else if (t < 2) {
        // Burn phase with some noise
        thrust = 2.5 + Math.sin(t * 10) * 0.3 + Math.random() * 0.2;
      } else if (t < 4) {
        // Steady burn
        thrust = 2.2 + Math.random() * 0.15;
      } else if (t < 5) {
        // Tail off
        thrust = 2.2 * (1 - (t - 4));
      } else {
        // Reset cycle
        setTime(0);
        thrust = 0;
      }

      // Generate mock data
      const mockData: MeasurementData = {
        state: t > 0.3 && t < 5 ? 'R' : 'S',
        time: formatMockTime(t),
        thrust: Math.max(0, thrust),
        samples: Math.floor(t * 500),
        rate: 500,
        rssi: -65 + Math.random() * 10,
      };

      setData(mockData);

      // Add to history
      setThrustHistory((prev) => {
        const newPoint: ThrustDataPoint = {
          time: Date.now(),
          thrust: mockData.thrust,
        };
        const updated = [...prev, newPoint];
        return updated.slice(-70);
      });
    }, 200);

    return () => clearInterval(interval);
  }, [time]);

  return {
    data,
    thrustHistory,
    isConnected,
    error,
  };
}

function formatMockTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
}
