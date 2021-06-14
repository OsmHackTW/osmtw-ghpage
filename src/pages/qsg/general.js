/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/qsg/layout';
import { ExtLinkIcon } from '../../components/glaube';
import SEO from '../../components/seo';

const QsgGeneralPage = () => (
  <Layout>
    <SEO title="入門指南 Quick Start Guide" keywords={['OpenStreetMap', 'OSM', 'OSMTW', 'Community', '開放街圖', '開放街圖台灣', '台灣開放街圖']} />
    <div className="flex-1 p-2 md:py-2 md:px-12 antialiased w-full xl:h-5/6 items-center justify-center">
      <div className="text-gray-900">
        <div className="bg-white flex flex-col flex-wrap p-6 max-w-7xl mx-auto overflow-hidden">
          <h2 className="text-3xl font-semibold mb-6">
            一般使用者
          </h2>
          <hr className="h-0.5 px-1 my-4 bg-gray-300" />
          <h4 className="my-2 font-semibold text-xl text-gray-600">應用程式</h4>
          <h5 className="my-1 font-medium">OsmAnd</h5>
          <p className="my-1 ">OsmAnd 是以 OpenStreetMap 為基底，在Android及iOS系統上的導航應用程式。</p>
          <p className="my-1 mb-4">
            <a className="underline text-fern-green-600" href="http://osmand.net/">http://osmand.net/</a>
            <ExtLinkIcon />
          </p>
          <h5 className="my-1 font-medium">MapComplete</h5>
          <p className="my-1 ">OpenStreetMap 比利時推出的主題地圖 MapComplete，目前有 27 個主題地圖，並且開放提案創建新的主題地圖。</p>
          <p className="my-1 mb-4">
            <a className="underline text-fern-green-600" href="https://mapcomplete.osm.be/">https://mapcomplete.osm.be/</a>
            <ExtLinkIcon />
          </p>
          <h5 className="my-1 font-medium">StreetComplete</h5>
          <p className="my-1 ">StreetComplete 是用以維護地圖資料的行動應用程式，是首批 OSMF 微型補助金的獲奬者之一。</p>
          <p className="my-1 mb-4">
            <a className="underline text-fern-green-600" href="https://play.google.com/store/apps/details?id=de.westnordost.streetcomplete"> Google Play 商店</a>
            &nbsp;-&nbsp;
            <a className="underline text-fern-green-600" href="https://github.com/streetcomplete/StreetComplete/">GitHub</a>
            <ExtLinkIcon />
          </p>
        </div>
      </div>
    </div>

  </Layout>
);
export default QsgGeneralPage;
