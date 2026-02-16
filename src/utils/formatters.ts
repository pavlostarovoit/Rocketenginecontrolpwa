// Utility functions for formatting measurement data

/**
 * Convert RSSI (signal strength) to percentage
 * Typical RSSI range: -100 (worst) to -50 (best)
 */
export function rssiToPercent(rssi: number): number {
  // Clamp between -100 and -30
  const clamped = Math.max(-100, Math.min(-30, rssi));
  // Convert to 0-100 scale
  const percent = ((clamped + 100) / 70) * 100;
  return Math.round(percent);
}

/**
 * Format time string from server (e.g., "00:00:001" to "0.001s")
 */
export function formatTime(timeStr: string): string {
  const parts = timeStr.split(':');
  if (parts.length === 3) {
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    const milliseconds = parseInt(parts[2]);
    const totalSeconds = minutes * 60 + seconds + milliseconds / 1000;
    return `${totalSeconds.toFixed(3)}s`;
  }
  return timeStr;
}

/**
 * Get signal quality label based on RSSI
 */
export function getSignalQuality(rssi: number): 'excellent' | 'good' | 'fair' | 'poor' {
  if (rssi >= -50) return 'excellent';
  if (rssi >= -60) return 'good';
  if (rssi >= -70) return 'fair';
  return 'poor';
}

/**
 * Format thrust value to fixed decimal places
 */
export function formatThrust(thrust: number, decimals: number = 2): string {
  return thrust.toFixed(decimals);
}

/**
 * Calculate average from array of numbers
 */
export function calculateAverage(values: number[]): number {
  if (values.length === 0) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

/**
 * Find maximum value in array
 */
export function findMax(values: number[]): number {
  if (values.length === 0) return 0;
  return Math.max(...values);
}

/**
 * Find minimum value in array
 */
export function findMin(values: number[]): number {
  if (values.length === 0) return 0;
  return Math.min(...values);
}
