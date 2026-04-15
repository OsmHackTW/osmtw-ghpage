import React from "react";
import useSWR from "swr";
import { ExtLinkIcon } from "../components/util";
import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";

const NewsPage = () => (
  <Layout>
    <PageMeta keywords={["新聞公告", "週刊OSM", "News", "Weekly OSM"]} title="新聞公告 News - 週刊OSM Weekly OSM" />
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center lg:max-w-(--breakpoint-xl) mx-auto">
      <div className="py-32" />
      <div className="w-full mx-auto">
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
  if (error) return <><p className="text-lg font-semibold text-red-500 dark:text-red-400 my-4">發生未知的錯誤 Error while fetching :\(</p><p /><pre className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded p-3 overflow-auto">{JSON.stringify(error)}</pre></>;
  if (!data) return <p className="text-lg font-medium text-slate-500 dark:text-slate-400 animate-pulse my-4">載入中…… Loading...</p>;

  const feed = data.items[0]; // lastest issue
  return feed === null || feed.length === 0 ?
    <p>好像還沒更新 Nothing shows here &#40;;´･д･｀&#41;</p>
    :
    <section className="flex-col-center justify-center my-8">
      <div className="relative w-full flex py-8">
        <div className="w-full px-4 py-5 mx-auto lg:max-w-(--breakpoint-xl) rounded-t dark:text-white">
          <div className="flex flex-col w-full md:p-2 mb-8">
            <div id="weeklyosm-title">
              <h2 className="uppercase text-4xl text-semibold">
                📰{feed.title}
              </h2>
              <h3 className="uppercase text-xl p-2">{feed.pubDate.toString().slice(0, 10)}</h3>
            </div>
            <div className="flex flex-col py-8">
              {/* so bio much hazard very dangerous */}
              <div id="feedContent" dangerouslySetInnerHTML={{ __html: feed.content }} />
            </div>
          </div>
        </div>
      </div>
    </section>
};

export default NewsPage;
