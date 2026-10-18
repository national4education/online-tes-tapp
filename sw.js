const CACHE_NAME = "online-test-v1";

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});
