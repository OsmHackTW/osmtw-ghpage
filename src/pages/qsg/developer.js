/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/qsg/layout';
import { ExtLinkIcon, EnIcon } from '../../components/glaube';
import SEO from '../../components/seo';

const QsgDeveloperPage = () => (
  <Layout>
    <SEO title="入門指南 Quick Start Guide" keywords={['OpenStreetMap', 'OSM', 'OSMTW', 'Community', '開放街圖', '開放街圖台灣', '台灣開放街圖']} />
    <div className="flex-1 p-2 md:py-2 md:px-12 antialiased w-full xl:h-5/6 items-center justify-center">
      <div className="text-gray-900">
        <div className="bg-white flex flex-col flex-wrap p-6 max-w-7xl mx-auto overflow-hidden">
          <h2 className="text-3xl font-semibold mb-6">
            開發者
          </h2>
          <hr className="h-0.5 px-1 my-4 bg-gray-300" />
          <h4 className="my-2 font-semibold text-xl text-gray-600">毋須支付任何費用</h4>
          <p className="my-1">
            OpenStreetMap 圖資是開放資料。OSM 的許可證允許任何人、隨時隨地複製再利用，我們<span className="font-bold">「永遠」</span>不會就此向使用者收取任何費用。
            您可以前往了解更多可能性：
            <a className="font-bold text-lg text-gray-600" href="https://switch2osm.org/">Switch<span className="text-fern-green-500">2OSM</span></a>
            <ExtLinkIcon />
            <span className="text-xs text-gray-400">(英語)</span>
          </p>
          <br className="mb-8" />
          <h4 className="my-2 font-semibold text-xl text-gray-600">轉換至 OpenStreetMap 比想像中來得簡單</h4>
          <p className="my-1">
            只要一小時起！從其他圖資供應商轉換至 OpenStreetMap 並不需很長時間。您可以利用&nbsp;
            <a className="underline text-fern-green-500" href="http://leafletjs.com/">Leaflet</a><ExtLinkIcon />
            <EnIcon />
            和一系列供應商提供的<a className="underline text-fern-green-500" href="https://switch2osm.org/providers/">免費圖磚</a><ExtLinkIcon />
            <span className="text-xs text-gray-400">(英語)</span>，甚至是自架圖磚服務，發揮無限創意。
          </p>
          <p className="my-1">
            最常用的圖磚服務供應商有：
          </p>
          <p className="my-1">
            <ul className="list-disc list-inside ml-1">
              <li>
                <a href="https://www.mapbox.com/">MapBox</a><ExtLinkIcon /><span className="text-xs text-gray-400">(英語)</span>
                ，提供一定次數閲覧的免費方案。
              </li>
              <li>
                <a href="https://www.klokantech.com/">Klokan Technologies</a><ExtLinkIcon /><EnIcon />
                亦有提供免費方案給予非商業行為使用，詳情請瀏覧：<a href="https://www.openmaptiles.org/">openmaptiles.org</a><ExtLinkIcon />
              </li>
              <li>
                自架圖磚服務，詳情請瀏覧：<a className="font-semibold" href="https://switch2osm.org/serving-tiles/"><span className="text-gray-600">Switch</span><span className="text-fern-green-500">2OSM</span></a> - 自架圖磚<ExtLinkIcon />
                <span className="text-xs text-gray-400">(英語)</span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>

  </Layout>
);
export default QsgDeveloperPage;
