; /* /bitrix/js/main/polyfill/promise/js/promise.min.js?15627590952213*/

; /* Start:"a:4:{s:4:"full";s:65:"/bitrix/js/main/polyfill/promise/js/promise.min.js?15627590952213";s:6:"source";s:46:"/bitrix/js/main/polyfill/promise/js/promise.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e){"use strict";if(typeof e.Promise==="undefined"||e.Promise.toString().indexOf("[native code]")===-1){var n="[[PromiseStatus]]";var t="[[PromiseValue]]";var r="pending";var i="internal pending";var o="resolved";var f="rejected";var c=function(e,f){if(e[n]===i){e=e[t]}if(e[n]===r){e.deferreds.push(f)}else{e.handled=true;setTimeout(function(){var r=e[n]===o?f.onFulfilled:f.onRejected;if(r){try{u(f.promise,r(e[t]))}catch(e){s(f.promise,e)}}else{if(e[n]===o){u(f.promise,e[t])}else{s(f.promise,e[t])}}},0)}};var u=function(e,r){if(r===e){throw new TypeError("A promise cannot be resolved with it promise.")}try{if(r&&(typeof r==="object"||typeof r==="function")){if(r instanceof d){e[n]=i;e[t]=r;l(e);return}else if(typeof r.then==="function"){a(r.then.bind(r),e);return}}e[n]=o;e[t]=r;l(e)}catch(n){s(e,n)}};var s=function(e,r){e[n]=f;e[t]=r;l(e)};var l=function(e){if(e[n]===f&&e.deferreds.length===0){setTimeout(function(){if(!e.handled){console.error("Unhandled Promise Rejection: "+e[t])}},0)}e.deferreds.forEach(function(n){c(e,n)});e.deferreds=null};var a=function(e,n){var t=false;try{e(r,i)}catch(e){if(!t){t=true;s(n,e)}}function r(e){if(!t){t=true;u(n,e)}}function i(e){if(!t){t=true;s(n,e)}}};var h=function(e,n,t){this.onFulfilled=typeof e==="function"?e:null;this.onRejected=typeof n==="function"?n:null;this.promise=t};var d=function(e){this[n]=r;this[t]=null;this.handled=false;this.deferreds=[];a(e,this)};d.prototype["catch"]=function(e){return this.then(null,e)};d.prototype.then=function(e,n){var t=new d(function(){});c(this,new h(e,n,t));return t};d.all=function(e){var n=[].slice.call(e);return new d(function(e,t){if(n.length===0){e(n)}else{var r=n.length;var i=function(o,f){try{if(f&&(typeof f==="object"||typeof f==="function")){if(typeof f.then==="function"){f.then.call(f,function(e){i(o,e)},t);return}}n[o]=f;if(--r===0){e(n)}}catch(e){t(e)}};for(var o=0;o<n.length;o++){i(o,n[o])}}})};d.resolve=function(e){if(e&&typeof e==="object"&&e.constructor===d){return e}return new d(function(n){n(e)})};d.reject=function(e){return new d(function(n,t){t(e)})};d.race=function(e){return new d(function(n,t){for(var r=0,i=e.length;r<i;r++){e[r].then(n,t)}})};e.Promise=d}})(window);
/* End */
;