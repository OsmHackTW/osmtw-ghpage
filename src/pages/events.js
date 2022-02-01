import React from 'react';
import useSWR from 'swr';


import Layout from '../components/layout';
import { ExtLinkIcon } from '../components/glaube';
import SEO from '../components/seo';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function EventPage() {
  //
  return (
    <Layout>
      <SEO
        keywords={['近期活動', 'Upcoming Events']}
        title="近期活動 Upcoming Events"
      />
      <section className="flex flex-col items-center justify-center my-8">
        <div className="relative w-full flex py-8">
          <div className="w-5xl px-4 py-5 mx-auto sm:max-w-xl md:w-full lg:max-w-screen-xl rounded-t">
            <div className="flex flex-col w-3xl md:w-6xl p-2 mb-8">
              <h3 className="uppercase text-xl px-0.5">Upcoming Events</h3>
              <h2 className="uppercase text-4xl text-semibold">近期活動</h2>
            </div>
            <ul className="flex flex-col">
              <DummyEvent />
              <OsmCalEvent />
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function OsmCalEvent() {
  const { data, error } = useSWR('https://osmcal.org/api/v2/events/', fetcher)
  const events = data;

  if (error) return <h3>發生未知的錯誤 Error while fetching :(</h3>
  if (!data) return <h3>載入中…… Loading...</h3>

  return (
    events === null || events.length === 0 ? <h3>好像還沒更新 Nothing shows here :(</h3> : (events.slice(0, 10).map((event) => (
      // throw OsmCal events in TW
      <li className="flex flex-row mb-4" key={event.name}>
        <a href={event.url} className="cursor-pointer border-slate-200  hover:bg-slate-50 shadow border select-none bg-white rounded-md flex flex-1 items-center p-4">
          <div className="flex-1 pl-1 md:mr-16">
            <div className="text-xl font-medium mb-2">
              {event.name}
              <ExtLinkIcon />
            </div>
            <div className="text-slate-700  text-lg">
              {event.date.start.split('T')[0]} {event.date.start.split('T')[1].split('', 5)}
            </div>
            <div className="text-slate-700 text-sm">
              {event.location?.venue}
            </div>
            <div className="text-slate-700  text-sm">
              {event.location?.short}
            </div>
          </div>
          <div className="ml-2 flex-shrink-0 flex">
            <div className={`px-2 py-1 inline-flex text-base- leading-5 font-semibold rounded-full ${(event.cancelled === true) ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
              {(event.cancelled === true) ? '活期取消' : '如期舉辦'}
            </div>
          </div>
        </a>
      </li>
    ))))
};

function DummyEvent() {
  return (process.env.NODE_ENV === 'development' ? (
    // Dummy content
    <li className="flex flex-row mb-4">
      <a href="https://osmcal.org/?in=TW" className="cursor-pointer border-slate-200  hover:bg-slate-50 shadow border select-none bg-white rounded-md flex flex-1 items-center p-4">
        <div className="flex-1 pl-1 md:mr-16">
          <div className="text-xl font-medium mb-2">
            督促小B作PTX導入工具大會 (Dummy)
            <ExtLinkIcon />
          </div>
          <div className="text-slate-700 text-lg">
            8th March
          </div>
          <div className="text-slate-700 text-sm">
            MozSpace
          </div>
          <div className="text-slate-700 text-sm">
            Huashan, Taipei, Taiwan
          </div>
        </div>
        <div className="ml-2 flex-shrink-0 flex">
          <div className="px-2 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            無時間表
          </div>
        </div>
      </a>
    </li>
  )
    : null)
}