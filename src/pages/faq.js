import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function FAQPage() {
  return (
    <Layout>
      <SEO
        keywords={['', '']}
        title="常見問題集 FAQs"
      />
      <section className="antialiased text-gray-900 py-2 h-full flex items-center justify-center">
        <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8 mb-16">

          <div className="main-title my-8 md:my-16">
            <h1 className="font-bold text-xl md:text-4xl lg:text-6xl text-center">常見問題集 FAQs</h1>
          </div>
          <div className="md:w-3/4 mx-auto space-y-4">
            <h4 className="text-xl text-gray-600">施工中 WIP</h4>
            <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-gray-900">
              你或會看到不完整或者是較旧的資訊，不便之處、希請見諒。
            </blockquote>
            <h4 className="text-xl text-gray-600">1、開放街圖OSM是什麼？</h4>
            <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-gray-900">
              文字文字文字文字，文字文字，文字文字文字文字，文字文字文字文字文字文字，文字文字文字文字文字文字文字，文字文字文字。文字文字文字文字文字文字，文字文字文字文字文字文字⋯文字文字，文字文字，文字文字文字，文字文字文字文字文字文字文字。文字文字文字文字，文字文字文字文字文字，文字文字文字文字。
            </blockquote>
            <h4 className="text-xl text-gray-600">2、OSM的地圖從哪裡來？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-gray-900">
              文字文字文字文字，文字文字，文字文字文字文字，文字文字文字文字文字文字，文字文字文字文字文字文字文字，文字文字文字。文字文字文字文字文字文字，文字文字文字文字文字文字⋯文字文字，文字文字，文字文字文字，文字文字文字文字文字文字文字。文字文字文字文字，文字文字文字文字文字，文字文字文字文字。
            </blockquote>
            <h4 className="text-xl text-gray-600">3、開放街圖可以用做商業使用嗎？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-gray-900">
              可以！文字文字文字文字，文字文字，文字文字文字文字，文字文字文字文字文字文字，文字文字文字文字文字文字文字，文字文字文字。文字文字文字文字文字文字，文字文字文字文字文字文字⋯文字文字，文字文字，文字文字文字，文字文字文字文字文字文字文字。文字文字文字文字，文字文字文字文字文字，文字文字文字文字。
            </blockquote>
            <h4 className="text-xl text-gray-600">4、我要如何參與？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-gray-900">
              如果希望貢獻 OpenStreetMap ，首先您必須申請 OpenStreetMap.org 的帳號。如果你發現地圖上錯誤，你可以用幾分鐘的時間幫忙標示。
              出遊時，你可以用行動裝置紀錄公路、街道的軌跡，順手紀錄一下實用的地物又更棒了。也可以用容易上手的 iD 編輯器進行線上編輯。請參考教學文件，或參與我們舉辦的活動。
            </blockquote>
            <h4 className="text-xl text-gray-600">5、使用OSM地圖的理由？</h4>
            <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-gray-900">
              文字文字文字文字，文字文字，文字文字文字文字，文字文字文字文字文字文字，文字文字文字文字文字文字文字，文字文字文字。文字文字文字文字文字文字，文字文字文字文字文字文字⋯文字文字，文字文字，文字文字文字，文字文字文字文字文字文字文字。文字文字文字文字，文字文字文字文字文字，文字文字文字文字。
              https://switch2osm.org/
            </blockquote>
          </div>

        </div>
      </section>

    </Layout>
  );
}

export default FAQPage;
