const uriComponents = {
  learnMore: "了解更多",
  headerLink: [
    {
      route: "/about",
      title: "什麼是開放街圖",
    },
    {
      route: "/events",
      title: "台灣社群活動",
    },
    {
      route: "/news",
      title: "新聞公告",
    },
    {
      route: "/qsg",
      title: "入門指南 ",
    },
    {
      route: "/faq",
      title: "常見問題",
    },
  ],
  footerSection: [
    {
      title: "了解更多 Find out more",
      list: "sitemapLinks"
    },
    {
      title: "台灣社群據點 Community Hubs",
      list: "communityLinks"
    },
    {
      title: "法律事項 Legal Stuff",
      list: "legalLinks"
    }
  ],
  footerLink: {
    infoLinks: [
      {
        path: "/about#community",
        title: "關於台灣社群\nThe Taiwan Community",
        isExternal: false
      },
      {
        path: "/contact",
        title: "聯絡我們\nContact Us",
        isExternal: false
      },
    ],
    sitemapLinks: [
      {
        path: "/about#whatis",
        title: "什麼是 OSM",
        isExternal: false
      },
      {
        path: "/events",
        title: "活動資訊 - Events",
        isExternal: false
      },
      {
        path: "/news",
        title: "新聞公告 - News",
        isExternal: false
      },
      {
        path: "/qsg",
        title: "入門指南 - Get Started",
        isExternal: false
      },
      {
        path: "/faq",
        title: "常見問答集 - FAQ",
      },
    ],
    communityLinks: [
      {
        path: "https://community.openstreetmap.org/c/communities/tw/42",
        title: "OpenStreetMap Community\n社群討論板",
        isExternal: true
      },
      {
        path: "https://github.com/OsmHackTW/",
        title: "GitHub",
        isExternal: true
      },
      {
        path: "https://www.facebook.com/openstreetmaptaiwan/",
        title: "facebook",
        isExternal: true
      },
      {
        path: "https://t.me/joinchat/Aqu2IgnTuIidMfREdNmomQ/",
        title: "telegram",
        isExternal: true
      },
      {
        path: "https://hackmd.io/@osm-tw",
        title: "HackMD 協作筆記",
        isExternal: true
      },
      {
        path: "https://lists.openstreetmap.org/listinfo/talk-tw",
        title: "郵件論壇 Mailing List",
        isExternal: true
      },
    ],
    legalLinks: [
      {
        path: "/tos",
        title: "使用條款 - Terms of Service",
        isExternal: false
      },
      {
        path: "/coc",
        title: "社群守則 - Code of Conduct",
        isExternal: false
      },
      {
        path: "/privacy",
        title: "隱私權聲明 - Privacy Statment",
        isExternal: false
      },
    ],
  },
};

export { uriComponents };
