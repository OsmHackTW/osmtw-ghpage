(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{5115:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n(4567)}])},4567:function(e,t,n){"use strict";n.r(t);var o=n(5893);n(7294);var d=n(9734),r=n(2010),i=n(8218),l=n(3523),s=n(5146);let fetcher=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch(...t).then(e=>e.json())},WeeklyOsmFeed=()=>{let{data:e,error:t}=(0,d.ZP)("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fweeklyosm.eu%2Fzh%2Ffeed",fetcher),{theme:n}=(0,r.F)();if(t)return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:"發生未知的錯誤 Error while fetching :\\("}),(0,o.jsx)("p",{}),(0,o.jsx)("pre",{children:JSON.stringify(t)})]});if(!e)return(0,o.jsx)("h3",{children:"載入中…… Loading..."});let l=e.items[0];return null===l||0===l.length?(0,o.jsx)("h3",{children:"好像還沒更新 Nothing shows here (;\xb4･д･｀)"}):(0,o.jsx)("section",{className:"flex flex-col items-center justify-center my-8",children:(0,o.jsx)("div",{className:"relative w-full flex py-8",children:(0,o.jsx)("div",{className:"w-full px-4 py-5 mx-auto lg:max-w-screen-xl rounded-t dark:text-white",children:(0,o.jsxs)("div",{className:"flex flex-col w-3xl md:w-6xl md:p-2 mb-8",children:[(0,o.jsxs)("div",{id:"weeklyosm-title",children:[(0,o.jsxs)("h2",{className:"uppercase text-4xl text-semibold",children:["\uD83D\uDCF0",l.title]}),(0,o.jsx)("h3",{className:"uppercase text-xl p-2",children:l.pubDate.toString().slice(0,10)})]}),(0,o.jsxs)("div",{className:"flex flex-col py-8 ",children:[(0,o.jsx)("div",{id:"feedContent",dangerouslySetInnerHTML:{__html:l.content}}),(0,o.jsxs)("style",{children:["light"===n?`#feedContent {
                    --theme-primary: #777777;
                    --theme-secondary: #009879;
                    --theme-auxilary: #555555;
                    --theme-background: #009879;
                    --theme-table-odd-color: #f3f3f3;
                    --theme-table-even-color: #d8dee5;
                  }`:`#feedContent {
                      --theme-primary: #ffffff;
                      --theme-secondary: #46a19d;
                      --theme-auxilary: #ffffff;
                      --theme-background: #1f2937;
                      --theme-table-odd-color: #64748b;
                      --theme-table-even-color: #4b5563;
                    }

                    #feedContent li img {
                      filter: invert(100%);
                    }
                `,`
                  #feedContent a::after {
                    content: ${(0,o.jsx)(i.WQ,{})};
                    position: absolute;
                  }

                  #feedContent a { 
                    color: var(--theme-secondary);
                    font-weight: 600;
                  }

                  #feedContent p:first-of-type { 
                    color: var(--theme-primary);
                    font-size: 0.95rem;
                    font-weight: 500;
                    padding: 16px 8px;
                  }
                  
                  #feedContent p:nth-last-child(2), 
                  #feedContent p:last-child { 
                    color: var(--theme-auxilary);
                    font-size: 0.85rem;
                    font-weight: 500;
                    padding: 16px;
                  }

                  #feedContent .wp-caption p { 
                    font-weight: 500;
                    padding: 12px 8px;
                  }

                  #feedContent h2 {
                    color: #33333;
                    font-size: 2rem;
                    font-weight: 600;
                    padding: 8px;    
                  }

                  #feedContent li img {   
                    display: inline-block;
                    padding: 0 4px;
                  }

                  #feedContent ul {                    
                    padding: 8px;
                  }

                  #feedContent li { 
                    margin: 8px 0;
                    list-style-position: inside;
                    list-style-type: circle;
                  }   
                                                
                  #feedContent table {
                    border-collapse: collapse;                   
                    border-radius:6px;
                    overflow-x:auto;
                    font-size: 0.65rem;
                    min-width: 240px;
                    margin: 0;
                    padding: 0; 
                    font-family: sans-serif
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);   
                  }

                  #feedContent table th { 
                    min-width: 72px;                    
                    font-size: 0.65rem;
                  }

                  @media only screen and (min-width: 600px) {
                    #feedContent table {
                    margin: 8px 0;
                    padding: 8px 0;
                    font-size: 0.9rem;
                    min-width: 480px;
                    }
                    
                    #feedContent table th {      
                    min-width: 80px;               
                    font-size: 0.9rem;
                    }
                  }

                  #feedContent thead tr {
                    background-color: var(--theme-background);
                    color: #ffffff;                        
                    font-size: 1.25em;
                    text-align: left;
                  }

                  #feedContent th {
                    padding: 16px 12px;
                  }

                  #feedContent td {
                    padding: 16px 12px;
                    color: var(--theme-auxilary);
                  }
                  
                  #feedContent td:first-child { 
                    font-weight: 600;
                  }

                  #feedContent tbody tr {
                    border-bottom: 1px solid #dddddd;
                  }

                  #feedContent tbody tr:nth-of-type(even) {
                    background-color: var(--theme-table-even-color);
                  } 
                  #feedContent tbody tr:nth-of-type(odd) {
                    background-color: var(--theme-table-odd-color);
                  }
                  #feedContent tbody tr:last-of-type {
                    border-bottom: 2px solid var(--theme-background);
                  }
                  
                  #feedContent th:first-of-type {
                    border-top-left-radius: 10px;
                  }
                  #feedContent th:last-of-type {
                    border-top-right-radius: 10px;
                  }
                  
                `]})]})]})})})})};t.default=()=>(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(s.Z,{keywords:["新聞公告","週刊OSM","News","Weekly OSM"],title:"新聞公告 News - 週刊OSM Weekly OSM"}),(0,o.jsxs)("section",{className:"antialiased text-slate-900 py-2 h-full flex items-center justify-center",children:[(0,o.jsx)("div",{className:"py-32"}),(0,o.jsx)("div",{className:"md:w-3/4 mx-auto",children:(0,o.jsx)("div",{className:"break-all text-justify",children:(0,o.jsx)(WeeklyOsmFeed,{})})})]})]})}},function(e){e.O(0,[664,365,814,732,774,888,179],function(){return e(e.s=5115)}),_N_E=e.O()}]);