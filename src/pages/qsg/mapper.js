/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/qsg/layout';
import { ExtLinkIcon, EnIcon } from '../../components/glaube';
import SEO from '../../components/seo';

const MapperPage = () => (
  <Layout>
    <SEO title="入門指南 Quick Start Guide" keywords={['OpenStreetMap', 'OSM', 'OSMTW', 'Community', '開放街圖', '開放街圖台灣', '台灣開放街圖']} />
    <div className="flex-1 p-2 md:py-2 md:px-12 antialiased w-full items-center justify-center">
      <div className="text-gray-900">
        <div className="bg-white flex flex-col flex-wrap p-6 max-w-7xl mx-auto overflow-hidden">
          <h2 className="text-3xl font-semibold mb-6">新手圖客</h2>
          <hr className="h-0.5 px-1 my-4 bg-gray-300" />
          <h4 className="my-2 font-semibold text-xl text-gray-600">首先呢……</h4>
          <p className="my-1 mb-8">
            如果希望貢獻 OpenStreetMap ，首先您必須申請 OpenStreetMap.org的帳號。
            如果你發現地圖上錯誤，你可以用幾分鐘的時間幫忙標示。
            出遊時，你可以用行動裝置紀錄公路、街道的軌跡，順手紀錄一下實用的地物又更棒了。
            也可以用容易上手的 iD 編輯器進行線上編輯。請參考教學文件，或<Link to="/event" className="underline text-fern-green-500">參與我們舉辦的活動</Link>。
          </p>
          <h4 className="my-2 font-semibold text-xl text-gray-600">OSM 三要素</h4>
          <p className="my-1">元素 (Elements) 是開放街圖資料模型建立並記錄現實世界資訊的基本組成部分，包含：</p>
          <p className="my-1 mb-8">
            <ul className="list-disc list-inside my-1">
              <li><a className="underline text-fern-green-500" href="https://wiki.openstreetmap.org/wiki/Node">Node</a> <EnIcon /></li>
              <li><a className="underline text-fern-green-500" href="https://wiki.openstreetmap.org/wiki/Way">Way</a> <EnIcon /></li>
              <li><a className="underline text-fern-green-500" href="https://wiki.openstreetmap.org/wiki/Relation">Relation</a> <EnIcon /></li>
            </ul>
          </p>
          <h4 className="my-2 font-semibold text-xl text-gray-600">LearnOSM</h4>
          <p className="my-1">
            <a className="underline text-fern-green-500" href="http://www.hotosm.org/">人道救援開放街圖小組 (Humanitarian OpenStreetMap Team, HOT)</a>
            <ExtLinkIcon />
            有製作 LearnOSM 網站，提供新手圖客們學習。
            OSM台灣社群居中協力翻譯台灣華語版本，您可以由此進入：
            <a className="underline text-fern-green-500" href="https://learnosm.org/zh_TW/beginner/">初學者指南</a>
            <ExtLinkIcon /><EnIcon />。
          </p>
        </div>
      </div>
    </div>

  </Layout>
);
export default MapperPage;
