// Service Worker for offline functionality
const CACHE_NAME = 'thrust-monitor-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        // Only cache the essential HTML, let other resources be cached during runtime
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Cache installation failed:', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', (event) => {
  // Don't cache API requests to 192.168.4.1
  if (event.request.url.includes('192.168.4.1')) {
    return;
  }

  // Don't cache in development mode (when URL includes localhost or development server)
  if (event.request.url.includes('localhost') || 
      event.request.url.includes('127.0.0.1') ||
      event.request.url.includes('@vite') ||
      event.request.url.includes('?') ||
      event.request.url.endsWith('.tsx') ||
      event.request.url.endsWith('.ts')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response before caching
        const responseToCache = response.clone();
        
        // Only cache successful responses for static assets
        if (response.status === 200 && 
            (event.request.url.endsWith('.js') || 
             event.request.url.endsWith('.css') || 
             event.request.url.endsWith('.png') || 
             event.request.url.endsWith('.jpg') ||
             event.request.url.endsWith('.svg') ||
             event.request.url.endsWith('.html'))) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request).then((response) => {
          return response || caches.match('/');
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
