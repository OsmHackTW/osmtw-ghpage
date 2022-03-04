/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from "react";
import Layout from "../../components/layouts/qsgLayout";
import SEO from "../../components/seo";
import { ExtLinkIcon, EnIcon } from "../../components/util";

export default function QsgDeveloperPage() {
  return (
    <Layout title="開發者">
      <SEO title="入門指南 Quick Start Guide" keywords={["OpenStreetMap", "OSM", "OSMTW", "Community", "開放街圖", "開放街圖台灣", "台灣開放街圖"]} />
      <div>
        <h4 className="my-2 font-semibold text-xl text-slate-600">毋須支付任何費用</h4>
        <p className="my-1">
          OpenStreetMap 圖資是開放資料。OSM 的許可證允許任何人、隨時隨地複製再利用，我們<span className="font-bold">「永遠」</span>不會就此向使用者收取任何費用。
          您可以前往了解更多可能性：
          <a className="font-bold text-lg text-slate-600" href="https://switch2osm.org/">Switch<span className="text-fern-green-500">2OSM</span></a>
          <ExtLinkIcon />
          <EnIcon />
        </p>
        <br className="mb-8" />
        <h4 className="my-2 font-semibold text-xl text-slate-600">轉換至 OpenStreetMap 比想像中來得簡單</h4>
        <p className="my-1">
          只要一小時起！從其他圖資供應商轉換至 OpenStreetMap 並不需很長時間。您可以利用&nbsp;
          <a className="underline text-fern-green-500" href="http://leafletjs.com/">Leaflet</a><ExtLinkIcon />
          <EnIcon />
          和一系列供應商提供的<a className="underline text-fern-green-500" href="https://switch2osm.org/providers/">免費圖磚</a><ExtLinkIcon />
          <EnIcon />，甚至是自架圖磚服務，發揮無限創意。
        </p>
        <p className="my-1">
          最常用的圖磚服務供應商有：
        </p>
        <p className="my-1">
          <ul className="list-disc list-inside ml-1">
            <li>
              <a href="https://www.mapbox.com/">MapBox</a><ExtLinkIcon /><EnIcon />
              ，提供一定次數閲覧的免費方案。
            </li>
            <li>
              <a href="https://www.klokantech.com/">Klokan Technologies</a><ExtLinkIcon /><EnIcon />
              亦有提供免費方案給予非商業行為使用，詳情請瀏覧：<a href="https://www.openmaptiles.org/">openmaptiles.org</a><ExtLinkIcon />
            </li>
            <li>
              自架圖磚服務，詳情請瀏覧：<a className="font-semibold" href="https://switch2osm.org/serving-tiles/"><span className="text-slate-600">Switch</span><span className="text-fern-green-500">2OSM</span></a> - 自架圖磚<ExtLinkIcon />
              <EnIcon />
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}
