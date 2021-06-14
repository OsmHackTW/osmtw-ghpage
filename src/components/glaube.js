/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import logo from '../assets/images/logo.png';

// common components 共通元件

const ExtLinkIcon = () => (
  <svg className="inline-block w-4 xl:w-5 m-1" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

const EnIcon = () => (
  <span className="text-xs text-gray-400">(英語)</span>
);

const OsmtwGuideTitle = () => (
  <h1 className="flex flex-grow-0 place-items-center ">
    <span className="sr-only">入門指南</span>
    <img className="block h-10 w-auto" src={logo} alt="OSMTW" />
    <span className="px-2 text-xl font-semibold text-fern-green-500 inlne">入門指南</span>
  </h1>
);

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="shadow-md border rounded my-4">
      <button type="button" className="flex w-full justify-between p-4 leading-normal duration-700" onClick={() => setIsActive(!isActive)}>
        <div className="block-inline">{title}</div>
        <div className="text-lg block-inline">{isActive ? '-' : '+'}</div>
      </button>
      {isActive && (
        <div className="overflow-hidden border-l-2 bg-gray-50 border-indigo-500 leading-normal">
          <div className="p-5">{content}</div>
        </div>
      )}
    </div>

  );
};

const Pre = ({ content }) => (<span className="font-mono bg-indigo-50 mx-0.5">{content}</span>
);
const commonComponents = {
  learnMore: '了解更多',
  headerLink: [
    {
      route: '/about',
      title: '什麼是開放街圖',
    },
    {
      route: '/events',
      title: '台灣社群活動',
    },
    {
      route: '/news',
      title: '新聞公告',
    },
    {
      route: '/qsg',
      title: '入門指南 ',
    },
  ],
  footerLink: {
    infoLinks: [
      {
        route: '/about#community',
        title: '關於台灣社群 TW Community',
      },
      {
        route: '/contact',
        title: '聯絡我們 Contact',
      },
    ],
    sitemapLinks: [
      {
        route: '/about#whatis',
        title: '什麼是 OSM',
      },
      {
        route: '/events',
        title: '活動資訊 - Events',
      },
      {
        route: '/news',
        title: '新聞公告 - News',
      },
      {
        route: '/qsg',
        title: '入門指南 - Get Started',
      },
      {
        route: '/faq',
        title: '常見問答集 - FAQ',
      },
    ],
    communityLinks: [
      {
        url: 'https://github.com/OsmHackTW/',
        title: 'Github',
      },
      {
        url: 'https://www.facebook.com/openstreetmaptaiwan/',
        title: 'facebook',
      },
      {
        url: 'https://hackmd.io/@osm-tw',
        title: 'HackMD 協作筆記',
      },
      {
        url: 'https://trello.com/osmtw/',
        title: 'Trello 協作看板',
      },
      {
        url: 'https://lists.openstreetmap.org/listinfo/talk-tw',
        title: '郵件論壇 Mailing List',
      },
    ],
    legalLinks: [
      {
        route: '/tos',
        title: '使用條款 - Terms of Service',
      },
      {
        route: '/coc',
        title: '社群守則 - Code of Conduct',
      },
      {
        route: '/privacy',
        title: '隱私權聲明 - Privacy Statment',
      },
    ],
  },
};

