/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5a66b26934aaf8ae3a3af5566bdfc7c"
  },
  {
    "url": "assets/css/0.styles.5884c527.css",
    "revision": "11ae1b32d1765febe2c0a7234f323993"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1907d2aa.js",
    "revision": "73b1c50d1802a1c11e3e14785a6cd978"
  },
  {
    "url": "assets/js/11.a4c62866.js",
    "revision": "0269f447643398d60f4bc12bd12c3b7e"
  },
  {
    "url": "assets/js/12.495a0e5e.js",
    "revision": "459c4fb4006ee48cbbda112566d61acf"
  },
  {
    "url": "assets/js/13.be802129.js",
    "revision": "1c3f5925b8a93f0f4c3f9f537491b8c8"
  },
  {
    "url": "assets/js/14.d59273f9.js",
    "revision": "4389225e2ad99d22006742460f00b4b3"
  },
  {
    "url": "assets/js/15.4c8793cb.js",
    "revision": "9cdbd561f72ac316c6a180beaf0c0329"
  },
  {
    "url": "assets/js/16.af14bd5f.js",
    "revision": "302f11ee98674529ae4ca46623a5a117"
  },
  {
    "url": "assets/js/17.5efbbf30.js",
    "revision": "421536ac725b9319f7b5cc7cb89532e7"
  },
  {
    "url": "assets/js/18.2676f03f.js",
    "revision": "dfbabf94d2cec8d3cb51940b3f4c0d25"
  },
  {
    "url": "assets/js/19.cb241d1c.js",
    "revision": "4a9345a7a25fad983f6660b3917a42a8"
  },
  {
    "url": "assets/js/2.6fbae5e3.js",
    "revision": "800c44fefb7e0216ac1aec64372cb5aa"
  },
  {
    "url": "assets/js/20.6b1aa8b8.js",
    "revision": "5fa2a649e98d93f0156c1ee54d193c1f"
  },
  {
    "url": "assets/js/21.272292e2.js",
    "revision": "6967cb8d6ffa3853a6105d64b4b7977f"
  },
  {
    "url": "assets/js/22.bda450c2.js",
    "revision": "f8795ac31b1f49caeeb66465f273ad5e"
  },
  {
    "url": "assets/js/23.1f0f336e.js",
    "revision": "f11eb3e50b1bd5ebb5e53029e1bcde16"
  },
  {
    "url": "assets/js/24.35b2568e.js",
    "revision": "d81ebf7b1e8a95d59552e5d50a328a62"
  },
  {
    "url": "assets/js/25.b620d0ab.js",
    "revision": "a741a42e83c69e0c4eea970d3b59fad0"
  },
  {
    "url": "assets/js/26.739a3abd.js",
    "revision": "3b358e8a3a0c5482038d711a8df25d41"
  },
  {
    "url": "assets/js/27.e5f06b72.js",
    "revision": "f4aec18689b5403d610b4a840ad3804c"
  },
  {
    "url": "assets/js/28.a53313ce.js",
    "revision": "403b047b7a6d4da9208350a3e2b4922e"
  },
  {
    "url": "assets/js/29.3c230e47.js",
    "revision": "8a1e4808f189d4be9872a91cae6bd5af"
  },
  {
    "url": "assets/js/3.2a75d181.js",
    "revision": "e37deb7fd8f06b1a4c46793716d4d780"
  },
  {
    "url": "assets/js/30.8476d7e0.js",
    "revision": "ee2549af59f9c3f0c864d016e83fbc76"
  },
  {
    "url": "assets/js/31.cfa94054.js",
    "revision": "70364e67baa09f30083592319932ede4"
  },
  {
    "url": "assets/js/32.854eb33c.js",
    "revision": "88ad6cf0be8abc4eb99fc5eb17df8054"
  },
  {
    "url": "assets/js/33.d6c26766.js",
    "revision": "1c8cfbb8efecf66b4ea9c513f46713fe"
  },
  {
    "url": "assets/js/34.0919884a.js",
    "revision": "a0e687b5e4eb084d160b4ef0f6d95e14"
  },
  {
    "url": "assets/js/35.82bf0135.js",
    "revision": "1d60a2997fff7682971d7f45498239d2"
  },
  {
    "url": "assets/js/36.6f1cd849.js",
    "revision": "976515563f4a66f462c1de160433da5d"
  },
  {
    "url": "assets/js/37.e625202d.js",
    "revision": "95b88cb100e75768280a511db10be91f"
  },
  {
    "url": "assets/js/38.078cb5ec.js",
    "revision": "3302d53c7874654b9cf8289f42e2d4d8"
  },
  {
    "url": "assets/js/39.3651a591.js",
    "revision": "4976e31c4348ea0b4afe7658efc2f6e7"
  },
  {
    "url": "assets/js/4.e8a12254.js",
    "revision": "42e9fe99dd4c9a95428822cda0afdaaa"
  },
  {
    "url": "assets/js/40.7ce6fbf3.js",
    "revision": "e754075478873bfcd63eee4c096c3497"
  },
  {
    "url": "assets/js/41.b42b0bb9.js",
    "revision": "791e14c197df8aec41202d0ab4b6393d"
  },
  {
    "url": "assets/js/42.98e08f23.js",
    "revision": "0b7300550fd6eaed4c750bc653c5b751"
  },
  {
    "url": "assets/js/43.5cb21c60.js",
    "revision": "fb72e48f74fe57fac3dbdcd3abf69a64"
  },
  {
    "url": "assets/js/44.096d8508.js",
    "revision": "efd438a24bd2212c854b085738273c77"
  },
  {
    "url": "assets/js/45.47cc34b2.js",
    "revision": "e69246c675684cb433ec8399b9b99a2e"
  },
  {
    "url": "assets/js/46.0ce29280.js",
    "revision": "65b1a4946d57fdb5b2fb2976da7f26df"
  },
  {
    "url": "assets/js/47.02d4fc25.js",
    "revision": "c8bb43681244d83661c3648712c29426"
  },
  {
    "url": "assets/js/48.447a8678.js",
    "revision": "bbfb7d32f3a51408debf7bd62b61dc2b"
  },
  {
    "url": "assets/js/5.7648fdb5.js",
    "revision": "17b389c0a6b5d917a5341ccfb754a54d"
  },
  {
    "url": "assets/js/6.4e04b220.js",
    "revision": "7118a7bbcd646c67af98d978bb1847bc"
  },
  {
    "url": "assets/js/7.c263a2a8.js",
    "revision": "ab0e1975787a1aad9270b91a64ac50a6"
  },
  {
    "url": "assets/js/8.52093a0b.js",
    "revision": "be12878727f33180d0592de5530692ec"
  },
  {
    "url": "assets/js/9.5448aaae.js",
    "revision": "431d7a99f0a7b9d7436675a892a9d660"
  },
  {
    "url": "assets/js/app.9f9b549d.js",
    "revision": "a366850c4a596584c67e80af79c84b1e"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "5e939d02928f3e014506c3c2536c0689"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "ea0981515dba344f4c6523f96c28d567"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "34e1d64f117abf35615eaeab699d1e93"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "58a67b8f4d62ef9e0a1d434be3cbc875"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "2b91fcf1eee98c7e1bb2629dc3acd8db"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "9d41a4cb535de46cc83d8b414c833d0c"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "b22e6984c8218a5a88f2a74c7f351900"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "ea094059ef929d6fc98006f65ae3fac2"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "4ca89bfc7547d7d938bbdf80a18ba46f"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "5daa5609094f496c5c2b4bc587909c27"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "0597583c87378767f1a19d6c1fc29ab4"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "51b25e3c9e46fc426435375012bc1bff"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "867a18b541736278f4ddec4d342ea7ce"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "9c98d5489c587911a254360c22df89ff"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "8787f444970b7127c889b60880fa08f0"
  },
  {
    "url": "content/index.html",
    "revision": "3d2ab81713f563bc1ad647a651089214"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "11691b003ced9cef949f374573365dc8"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "08a5fe889724c7c18f6065b650de6af8"
  },
  {
    "url": "LICENSE.html",
    "revision": "08691d2b8c6e3a118487d2f5076ebebe"
  },
  {
    "url": "tags.html",
    "revision": "9c0a0fe945681740937a5bcd150f7ac2"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "128271a3e3fe1283bb006a5989d2ec5f"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "75d8f51c696572adbf89c6a621ac1657"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "5f14b636d369d6ed08c41dab75aecec1"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "2ddd1b27fc7df72ef0323498119ad3d7"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "b3a3131638539ba50f1a9fb5b4763b10"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "1bd4dbde6dba5676efbba95614ed08bb"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "729399058c649ac213843af354c5d9ff"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "7d97127fc2124c370acba028a100d4e2"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "97447b7a7f04c36d56e2de0ea58df44c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "f19319e1c6da6ab5b26145b4e2abc43c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "e7a0c419d5fad03254d0c41ccb33e9ed"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "f6884ac6579b77a420256d638ba972f3"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "d5202d81dd31d17081361474053a9977"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "7f6c56045c0a91071f385c239ec7cb77"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "9ae76dac62f10cf7f8585db4fd2e1272"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "2d201123d6f1a2ef39567b36f3bc8fb5"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "e120885277027893a49980bac93cd273"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "c7933882e9f7eddeb0d3999c0407c974"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "03560cffa1dcfe34bb14745f5ffb7547"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
