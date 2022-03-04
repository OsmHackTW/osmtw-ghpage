/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from "react";
import Layout from "../../components/layouts/qsgLayout";
import SEO from "../../components/seo";
import { qsgCOVID19MappingComponents } from "../../components/glaube";
import { ExtLinkIcon, Accordion } from "../../components/util";

const QsgCovid19MappingPage = () => (
  <Layout>
    <SEO title="入門指南 Quick Start Guide" keywords={["OpenStreetMap", "OSM", "OSMTW", "Community", "開放街圖", "開放街圖台灣", "台灣開放街圖"]} />
    <div className="flex-1 p-2 md:py-2 md:px-12 antialiased w-full xl:h-5/6 items-center justify-center">
      <div className="text-slate-900">
        <div className="bg-slate-50 flex flex-col flex-wrap p-6 max-w-7xl mx-auto overflow-hidden">
          <h2 className="text-3xl font-semibold mb-6">
            COVID-19 圖資更新
          </h2>
          <hr className="h-0.5 px-1 my-4 bg-slate-300" />
          <h4 className="my-2 font-semibold text-xl text-slate-600">進行POI資訊相關更新</h4>
          <p className="my-1">
            面對武漢肺炎 (COVID-19) 本土疫情持續升溫，台灣社群目前致力於更新在地 POI 資訊，
            像是機關的門禁或流量管制、以及店家的特別營業時間等，希望使用者都能夠獲得最適切且及時的資訊。
            您也可以前往 OpenStreetMap Wiki 的相關頁面了解更多：
            <a className="underline text-fern-green-600" href="https://wiki.openstreetmap.org/wiki/COVID-19_-_How_to_Map">COVID-19 - How to Map</a>
            <ExtLinkIcon />
          </p>
          <div className="my-6">
            {qsgCOVID19MappingComponents.accordionCOVID19Content.map(({ title, content }) => (
              <Accordion key={title} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default QsgCovid19MappingPage;