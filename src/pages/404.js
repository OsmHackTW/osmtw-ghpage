import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

// markup
const NotFoundPage = () => (
  <Layout>
    <section className="antialiased text-gray-900 py-2 h-full flex items-center justify-center">
      <div className="md:w-2/3 mx-auto">
        <div className="main-title my-8 md:my-16 space-y-3 text-center">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">阿北～初四了！阿北～！</h1>
          <h3 className="font-bold text-md md:text-xl lg:text-2xl">我們掉到４０４了啦！</h3>
          <h2 className="font-bold text-2xl">Mission Control, we've hit a 404.</h2>
        </div>
        <div className="my-8 md:my-16 space-y-3">
          <h2 className="text-lg text-grey-600 text-center py-3">[工商時間 AD]</h2>
          <div className="flex flex-col space-y-4">
            {/* 工商 - 這是一個<a>包起來的圖卡 AD here - this an <a> wrapped card */}
            <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white dark:bg-grey-600">
              <a href="https://coscup.org/2021/zh-TW/landing" target="_blank" rel="noopener noreferrer">
                {/* 圖檔 Hero image here */}
                <img className="w-full overflow-hidden" src="https://coscup.org/2021/assets/og.65c2d8e3.png" alt="COSCUP 2021" />
                <div className="px-6 pt-4 space-y-3">
                  {/* 字字字字 Descripion here */}
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">COSCUP x RubyConf Taiwan 2021 is here!</h3>
                  <p className="text-base md:text-lg lg:text-xl">開源人年會 COSCUP 已邁向第 16 年，今年仍舊聚集著開源社群們的熱情，更與 RubyConf Taiwan 一起合辦，吸引更多國內外同好關注與參與。今年將於 7/31~8/1 於台灣科技大學舉辦，有豐富多元的 22 軌議程，在地社群與國際社群之參與交流，希望能有更多開源開放的火花。</p>
                </div>
                <div className="px-6 py-4 space-y-3">
                  {/* 標籤 Hashtag here */}
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">#COSCUP</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">#全亞洲最熱情</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">#志工主辦</span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">#活力滿點</span>
                </div>
              </a>
            </div>
            {/* 下方可以依需求再加圖卡 Card can be added as needed below */}
          </div>
          <p className="block pt-16 font-bold text-center underline">
            <Link to="/">回到首頁 Back to Home</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
