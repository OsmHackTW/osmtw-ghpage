(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(8609)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){c=!0,l=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1003),s=n(880),i=n(9246);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(l?"%"+l:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),o=a.default.useMemo((function(){var t=l(c.resolveHref(r,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):o||n}}),[r,e.href,e.as]),d=o.href,p=o.as,m=a.default.useRef(d),h=a.default.useRef(p),x=e.children,y=e.replace,v=e.shallow,b=e.scroll,g=e.locale;"string"===typeof x&&(x=a.default.createElement("a",null,x));var j=(t=a.default.Children.only(x))&&"object"===typeof t&&t.ref,w=l(i.useIntersection({rootMargin:"200px"}),3),N=w[0],C=w[1],k=w[2],_=a.default.useCallback((function(e){h.current===p&&m.current===d||(k(),h.current=p,m.current=d),N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[p,j,d,k,N]);a.default.useEffect((function(){var e=C&&n&&c.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,l=u[d+"%"+p+(t?"%"+t:"")];e&&!l&&f(r,d,p,{locale:t})}),[p,d,C,g,n,r]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,l,o,a,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),t[l?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}))}(e,r,d,p,y,v,b,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&c.getDomainLocale(p,M,r&&r.locales,r&&r.domainLocales);E.href=O||c.addBasePath(c.addLocale(p,M,r&&r.defaultLocale))}return a.default.cloneElement(t,E)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){c=!0,l=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw l}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),f=l(o.useState(!1),2),d=f[0],p=f[1],m=l(o.useState(t?t.current:null),2),h=m[0],x=m[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),i.push(n));if(t)return t;var l=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=l.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:o,elements:l}),t}(n),l=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(l);var t=i.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));t>-1&&i.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),v=o.useCallback((function(){p(!1)}),[]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&x(t.current)}),[t]),[y,d,v]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var s=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8609:function(e,t,n){"use strict";n.r(t);var r=n(5893),l=n(9321),o=n(2797);t.default=function(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("section",{className:"antialiased text-slate-900 py-2 h-full flex items-center justify-center",children:(0,r.jsxs)("div",{className:"md:w-2/3 mx-auto",children:[(0,r.jsxs)("div",{className:"main-title my-8 md:my-16 space-y-3 text-center",children:[(0,r.jsx)("h1",{className:"font-bold text-xl md:text-3xl lg:text-5xl",children:"\u963f\u5317\uff5e\u521d\u56db\u4e86\uff01\u963f\u5317\uff5e\uff01"}),(0,r.jsx)("h3",{className:"font-bold text-md md:text-xl lg:text-2xl",children:"\u6211\u5011\u6389\u5230\uff14\uff10\uff14\u4e86\u5566\uff01"}),(0,r.jsx)("h2",{className:"font-bold text-2xl",children:"Mission Control, we've hit a 404."})]}),(0,r.jsxs)("div",{className:"my-8 md:my-16 space-y-3",children:[(0,r.jsx)("h2",{className:"text-lg text-slate-600 text-center py-3",children:"[\u5de5\u5546\u6642\u9593 AD]"}),(0,r.jsx)("div",{className:"flex flex-col space-y-4",children:(0,r.jsx)("div",{className:"hidden max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white dark:bg-slate-600",children:(0,r.jsxs)("a",{href:"https://coscup.org/2021/zh-TW/landing",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)("img",{className:"w-full overflow-hidden",src:"https://coscup.org/2021/assets/og.65c2d8e3.png",alt:"COSCUP 2021"}),(0,r.jsxs)("div",{className:"px-6 pt-4 space-y-3",children:[(0,r.jsx)("h3",{className:"font-bold text-xl md:text-2xl lg:text-3xl",children:"COSCUP x RubyConf Taiwan 2021 is here!"}),(0,r.jsx)("p",{className:"text-base md:text-lg lg:text-xl",children:"\u958b\u6e90\u4eba\u5e74\u6703 COSCUP \u5df2\u9081\u5411\u7b2c 16 \u5e74\uff0c\u4eca\u5e74\u4ecd\u820a\u805a\u96c6\u8457\u958b\u6e90\u793e\u7fa4\u5011\u7684\u71b1\u60c5\uff0c\u66f4\u8207 RubyConf Taiwan \u4e00\u8d77\u5408\u8fa6\uff0c\u5438\u5f15\u66f4\u591a\u570b\u5167\u5916\u540c\u597d\u95dc\u6ce8\u8207\u53c3\u8207\u3002\u4eca\u5e74\u5c07\u65bc 7/31~8/1 \u65bc\u53f0\u7063\u79d1\u6280\u5927\u5b78\u8209\u8fa6\uff0c\u6709\u8c50\u5bcc\u591a\u5143\u7684 22 \u8ecc\u8b70\u7a0b\uff0c\u5728\u5730\u793e\u7fa4\u8207\u570b\u969b\u793e\u7fa4\u4e4b\u53c3\u8207\u4ea4\u6d41\uff0c\u5e0c\u671b\u80fd\u6709\u66f4\u591a\u958b\u6e90\u958b\u653e\u7684\u706b\u82b1\u3002"})]}),(0,r.jsxs)("div",{className:"px-6 py-4 space-y-3",children:[(0,r.jsx)("span",{className:"inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2",children:"#COSCUP"}),(0,r.jsx)("span",{className:"inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2",children:"#\u5168\u4e9e\u6d32\u6700\u71b1\u60c5"}),(0,r.jsx)("span",{className:"inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2",children:"#\u5fd7\u5de5\u4e3b\u8fa6"}),(0,r.jsx)("span",{className:"inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2",children:"#\u6d3b\u529b\u6eff\u9ede"})]})]})})}),(0,r.jsx)("p",{className:"block pt-16 font-bold text-center underline",children:(0,r.jsx)(o.rU,{href:"/",children:"\u56de\u5230\u9996\u9801 Back to Home"})})]})]})})})}},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[40,321,774,888,179],(function(){return t=2448,e(e.s=t);var t}));var t=e.O();_N_E=t}]);