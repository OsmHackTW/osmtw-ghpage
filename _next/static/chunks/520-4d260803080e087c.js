(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(2648).Z,u=r(7273).Z,a=o(r(7294)),l=r(1978),c=r(2139),i=r(7795),f=r(670),s=r(4465),d=r(2692),p=r(8245),v=r(9246),y=r(227),b=r(3468),h=new Set;function g(e,t,r,n,o){if(o||c.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var u=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(u))return;h.add(u)}Promise.resolve(e.prefetch(t,r,n)).catch(function(e){})}}function O(e){return"string"==typeof e?e:i.formatUrl(e)}var m=a.default.forwardRef(function(e,t){var r,o,i=e.href,h=e.as,m=e.children,j=e.prefetch,_=e.passHref,M=e.replace,P=e.shallow,C=e.scroll,k=e.locale,w=e.onClick,E=e.onMouseEnter,S=e.onTouchStart,Z=e.legacyBehavior,x=void 0!==Z&&Z,I=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,x&&("string"==typeof r||"number"==typeof r)&&(r=a.default.createElement("a",null,r));var A=!1!==j,L=a.default.useContext(d.RouterContext),R=a.default.useContext(p.AppRouterContext),T=null!=L?L:R,D=!L,U=a.default.useMemo(function(){if(!L){var e=O(i);return{href:e,as:h?O(h):e}}var t=n(l.resolveHref(L,i,!0),2),r=t[0],o=t[1];return{href:r,as:h?l.resolveHref(L,h):o||r}},[L,i,h]),N=U.href,H=U.as,K=a.default.useRef(N),B=a.default.useRef(H);x&&(o=a.default.Children.only(r));var q=x?o&&"object"==typeof o&&o.ref:t,z=n(v.useIntersection({rootMargin:"200px"}),3),$=z[0],F=z[1],G=z[2],J=a.default.useCallback(function(e){(B.current!==H||K.current!==N)&&(G(),B.current=H,K.current=N),$(e),q&&("function"==typeof q?q(e):"object"==typeof q&&(q.current=e))},[H,q,N,G,$]);a.default.useEffect(function(){T&&F&&A&&g(T,N,H,{locale:k},D)},[H,N,F,k,A,null==L?void 0:L.locale,T,D]);var Q={ref:J,onClick:function(e){x||"function"!=typeof w||w(e),x&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,u,l,i,f,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!f&&!c.isLocalURL(r)))){e.preventDefault();var d,p=function(){"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:i,scroll:l}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?a.default.startTransition(p):p()}}(e,T,N,H,M,P,C,k,D,A)},onMouseEnter:function(e){x||"function"!=typeof E||E(e),x&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),T&&(A||!D)&&g(T,N,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0},D)},onTouchStart:function(e){x||"function"!=typeof S||S(e),x&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),T&&(A||!D)&&g(T,N,H,{locale:k,priority:!0,bypassPrefetchedCheck:!0},D)}};if(f.isAbsoluteUrl(H))Q.href=H;else if(!x||_||"a"===o.type&&!("href"in o.props)){var V=void 0!==k?k:null==L?void 0:L.locale,W=(null==L?void 0:L.isLocaleDomain)&&y.getDomainLocale(H,V,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);Q.href=W||b.addBasePath(s.addLocale(H,V,null==L?void 0:L.defaultLocale))}return x?a.default.cloneElement(o,Q):a.default.createElement("a",Object.assign({},I,Q),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!a,f=n(o.useState(!1),2),s=f[0],d=f[1],p=o.useRef(null),v=o.useCallback(function(e){p.current=e},[]);return o.useEffect(function(){if(a){if(!i&&!s){var e,n,o,f,v=p.current;if(v&&v.tagName)return n=(e=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find(function(e){return e.root===r.root&&e.margin===r.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:r,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),l.set(r,t),t}({root:null==t?void 0:t.current,rootMargin:r})).id,o=e.observer,(f=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(f.delete(v),o.unobserve(v),0===f.size){o.disconnect(),l.delete(n);var e=c.findIndex(function(e){return e.root===n.root&&e.margin===n.margin});e>-1&&c.splice(e,1)}}}}else if(!s){var y=u.requestIdleCallback(function(){return d(!0)});return function(){return u.cancelIdleCallback(y)}}},[i,r,t,s,p.current]),[v,s,o.useCallback(function(){d(!1)},[])]};var o=r(7294),u=r(4686),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)},943:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3375:function(e,t,r){"use strict";function n(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},9396:function(e,t,r){"use strict";function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}r.d(t,{Z:function(){return n}})},9534:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},828:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(3375),o=r(1566);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,n.Z)(e,t)||(0,o.Z)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(943);function o(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,n.Z)(e,t)}}}}]);