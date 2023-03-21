(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{9008:function(e,t,n){e.exports=n(5443)},3250:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,a=r.useEffect,o=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return o(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),a(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},1688:function(e,t,n){"use strict";e.exports=n(3250)},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(943),i=n(3375),u=n(1566);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,u.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9734:function(e,t,n){"use strict";n.d(t,{ZP:function(){return eu}});var r=n(7294),i=n(1688);let u=new WeakMap,a={},o={},l=()=>{},s=l(),c=Object,d=e=>e===s,f=e=>"function"==typeof e,E=(e,t)=>({...e,...t}),g="undefined",p=typeof window!=g,w=typeof document!=g,v=()=>p&&typeof window.requestAnimationFrame!=g,y=(e,t)=>{let n=u.get(e);return[()=>e.get(t)||a,r=>{if(!d(t)){let i=e.get(t);t in o||(o[t]=i),n[5](t,E(i,r),i||a)}},n[6],()=>!d(t)&&t in o?o[t]:e.get(t)||a]},h=new WeakMap,_=0,m=e=>{let t,n;let r=typeof e,i=e&&e.constructor,u=i==Date;if(c(e)!==e||u||i==RegExp)t=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=h.get(e))return t;if(t=++_+"~",h.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=m(e[n])+",";h.set(e,t)}if(i==c){t="#";let r=c.keys(e).sort();for(;!d(n=r.pop());)d(e[n])||(t+=n+":"+m(e[n])+",");h.set(e,t)}}return t},b=!0,[T,R]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[l,l],S=()=>{let e=w&&document.visibilityState;return d(e)||"hidden"!==e},O=e=>(w&&document.addEventListener("visibilitychange",e),T("focus",e),()=>{w&&document.removeEventListener("visibilitychange",e),R("focus",e)}),V=e=>{let t=()=>{b=!0,e()},n=()=>{b=!1};return T("online",t),T("offline",n),()=>{R("online",t),R("offline",n)}},L={initFocus:O,initReconnect:V},k=!r.useId,C=!p||"Deno"in window,N=e=>v()?window.requestAnimationFrame(e):setTimeout(e,1),A=C?r.useEffect:r.useLayoutEffect,D="undefined"!=typeof navigator&&navigator.connection,x=!C&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),I=e=>{if(f(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",t]},M=0,P=()=>++M;var F={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2,ERROR_REVALIDATE_EVENT:3};async function U(...e){let[t,n,r,i]=e,a=E({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),o=a.populateCache,l=a.rollbackOnError,c=a.optimisticData,g=!1!==a.revalidate,p=e=>"function"==typeof l?l(e):!1!==l,w=a.throwOnError;if(f(n)){let e=[],r=t.keys();for(let i=r.next();!i.done;i=r.next()){let r=i.value;!/^\$(inf|sub)\$/.test(r)&&n(t.get(r)._k)&&e.push(r)}return Promise.all(e.map(v))}return v(n);async function v(n){let i;let[a]=I(n);if(!a)return;let[l,E]=y(t,a),[v,h,_]=u.get(t),m=v[a],b=()=>g&&(delete _[a],m&&m[0])?m[0](2).then(()=>l().data):l().data;if(e.length<3)return b();let T=r,R=P();h[a]=[R,0];let S=!d(c),O=l(),V=O.data,L=O._c,k=d(L)?V:L;if(S&&E({data:c=f(c)?c(k):c,_c:k}),f(T))try{T=T(k)}catch(e){i=e}if(T&&f(T.then)){if(T=await T.catch(e=>{i=e}),R!==h[a][0]){if(i)throw i;return T}i&&S&&p(i)&&(o=!0,E({data:T=k,_c:s}))}o&&!i&&(f(o)&&(T=o(T,k)),E({data:T,_c:s})),h[a][1]=P();let C=await b();if(E({_c:s}),i){if(w)throw i;return}return o?C:T}}let W=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},Z=(e,t)=>{if(!u.has(e)){let n=E(L,t),r={},i=U.bind(s,e),a=l,o={},c=(e,t)=>{let n=o[e]||[];return o[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},d=(t,n,r)=>{e.set(t,n);let i=o[t];if(i)for(let e of i)e(n,r)},f=()=>{if(!u.has(e)&&(u.set(e,[r,{},{},{},i,d,c]),!C)){let t=n.initFocus(setTimeout.bind(s,W.bind(s,r,0))),i=n.initReconnect(setTimeout.bind(s,W.bind(s,r,1)));a=()=>{t&&t(),i&&i(),u.delete(e)}}};return f(),[e,i,f,a]}return[e,u.get(e)[4]]},j=(e,t,n,r,i)=>{let u=n.errorRetryCount,a=i.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;(d(u)||!(a>u))&&setTimeout(r,o,i)},q=(e,t)=>m(e)==m(t),[J,$]=Z(new Map),z=E({onLoadingSlow:l,onSuccess:l,onError:l,onErrorRetry:j,onDiscarded:l,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:x?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:x?5e3:3e3,compare:q,isPaused:()=>!1,cache:J,mutate:$,fallback:{}},{isOnline:()=>b,isVisible:S}),B=(e,t)=>{let n=E(e,t);if(t){let{use:r,fallback:i}=e,{use:u,fallback:a}=t;r&&u&&(n.use=r.concat(u)),i&&a&&(n.fallback=E(i,a))}return n},G=(0,r.createContext)({}),H=e=>{let{value:t}=e,n=(0,r.useContext)(G),i=f(t),u=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),a=(0,r.useMemo)(()=>i?u:B(n,u),[i,n,u]),o=u&&u.provider,l=(0,r.useRef)(s);o&&!l.current&&(l.current=Z(o(a.cache||J),u));let c=l.current;return c&&(a.cache=c[0],a.mutate=c[1]),A(()=>{if(c)return c[2]&&c[2](),c[3]},[]),(0,r.createElement)(G.Provider,E(e,{value:a}))},K=p&&window.__SWR_DEVTOOLS_USE__,Q=K?window.__SWR_DEVTOOLS_USE__:[],X=e=>f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Y=()=>E(z,(0,r.useContext)(G)),ee=e=>(t,n,r)=>{let i=n&&((...e)=>{let r=I(t)[0],[,,,i]=u.get(J),a=i[r];return a?(delete i[r],a):n(...e)});return e(t,i,r)},et=Q.concat(ee),en=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}};K&&(window.__SWR_DEVTOOLS_REACT__=r);let er={dedupe:!0},ei=(e,t,n)=>{let{cache:a,compare:o,suspense:l,fallbackData:c,revalidateOnMount:g,revalidateIfStale:p,refreshInterval:w,refreshWhenHidden:v,refreshWhenOffline:h,keepPreviousData:_}=n,[m,b,T]=u.get(a),[R,S]=I(e),O=(0,r.useRef)(!1),V=(0,r.useRef)(!1),L=(0,r.useRef)(R),D=(0,r.useRef)(t),x=(0,r.useRef)(n),M=()=>x.current,W=()=>M().isVisible()&&M().isOnline(),[Z,j,q,J]=y(a,R),$=(0,r.useRef)({}).current,z=d(c)?n.fallback[R]:c,B=(e,t)=>{let n=!0;for(let r in $){let i=r;"data"===i?o(t[i],e[i])||d(e[i])&&o(t[i],ei)||(n=!1):t[i]!==e[i]&&(n=!1)}return n},G=(0,r.useMemo)(()=>{let e=!!R&&!!t&&(d(g)?!M().isPaused()&&!l&&(!!d(p)||p):g),n=t=>{let n=E(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=Z(),i=J(),u=n(r),a=r===i?u:n(i),o=u;return[()=>{let e=n(Z());return B(e,o)?o:o=e},()=>a]},[a,R]),H=(0,i.useSyncExternalStore)((0,r.useCallback)(e=>q(R,(t,n)=>{B(n,t)||e()}),[a,R]),G[0],G[1]),K=!O.current,Q=m[R]&&m[R].length>0,X=H.data,Y=d(X)?z:X,ee=H.error,et=(0,r.useRef)(Y),ei=_?d(X)?et.current:X:Y,eu=(!Q||!!d(ee))&&(K&&!d(g)?g:!M().isPaused()&&(l?!d(Y)&&p:d(Y)||p)),ea=!!(R&&t&&K&&eu),eo=d(H.isValidating)?ea:H.isValidating,el=d(H.isLoading)?ea:H.isLoading,es=(0,r.useCallback)(async e=>{let t,r;let i=D.current;if(!R||!i||V.current||M().isPaused())return!1;let u=!0,a=e||{},l=!T[R]||!a.dedupe,c=()=>k?!V.current&&R===L.current&&O.current:R===L.current,E={isValidating:!1,isLoading:!1},g=()=>{j(E)},p=()=>{let e=T[R];e&&e[1]===r&&delete T[R]},w={isValidating:!0};d(Z().data)&&(w.isLoading=!0);try{if(l&&(j(w),n.loadingTimeout&&d(Z().data)&&setTimeout(()=>{u&&c()&&M().onLoadingSlow(R,n)},n.loadingTimeout),T[R]=[i(S),P()]),[t,r]=T[R],t=await t,l&&setTimeout(p,n.dedupingInterval),!T[R]||T[R][1]!==r)return l&&c()&&M().onDiscarded(R),!1;E.error=s;let e=b[R];if(!d(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return g(),l&&c()&&M().onDiscarded(R),!1;let a=Z().data;E.data=o(a,t)?a:t,l&&c()&&M().onSuccess(t,R,n)}catch(n){p();let e=M(),{shouldRetryOnError:t}=e;!e.isPaused()&&(E.error=n,l&&c()&&(e.onError(n,R,e),(!0===t||f(t)&&t(n))&&W()&&e.onErrorRetry(n,R,e,e=>{let t=m[R];t&&t[0]&&t[0](F.ERROR_REVALIDATE_EVENT,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return u=!1,g(),!0},[R,a]),ec=(0,r.useCallback)((...e)=>U(a,L.current,...e),[]);if(A(()=>{D.current=t,x.current=n,d(X)||(et.current=X)}),A(()=>{if(!R)return;let e=es.bind(s,er),t=0,n=(n,r={})=>{if(n==F.FOCUS_EVENT){let n=Date.now();M().revalidateOnFocus&&n>t&&W()&&(t=n+M().focusThrottleInterval,e())}else if(n==F.RECONNECT_EVENT)M().revalidateOnReconnect&&W()&&e();else if(n==F.MUTATE_EVENT)return es();else if(n==F.ERROR_REVALIDATE_EVENT)return es(r)},r=en(R,m,n);return V.current=!1,L.current=R,O.current=!0,j({_k:S}),eu&&(d(Y)||C?e():N(e)),()=>{V.current=!0,r()}},[R]),A(()=>{let e;function t(){let t=f(w)?w(Y):w;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!Z().error&&(v||M().isVisible())&&(h||M().isOnline())?es(er).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[w,v,h,R]),(0,r.useDebugValue)(ei),l&&d(Y)&&R){if(!k&&C)throw Error("Fallback data is required when using suspense in SSR.");throw D.current=t,x.current=n,V.current=!1,d(ee)?es(er):ee}return{mutate:ec,get data(){return $.data=!0,ei},get error(){return $.error=!0,ee},get isValidating(){return $.isValidating=!0,eo},get isLoading(){return $.isLoading=!0,el}}};c.defineProperty(H,"defaultValue",{value:z});var eu=function(...e){let t=Y(),[n,r,i]=X(e),u=B(t,i),a=ei,{use:o}=u,l=(o||[]).concat(et);for(let e=l.length;e--;)a=l[e](a);return a(n,r||u.fetcher||null,u)}}}]);