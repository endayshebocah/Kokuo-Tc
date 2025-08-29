// Service worker sederhana untuk caching aset statis

const CACHE_NAME = 'peserta-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Aset statis lain seperti CSS, JS, dan gambar akan di-cache saat diminta
];

self.addEventListener('install', event => {
  // Melakukan langkah-langkah instalasi
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache dibuka');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - kembalikan respons dari cache
        if (response) {
          return response;
        }

        // Clone request karena merupakan stream dan hanya bisa dikonsumsi sekali
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Cek jika respons valid
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone respons karena juga merupakan stream
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
