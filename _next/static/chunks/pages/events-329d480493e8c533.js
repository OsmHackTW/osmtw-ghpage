(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{6213:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return n(4229)}])},3148:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(5893),r=(n(7294),n(9008)),l=n.n(r),i="OpenStreetMap Taiwan \u958b\u653e\u8857\u5716\u53f0\u7063",c={twitter:"osmtw"};function a(e){var t=e.description,n=e.title,r=i;return(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:r?"".concat(r," | ").concat(n):null}),(0,s.jsx)("meta",{name:"description",content:t}),(0,s.jsx)("meta",{property:"og:type",content:"website"}),(0,s.jsx)("meta",{property:"og:title",content:n}),(0,s.jsx)("meta",{property:"og:description",content:t}),(0,s.jsx)("meta",{property:"og:site_name",content:r}),(0,s.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,s.jsx)("meta",{property:"twitter:creator",content:c.twitter}),(0,s.jsx)("meta",{property:"twitter:title",content:n}),(0,s.jsx)("meta",{property:"twitter:description",content:t})]})}},4229:function(e,t,n){"use strict";n.r(t);var s=n(797),r=n(5893),l=(n(7294),n(8100)),i=n(2345),c=n(7477),a=n(3148),o=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch.apply(void 0,(0,s.Z)(t)).then((function(e){return e.json()}))},x=function(){var e=(0,l.ZP)("https://osmcal.org/api/v2/events/?in=TW",o),t=e.data,n=t;return e.error?(0,r.jsx)("h3",{children:"\u767c\u751f\u672a\u77e5\u7684\u932f\u8aa4 Error while fetching :("}):t?null===n||0===n.length?(0,r.jsx)("h3",{children:"\u597d\u50cf\u9084\u6c92\u66f4\u65b0 Nothing shows here :("}):n.slice(0,10).map((function(e){var t,n;return(0,r.jsx)("li",{className:"flex flex-row mb-4",children:(0,r.jsxs)("a",{href:e.url,className:"cursor-pointer border-slate-200 hover:bg-slate-50 shadow border select-none bg-white rounded-md flex flex-1 items-center p-4",children:[(0,r.jsxs)("div",{className:"flex-1 pl-1 md:mr-16",children:[(0,r.jsxs)("div",{className:"text-xl font-medium mb-2",children:[e.name,(0,r.jsx)(c.WQ,{})]}),(0,r.jsxs)("div",{className:"text-slate-700 text-lg",children:[e.date.start.split("T")[0]," ",e.date.start.split("T")[1].split("",5)]}),(0,r.jsx)("div",{className:"text-slate-700 text-sm",children:null===(t=e.location)||void 0===t?void 0:t.venue}),(0,r.jsx)("div",{className:"text-slate-700 text-sm",children:null===(n=e.location)||void 0===n?void 0:n.short})]}),(0,r.jsx)("div",{className:"ml-2 flex-shrink-0 flex",children:(0,r.jsx)("div",{className:"px-2 py-1 inline-flex text-base- leading-5 font-semibold rounded-full ".concat(!0===e.cancelled?"bg-red-100 text-red-800":"bg-green-100 text-green-800"),children:!0===e.cancelled?"\u6d3b\u671f\u53d6\u6d88":"\u5982\u671f\u8209\u8fa6"})})]})},e.id)})):(0,r.jsx)("h3",{children:"\u8f09\u5165\u4e2d\u2026\u2026 Loading..."})},d=function(){return null};t.default=function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{keywords:["\u8fd1\u671f\u6d3b\u52d5","Upcoming Events"],title:"\u8fd1\u671f\u6d3b\u52d5 Upcoming Events"}),(0,r.jsx)("section",{className:"flex flex-col items-center justify-center my-8",children:(0,r.jsx)("div",{className:"relative w-full flex py-8",children:(0,r.jsxs)("div",{className:"w-5xl px-4 py-5 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-xl rounded-t",children:[(0,r.jsxs)("div",{className:"flex flex-col w-3xl md:w-6xl p-2 mb-8",children:[(0,r.jsx)("h3",{className:"uppercase text-xl px-0.5",children:"Upcoming Events"}),(0,r.jsx)("h2",{className:"uppercase text-4xl text-semibold",children:"\u8fd1\u671f\u6d3b\u52d5"})]}),(0,r.jsxs)("ul",{className:"flex flex-col",children:[(0,r.jsx)(d,{}),(0,r.jsx)(x,{})]})]})})})]})}}},function(e){e.O(0,[100,817,83,345,774,888,179],(function(){return t=6213,e(e.s=t);var t}));var t=e.O();_N_E=t}]);