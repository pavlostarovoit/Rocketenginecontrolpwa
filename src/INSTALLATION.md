# Installation & Deployment Guide

## Quick Start for Testing

### 1. Testing with Mock Data (No Hardware Required)

To test the app without connecting to the actual hardware:

1. Open `/App.tsx`
2. Find the line with `useMeasurementData()`
3. Replace it with:
```typescript
// import { useMeasurementData } from './hooks/useMeasurementData';
import { useMockData } from './hooks/useMockData';

// In the App component:
const { data, thrustHistory, isConnected, error } = useMockData();
```

This will simulate realistic thrust measurement data for development and testing.

### 2. Testing Connection Issues

If you're having trouble connecting to the hardware:

1. Open `/App.tsx`
2. Uncomment the ConnectionDebug import
3. Add `<ConnectionDebug isConnected={isConnected} error={error} />` to the return statement

This adds a debug panel at the bottom of the screen with connection diagnostics.

## PWA Icons

You need to create two icon files for the PWA to be installable:

### Option 1: Generate from SVG
1. Open `/components/GenerateIcons.tsx`
2. Copy the SVG code
3. Use an online SVG to PNG converter (like cloudconvert.com)
4. Generate two sizes: 192x192px and 512x512px
5. Save as `/public/icon-192.png` and `/public/icon-512.png`

### Option 2: Custom Icons
Create your own PNG images:
- **192x192px** - for mobile home screens
- **512x512px** - for splash screens and high-DPI displays

Place them in the `/public` folder.

## Configuration

All app settings are in `/config/app-config.ts`:

```typescript
export const APP_CONFIG = {
  server: {
    url: 'http://192.168.4.1/mesData',  // Change if using different IP
    fetchInterval: 200,                  // Milliseconds between requests
  },
  graph: {
    timeWindow: 14000,                   // Graph time window (ms)
    maxThrust: 3,                        // Maximum thrust for Y-axis (kg)
  },
  camera: {
    facingMode: 'environment',           // 'user' for front, 'environment' for back
    maxZoom: 3,                          // Maximum zoom level
  },
  ui: {
    enableFullscreen: true,              // Auto-fullscreen on mobile
    showConnectionStatus: true,          // Show connection banner
  },
};
```

## Deployment

### Local Development

```bash
# Install dependencies (if using a build system)
npm install

# Run development server
npm run dev
```

### Production Deployment

#### Option 1: Static Hosting (Recommended for PWA)

1. Build your app:
```bash
npm run build
```

2. Upload the `dist` or `build` folder to:
   - **Netlify**: Drag & drop your build folder
   - **Vercel**: Connect your Git repository
   - **GitHub Pages**: Enable in repository settings
   - **Firebase Hosting**: Use Firebase CLI

3. Ensure HTTPS is enabled (required for PWA features)

#### Option 2: Local Server on Device

For testing on the actual measurement stand:

1. Install a simple HTTP server on the device:
```bash
npm install -g http-server
```

2. Serve the app:
```bash
http-server ./dist -p 8080
```

3. Access from mobile: `http://[DEVICE_IP]:8080`

## Network Setup

### Connecting to the Measurement Stand

1. **Join the WiFi Network**
   - Connect your device to the network where 192.168.4.1 is accessible
   - This might be an ad-hoc network created by the measurement stand

2. **Verify Connection**
   - Open browser to `http://192.168.4.1/mesData`
   - You should see JSON data
   - If not, check server is running and CORS is enabled

3. **Server Requirements**
   The server at 192.168.4.1 must:
   - Respond to GET requests at `/mesData`
   - Return JSON in the format:
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
   - Enable CORS headers:
     ```
     Access-Control-Allow-Origin: *
     Access-Control-Allow-Methods: GET
     ```

## Installing on Mobile Devices

### Android (Chrome/Edge)

1. Open the app URL in Chrome
2. Chrome will automatically show an "Install app" banner
3. Alternatively: Menu (⋮) → "Install app" or "Add to Home Screen"
4. The app will appear on your home screen
5. Launch it - it will open in fullscreen mode

### iOS (Safari)

1. Open the app URL in Safari
2. Tap the Share button (□↑) at the bottom
3. Scroll down and tap "Add to Home Screen"
4. Edit the name if desired
5. Tap "Add"
6. The icon appears on your home screen
7. Launch it - it will open in standalone mode

### Permissions

On first launch, the browser will request:
- **Camera**: Required for video feed
- **Microphone**: Required for video recording with audio

Grant these permissions for full functionality.

## Offline Mode

The app works offline after the first visit:

1. **First Visit**: App files are cached by the Service Worker
2. **Subsequent Visits**: App loads from cache (works without internet)
3. **Data Fetching**: Still requires connection to 192.168.4.1 for live data

Note: The app UI works offline, but live data requires network connection to the measurement stand.

## Troubleshooting

### App Won't Install
- Ensure you're using HTTPS (or localhost for testing)
- Check that `/manifest.json` is accessible
- Verify icons exist at `/public/icon-192.png` and `/public/icon-512.png`
- Try clearing browser cache

### Camera Not Working
- Check browser permissions (Settings → Site Settings → Camera)
- Ensure HTTPS connection (HTTP only works on localhost)
- Try a different browser
- Check console for error messages

### No Data from Server
- Verify connection to 192.168.4.1 network
- Open `http://192.168.4.1/mesData` in browser to test
- Check server CORS settings
- Enable ConnectionDebug component to diagnose
- Look for errors in browser console (F12)

### Fullscreen Not Working
- Some browsers restrict fullscreen API
- User interaction is required (tap the screen after loading)
- Disable in config if problematic: `enableFullscreen: false`

### Graph Not Displaying
- Check browser console for errors
- Verify thrust data is being received
- Check if data is in valid range (0-3kg default)
- Adjust `maxThrust` in config if needed

## Performance Tips

- **Reduce Fetch Interval**: If experiencing lag, increase `fetchInterval` in config
- **Reduce Graph Points**: Lower `maxDataPoints` to improve performance
- **Disable Features**: Turn off camera if only monitoring data
- **Clear Cache**: Force refresh (Ctrl+Shift+R) if updates aren't appearing

## Development

### File Structure
```
/
├── App.tsx                    # Main app component
├── components/
│   ├── CameraFeed.tsx        # Camera functionality
│   ├── ThrustGraph.tsx       # Graph visualization
│   ├── ConnectionDebug.tsx   # Debug panel
│   └── GenerateIcons.tsx     # Icon template
├── hooks/
│   ├── useMeasurementData.ts # Real data fetching
│   └── useMockData.ts        # Mock data for testing
├── config/
│   └── app-config.ts         # App configuration
├── utils/
│   └── formatters.ts         # Data formatting utilities
├── public/
│   ├── manifest.json         # PWA manifest
│   ├── service-worker.js     # Service worker
│   └── index.html            # HTML template
└── imports/                   # Figma design imports
```

### Adding Features

To add new features:
1. Create components in `/components`
2. Add configuration options to `/config/app-config.ts`
3. Update data structure in `/hooks/useMeasurementData.ts` if needed
4. Import and use in `App.tsx`

### Testing Without Hardware

Use the mock data hook for development:
- Simulates realistic thrust curves
- Includes all data fields
- Cycles through burn sequence automatically
- No network required

## Support

For issues or questions:
1. Check this guide and PWA_SETUP.md
2. Enable ConnectionDebug for diagnostics
3. Check browser console for errors
4. Verify server is responding correctly
5. Test with mock data to isolate hardware issues
