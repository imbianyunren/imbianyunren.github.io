if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/05/03/hello-world/index.html",revision:"7feab17764a10a81094a7835900b6387"},{url:"2021/05/03/my-gallary/index.html",revision:"c3c300ef54930165388360e343747e4d"},{url:"2021/05/06/course/index.html",revision:"2daa0161ee44362230abea73f1f151a6"},{url:"2021/05/06/tags/index.html",revision:"efade7494679832fd2c1c76fd598fb35"},{url:"about/index.html",revision:"1f54ed33879431d3290ede25b3f3bae2"},{url:"archives/2021/05/index.html",revision:"f03963e7c3b630c4ce87888d282d8bd1"},{url:"archives/2021/index.html",revision:"968c30fcbcbfa5f6c12c83a75f9c8850"},{url:"archives/index.html",revision:"fd574edd6c88867de76cddb468879d26"},{url:"categories/index.html",revision:"338e318caa76413aff04670dea61f6c2"},{url:"css/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"3b5f066a81a8c3b9230f0b5d6e03cb31"},{url:"css/style.css",revision:"a42472cda2fcc57ce90627421357ded0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"Gallery/cat.html",revision:"5ce2b002d08aabb89094b7be280cca79"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"b3d259c3836957adaa7e735363aba05f"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"8a5d63bd822169ba1ab15fb2c7120e3e"},{url:"js/jquery-3.4.1.min.js",revision:"220afd743d9e9643852e31a135a9f3ae"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/script.js",revision:"899039a2fd4a5c7a164d7ae5bfc78073"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"98b1780bebd11571e49aa289b4f10d87"},{url:"tags/course/index.html",revision:"e702ca8133cc47e673865fb8a8d6a8cb"},{url:"tags/index.html",revision:"eb13a3d9045536181527a02a7f01b2a7"},{url:"tags/photo/index.html",revision:"3c513b49fc5a433c9d3292a1ab668000"},{url:"tags/tag/index.html",revision:"3d4ad67cd6e42297e3492e670a4f44ee"}],{})}));
//# sourceMappingURL=service-worker.js.map
