import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMeasurementData } from './hooks/useMeasurementData';
import { APP_CONFIG } from './config/app-config';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  // Switch to useMockData() for testing without hardware if needed
  const { data, thrustHistory, fullHistory, isConnected, error, refreshRate, sessionStartTime, lastFetchTimestamp } = useMeasurementData();

  // Register service worker for PWA
  React.useEffect(() => {
    if ('serviceWorker' in navigator && APP_CONFIG.ui.enablePWA) {
      // Wait for the page to load before registering service worker
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.warn('Service Worker registration failed:', error);
          });
      });
    }

    // Request fullscreen on mobile devices if enabled in config
    if (APP_CONFIG.ui.enableFullscreen) {
      const requestFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen().catch(err => console.log('Fullscreen request failed:', err));
        }
      };

      // Try to go fullscreen on user interaction
      document.addEventListener('click', requestFullscreen, { once: true });
      document.addEventListener('touchstart', requestFullscreen, { once: true });

      return () => {
        document.removeEventListener('click', requestFullscreen);
        document.removeEventListener('touchstart', requestFullscreen);
      };
    }
  }, []);

  // Default values when no data
  const state = data?.state || 'S';
  const thrust = data?.thrust || 0;
  const rate = data?.rate || 0;
  const rssi = data?.rssi || -100;
  const samples = data?.samples || 0;
  const serverTime = data?.time || '';

  // Initial loading state: no data received yet
  const isInitialLoading = !data;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout 
            rssi={rssi} 
            rate={refreshRate} 
            isConnected={isConnected}
            isInitialLoading={isInitialLoading}
            lastUpdateTime={lastFetchTimestamp}
            childrenContext={{
              state,
              thrust,
              rate,
              thrustHistory,
              fullHistory,
              sessionStartTime,
              isConnected,
              samples,
              serverTime
            }}
          />
        }>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
