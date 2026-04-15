import React from "react";
import Link from "next/link";

import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";
import AnchorBar from "../components/anchorBar";
import { uriComponents } from "../components/navData";
import { ExtLinkIcon } from "../components/util";

const signUpIllustration = "assets/images/sign-up-illustration.png";
// Derivative from https://github.com/openstreetmap/openstreetmap-website/blob/master/app/assets/images/sign-up-illustration.svg

const aboutPageComponents = {
  aboutOSM: [
    {
      title: "開放街圖是什麼，可以吃嗎？",
      key: "whatis",
      description: [
        {
          segment: (
            <img src={signUpIllustration} alt="OpenStreetMap" className="mx-auto" />
          ),
        },
        {
          segment:
            "開放街圖（OpenStreetMap，簡稱OSM）是内容自由且開源的世界地圖，也被視為 Google Maps 最強大的競爭者。於 2004 年由英國的 Steve Coast 發起，概念源自於維基百科（Wikipedia），採用類似Wiki的協作綿編輯以及開放的授權與格式，由來自全球各地的使用者繪製，也歡迎你一起加入。OSM 的使用者也同時扮演審核者的角色。雖不全然是出自專業人士之手，仍可媲美專業地理資訊水準的地圖。",
        },
        {
          segment: (
            <div>
              OSM 的圖資允許所有人使用及編輯，全球的地圖資料庫會定期進行備份，使用者也可以直接下載這份圖資並在開放的規範下使用。OSM 採用
              <a
                href="https://wiki.osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ"
                className="text--warabi"
                aria-label=""
                target="_blank"
                rel="noopener noreferrer"
              >
                《開放資料庫授權》（ODbL）<ExtLinkIcon />
              </a>
              <span className="text-slate-600 dark:text-slate-400 text-sm mx-1">(英語)</span>
              方式授權釋出，沒有版權費用、許可證費用、使用費用及其他一切費用，您可以將圖資用於個人、社群、教育、商業、政府以及其他任何可以想到的應用用途。
            </div>
          ),
        },
        {
          segment:
            "有賴於開源協作機制， 使用者可以自由編輯且重繪任何資料並即時上載至資料庫， 同時也能夠獲得最新最即時的世界地圖。 這種即時更新的技術在2010年海地地震時發揮了重要作用， 全球的製圖者即便遠在天邊， 儘花費一週的時間便完成了太子港的地圖， 及時地提供了救災所需的地理資訊。 類似的案例還有2013年重創菲律賓的海燕颱風及2015年的尼泊爾地震。",
        },
      ],
    },
    {
      title: "台灣社群 Taiwan Community",
      key: "community",
      description: [
        { segment: "2007年一名西班牙圖客和一名德國圖客在 OSM 上開始了台灣的繪製，是為台灣在 OSM 出現之濫觴，2009年起有台灣本地圖客對進行台灣繪製，實行「自己的地圖自己畫」。" },
        { segment: "台灣開放街圖社群則是始於2010年，是由一群志同道合的在地圖客組成。台灣社群目前在網路上多個活躍據點，包括 Facebook、Telegram、郵件論壇等。無論是想深入了解開放街圖或是對畫圖有疑難雜症欲尋求解方，歡迎隨時加入討論。" },
        { segment: "OSM Taiwan Community is formed by a group of passionate local mappers since 2010, being active on several social networks, including Facebook, Slack, Telegram and Mailing lists. So don't be shy and join the community today!" },
      ],
    },

  ],
};

const usage = {
  title: "在哪裡可以使用 OSM 呢？",
  key: "usage",
  services: ["颱風消息 / 交通部中央氣象署", "3D災害潛勢地圖 / 國家災害防救科技中心", "玉山登山資訊 / 玉山國家公園管理處", "Wikipedia / Wikimedia Foundation", "Facebook / Meta", "樂居", "Strava", "Garmin", "ASICS Runkeeper", "Pokémon Go", "Amazon", "Apple Maps", "Microsoft Bing Maps", "Fedex", "TripAdvisor"],
  examples: [
    { colors: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-600 dark:text-blue-300" }, path: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", title: "導航與路線", description: "應用於導航 App、步行及單車路線規劃。" }, {
      colors: {
        bg: "bg-red-100 dark:bg-red-900", text: "text-red-600 dark:text-red-300"
      }, path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "人道救援", description: "災難發生時協助繪製受災地區地圖，支援救援行動。"
    }, {
      colors: {
        bg: "bg-green-100 dark:bg-green-900", text: "text-green-600 dark:text-green-300"
      }, path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "開發者工具", description: "透過開放 API 與圖磚服務，打造各類地圖應用程式。"
    }, {
      colors: {
        bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-600 dark:text-purple-300"
      }, path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "政府與學術", description: "用於城市規劃、地理研究與公共政策分析。"
    },
  ]
};

