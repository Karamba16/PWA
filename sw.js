if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let f={};const t=e=>n(e,o),d={module:{uri:o},exports:f,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),f)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-L41FSqG_.js",revision:null},{url:"assets/index-plDF4ALH.css",revision:null},{url:"index.html",revision:"9ebfed15cd3ae2a79e9c07aceb4fd164"},{url:"registerSW.js",revision:"36a8c3eb862bdcf4382e8845651d1c5f"},{url:"favicon.ico",revision:"41086ac57120eb4153ddf76354b56251"},{url:"pwa-64x64.png",revision:"9bf36b348603653a01d15e3f3a0f3999"},{url:"pwa-192x192.png",revision:"dbb77e87015bbdc0e0e72ffcef97a374"},{url:"pwa-512x512.png",revision:"f2f44e7ec5a0cad94f0255a9feadd7f6"},{url:"maskable-icon-512x512.png",revision:"89d4357484282538501faf598e0fd083"},{url:"manifest.webmanifest",revision:"65a2a9e4e2816076b4c25e29127fbeab"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));