(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(4993)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){s=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,l=(o=r(7294))&&o.__esModule?o:{default:o},s=r(6273),i=r(387),c=r(7190);var u={};function d(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),o=l.default.useMemo((function(){var t=a(s.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),f=o.href,m=o.as,p=e.children,h=e.replace,x=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var y=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,v=a(c.useIntersection({rootMargin:"200px"}),2),j=v[0],k=v[1],w=l.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);l.default.useEffect((function(){var e=k&&r&&s.isLocalURL(f),t="undefined"!==typeof g?g:n&&n.locale,a=u[f+"%"+m+(t?"%"+t:"")];e&&!a&&d(n,f,m,{locale:t})}),[m,f,k,g,r,n]);var N={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:l}))}(e,n,f,m,h,x,b,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(f)&&d(n,f,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof g?g:n&&n.locale,E=n&&n.isLocaleDomain&&s.getDomainLocale(m,_,n&&n.locales,n&&n.domainLocales);N.href=E||s.addBasePath(s.addLocale(m,_,n&&n.defaultLocale))}return l.default.cloneElement(t,N)};t.default=f},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(i){s=!0,a=i}finally{try{l||null==r.return||r.return()}finally{if(s)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,u=o.useRef(),d=a(o.useState(!1),2),f=d[0],m=d[1],p=a(o.useState(t?t.current:null),2),h=p[0],x=p[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:o,elements:a}),t}(r),a=n.id,o=n.observer,l=n.elements;return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),i.delete(a);var t=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:h,rootMargin:r}))}),[n,h,r,f]);return o.useEffect((function(){if(!s&&!f){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&x(t.current)}),[t]),[b,f]};var o=r(7294),l=r(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},3148:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),a=(r(7294),r(9008)),o="OpenStreetMap Taiwan \u958b\u653e\u8857\u5716\u53f0\u7063",l={twitter:"osmtw"};function s(e){var t=e.description,r=e.title,s=o;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:s?"".concat(s," | ").concat(r):null}),(0,n.jsx)("meta",{name:"description",content:t}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:r}),(0,n.jsx)("meta",{property:"og:description",content:t}),(0,n.jsx)("meta",{property:"og:site_name",content:s}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{property:"twitter:creator",content:l.twitter}),(0,n.jsx)("meta",{property:"twitter:title",content:r}),(0,n.jsx)("meta",{property:"twitter:description",content:t})]})}},4993:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=(r(7294),r(2345)),o=r(3148),l=r(2083);t.default=function(){return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(o.Z,{title:"\u806f\u7d61\u6211\u5011 Contact Us",keywords:["Contact","\u806f\u7d61\u6211\u5011"]}),(0,n.jsx)("section",{className:"antialiased text-slate-900 py-2 h-full flex items-center justify-center",children:(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsxs)("div",{className:"max-w-xl lg:max-w-4xl mx-auto my-6 bg-white md:rounded-lg shadow-sm overflow-hidden",children:[(0,n.jsx)("img",{className:"object-cover bg-center w-full h-64",src:"assets/images/mth_mtg.jpg",alt:"\u6708\u805a Monthly gathering"}),(0,n.jsxs)("div",{className:"p-4 md:px-12 md:py-6",children:[(0,n.jsx)("h1",{className:"my-3 text-3xl font-semibold text-slate-700 dark:text-slate-200",children:"\u806f\u7d61\u6211\u5011 Contact Us"}),(0,n.jsxs)("h3",{className:"text-slate-600 dark:text-slate-400",children:["\u60a8\u53ef\u900f\u904e\u4ee5\u4e0b\u6e20\u9053\u8207\u793e\u7fa4\u4ea4\u6d41\uff1a"," "]}),(0,n.jsx)("h3",{className:"text-slate-600 dark:text-slate-400",children:"Contact our community members via the following channels:"}),(0,n.jsx)("div",{className:"pt-4 pb-12 space-y-3",children:l.My.communityButton.map((function(e){return(0,n.jsx)("a",{href:e.href,"aria-label":"",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-4 py-2 mr-3 text-xs font-medium leading-6 text-center text-white transition rounded-full shadow ripple focus:outline-none bg-".concat(e.colorBg,"-700 hover:bg-").concat(e.colorBg,"-800"),children:e.title},e.title)}))}),(0,n.jsx)("h3",{className:"text-slate-600 dark:text-slate-400",children:"\u60a8\u4e5f\u53ef\u4ee5\u586b\u5beb\u6b64\u8868\u55ae\u8207\u6211\u5011\u7684\u793e\u7fa4\u6210\u54e1\u806f\u7e6b\uff1a"}),(0,n.jsx)("h3",{className:"text-slate-600 dark:text-slate-400",children:"Or email our community member via this form:"}),(0,n.jsx)("div",{className:"pt-4",children:(0,n.jsxs)("form",{action:"https://formspree.io/f/mzbkygdb",method:"POST",id:"form",children:[(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("label",{htmlFor:"nom",children:[(0,n.jsx)("span",{className:"block mb-2 text-sm text-slate-600 dark:text-slate-400",children:"\u59d3\u540d Name"}),(0,n.jsx)("input",{type:"text",id:"nom",name:"name",autoComplete:"name",pattern:".{2,}",placeholder:"\u4e00\u4ecb\u5716\u5ba2 A mapper",required:!0,className:"w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"})]})}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("label",{htmlFor:"courrier",children:[(0,n.jsx)("span",{className:"block mb-2 text-sm text-slate-600 dark:text-slate-400",children:"Email\u5730\u5740 Email address"}),(0,n.jsx)("input",{placeholder:"you@mail.com",required:!0,className:"w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500",type:"text",id:"courrier",name:"_replyto",autoComplete:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"})]})}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("label",{htmlFor:"sujet",children:[(0,n.jsx)("span",{className:"block mb-2 text-sm text-slate-600 dark:text-slate-400",children:"\u4e3b\u65e8 Subject"}),(0,n.jsx)("input",{type:"text",id:"sujet",name:"_subject",placeholder:"\u6211\u8981\u554f\u6709\u95dc... I'd like to ask smth abt...",pattern:".{6,}",required:!0,className:"w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"})]})}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsxs)("label",{htmlFor:"message",children:[(0,n.jsx)("span",{className:"block mb-2 text-sm text-slate-600 dark:text-slate-400",children:"\u60a8\u7684\u7559\u8a00 Your message"}),(0,n.jsx)("textarea",{type:"text",id:"msg",name:"message",rows:"8",maxLength:"256",placeholder:"\u60a8\u7684\u7559\u8a00 Your Message",className:"w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500",required:!0})]})}),(0,n.jsx)("div",{className:"mb-6",children:(0,n.jsx)("button",{type:"submit",value:"Send",className:"w-full px-3 py-4 text-white font-bold bg-fern-green-500 rounded-md hover:bg-fern-green-400ripple waves-light hover:shadow-lg focus:outline-none",children:"\u9001\u51fa Submit"})}),(0,n.jsx)("div",{className:"hidden",children:(0,n.jsx)("input",{name:"_gotcha"})})]})}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("h5",{className:"text-sm text-slate-500",children:"\u6536\u5230\u90f5\u4ef6\u5f8c\uff0c\u958b\u653e\u8857\u5716\u53f0\u7063\u793e\u7fa4\u6210\u54e1\u5c07\u6703\u5118\u5feb\u8207\u60a8\u53d6\u5f97\u806f\u7e6b\u3002\u8b1d\u8b1d\uff01"}),(0,n.jsx)("h5",{className:"text-sm text-slate-500",children:"OSMTW community members will get back to you as soon as available once received. Much obliged!"})]})]})]})})})]})}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[83,345,774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);