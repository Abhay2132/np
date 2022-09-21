const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

// A list of local resources we always want to be cached.
const FILES = [
	"/index",
	"/wu",
	"/imgD",
	"/fm",
	"/ytdl",
	// "/getCJ",
	"/favicon.ico",
	"/favicon.png",
	"/fd",
	"/js/getCJ.js"
];

const runtime_cache = []

Promise.all(
	FILES.map((cacheToDelete) => {
		return caches.delete(cacheToDelete);
	})
);

// The install handler takes care of precaching the resources we always need.
self.addEventListener("install", (event) => {

	console.log("Install event : Caching files !")
	event.waitUntil(
		caches
		.open(PRECACHE)
		.then((cache) => cache.addAll(FILES))
		.then(self.skipWaiting())
	);
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
	const currentCaches = [PRECACHE, RUNTIME];
	console.log("Activate event : Deleting older caches !")
	event.waitUntil(
		caches
		.keys()
		.then((cacheNames) => {
			return cacheNames.filter(
				(cacheName) => !currentCaches.includes(cacheName)
			);
		})
		.then((cachesToDelete) => {
			return Promise.all(
				cachesToDelete.map((cacheToDelete) => {
					return caches.delete(cacheToDelete);
				})
			);
		})
		.then(() => self.clients.claim())
	);
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener("fetch", (event) => {
	// Skip cross-origin requests, like those for Google Analytics.
	const { method, url } = event.request;
	const file = "/" + url.split("/").slice(3).join("/")
	console.log(file, FILES.includes(file))
	if (method != "GET" || !FILES.includes(file)) return;
	if (event.request.url.startsWith(self.location.origin)) {
		event.respondWith(
			caches.match(event.request).then((cachedResponse) => {
				if (cachedResponse) {
					return cachedResponse;
				}

				if (runtime_cache.includes(url))
					return caches.open(RUNTIME).then((cache) => {
						return fetch(event.request).then((response) => {
							// Put a copy of the response in the runtime cache.
							return cache.put(event.request, response.clone()).then(() => {
								return response;
							});
						});
					});
				return //console.log(url, "NOT FOUND IN CACHE");
			})
		);
	}
});