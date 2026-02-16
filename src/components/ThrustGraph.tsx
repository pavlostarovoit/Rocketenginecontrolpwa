import { useEffect, useRef } from 'react';
import { ThrustDataPoint } from '../hooks/useMeasurementData';
import { APP_CONFIG } from '../config/app-config';

export interface ThrustGraphProps {
  data: ThrustDataPoint[];
  minThrust?: number;
  maxThrust?: number;
  variant?: 'standby' | 'recording' | 'ignited';
}

export function ThrustGraph({ 
  data, 
  minThrust = 0, 
  maxThrust = APP_CONFIG.graph.maxThrust,
  variant = 'standby'
}: ThrustGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || data.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get device pixel ratio for high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    // Get actual container dimensions dynamically
    const rect = container.getBoundingClientRect();
    const displayWidth = rect.width;
    const displayHeight = rect.height;
    
    // Debug logging
    console.log('ThrustGraph Debug:', {
      containerSize: { width: displayWidth, height: displayHeight },
      dataPoints: data.length,
      dataRange: {
        thrust: { min: Math.min(...data.map(d => d.thrust)), max: Math.max(...data.map(d => d.thrust)) },
        time: { min: data[0]?.time, max: data[data.length - 1]?.time }
      },
      scale: { min: minThrust, max: maxThrust },
      samplePoints: data.slice(0, 3).map(d => ({ thrust: d.thrust, time: d.time }))
    });
    
    // Set actual canvas size accounting for device pixel ratio
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    
    // Scale the context to match device pixel ratio
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Calculate dimensions (use display dimensions for drawing logic)
    const width = displayWidth;
    const height = displayHeight;

    // Don't filter data - render all data passed from parent
    // The time window is already managed by useMeasurementData
    if (data.length < 2) return;

    // Calculate time range from actual data timestamps
    const oldestTime = data[0].time;
    const newestTime = data[data.length - 1].time;
    const timeRange = newestTime - oldestTime;

    // Calculate the full thrust range for proper positioning
    const thrustRange = maxThrust - minThrust;

    // Draw the thrust line
    ctx.beginPath();
    
    if (variant === 'recording') {
      ctx.strokeStyle = '#000000'; // Solid black for recording
      ctx.lineWidth = 2;
      ctx.setLineDash([]); // Solid line
    } else if (variant === 'ignited') {
      ctx.strokeStyle = '#c13211'; // Red for ignited
      ctx.lineWidth = 2;
      ctx.setLineDash([]); // Solid line
    } else {
      ctx.strokeStyle = '#545454'; // Grey for standby
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]); // Dashed line pattern
    }

    data.forEach((point, index) => {
      // Calculate x position based on time relative to oldest point
      const timePercent = timeRange > 0 ? (point.time - oldestTime) / timeRange : 0;
      const x = timePercent * width;

      // Calculate y position based on thrust (inverted because canvas Y goes down)
      // Position relative to the full range (minThrust to maxThrust)
      const thrustPercent = thrustRange > 0 ? (point.thrust - minThrust) / thrustRange : 0;
      const y = height - (thrustPercent * height);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
    ctx.setLineDash([]);
  }, [data, minThrust, maxThrust, variant]);

  return (
    <div ref={containerRef} className="size-full">
      <canvas
        ref={canvasRef}
        className="block size-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}