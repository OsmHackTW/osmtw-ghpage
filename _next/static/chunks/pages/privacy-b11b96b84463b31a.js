(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{9520:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return r(5083)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),c=r(880),s=r(9246);var u={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=l.default.useRef(d),y=l.default.useRef(p),x=e.children,h=e.replace,v=e.shallow,b=e.scroll,g=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var j=(t=l.default.Children.only(x))&&"object"===typeof t&&t.ref,w=o(s.useIntersection({rootMargin:"200px"}),3),N=w[0],_=w[1],E=w[2],M=l.default.useCallback((function(e){y.current===p&&m.current===d||(E(),y.current=p,m.current=d),N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,E,N]);l.default.useEffect((function(){var e=_&&r&&i.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,_,g,r,n]);var S={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:l}))}(e,n,d,p,h,v,b,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof g?g:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);S.href=C||i.addBasePath(i.addLocale(p,A,n&&n.defaultLocale))}return l.default.cloneElement(t,S)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(c){i=!0,o=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),y=m[0],x=m[1],h=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),s.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),c.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:r}))}),[n,y,r,d]),v=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=l.requestIdleCallback((function(){return p(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&x(t.current)}),[t]),[h,d,v]};var a=r(7294),l=r(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9070:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),o=(r(7294),r(9008)),a="OpenStreetMap Taiwan \u958b\u653e\u8857\u5716\u53f0\u7063",l={twitter:"osmtw"};function i(e){var t=e.description,r=e.title,i=a;return(0,n.jsxs)(o.default,{children:[(0,n.jsx)("title",{children:i?"".concat(i," | ").concat(r):null}),(0,n.jsx)("meta",{name:"description",content:t}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:description",content:t}),(0,n.jsx)("meta",{property:"og:site_name",content:i}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{property:"twitter:creator",content:l.twitter}),(0,n.jsx)("meta",{property:"twitter:title",content:r}),(0,n.jsx)("meta",{property:"twitter:description",content:t})]})}},5083:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=(r(7294),r(9321)),a=r(9070),l=r(7040);t.default=function(){return(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(a.Z,{title:"\u96b1\u79c1\u6b0a\u8072\u660e Privacy Statement",keywords:["\u96b1\u79c1\u6b0a\u8072\u660e","Privacy Statement"]}),(0,n.jsx)("section",{className:"antialiased text-slate-900 py-2 h-full flex items-center justify-center",children:(0,n.jsxs)("div",{className:"w-full xl:w-8/12 2mx-auto px-4 sm:px-8 pb-16",children:[(0,n.jsxs)("div",{className:"main-title my-8 md:my-16",children:[(0,n.jsx)("h1",{className:"font-bold text-xl md:text-4xl lg:text-5xl text-center my-4",children:"\u96b1\u79c1\u6b0a\u8072\u660e"}),(0,n.jsx)("h1",{className:"font-bold text-slate-500 text-lg md:text-3xl lg:text-4xl text-center my-4",children:"Privacy Statement"}),(0,n.jsx)("h2",{className:"font-bold text-slate-400 text-center my-4",children:"\u6700\u65b0\u66f4\u65b0\u65e5\u671f Last Modified: ".concat(l.G8.lastModified)})]}),(0,n.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[(0,n.jsxs)("div",{className:"px-4 py-5 sm:px-6",children:[(0,n.jsxs)("h3",{className:"flex flex-col text-lg md:text-xl leading-6 font-medium text-slate-900",children:[(0,n.jsx)("span",{className:"py-1",children:"\u6211\u5011\u975e\u5e38\u91cd\u8996\u60a8\u7684\u500b\u4eba\u96b1\u79c1\uff0c\u5728\u4f7f\u7528\u672c\u7db2\u7ad9\u670d\u52d9\u6642\uff0c\u656c\u8acb\u8a73\u95b2\u672c\u96b1\u79c1\u6b0a\u8072\u660e\uff0c"}),(0,n.jsx)("span",{className:"py-1",children:"\u4e86\u89e3\u6211\u5011\u5982\u4f55\u8490\u96c6\u3001\u8655\u7406\u53ca\u904b\u7528\u60a8\u6240\u63d0\u4f9b\u7684\u500b\u4eba\u8cc7\u6599\uff0c\u4ee5\u53ca\u5982\u4f55\u4fdd\u8b77\u4f60\u7684\u8cc7\u6599\u5b89\u5168\uff1a"})]}),(0,n.jsx)("h5",{className:"mt-1 max-w-2xl text-sm text-slate-500",children:"Your privacy is our highest priority, please refer our privacy policy for more details on how we collect, process and protect personal information you have provided."})]}),(0,n.jsx)("div",{className:"border-t border-slate-200",children:(0,n.jsx)("dl",{children:l.G8.privacyArticle.map((function(e,t){var r;return(0,n.jsxs)("div",{className:"bg-".concat(t%2?"slate-100":"white"," px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"),children:[(0,n.jsx)("dt",{className:"text-base font-semibold text-fern-green-600",children:e.section}),(0,n.jsxs)("dd",{className:"mt-1 text-sm text-fern-green-800 sm:mt-0 sm:col-span-2",children:[e.text,e.point?(0,n.jsx)("ul",{className:"border border-slate-200 mt-4 rounded-md divide-y divide-slate-200",children:null===(r=e.point)||void 0===r?void 0:r.map((function(e){return(0,n.jsx)("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:e},e.id)}))}):null]})]},e.id)}))})})]})]})})]})}},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[40,321,774,888,179],(function(){return t=9520,e(e.s=t);var t}));var t=e.O();_N_E=t}]);