const howToContribute = {
  header: "三步驟加入開放街圖",
  steps: [
    {
      title: "註冊帳號",
      description: "前往 OpenStreetMap 官網免費註冊，加入全球百萬地圖貢獻者的行列。",

    },
    {
      title: "學習編輯",
      description: "參考新手指南，了解如何新增道路、建築物與在地資訊，從小地方開始練習。",
    },
    {
      title: "開始畫圖",
      description: "用你對在地的了解，為台灣的地圖補充更豐富、更精準的地理資訊。",
    },
  ]
};

const { learnMore } = uriComponents;

const aboutSections = [
  { id: "whatis", label: "開放街圖是什麼" },
  { id: "community", label: "台灣社群" },
  { id: "usage", label: "使用 OSM" },
  { id: "contribute", label: "加入貢獻" },
];

const AboutPage = () => (
  <Layout>
    <PageMeta keywords={["OSM", "開放街圖"]} title="什麼是開放街圖" />
    <AnchorBar sections={aboutSections} />
    <section className="antialiased text-slate-900 dark:text-slate-200 py-12 md:py-20">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
        {aboutPageComponents.aboutOSM.map((paragraph, idx) => (
          <div
            className="mb-16 md:mb-24 scroll-mt-20"
            id={paragraph.key}
            key={paragraph.key}
          >
            {/* Section counter + title */}
            <div className="flex items-start gap-4 mb-8">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-slate-800 dark:text-slate-100">
                {paragraph.title}
              </h2>
            </div>
            {/* Divider */}
            <div className="mb-6 h-px bg-gradient-to-r from-teal-400 via-slate-200 to-transparent dark:via-slate-600" />
            {/* Content */}
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {paragraph.description.map((desc) => (
                <React.Fragment key={desc.id}>
                  {desc.subtitle &&
                    <h4 className="text-xs tracking-widest font-bold uppercase text-teal-600 dark:text-teal-400 mt-6 mb-1">
                      {desc.subtitle}
                    </h4>
                  }
                  <div>{desc.segment}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Where to Use */}
    <section className="antialiased text-slate-900 dark:text-slate-200 pb-12 md:pb-20">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
        <div className="mb-8 scroll-mt-20" id={usage.key} key={usage.key}>
          <div className="flex items-start gap-4 mb-8">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-slate-800 dark:text-slate-100">
              {usage.title}
            </h2>
          </div>
          <div className="mb-8 h-px bg-gradient-to-r from-teal-400 via-slate-200 to-transparent dark:via-slate-600" />
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              OSM 的圖資不只是拿來看地圖——它早已悄悄融入你我的日常生活。
              從手機導航、戶外登山、到災難救援的即時地圖繪製，從 Leaflet、MapLibre 等開發者工具，到政府及學術研究的地理分析，全球數以百計的應用程式與服務都建立在這份開放的基礎之上。
            </p>
            <p>
              無論你是一般使用者、戶外愛好者，還是地圖開發者，這裡一定有你需要的工具。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {usage.examples.map((example) => (
              <div className="card-base">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${example.colors.bg}`}>
                  <svg className={`w-6 h-6 ${example.colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={example.path} />
                  </svg>
                </div>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">{example.title}</p>
                <p className="text--muted-xs">{example.description}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 dark:border-slate-600 mt-10 pt-8">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-6">以下單位與服務使用 OSM 資料</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
              {usage.services.map((org) => (
                <span key={org} className="px-4 py-2 rounded-full bg-white dark:bg-slate-600/50 shadow-sm border border-slate-200 dark:border-slate-600">
                  {org}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10 gap-4">
            <Link
              href="/applications/"
              className="px-6 py-3 rounded-full font-semibold bg-warabi-500 shadow-sm text-white hover:bg-warabi-600 transition duration-200"
            >
              瀏覽更多應用程式、服務與工具
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats strip */}
    <section className="w-full bg-warabi-300 text-white">
      <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {
          [{ figure: "10萬+", text: "活躍貢獻者" }, { figure: "20年", text: "開放地圖歷史" }, { figure: "免費", text: "開放資料授權" }, { figure: "全球", text: "社群共同維護" }].map((stat) => (
            <div>
              <div className="text-4xl font-black">{stat.figure}</div>
              <div className="text-sm mt-1">{stat.text}</div>
            </div>
          ))
        }
      </div>
    </section>

    {/* How to contribute */}
    <section id="contribute" className="flex-col-center py-16 scroll-mt-10">
      <div className="w-full max-w-4xl px-6 md:px-8 flex flex-col gap-12">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            三步驟加入開放街圖
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howToContribute.steps.map((step, idx) => (
            <div className="flex-col-center text-center">
              <div className="step-badge">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
            </div>))}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.openstreetmap.org/user/new"
            className="px-6 py-3 rounded-full font-semibold bg-warabi-500 text-white hover:bg-warabi-600 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            立刻註冊 <ExtLinkIcon />
          </a>
          <Link
            href="/qsg/get-started/"
            className="px-6 py-3 rounded-full font-semibold border-2 border-warabi-600 dark:border-warabi-300 text-warabi-600 dark:text-warabi-300 hover:bg-warabi-50/75 dark:hover:bg-slate-600 transition duration-200"
          >
            {learnMore}
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
