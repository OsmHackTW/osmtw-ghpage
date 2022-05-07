/* eslint-disable no-irregular-whitespace */
import React from "react";
import useSWR from "swr";
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

  if (error) return <><h3>發生未知的錯誤 Error while fetching :\(</h3><p /><pre>{JSON.stringify(error)}</pre></>;
  if (!data) return <h3>載入中…… Loading...</h3>;

  const feed = data.items[0]; // lastest issue
  return feed === null || feed.length === 0 ?
    <h3>好像還沒更新 Nothing shows here :\(</h3>
    :
    <section className="flex flex-col items-center justify-center my-8">
      <div className="relative w-full flex py-8">
        <div className="w-5xl px-4 py-5 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-2xl rounded-t">
          <div className="flex flex-col w-3xl md:w-6xl md:p-2 mb-8">
            <div id="weeklyosm-title">
              <h2 className="uppercase text-4xl text-semibold">
                📰{feed.title}
              </h2>
              <h3 className="uppercase text-xl p-2">{feed.pubDate.toString().slice(0, 10)}</h3>
            </div>
            <div className="flex flex-col py-8">
              <div id="feedContent" dangerouslySetInnerHTML={{ __html: feed.content }} />
              <style>
                {/* Thanks to Dom (dcode) for his table style! 
                    * https://dev.to/dcodeyt/creating-beautiful-html-tables-with-css-428l
                    */}
                {`
                  #feedContent a::after { 
                    content: ${<ExtLinkIcon/>};
                    position: absolute;
                  }

                  #feedContent a { 
                    color: #009879;
                    font-weight: 600;
                  }

                  #feedContent p:first-child { 
                    color: #777777;
                    font-size: 0.95rem;
                    font-weight: 500;
                    padding: 16px 8px;
                  }
                  
                  #feedContent p:nth-last-child(2), 
                  #feedContent p:last-child { 
                    color: #555555;
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
                    min-width: 50px;                    
                    font-size: 0.5rem;
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
                    background-color: #009879;
                    color: #ffffff;                        
                    font-size: 1.25em;
                    text-align: left;
                  }

                  #feedContent th, #feedContent td {
                    padding: 16px 12px;
                  }
                  
                  #feedContent td:first-child { 
                    font-weight: 600;
                  }

                  #feedContent tbody tr {
                    border-bottom: 1px solid #dddddd;
                  }

                  #feedContent tbody tr:nth-of-type(even) {
                    background-color: #d8dee5;
                  } 
                  #feedContent tbody tr:nth-of-type(odd) {
                    background-color: #f3f3f3;
                  }
                  #feedContent tbody tr:last-of-type {
                    border-bottom: 2px solid #009879;
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
