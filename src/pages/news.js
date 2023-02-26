/* eslint-disable no-irregular-whitespace */
import React from "react";
import useSWR from "swr";
import { useTheme } from 'next-themes';
import { ExtLinkIcon } from "../components/util";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

const NewsPage = () => (
  <Layout>
    <SEO keywords={["新聞公告", "週刊OSM", "News", "Weekly OSM"]} title="新聞公告 News - 週刊OSM Weekly OSM" />
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
      <div className="py-32" />
      <div className="md:w-3/4 mx-auto">
        <div className="break-all text-justify">
          <WeeklyOsmFeed />
        </div>
      </div>
    </section>
  </Layout>
);

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const WEEKLY_OSM_JSON = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fweeklyosm.eu%2Fzh%2Ffeed`;

const WeeklyOsmFeed = () => {
  const { data, error } = useSWR(WEEKLY_OSM_JSON, fetcher);
  const { theme } = useTheme();
  if (error) return <><h3>發生未知的錯誤 Error while fetching :\(</h3><p /><pre>{JSON.stringify(error)}</pre></>;
  if (!data) return <h3>載入中…… Loading...</h3>;

  const feed = data.items[0]; // lastest issue
  return feed === null || feed.length === 0 ?
    <h3>好像還沒更新 Nothing shows here &#40;;´･д･｀&#41;</h3>
    :
    <section className="flex flex-col items-center justify-center my-8">
      <div className="relative w-full flex py-8">
        <div className="w-full px-4 py-5 mx-auto lg:max-w-screen-xl rounded-t dark:text-white">
          <div className="flex flex-col w-3xl md:w-6xl md:p-2 mb-8">
            <div id="weeklyosm-title">
              <h2 className="uppercase text-4xl text-semibold">
                📰{feed.title}
              </h2>
              <h3 className="uppercase text-xl p-2">{feed.pubDate.toString().slice(0, 10)}</h3>
            </div>
            <div className="flex flex-col py-8 ">
              {/* so bio much hazard very dangerous */}
              <div id="feedContent" dangerouslySetInnerHTML={{ __html: feed.content }} />
              <style>
                {/* Thanks to Dom (dcode) for his table style! 
                  * https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
                  */}
                {theme === "light" ? 
                  `#feedContent {
                    --theme-primary: #777777;
                    --theme-secondary: #009879;
                    --theme-auxilary: #555555;
                    --theme-background: #009879;
                    --theme-table-odd-color: #f3f3f3;
                    --theme-table-even-color: #d8dee5;
                  }`
                  :
                  `#feedContent {
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
                `}
                {`
                  #feedContent a::after {
                    content: ${<ExtLinkIcon />};
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
                  
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </section>
};

export default NewsPage;