// Landing page components 到達頁面構成
const landingPageComponents = {
  feature: [
    {
      heading: '廣獲採用',
      desc: ' OSM 圖資廣獲包括 Amazon、Apple、BBC、facebook、Garmin、Uber、精靈寶可夢GO、法國航空、劍橋大學、維基百科等具領導地位的組織採用，在不同領域當中都深受歡迎。',
      SVGpath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    },
    {
      heading: '開放開源',
      desc: 'OSM 是一個「屬於大家的地圖」，任何人都可以參與製圖，且自由與免費地使用地圖，開放的授權與格式更可以讓使用者自由地去延伸、應用 OSM 圖資。',
      SVGpath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    },
    {
      heading: '在地智識',
      desc: '全球每日有超過100萬名的圖客對 OSM 地理圖資作出編輯貢獻，並貢獻超過40億的資料點 (node)，OSM 儼然成為大家生活中不可或缺的一環。',
      SVGpath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      heading: '社群導向',
      desc: '正如同維基百科保有每次編輯的記錄備査，OSM 也有複査機制供貢獻者巡査編輯記錄，確保圖資能夠正確繪製，讓地圖使用者能獲得並使用詳實的地圖。',
      SVGpath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
  ],
  hashtag: ['#FLOSS', '#開放格式', '#開放式參與', '#在地的故事', '#在地的地圖'],
  quickStartGuide: [
    {
      role: '一般使用者',
      desc: '了解在日常生活中可見的 OSM 圖資及使用方式，包括實體文件、應用程式。',
      route: '/qsg/general',
      SVGpath: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
    },
    {
      role: '新手圖客',
      desc: '了解構成 OSM 的幾何資料模型，以及如何編輯地圖及建構關聯。',
      route: '/qsg/mapper',
      SVGpath: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    },
    {
      role: '開發者',
      desc: '了解如何透過 OSM 及其他相關工具為你的專案帶來更大效益。',
      route: '/qsg/developer',
      SVGpath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    },
  ],
};

// About page components 關於頁面構成
const aboutPageComponents = {
  aboutOSM: [
    {
      title: '開放街圖是什麼，可以吃嗎？',
      key: 'whatis',
      description: [
        { segment: (<img src="https://www.openstreetmap.org/assets/sign-up-illustration-6e149801aa318824882161d5c98349db7dc76885b2f829ca6edb068913393c49.png" alt="OpenStreetMap" />) },
        { segment: '開放街圖（OpenStreetMap，簡稱OSM）是内容自由且開源的世界地圖，也被視為 Google Maps 最強大的競爭者。於 2004 年由英國的 Steve Coast 發起，概念源自於維基百科（Wikipedia），採用類似Wiki的協作綿編輯以及開放的授權與格式，由來自全球各地的使用者繪製，也歡迎你一起加入。OSM 的使用者也同時扮演審核者的角色。雖不全然是出自專業人士之手，仍可媲美專業地理資訊水準的地圖。' },
        {
          segment: (
            <div>
              OSM 的圖資允許所有人使用及編輯，全球的地圖資料庫會定期進行備份，使用者也可以直接下載這份圖資並在開放的規範下使用。OSM 採用
              <a href="https://wiki.osmfoundation.org/wiki/Licence/Licence_and_Legal_FAQ" className="text-fern-green-600" aria-label="" target="_blank" rel="noopener noreferrer">
                《開放資料庫授權》（ODbL）
                <ExtLinkIcon />
              </a>
              <span className="text-grey-600 text-sm mx-1">(英語)</span>
              方式授權釋出，沒有版權費用、許可證費用、使用費用及其他一切費用， 您可以將圖資用於個人、社群、教育、商業、政府以及其他任何可以想到的應用用途。
            </div>
          ),
        },
        { segment: '有賴於開源協作機制， 使用者可以自由編輯且重繪任何資料並即時上載至資料庫， 同時也能夠獲得最新最即時的世界地圖。 這種即時更新的技術在2010年海地地震時發揮了重要作用， 全球的製圖者即便遠在天邊， 儘花費一週的時間便完成了太子港的地圖， 及時地提供了救災所需的地理資訊。 類似的案例還有2013年重創菲律賓的海燕颱風及2015年的尼泊爾地震。' },
      ],
    },
    {
      title: '在哪裡可以使用 OSM 呢？',
      key: 'whentouse',
      description: [
        { segment: '有很多但窩不知道名字 (施工中 WIP)' },
        { segment: (<img src="https://i.imgur.com/duLQ96O.gif" width="320" alt="IDK meme" />) },
        // Link to /qsg/general { segment: "" }
      ],
    },
    {
      title: '台灣社群 Taiwan Community',
      key: 'community',
      description: [
        { segment: '2007年一名西班牙圖客和一名德國圖客在 OSM 上開始了台灣的繪製，是為台灣在 OSM 出現之濫觴，2009年起有台灣本地圖客對進行台灣繪製，實行「自己的地圖自己畫」。' },
        { segment: '台灣開放街圖社群則是始於2010年，是由一群志同道合的在地圖客組成。台灣社群目前在網路上多個活躍據點，包括 Facebook、Slack、Telegram、郵件論壇等。無論是想深入了解開放街圖或是對畫圖有疑難雜症欲尋求解方，歡迎隨時加入討論。' },
        { segment: "OSM Taiwan Community is formed by a group of passionate local mappers since 2010, being active on several social networks, including Facebook, Slack, Telegram and Mailing lists. So don't be shy and join the community today!" },

      ],
    },
  ],
};

// Contact page components 連絡頁面構成
const contactPageComponents = {
  communityButton: [
    {
      href: 'https://www.facebook.com/groups/OpenStreetMap.TW/',
      title: 'Facebook Group',
      colorBg: 'blue',
    },
    {
      href: 'https://m.me/openstreetmaptaiwan',
      title: 'Messenger',
      colorBg: 'pink',
    },
    {
      href: 'https://osm-tw.signup.team/',
      title: 'Slack',
      colorBg: 'amber',
    },
    {
      href: 'https://t.me/joinchat/Aqu2IgnTuIidMfREdNmomQ/',
      title: 'Telegram',
      colorBg: 'indigo',
    },
    {
      href: 'https://webchat.oftc.net/?channels=#osm-tw',
      title: 'IRC Channel',
      colorBg: 'green',
    },
  ],
};

// QSG 入門指南頁面構成

// ---- COVID-19 Mapping components COVID-19圖資更新
const daysOfWeek = [
  { abbr: 'Mo', en: 'Monday', zh: '星期一' },
  { abbr: 'Tu', en: 'Tuesday', zh: '星期二' },
  { abbr: 'We', en: 'Wednesday', zh: '星期三' },
  { abbr: 'Th', en: 'Thursday', zh: '星期四' },
  { abbr: 'Fr', en: 'Friday', zh: '星期五' },
  { abbr: 'Sa', en: 'Saturday', zh: '星期六' },
  { abbr: 'Su', en: 'Sunday', zh: '星期日' },
];
const qsgCOVID19MappingComponents = {
  accordionCOVID19Content: [
    {
      title: '開放及營業時間',

      content: (
        <div>
          <p className="mb-8">
            因應中央流行疫情指揮中心宣布提升全國疫情警戒，各類商店及設施的營業時間都有所調整；
            OSM除了原有標示開放及營業時間的<Pre content="opening_hours" />標籤之外也另外増加了<Pre content="opening_hours:covid19" />標籤以便識別。
          </p>
          <p className="mb-2">假如您確認店家或設施在疫情期間</p>
          <p className="mb-4">
            a) 暫停營業，您可以下方敘述式標示：<br />
            <Pre content="opening_hours:covid19=closed" />
          </p>
          <p className="mb-4">
            b) 照常開放且營業時間相同，您可以下方敘述式標示：<br />
            <Pre content="opening_hours:covid19=same" />
          </p>
          <p className="mb-4">
            c) 仍有開放或營業，但不清楚其營業時間，您可以下方敘述式標示：<br />
            <Pre content="opening_hours:covid19=restricted" />
          </p>
          <p className="mb-4">
            d) 有確切的營業時間，您可以倣效下方敘述式標示：<br />
            <Pre content="opening_hours:covid19=Mo off; Tu-Fr 11:00-14:00; 17:00-21:00; Sa-Su 12:00:21:30; PH off" /><br />
          </p>
          <p className="text-sm">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-2 py-1">縮寫</th>
                  <th className="px-2 py-1">英語</th>
                  <th className="px-2 py-1">日曆日</th>
                </tr>
              </thead>
              <tbody>
                {daysOfWeek.map(({ abbr, en, zh }) => (
                  <tr>
                    <td className="border px-2 py-1">{abbr}</td>
                    <td className="border px-2 py-1">{en}</td>
                    <td className="border px-2 py-1">{zh}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </p>
        </div>
      ),
    },
    {
      title: '外帶？外送？還是得來速？',
      content: (
        <div>
          <p className="mb-2">假如您確認店家或設施在疫情期間有否提供</p>
          <p className="mb-4">
            a) 外帶服務，您可以下方敘述式標示：<br />
            <Pre content="takeaway:covid19=yes/only/no" />
          </p>
          <p className="mb-4">
            b) 外送服務，您可以下方敘述式標示：<br />
            <Pre content="delivery:covid19=yes/only/no" />
          </p>
          <p className="mb-2">
            c) 得來速 (Drive-thru 免下車點餐)，您可以下方敘述式標示：<br />
            <Pre content="drive_through:covid19=yes/only/no" />
          </p>
          <p>
            其中 <Pre content="yes" /> 表示有提供該項服務，<Pre content="only" /> 表示僅提供該項服務，<Pre content="no" /> 表示沒有提供該項服務。
          </p>
        </div>
      ),
    },
    {
      title: '人流控管',
      content: (
        <div>
          <p className="mb-2">
            為落實執行指揮中心及地方政府發佈之防疫政策，
            <a className="underline" href="https://www.moea.gov.tw/Mns/populace/news/News.aspx?kind=1&menu_id=40&news_id=94687">經濟部已協調各類賣場管制人流<ExtLinkIcon /></a>，維持社交距離：
          </p>
          <p className="mb-4">
            假如您能夠確認賣場人流管制，您可以下方敘述式標示：<br />
            <Pre content="capacity:covid19=*" /> (* 為任意數字)
          </p>
          <p className="mb-4">
            至於因管制而暫停使用的出入口，您可以下方敘述式標示：<br />
            <Pre content="access:covid19=no" />
          </p>
        </div>
      ),
    },
    {
      title: '其他',
      content: (
        <div>
          <p className="mb-4">
            倘若您留下店家或設施的更進一步的敍述，您可利用下方敘述式標示：<br />
            <Pre content="description:covid19=*" /> (* 為任意文字)
          </p>
          <p className="mb-4">
            倘若您想向OSM社群圖客們留下備註，您可利用下方敘述式標示：<br />
            <Pre content="note:covid19=*" /> (* 為任意文字)
          </p>
        </div>
      ),
    },
  ],
};

