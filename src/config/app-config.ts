// Application configuration
// Modify these values to customize the app behavior

export const APP_CONFIG = {
  // Server connection settings
  server: {
    url: 'http://192.168.4.1/mesData',
    fetchInterval: 200, // milliseconds between requests
    timeout: 15000, // request timeout in ms (increased for unstable connections)
    useCors: true, // Your server supports CORS, so enable it
  },

  // Graph display settings
  graph: {
    timeWindow: 14000, // milliseconds of data to display
    maxThrust: 3, // maximum thrust value for Y-axis (in kg)
    maxDataPoints: 70, // maximum number of data points to keep in history
  },

  // Camera settings
  camera: {
    facingMode: 'environment', // 'user' for front camera, 'environment' for back camera
    idealWidth: 1920,
    idealHeight: 1080,
    maxZoom: 3, // maximum zoom level
    zoomStep: 0.5, // zoom increment per click
  },

  // UI settings
  ui: {
    enableFullscreen: true, // attempt to go fullscreen on mobile
    showConnectionStatus: true, // show connection banner when offline (deprecated - now shown in status bar)
    enablePWA: true, // enable Progressive Web App features (service worker)
  },
} as const;

// State display configuration
export const STATE_CONFIG = {
  S: {
    label: 'STANDBY',
    color: '#545454',
  },
  R: {
    label: 'RECORDING',
    color: '#c13211',
  },
  C: {
    label: 'CALIBRATING',
    color: '#545454',
  },
  E: {
    label: 'ERROR',
    color: '#e32b00',
  },
  UNKNOWN: {
    label: 'UNKNOWN',
    color: '#999999',
  },
} as const;

export type StateCode = keyof typeof STATE_CONFIG;