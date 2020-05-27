/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2020/05/18/2020-05-18/index.html","564452ec58ff77c0ee5447af8e7cae58"],["/2020/05/19/2020-05-19/index.html","204bde3bbb3aab49721f891858c701cd"],["/2020/05/20/2020-05-20/index.html","cf47be92d6d01e2deb84816164c9f28e"],["/2020/05/21/2020-05-21/index.html","478f5243ebcd387710200c682d0952df"],["/2020/05/22/2020-05-22/index.html","d274b573c4d0f040fb215b39310750d2"],["/2020/05/23/2020-05-23/index.html","f2c1167eabb359ffbec668b15a8fbb26"],["/2020/05/24/2020-05-24/index.html","6ddd38a1c31d69c7f79fc0e7ec5006c9"],["/2020/05/25/2020-05-25/index.html","eadb8e514227b4ab99cc87efd9be7969"],["/2020/05/26/2020-05-26/index.html","833f3997a3a61e39ce9706b624a6587c"],["/2020/05/27/2020-05-27/index.html","fa8bc4d17a804c61e1c2e0b4dfedc71f"],["/2020/12/31/notice/index.html","5c6409d97337a72b5fc6eaf58a7334b2"],["/archives/2020/05/index.html","df76ec480dda100865ba83fe4ca6cbaf"],["/archives/2020/12/index.html","6cf88a3a32636ffd754bb17c7f0e331e"],["/archives/2020/index.html","df56592967e67d8bc84b5ca92daa54af"],["/archives/2020/page/2/index.html","8183a0ca2fe2f4718e85860bd50494a8"],["/archives/index.html","2670a1d3aa44c4e7f169e581c4ec4b65"],["/archives/page/2/index.html","1e60e4df3d9cd059ca74f0ad232bd72d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/favicon.png","44b809ba68a7914c345b335970ce2ed1"],["/icomoon/demo-files/demo.css","493c2037a721a65aa6f8c92253068024"],["/icomoon/demo-files/demo.js","efa2f608ad991cf9d29663d04802cb19"],["/icomoon/demo.html","330495d139fc100766e051348e7b16fa"],["/icomoon/fonts/icomoon.eot","5361cfb333942f9d3a9cced122dec13a"],["/icomoon/fonts/icomoon.svg","7be188f075fbcad27cce9ea8e6f57ba6"],["/icomoon/fonts/icomoon.ttf","ad8c4e254346f6f9ee63c3b89fac2b77"],["/icomoon/fonts/icomoon.woff","2dc4d3bdf0c0df8d4aeaf73e6154d105"],["/icomoon/style.css","6b76aaf5a3bbfa8142fa8e46426956ab"],["/img/avatar.png","7b31611ce91203502bbb51bcc91bc6a8"],["/img/donte.png","50472d6065c16d1844eeb9d4df30c4ef"],["/img/sidebar-bg.png","075cfde0b7680d83d5571ebf937bdf31"],["/index.html","dea5e59369771799a9287564f676d689"],["/js/app.js","ef7a383f343e34675cc038bfdd833d14"],["/js/jquery.js","443baf1f55a225366862f0ca27483c02"],["/js/search.js","e428308ba08711a7f4611c3ae5acb6c1"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/page/2/index.html","0b8e2edac002152022cdf757fb65e99d"],["/style.css","9f4408201987297ce66455bbc725f920"],["/style/base.css","40e1f819b820369567d0dc95bd4d2580"],["/style/content.css","5f3104b425bce69a9b150ffe4355ecb0"],["/style/footer.css","da686b1b6ec29a221e2848c93019e680"],["/style/header.css","258c3494d8c1843841694e1aec0a6548"],["/style/highlight.css","0fc8dcdd9271283dc3be2b8ebf517cc7"],["/style/layout.css","c404fdb4044af1df62e5fd542cc2603a"],["/style/normalize.css","30049a432c7cddcd45db5592c63b302c"],["/style/pagination.css","49dcffaae4ea43a4c7f7c83643953210"],["/style/search.css","95f18a58b159cccc41f0e70a85994703"],["/style/sidebar.css","0a262074c4f585e416e0ce4a0a5f91ad"],["/style/variables.css","d41d8cd98f00b204e9800998ecf8427e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







