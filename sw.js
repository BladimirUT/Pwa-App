if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>r(e,t),f={module:{uri:t},exports:c,require:o};i[t]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-8a9ef17b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"estilo.css",revision:"1cccd6cbf1e2c7e41d5297c8018f245f"},{url:"indexApi.html",revision:"d7267acffdc47894c5862f67d99cb5e0"},{url:"manifest.json",revision:"567934af351e3678f317634b6ecfeee0"},{url:"naranja.png",revision:"d9b177656abdfb5ed18ea17d31a90f0e"},{url:"script.js",revision:"ac9bc74a1bdb9cefe41a629f6f3f8267"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map