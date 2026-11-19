import React from "react";
import Link from "next/link";
import Layout from "../../components/layouts/layout";
import PageMeta from "../../components/metadata";
import { landingPageComponents } from "../../components/landingData";
import { ExtLinkIcon } from "../../components/util";

const LandingImg = "/assets/images/RN990586_2000.jpg";

const QsgIndexPage = () => (
  <Layout>
    <PageMeta title="入門指南 Quick Start Guide" />

    {/* Hero */}
    <section className="bg-slate-100 dark:bg-slate-800 overflow-hidden flex flex-wrap">
      <div className="w-full lg:w-3/5 xl:w-1/2 xl:max-w-3xl mx-auto px-4 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-8 lg:py-28 xl:py-32">
        <div className="sm:text-center lg:text-left">
          <p className="text-sm font-semibold tracking-widest text-warabi-600 dark:text-warabi-300 mb-3">
            入門指南 Quick Start Guide
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl space-y-3">
            <span className="block">以開源圖資豐富</span>
            <span className="block text-warabi-600 dark:text-warabi-300">數位體驗</span>
          </h1>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            無論你是首次使用 OpenStreetMap
            圖資或是温故知新，都希望你能夠透過這份簡單指南找到所需的入門資訊。
            也歡迎你隨時來參與線上及實體各類活動，和社群成員有更多討論及互動。
          </p>
          <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3 text-base">
            <a
              href="#roles"
              className="flex justify-center rounded-full shadow px-8 py-3 font-bold text-white bg-warabi-600 hover:bg-warabi-700 md:py-4 md:text-lg md:px-10"
            >
              開始行動
            </a>
            <a
              href="https://www.openstreetmap.org/"
              className="flex justify-center mt-3 sm:mt-0 rounded-full shadow px-8 py-3 font-medium text-warabi-700 bg-warabi-100 hover:bg-warabi-200 md:py-4 md:text-lg md:px-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenStreetMap.org
              <ExtLinkIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 xl:w-1/2 overflow-hidden">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full w-full">
          <img className="absolute inset-0 object-cover w-full h-full" src={LandingImg} alt="" />
        </div>
      </div>
    </section>

    {/* Role picker */}
    <section id="roles" className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 scroll-mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
        依你的角色選擇
      </h2>
      <ul className="grid gap-6 md:grid-cols-3 mt-8 list-none">
        {landingPageComponents.quickStartGuide.map((item) => (
          <li key={item.route} className="card-base flex flex-col">
            <svg
              className="w-10 h-10 mb-4 text-warabi-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={item.SVGpath} />
            </svg>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              <Link href={item.route} className="hover:underline">
                {item.role}
              </Link>
            </h3>
            <p className="flex-1 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
            {item.related && (
              <Link href={item.related.route} className="mt-4 text-sm link--warabi">
                {item.related.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default QsgIndexPage;
