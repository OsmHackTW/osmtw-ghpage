(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[677],{3217:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tos",function(){return n(674)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1003),l=n(880),c=n(9246);var u={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=s.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,x=e.shallow,y=e.scroll,v=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var b=(t=s.default.Children.only(m))&&"object"===typeof t&&t.ref,g=o(c.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],N=s.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);s.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof v?v:r&&r.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,w,v,n,r]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,s,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:s}))}(e,r,d,p,h,x,y,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:r&&r.locale,M=r&&r.isLocaleDomain&&i.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);_.href=M||i.addBasePath(i.addLocale(p,E,r&&r.defaultLocale))}return s.default.cloneElement(t,_)};t.default=d},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),h=m[0],x=m[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=l.get(r):(t=l.get(n),c.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,s=r.elements;return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),l.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return p(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&x(t.current)}),[t]),[y,d]};var a=n(7294),s=n(4686),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},9070:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=(n(7294),n(9008)),a="OpenStreetMap Taiwan \u958b\u653e\u8857\u5716\u53f0\u7063",s={twitter:"osmtw"};function i(e){var t=e.description,n=e.title,i=a;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:i?"".concat(i," | ").concat(n):null}),(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:site_name",content:i}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{property:"twitter:creator",content:s.twitter}),(0,r.jsx)("meta",{property:"twitter:title",content:n}),(0,r.jsx)("meta",{property:"twitter:description",content:t})]})}},674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),o=(n(7294),n(9321)),a=n(9070),s=n(7040),i=[{english:'Welcome to the OpenStreetMap Taiwan website. By using our website, you are agreeing to comply with and be bound by the following terms and conditions of use (the "agreement"), and notices contained herein and as they may change, from time to time. Please review them carefully.'},{english:'If you are entering into this agreement on behalf of third parties, you represent that you have the authority to bind such parties to these Terms and Conditions, in which the case "You" or "Your" shall refer to such parties. If you do not have such authority, or if you disagree with any part of these terms and conditions, please do not use our service.'}];function l(){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{title:"\u670d\u52d9\u7d04\u5b9a\u689d\u6b3e\u53ca\u7d30\u5247 Terms and Conditions",keywords:["\u670d\u52d9\u7d04\u5b9a\u689d\u6b3e\u53ca\u7d30\u5247","Terms and Conditions"]}),(0,r.jsx)("section",{className:"antialiased text-slate-900 py-2 h-full flex items-center justify-center",children:(0,r.jsxs)("div",{className:"w-full xl:w-8/12 2mx-auto px-4 sm:px-8 pb-16",children:[(0,r.jsxs)("div",{className:"main-title my-8 md:my-16",children:[(0,r.jsx)("h1",{className:"font-bold text-xl md:text-4xl lg:text-5xl text-center my-4",children:"\u670d\u52d9\u7d04\u5b9a\u689d\u6b3e\u53ca\u7d30\u5247"}),(0,r.jsx)("h1",{className:"font-bold text-slate-500 text-lg md:text-2xl lg:text-3xl text-center my-4",children:"Terms and Conditions"}),(0,r.jsx)("h2",{className:"font-bold text-slate-400 text-center my-4",children:"\u6700\u65b0\u66f4\u65b0\u65e5\u671f Last Modified: ".concat(s.XW.lastModified)})]}),(0,r.jsxs)("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[(0,r.jsxs)("div",{className:"px-4 py-5 sm:px-6",children:[(0,r.jsxs)("h3",{className:"flex flex-col text-md md:text-xl leading-6 font-medium text-slate-900",children:[(0,r.jsxs)("span",{className:"pb-2",children:[(0,r.jsx)("span",{className:"md:text-4xl",children:"\u5728"}),"\u4f7f\u7528\u7db2\u7ad9\u670d\u52d9\u524d\uff0c\u8acb\u60a8\u52d9\u5fc5\u4ed4\u7d30\u95b1\u8b80\u672c\u689d\u6b3e\u53ca\u7d30\u5247\u3002\u7576\u60a8\u9032\u5165\u672c\u7db2\u7ad9\u53ca\u4f7f\u7528\u5176\u4efb\u4f55\u670d\u52d9\u6642\uff0c\u5373\u4ee3\u8868\u60a8\u540c\u610f\u3001\u63a5\u53d7\u4e26\u9075\u5b88\u4ee5\u4e0b\u4e4b\u4f7f\u7528\u689d\u6b3e\u53ca\u7d30\u5247\uff08\u4e0b\u7a31\u6b64\u689d\u6b3e\uff09\u3002 \u6b64\u689d\u6b3e\u70ba\u60a8\u8207\u672c\u7db2\u7ad9\u5171\u540c\u8a02\u7acb\u3002"]}),(0,r.jsx)("span",{className:"pb-2",children:"\u5982\u60a8\u70ba\u7b2c\u4e09\u65b9\u4f7f\u7528\u672c\u7db2\u7ad9\u670d\u52d9\uff0c\u5247\u60a8\u5c07\u4ee3\u8868\u7b2c\u4e09\u65b9\u63a5\u53d7\u6b64\u689d\u6b3e\u53ca\u627f\u64d4\u8cac\u4efb\u3002\u9664\u975e\u60a8\u660e\u78ba\u767c\u51fa\u8072\u660e\uff0c\u5426\u5247\u60a8\u4ee5\u4efb\u4f55\u5f62\u5f0f\u4f7f\u7528\u672c\u7db2\u7ad9\u670d\u52d9\uff0c\u5305\u62ec\u767c\u5e03\u65b0\u7684\u7522\u54c1\u6216\u670d\u52d9\uff0c\u5747\u53d7\u6b64\u689d\u6b3e\u7d04\u675f\u3002"}),(0,r.jsx)("span",{className:"pb-2",children:"\u5982\u60a8\u4e0d\u540c\u610f\u3001\u63a5\u53d7\u6216\u9075\u5b88\u6b64\u689d\u6b3e\uff0c\u60a8\u5c07\u7121\u6cd5\u4f7f\u7528\u672c\u7db2\u7ad9\u4e4b\u4efb\u4f55\u670d\u52d9\u3002"})]}),(0,r.jsx)("h5",{className:"mt-1 max-w-5xl text-md text-slate-500",children:i.map((function(e){return(0,r.jsx)("span",{className:"pb-2",children:e.english},e.id)}))})]}),(0,r.jsx)("div",{className:"border-t border-slate-200",children:(0,r.jsx)("dl",{children:s.XW.tosAritcle.map((function(e,t){return(0,r.jsxs)("div",{className:"bg-".concat(t%2?"slate-100":"white"," px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"),children:[(0,r.jsxs)("dt",{className:"flex md:flex-col text-base font-semibold text-fern-green-600",children:[(0,r.jsx)("span",{className:"pb-1",children:e.section_zh}),(0,r.jsx)("span",{className:"pb-1 px-2 md:px-0",children:e.section_en})]}),(0,r.jsxs)("dd",{className:"flex flex-col mt-1 text-sm text-fern-green-800 sm:mt-0 sm:col-span-2",children:[(0,r.jsx)("span",{className:"pb-2",children:e.text_zh}),(0,r.jsx)("span",{className:"pb-2",children:e.text_en})]})]},e.id)}))})})]})]})})]})}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[40,321,774,888,179],(function(){return t=3217,e(e.s=t);var t}));var t=e.O();_N_E=t}]);