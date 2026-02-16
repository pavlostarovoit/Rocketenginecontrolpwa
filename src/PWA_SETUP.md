# Rocket Engine Thrust Monitor PWA Setup

## Overview
This Progressive Web App (PWA) connects to a rocket engine thrust measurement stand via local Wi-Fi (192.168.4.1) and provides real-time monitoring with camera recording capabilities.

## Features
- ✅ Works offline after initial load
- ✅ Installable as native app on smartphones
- ✅ Fullscreen mode support
- ✅ Real-time data updates (every 200ms)
- ✅ Live thrust graph visualization
- ✅ Camera feed with recording and zoom
- ✅ Responsive design for mobile/tablet/desktop

## Installation

### For Users (Installing on Device)

#### Android
1. Open the app URL in Chrome
2. Tap the menu (⋮) and select "Install app" or "Add to Home Screen"
3. The app will be installed and can be launched from your home screen
4. It will open in fullscreen mode

#### iOS
1. Open the app URL in Safari
2. Tap the Share button (□↑)
3. Scroll and tap "Add to Home Screen"
4. Tap "Add" to confirm
5. The app icon will appear on your home screen

### For Developers

#### Icon Setup
The PWA requires icons at `/public/icon-192.png` and `/public/icon-512.png`.

**Option 1: Use the icon generator component**
- The `/components/GenerateIcons.tsx` component provides an SVG icon
- Use an online SVG to PNG converter to create the required sizes

**Option 2: Create custom icons**
- Create 192x192px and 512x512px PNG images
- Save them as `/public/icon-192.png` and `/public/icon-512.png`

## Server Connection

### Data Format
The app expects JSON data from `http://192.168.4.1/mesData`:

```json
{
  "state": "S",
  "time": "00:00:001",
  "thrust": 150,
  "samples": 100,
  "rate": 20,
  "rssi": -70
}
```

### State Codes
- `S` - Standby (gray)
- `R` - Recording (red)
- `C` - Calibrating (gray)
- `E` - Error (red)

### Connection Details
- **Server URL**: `http://192.168.4.1/mesData`
- **Request Method**: GET
- **Update Frequency**: Every 200ms (5 Hz)
- **CORS**: Must be enabled on server

## Camera Permissions
The app requires camera and microphone permissions for:
- Live video feed from device camera
- Video recording with audio
- Zoom functionality (if supported by device)

On first use, the browser will prompt for these permissions.

## Offline Functionality
- App UI and code are cached after first load
- Works without internet connection
- Requires connection to 192.168.4.1 for live data
- Shows "Connecting..." banner when server is unavailable

## Browser Compatibility
- **Chrome/Edge**: Full support
- **Safari**: Full support (iOS 11.3+)
- **Firefox**: Full support
- Camera features require HTTPS in production (or localhost for development)

## Development Notes

### Modifying Update Frequency
Edit `/hooks/useMeasurementData.ts`:
```typescript
const FETCH_INTERVAL = 200; // Change this value (in milliseconds)
```

### Graph Time Window
The graph shows the last 14 seconds of data. To modify:
Edit `/components/ThrustGraph.tsx`:
```typescript
const timeRange = 14000; // Change this value (in milliseconds)
```

### Maximum Thrust Display
To change the Y-axis scale:
Edit the `maxThrust` prop in `/App.tsx`:
```typescript
<ThrustGraph data={thrustHistory} maxThrust={3} />
```

## Troubleshooting

### App doesn't install
- Ensure manifest.json is accessible at `/manifest.json`
- Check that icons exist and are valid PNG files
- Verify HTTPS is used (or localhost for development)

### Camera doesn't work
- Check browser permissions
- Ensure HTTPS connection (required for camera API)
- Try a different browser
- Check console for error messages

### No data from server
- Verify device is connected to the 192.168.4.1 network
- Check server CORS settings
- Open browser console to see connection errors
- Ensure server endpoint `/mesData` is responding

### Fullscreen not working
- User interaction is required to trigger fullscreen
- Some browsers restrict fullscreen on certain devices
- Check if browser supports fullscreen API

## Technical Stack
- React with TypeScript
- Tailwind CSS
- Canvas API for graphing
- MediaDevices API for camera
- Service Worker for offline support
- Web App Manifest for installability