// Privacy page components 隠私權政策頁面構成
const privacyPageComponents = {
  privacyAritcleSectionV: ['① 經由您書面同意；', '② 法律明文規定；', '③ 為免除您生命、身體、自由或財產上之危險；', '④ 與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人；', '⑥ 有利於您的權益；', '⑦ 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。'],
  privacyArticle: [
    {
      section: '一、隱私權保護政策的適用範圍',
      text: '隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。',
    },
    {
      section: '二、個人資料的蒐集、處理及利用方式',
      text: '當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。 為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。',

    },
    {
      section: '三、資料安全保護承諾',
      text: '本網站採取適當的技術與安全維護措施來協助保護您的個人資料安全，只由經過授權的人員才能接觸您的個人資料，如有違反保密義務者，將會受到相關的法律處分。如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。',

    },
    {
      section: '四、網站對外的相關連結',
      text: '我們的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。',

    },
    {
      section: '五、與第三方共用個人資料之政策',
      text: '本網站不會將您提供的個人資訊轉移給其他個人、團體、私人企業或公務機關，作行銷或市場推廣使用；但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於：',
      point: 'SectionV',
    },
    {
      section: '六、Cookie之使用',
      text: '為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行 。',

    },
    {
      section: '七、隱私權保護政策之修正',
      text: '本網站隱私權保護政策會因應需求隨時進行修正，當我們對此聲明作出更改時，我們將修改此頁面頂部的「更新」日期。您在本政策修訂後繼續使用本網站，即視為您認可這些變更。',

    },
    {
      section: '附一、Google Analytics',
      text: (
        /* eslint-disable react/no-unescaped-entities */
        <div className="flex flex-col">
          <span>
            本網站使用 Google Analytics  以收集有關使用者的資訊，透過分析使用者與之互動來進一步改善網站，這當中可能包括使用者概略的位置資訊。
            有關本站如何使用 Google Analytics 的更多資訊，請瀏覽以下網址：
            <a className="text-fern-green-600" href="https://www.google.com/analytics/terms/us.html" target="_blank" rel="noopener noreferrer">https://www.google.com/analytics/terms/us.html</a>
            。
          </span>
          <span className="pt-4">
            若您不希望被 Google Analytics 追蹤，
            Google 有提供 Google Analytics 選擇退出附加元件 (Google Analytics Opt-out Browser Add-on) 下載，請瀏覽以下網址：
            <a className="text-fern-green-600" href="https://tools.google.com/dlpage/gaoptout?hl=zh-tw" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=zh-tw</a>
            。
          </span>
        </div>
        /* eslint-enable */
      ),
    },
  ],
};

