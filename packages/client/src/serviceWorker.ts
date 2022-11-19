//declare const self: ServiceWorkerGlobalScope;

const CACHE_NAME_STATIC = 'static_cache-v1'; 
const CACHE_NAME_DYNAMIC = 'dynamic-cache-v1'; 

const URLS = [
  '/',
  '/App.tsx',
  '/main.tsx',
  '/index.css',
  '/assets/fonts/AlfaSlabOne/AlfaSlabOne-Regular.ttf',
  '/assets/fonts/AlfaSlabOne/AlfaSlabOne.css',
  '/assets/fonts/pacman/PAC-FONT.TTF',
  '/assets/fonts/pacman/pacman.css',
  '/assets/fonts/PressStart2P/PressStart2P-Regular.ttf',
  '/assets/fonts/PressStart2P/PressStart2P.css',
  '/assets/images/avatar.png',
  '/assets/images/avatar.png',
  '/assets/images/avatar2.jpg',
  '/assets/images/laurel.png',
  '/assets/images/loader.gif',
  '/assets/images/money.png',
  '/assets/images/monster.png',
  '/assets/images/pacman.png',
  '/assets/images/transparent_monster.png',
  '/asssets/images/',
]; 

self.addEventListener("install", (event: any) => {
  event.waitUntil(
      caches.open(CACHE_NAME_STATIC)
      .then(cache => {
        console.log("Opened cache");
        return cache.addAll(URLS);
      })
      .catch(err => { 
        console.log(err);
        throw err;
      })
  );
});

self.addEventListener('fetch', (event: any) => { 
  event.respondWith( 
      caches.match(event.request) 
          .then(response => { 
              if (response) { 
                  return response; 
              } 

      const fetchRequest = event.request.clone(); 
      return fetch(fetchRequest) 
      .then(response => { 
          if(!response || response.status !== 200 || response.type !== 'basic') { 
            return response; 
          } 

          const responseToCache = response.clone(); 
          caches.open(CACHE_NAME_DYNAMIC) 
          .then(cache => { 
              cache.put(event.request, responseToCache); 
          }); 
          return response; 
       } 
      ); 
  }) 
); 
}); 

self.addEventListener("activate", (event: any) => { 
  event.waitUntil( 
      caches.keys().then(cacheNames => { 
          return Promise.all( 
              cacheNames.filter(name => true) 
      .map(name => caches.delete(name))  
      ) 
    })
  ); 
});

function startServiceWorker() {
  console.log("ITS STARTED!!!!!!!!")
  if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
          navigator.serviceWorker.register("/serviceWorker.ts").then(registration => {
              console.log("ServiceWorker registration successful with scope: ", registration.scope);
          }).catch((error: string) => {
              console.log("ServiceWorker registration failed: ", error);
          });
      });
  }
}

export default startServiceWorker