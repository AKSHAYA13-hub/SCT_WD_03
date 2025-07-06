const CACHE_NAME = 'speed-quiz-cache-v1';
const urlsToCache = [
  'index.html',
  'quiz-1.html',
  'quiz-2.html',
  'quiz-3.html',
  'result.html',
  'style.css',
  'script.js',
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
