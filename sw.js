const CACHE_NAME = 'escala-v4-cache';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2838/2838912.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
