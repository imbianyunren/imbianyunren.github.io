if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/05/03/hello-world/index.html",revision:"ca8e82fdb2e5c6f6d4c03e42c634d5ab"},{url:"2021/05/03/my-gallary/index.html",revision:"21412e176847f2a51713a6f095dc2099"},{url:"2021/05/06/tags/index.html",revision:"740d3103d4bd537c92c70becdc05ce1f"},{url:"2022/01/30/ASIP/index.html",revision:"d6f26c1e9c8c48cabe6ca4afb63060ab"},{url:"2022/12/08/ccu-course/index.html",revision:"29353ce0c6d7d0600c1509ca9a15063a"},{url:"2022/12/08/course/index.html",revision:"1348c0379a2ce35119d589f5ff021eac"},{url:"about/index.html",revision:"0e8bd082a7cd8e987f2cc15afcf600ef"},{url:"archives/2021/05/index.html",revision:"03032cf7ebc3b9fc56df3aa59abd1671"},{url:"archives/2021/index.html",revision:"88967bc770cad9fbff402d260c917ef9"},{url:"archives/2022/01/index.html",revision:"d7601a52479a6930a1e2a475e17cb209"},{url:"archives/2022/12/index.html",revision:"da3702c788b53ad119b74a4152dc281f"},{url:"archives/2022/index.html",revision:"7a66518f23a74fff661b3bd57174da49"},{url:"archives/index.html",revision:"0794dcd26cfae92ea766fd508433daa9"},{url:"categories/index.html",revision:"27fe4b5ee826c618dfe442c30abe9cb3"},{url:"css/index.css",revision:"67fe64d2d3dbafc73c8ecb093f2337f1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/cat.html",revision:"8269de5a967959374d6e73b93c3e25bb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"b3d259c3836957adaa7e735363aba05f"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"f809277cbca027ccc50d0d9a59dcdb61"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"3b9e8d47224acbe525aec1fe6fd0e11c"},{url:"tags/course/index.html",revision:"d533617b7b57e74c1abb6ed036c1ce60"},{url:"tags/index.html",revision:"4bed58c232cea494e753579c63674f3b"},{url:"tags/photo/index.html",revision:"e5859b9d36941f10741db0d3f9974063"},{url:"tags/tag/index.html",revision:"e9ea3ecca23a83c831401c5fbc324d17"}],{})}));
//# sourceMappingURL=service-worker.js.map
