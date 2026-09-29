// Super CTT 3D: guarda el juego en el móvil para que funcione sin conexión.
// Cuando subas una versión nueva, cambia el número de VERSION para que los móviles la descarguen.
const VERSION='super-ctt-3d-v2';
const FILES=[
 "./",
 "./fonts/barlow-latin-500-normal.woff2",
 "./fonts/barlow-latin-600-normal.woff2",
 "./fonts/barlow-latin-700-normal.woff2",
 "./fonts/barlow-latin-800-normal.woff2",
 "./fonts/barlow-latin-ext-500-normal.woff2",
 "./fonts/barlow-latin-ext-600-normal.woff2",
 "./fonts/barlow-latin-ext-700-normal.woff2",
 "./fonts/barlow-latin-ext-800-normal.woff2",
 "./fonts/lilita-one-latin-400-normal.woff2",
 "./fonts/lilita-one-latin-ext-400-normal.woff2",
 "./icons/apple-touch-icon.png",
 "./icons/favicon.png",
 "./icons/icon-192.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-512.png",
 "./index.html",
 "./manifest.webmanifest",
 "./vendor/three/build/three.core.js",
 "./vendor/three/build/three.module.js",
 "./vendor/three/examples/jsm/environments/RoomEnvironment.js",
 "./vendor/three/examples/jsm/geometries/RoundedBoxGeometry.js",
 "./vendor/three/examples/jsm/objects/Sky.js",
 "./vendor/three/examples/jsm/postprocessing/EffectComposer.js",
 "./vendor/three/examples/jsm/postprocessing/FXAAPass.js",
 "./vendor/three/examples/jsm/postprocessing/MaskPass.js",
 "./vendor/three/examples/jsm/postprocessing/OutputPass.js",
 "./vendor/three/examples/jsm/postprocessing/Pass.js",
 "./vendor/three/examples/jsm/postprocessing/RenderPass.js",
 "./vendor/three/examples/jsm/postprocessing/ShaderPass.js",
 "./vendor/three/examples/jsm/postprocessing/UnrealBloomPass.js",
 "./vendor/three/examples/jsm/shaders/CopyShader.js",
 "./vendor/three/examples/jsm/shaders/FXAAShader.js",
 "./vendor/three/examples/jsm/shaders/LuminosityHighPassShader.js",
 "./vendor/three/examples/jsm/shaders/OutputShader.js",
 "./vendor/three/examples/jsm/utils/BufferGeometryUtils.js"
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req,copy));}return res;}).catch(()=>req.mode==='navigate'?caches.match('./index.html'):undefined)));
});
