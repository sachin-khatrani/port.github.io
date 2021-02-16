'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d9ff8f5265bc40ef69cace4b45ea6b76",
".git/config": "2af05310f5cd039cde2af72d44bbab5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c7dc8e5609a5491f819f20734bdca1dd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed3eb56b86fe763a76909bb7e204d194",
".git/logs/refs/heads/master": "ed3eb56b86fe763a76909bb7e204d194",
".git/logs/refs/remotes/origin/master": "89bd2e8c35f2936bc6ecd305b15b7deb",
".git/objects/03/c376af852b4009297ed8d951b93536bd48f69c": "ca1c08879ce2fb86f6e157326c2bf150",
".git/objects/0a/8d2e528723aead951c3f6c1748a8b77215f65f": "2c630d00985c8ffb787db5ff382d560f",
".git/objects/17/9dc8f308d7fd743ec3a751a7c2750089f5fe2d": "a58ddd01194e6c305b5201a86d8944cf",
".git/objects/19/84ef47f8179a8a08ec5df573813358bf54f81f": "4dce0dea8a69e2c5776a6c319d4eaffc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f31320cbb4c5d7310f07e1014c539c6d3ac6dd": "63725530ffd1d64d0839dd7ff8c05f6e",
".git/objects/24/64915152f294153a4e23872195ab2a4583d90e": "366dbafb678453aefb1a518309f2cb3a",
".git/objects/25/f07128b87b360a1f2c5a012e6d184c5aa7d35e": "0558bd34516d890d628e47941bc29abe",
".git/objects/2b/1615390f547cced71c7ff6fc77c9fd2277d972": "97c963f1133683f62b62d6dd6802fe5d",
".git/objects/2c/bbfc078732235d2c1bea7a859b3c6cc66730cf": "153a2920d8a1233f64dc9f56e9665390",
".git/objects/2d/403d345303eac4a5197dc651bec93afe103200": "98d1f4c0ccf978ac8332b38e0a5515d9",
".git/objects/2d/9fb7d537dc5dd4b1aa339aabbfefc60946a152": "6e61db69f45e00b77c3bb03ad47c125b",
".git/objects/2f/fe1801e23083aa24a63d1ac610c09391c780f1": "a1ba39cdadd1397bb1281912eab5ffa1",
".git/objects/31/700572ae749558c7b5b5af9c55bcbbf9be6418": "2d152c3130b1621f3d2e4271f53b1b84",
".git/objects/33/564305cccd06fdec830639dc02ad90c96165c1": "037f6e5284629ab15dbbb4f12fb09270",
".git/objects/37/a3ca7d9d92bb8a0e25e14aab580b0ab7f3b185": "7222c882d5eceeecb4463742dc6c82fe",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/39/251d1166b17201f38969e56d9aa7def1c28e2e": "55971a433c1a47169cacd9cb8ed358b4",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/0efe4618a9316a0da8525c2e6bf242ab9e8389": "de832628ba3f7b542ab3c5e7bf06e807",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/53/e1ccd1bae1497642c7f19dfa595310368d8a80": "0677786b09685c10f956a73f64985eff",
".git/objects/55/62aa696e65764cd5fc58d355f3d5c9727340ab": "d9df4cfcaaa8f45c01827b5c1002a1b6",
".git/objects/58/6fe45ac1e6e8c12c2f0338b372ec50537d02ad": "997b38c6ff13ffedc7f83db4ea8338fd",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/5c/1dadd3733de33892bd7f1891be4fefa9790910": "2ad3b789528acf41e1691a9d59fd698f",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/61/067146df2e287da3718ba076da8d689c5ca80c": "638a6cb68891edb8d70acbe7c86c0fe6",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/64/010c680b35c0ee4deea52e7892204a936558c4": "9bd2951815a40dd6e443d4adf3ad27ae",
".git/objects/6a/66763df28cd687f45ec48c1686fc29f9a1d771": "65a8169cf72a333ec7420d4bbc734d59",
".git/objects/75/aac49e706d2f0e268f222eba9e53e1d3d63bf1": "74e4488d4f733447b462496469be8cad",
".git/objects/78/5f3154b2cd2bd947e53eb469e75e6102239dc5": "0b4ad72f3eb2d5427bad8baa3bd259c6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/92cd60f7e7072b2b263a09d5cc5bfcd7f58e10": "e9c94f4041b5e8256b454190d17c896e",
".git/objects/7f/3c5a5c5fa23675e2a8d8baef7e7440a2458a8c": "200da8ca40b570abe88bb838b1fc4d47",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/86/86797f34fc0e2e376f5be8d310d33e90f26bb4": "83fdcaf1d007ab1ebefe2c88d1e6cbc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e3db0f465296e0c2d49b20bda9d883934b8bd4": "af72ee04b82d546703a491cd66f3d525",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/96/cf1e979f14e456696c516ebce85b7b7e91cef9": "3831a44c086964d2885286e845c04332",
".git/objects/97/a112203abc4b55b279dc2364c5ebdccbea2bdb": "a431cde5443a43747061232000975389",
".git/objects/9c/591625121279f08ae311cef76940ff9c935403": "f1b2ab7f2ceeb01b7746f2d2d86b1482",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/6b40d354747d6258a0434f9808b1d4fe800c0b": "43852e06c040ebdfceda8c05bd532da3",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/8330a47d154b20d35c18d29538d7f211395c45": "5841915aba1bf0002939503b5e2e8256",
".git/objects/aa/fb7c00cbfb9e9c692dfda6a7080f45c2abb05c": "9cdce00633b16b4292acbbee2d1f2dad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/a982ef6998076c1c7a20e5236870ddf93a3338": "303b44105d19a7c18004f43dea1cce42",
".git/objects/bc/6e9ccb02e97ed2ca2ef6cd1c7ad9fb52a8bc9d": "bff03e351b78b6fb906925777690199b",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/d4/6e0bc42f18011f4e50a7ce2d3ff9cf436547b0": "82e53e7de11a072b3cdb9df52eced55c",
".git/objects/d6/8f579d2c9de34149b865f0b40a0b882a82c77e": "c6150f0a14a67915dca7cff76430b2e2",
".git/objects/d8/2d26798d74810de8b54d4576de236cb6593c1b": "73b37779499ec54517130fdcb20db92e",
".git/objects/d9/87eba45d3bc9427afb17bbd3375d42e38a4649": "866b348e472231b12fe88f4e88367d94",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/9aafa8fde4c6267558c06b5f6112db9ddda29c": "e481bd41787244595930c21210269e6f",
".git/objects/ea/427b0718a643a5e0dc45fd933c55f78c8d8364": "ecae792b6de721e94df459cf0ac5be05",
".git/objects/eb/1e91f25910b9a2435a2d00d0359bb2c7424d70": "84b114ef84a102e479c37907a6d490f6",
".git/objects/f0/667e8c2456949e7dde997ec928c7076becc1f1": "a2fb0f7ad3fbbeaf9767adfc5eda0213",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/refs/heads/master": "7ac02619ba0cbd888a909fcd4ee242d5",
".git/refs/remotes/origin/master": "7ac02619ba0cbd888a909fcd4ee242d5",
"assets/AssetManifest.json": "833883f46dd6b1485f8129a624c75fce",
"assets/assets/alien_shooter/alien_1.png": "ff471d2da25e14f5880fe6f4d7fc5a1b",
"assets/assets/alien_shooter/alien_2.png": "0baca870a7b93b010d3638583c0db264",
"assets/assets/alien_shooter/alien_3.png": "940670ff43bfb6963055cce9023b40cb",
"assets/assets/file_explorer/file_1.png": "f63520934489749e63fa1c8421398614",
"assets/assets/file_explorer/file_2.png": "bda35b03f99e4e05192dd8ba6d3390db",
"assets/assets/file_explorer/file_3.png": "1c5765b672219f78e994246907b20c7f",
"assets/assets/file_explorer/file_4.png": "a7226daeb88a340a9efd373b8bbdbaae",
"assets/assets/file_explorer/file_5.png": "3fa0ef60117142914c89ec561a02fd5f",
"assets/assets/file_explorer/file_6.png": "16758e4acc18180852d0b7c99e1e558c",
"assets/assets/file_explorer/file_7.png": "d46be30128d771bb29c99409ef6c38d4",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/flutter.png": "6b1d97f168ee94349fc66df8a1134742",
"assets/assets/images/gmail.png": "7126df22061c71df6562faf269973f41",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/people.png": "f6561cf54d239a098a72225cd21bdc80",
"assets/assets/images/person1.png": "3350f81d5185d44ac25d812c65d81caf",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/skype.png": "955d4329bf55cd47008c2edd6c08ad99",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/product_catalog/product_1.png": "9ebb2851a6131fa5ecad0794f0571952",
"assets/assets/product_catalog/product_2.png": "63acf48f6b40766e1b3b29b819ac173e",
"assets/assets/product_catalog/product_3.png": "c9bba1ae8ec1dc23330511b90d802401",
"assets/assets/product_catalog/product_4.png": "09f155c0e0321c060be2182d9827fd80",
"assets/assets/tank_war/tank_1.png": "c3b6c7762ba1550b8af969fe361e50ad",
"assets/assets/tank_war/tank_2.png": "70c180eee0d86a7d95afa9b05b925ef1",
"assets/assets/tank_war/tank_3.png": "535b72787b30b1a9dcfdba435e2003ae",
"assets/assets/tank_war/tank_4.png": "2128a9d870a2474f964a9b319d2aa12f",
"assets/assets/tank_war/tank_5.png": "137f0de86c1c1830ca4f6eed8e868934",
"assets/assets/tank_war/tank_6.png": "13ee1222bc9f6c7e9f53ef75d7086bc1",
"assets/assets/tank_war/tank_7.png": "19490a6f05cc1e82dd72fc06890b945f",
"assets/assets/tank_war/tank_8.png": "664ba024b98a4f91f1494da891cef117",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b17d942be5a23161b1e7261b499f954e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "eed1da09442e78de8a9f639a8c0de057",
"/": "eed1da09442e78de8a9f639a8c0de057",
"main.dart.js": "5030d4f96a040e4067d6cb8f31cea4d0",
"manifest.json": "9d3d57f21e96b6052aaf48bd974ffe62",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
