import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function FAQPage() {
  return (
    <Layout>
      <SEO
        keywords={['', '']}
        title="常見問題集 FAQs"
      />
      <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
        <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8 mb-16">

          <div className="main-title my-8 md:my-16">
            <h1 className="font-bold text-xl md:text-4xl lg:text-6xl text-center">常見問題集 FAQs</h1>
          </div>
          <div className="md:w-3/4 mx-auto space-y-4">
            <h4 className="text-xl text-slate-600">1、OpenStreetMap 開放街圖是什麼？</h4>
            <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-slate-900">
              OpenStreetMap（OSM、開放街圖）源起於英國，由Steve Coast在2004年所成立。
              跟開放資料（Open Data）核心精神一樣是開放與自由，OSM是由在地及全球群眾共同協作、繪製（mapping）的地圖，強調資料的開放格式、使用開放源碼的工具、開放授權。
            </blockquote>
            <h4 className="text-xl text-slate-600">2、OSM的地圖從哪裡來？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-slate-900">
              用高解析度的衛星影像，把公路和建築物的樣子描繪出來。2004年開始，大家把GPS的行跡（trace）以及NASA所提供的衛星影像上傳，
              OSM社群貢獻者把道路畫出來，2010年發生海地地震後，微軟Bing Map將地圖專屬授權給OSM社群使用，後來才有衛星影像及航照圖。
            </blockquote>
            <h4 className="text-xl text-slate-600">3、開放街圖可以用做商業使用嗎？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-slate-900">
              可以！但必須需要注意的一點是，只要對地圖有任何修改、更新，都必須以開放格式將修改、更新後的地圖更新至OSM社群，
              並同意開放授權。若是要將OSM上的地圖印下來拿去販售、直接引用OSM地圖做加值及商業應用，只要沒有牽涉到地圖的修改，都可以不必用同樣開放的格式開放出來。
            </blockquote>
            <h4 className="text-xl text-slate-600">4、我要如何參與？</h4>
            <blockquote className="pl-4 text-l text-justify border-l-4 border-slate-900">
              如果希望貢獻 OpenStreetMap，首先您必須申請 OpenStreetMap.org 的帳號。如果你發現地圖上錯誤，你可以用幾分鐘的時間幫忙標示。
              出遊時，你可以用行動裝置紀錄公路、街道的軌跡，順手紀錄一下實用的地物又更棒了。也可以用容易上手的 iD 編輯器進行線上編輯。請參考教學文件，或參與我們舉辦的活動。
            </blockquote>
            <h4 className="text-xl text-slate-600">5、使用OSM地圖的理由？</h4>
            <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-slate-900">
              OSM地圖就像是地圖版的維基百科，與其使用像 Google Map 處處受限的地圖服務，何不使用符合開源精神開放、透明的核心價值的地圖呢？
              而且地理圖資授權費用往往太貴，許多資訊也不透明。開源地圖就可做到資訊揭露，像是核電廠、災害的位置，除了國防安全之外，地理圖資都應該讓民眾都能使用。
              到 https://switch2osm.org/ 了解更多
            </blockquote>
          </div>
        </div>
      </section>

    </Layout>
  );
}