// TOS page components
const tosPageComponents = {
  tosAritcle: [
    {
      section_zh: '定義',
      section_en: 'Definitions',
      text_zh: (
        <div className="flex flex-col pb-2">
          <div className="pb-1">在本條款及細則中，凡提述：</div>
          <ul>
            <li className="text-xs">「包括」指包括但並不局限於所列詞語的一般涵義；</li>
            <li className="text-xs">「開放街圖」、「OSM」指 OpenStreetMap；</li>
            <li className="text-xs">「開放街圖基金會」、「基金會」、「OSMF」指於2006年8月22日在英格蘭與威爾斯以有限責任公司形式註冊的非營利組織；</li>
            <li className="text-xs">「我們」、「社群」、「台灣社群」、「OSMTW」指開放街圖台灣社群及其成員；</li>
            <li className="text-xs">「您」、「您的」、「你」、「你的」指閣下，即網站使用者。</li>
          </ul>
        </div>
      ),
      text_en: (
        /* eslint-disable react/no-unescaped-entities */
        /* eslint-disable max-len */
        <div className="flex flex-col">
          <div className="pb-1">In these Terms and Conditions references to:</div>
          <ul>
            <li>"including" means including, without limitation to the generality of the surrounding words;</li>
            <li>"our", "ours", "us", "we" and "OSMTW" refer to OpenStreetMap Taiwan Community and its members;</li>
            <li>"you", "your" and "yours" refer to you, visitor.</li>
          </ul>
        </div>
        /* eslint-enable */
      ),
    },
    {
      section_zh: '一般條款',
      section_en: 'Terms',
      text_zh: '本服務條款構成您與本網站就您使用本服務之完整合意，取代您先前與本網站間有關本服務所為之任何約定。訪問本網站，即表示您同意接受網站的使用條款、隱私政策，所有適用的法律和法規約束，並同意您有責任遵守任何適用之當地法律。若您不同意這些條款中的任何一項，則無法使用或訪問本網站。本網站內容應受著作權及商標法所保護。 ',
      text_en: 'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, our Privacy Policy, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.',
    },
    {
      section_zh: '免責事項',
      section_en: 'Disclaimer',
      text_zh: '本網站及其內容是按照「現狀」來提供的，OSMTW對其使用、可用性、準確性或表現不作任何明示的或隱含的保証或聲明；包括但不限於對本網站不會中斷或可連續登入的保證。對於本網站所有刊載資料、產品及/或服務的任何適用性之陳述；對其適銷性的非明確保證；對本網站之任何有關服務的特定用途適用性或非侵權性。',
      text_en: "The materials on OSMTW's website are provided \"as is\". OSMTW makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, OSMTW does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.",
    },
    {
      section_zh: '責任限制',
      section_en: 'Limitations',
      text_zh: '我們並不會就因使用本網站所引致或與之有關的任何性質的損失、損害或傷害負任何責任，以法律所許可的最大程度為限。此乃適用於所有屬任何性質的損害（包括但不限於直接、間接、附帶的、懲罰性或連帶損害、資料、收入或利潤損失、財產損失或損害及第三方申索）的綜合性賠償責任限制。',
      text_en: "In no event shall OSMTW be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on OSMTW's Internet site, even if OSMTW or an authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      section_zh: '修訂及勘誤',
      section_en: 'Revisions and Errata',
      text_zh: '作為推廣開放街之在地公民團體，我們致力確保網站內容的正確性，但網站內容仍有可能出現技術、文字或影像上等錯誤，故我們無法為上述作出任何保証。網站可能隨時或定期會有變動，請您不時查閱有關的材料。',
      text_en: "The materials appearing on OSMTW's website could include technical, typographical, or photographic errors. OSMTW does not warrant that any of the materials on its website are accurate, complete, or current. OSMTW may make changes to the materials contained on its website at any time without notice. OSMTW does not, however, make any commitment to update the materials.",
    },
    {
      section_zh: '準據法及管轄法院',
      section_en: 'Governing Laws and Jurisdiction',
      text_zh: '本服務條款之解釋與適用，及其派生之一切爭議，應以中華民國法令為準據法，且以臺灣臺北地方法院為第一審管轄法院。網站的使用適用於一般條款和條件。',
      text_en: 'Any claim and dispute relating to this agreement shall be governed by the laws of Taiwan (the Republic of China) without regard to its conflict of law provisions. You agree that the Taiwan Taipei District Court shall have the exclusive jurisdiction over all questions and controversies arising out of or in connection with the performance or execution of this Agreement. General Terms and Conditions applicable to Use of a website.',
    },
    {
      section_zh: '可分割性',
      section_en: 'Severability',
      text_zh: '倘若任何具有效司法管轄權的法院或行政機關裁定本條款及細則的任何部分不合法、無效或不能執行，該項裁定並不影響本條款及細則其他部分的執行。',
      text_en: 'If any part of these Terms and Conditions is held by any court or administrative body of competent jurisdiction to be illegal, void or unenforceable, such determination will not impair the enforceability of the remaining parts of these Terms and Conditions.',
    },
    {
      section_zh: '準據文本',
      section_en: 'Governing Version',
      text_zh: '若本條款及細則的中、英文本有任何歧異，應以中文本為準。',
      text_en: 'In the event of discrepancies between the English and Chinese versions, the Chinese version shall apply and prevail.',
    },
  ],
};

// EXPORT 匯出
export {
  ExtLinkIcon, EnIcon, OsmtwGuideTitle, Accordion, Pre,
  commonComponents, landingPageComponents,
  aboutPageComponents, contactPageComponents,
  qsgCOVID19MappingComponents,
  privacyPageComponents, tosPageComponents,
};
