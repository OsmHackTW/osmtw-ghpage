(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{6213:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return s(6154)}])},6154:function(e,l,s){"use strict";s.r(l);var n=s(4586),t=s(5893);s(7294);var r=s(9734),i=s(3523),a=s(8218),c=s(5146),fetcher=function(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return fetch.apply(void 0,(0,n._)(l)).then(function(e){return e.json()})},OsmCalEvent=function(){var e=(0,r.ZP)("https://osmcal.org/api/v2/events/?in=TW",fetcher),l=e.data;return e.error?(0,t.jsx)("h3",{children:"發生未知的錯誤 Error while fetching :("}):l?null===l||0===l.length?(0,t.jsx)("h3",{children:"好像還沒更新 Nothing shows here :("}):l.slice(0,10).map(function(e){var l,s;return(0,t.jsx)("li",{className:"flex flex-row mb-4",children:(0,t.jsxs)("a",{href:e.url,className:"cursor-pointer border-slate-200 text-slate-700 hover:bg-slate-50 shadow border select-none bg-white rounded-md flex flex-1 items-center p-4 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700",children:[(0,t.jsxs)("div",{className:"flex-1 pl-1 md:mr-16",children:[(0,t.jsxs)("div",{className:"text-xl font-medium mb-2",children:[e.name,(0,t.jsx)(a.WQ,{})]}),(0,t.jsxs)("div",{className:"text-lg",children:[e.date.start.split("T")[0]," ",e.date.start.split("T")[1].split("",5)]}),(0,t.jsx)("div",{className:"text-sm",children:null===(l=e.location)||void 0===l?void 0:l.venue}),(0,t.jsx)("div",{className:"text-sm",children:null===(s=e.location)||void 0===s?void 0:s.short})]}),(0,t.jsx)("div",{className:"ml-2 flex-shrink-0 flex",children:(0,t.jsx)("div",{className:"px-2 py-1 inline-flex text-base- leading-5 font-semibold rounded-full ".concat(!0===e.cancelled?"bg-red-100 text-red-800":"bg-green-100 text-green-800"),children:!0===e.cancelled?"活期取消":"如期舉辦"})})]})},e.id)}):(0,t.jsx)("h3",{children:"載入中…… Loading..."})},DummyEvent=function(){return null};l.default=function(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c.Z,{keywords:["近期活動","Upcoming Events"],title:"近期活動 Upcoming Events"}),(0,t.jsx)("section",{className:"flex flex-col items-center justify-center my-8",children:(0,t.jsx)("div",{className:"relative w-full flex py-8",children:(0,t.jsxs)("div",{className:"w-5xl px-4 py-5 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-xl rounded-t",children:[(0,t.jsxs)("div",{className:"flex flex-col w-3xl md:w-6xl p-2 mb-8",children:[(0,t.jsx)("h3",{className:"uppercase text-xl px-0.5",children:"Upcoming Events"}),(0,t.jsx)("h2",{className:"uppercase text-4xl text-semibold",children:"近期活動"})]}),(0,t.jsxs)("ul",{className:"flex flex-col",children:[(0,t.jsx)(DummyEvent,{}),(0,t.jsx)(OsmCalEvent,{})]})]})})})]})}}},function(e){e.O(0,[664,365,814,732,774,888,179],function(){return e(e.s=6213)}),_N_E=e.O()}]);