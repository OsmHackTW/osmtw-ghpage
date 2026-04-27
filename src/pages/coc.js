import React from "react";
import Link from "next/link";

import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";
import { ExtLinkIcon } from "../components/util";

const lastModified = "2021-03-14";

const GENERAL_INTRO = {
  title: { zh: "總則", en: "General" },
  content: { zh: "善待彼此。", en: "Be nice to each other." },
}

const GENERAL_CLAUSES = [
  {
    title:
    {
      zh: "1. 體貼他人",
      en: "Be Considerate",
    },
    content: {
      zh:
        "由開放街圖計畫所產出的成果，是全世界的人都可以使用的。藉由貢獻於這個計畫，您不只代表著自己一個人，而是整個開放街圖社群。發表言論或做出行動的時候，請記住這一點。",
      en:
        "Work created by OpenStreetMap is seen by people around the world and by contributing to the project, you're representing not only yourself, but OpenStreetMap itself. Please keep that in mind with your words and actions.",
    },
  },
  {
    title: {
      zh: "2. 尊重他人",
      en: "Be Respectful",
    },
    content: {
      zh:
        "開放街圖的貢獻者來自許多不同的背景，也各自具備了各式各樣的技能。我們相信多元化是社群能量的源頭，而每個人都有自己可以盡力之處。有時候不免遭遇到挫折、有建設性的意見分歧也常常會在熱情的社群計畫中發生。然而，很重要的是要記住，如果一個社群裡頭有人感到不舒服或好像被威脅了，這個社群就很難有生產力了。秉著合作的精神，請記得允許讓觀點差異或衝突健康地存在，而不要做出人身攻擊或編輯戰。我們期待開放街圖的社群成員們，不論是在貢獻者彼此，或是對社群以外的人士溝通時，都能夠互相尊重。",
      en:
        "OpenStreetMap contributors come from a variety of backgrounds and have a variety of skill sets. We believe that our diversity is a source of strength and that everyone has something to contribute to the project. Some degree of frustration and constructive disagreement is to be expected when dealing with a passionate community project. However, it is important to remember that a community where people feel uncomfortable or threatened is not a productive one. In the spirit of collaboration, please refrain from allowing healthy differences of opinion or frustration to turn into personal attacks or flame/edit wars. We expect members of the OpenStreetMap community to be respectful when dealing with other contributors, as well as people outside the project.",
    },
  },
  {
    title:
    {
      zh: "3. 願意合作",
      en: "Be Collaborative",
    },
    content: {
      zh:
        "開放街圖的核心在於合作。開放街圖鼓勵成員們不論在組織內外，都一起工作。不論是內部或外界的合作，都能夠強化我們的社群。我們鼓勵開放街圖的成員們行事作風要透明公開，讓可能相關的各界納入參與。當有一個新的做法要在既有的計畫上推動、或是有個新的大型計畫要啟動時，請儘早告知相關的社群成員，進行記錄工作，並定期對外報告進展。",
      en:
        "Collaboration is central to OpenStreetMap. OSM encourages members to work together both inside and outside the organization. Collaboration, internally and externally, strengthens our community. OSM members are encouraged to act transparently and when possible involve all interested parties. When a new approach is taken on an existing project or a major project is considered/started, please notify the larger community early, document the work and inform others regularly of progress.",
    },
  },
  {
    title:
    {
      zh: "4. 當意見不同時，我們徵求其他人的想法",
      en: "When we disagree, we consult others",
    },
    content: {
      zh:
        "意見分歧——不論是社會面或是技術面的——在一個多元的社群中十分常見。計畫要能夠永續經營，關鍵在於解決重大的意見分歧時，能夠有建設性、公開透明、由社群協助並依照社群的機制處理。",
      en:
        "Disagreements, both social and technical, are common in diverse communities. It is crucial for the long term success of the project that major disagreements are resolved constructively, with transparency, with the help of the community and community processes.",
    }
  },
  {
    title:
    {
      zh: "5. 不確定怎麼做時，我們尋求協助",
      en: "When we are unsure, we ask for help",
    },
    content: {
      zh:
        "沒有人可以全知全能，在開放街圖社群裡也沒有人是完美的。在開始一件事關重大的行動前先發問，這可以避免過程發生更多問題，所以請大家多多發問。我們鼓勵社群成員們可透過公共論壇，用有禮合宜的方式提問。",
      en:
        "Nobody knows everything, and nobody is expected to be perfect in the OpenStreetMap community. Asking questions before taking a major action can prevent problems down the road, and so questions are encouraged. Members are encouraged to do so in an open and appropriate forum.",
    }
  },
  {
    title:
    {
      zh: "6. 離任時，請帶著體貼的心",
      en: "Step down considerately",
    },
    content: {
      zh:
        "當開放街圖的社群成員要從計畫或社群離開時，我們要求其在造成整體計畫最小混亂的情況下進行。我們鼓勵社群成員們付出行動，確保他們離開時其他人能夠接續他們的工作。",
      en:
        "When members of OSM leave or disengage from the project and/or community, they are asked to do so in a way that minimizes disruption to the project as a whole. Members are strongly encouraged to put forth an effort to ensure that others can pick up where they left off.",
    }
  },
  {
    title:
    {
      zh: "7. 尊重著作權與授權條款",
      en: "Respect Copyright and Licenses",
    },
    content: {
      zh:
        "請注意著作權相關的議題，絕對不要在違反著作權授權的情況下替開放街圖計劃增添資料。儘管這件事情主要是在開放街圖資料的編輯面向，但是在郵件列表或是維基頁面上剪貼來自他處的資料也是違反著作權的一種方式。請記得在上述管道中務必遵守各種圖像或資料標注來源以及相同方式分享的準則，並且不要放置著作權所有的內容上來。",
      en:
        "Please be conscious of license issues, and never add data in a way that violates other licenses or copyright. While this is primarily a concern for OpenStreetMap data edits, remember that pasting data or images into a mailing list, or wiki page can also be a violation of copyright. Remember to comply with any attribution and share-alike requirements of any images/data placed on these channels, and avoid placing closed-license content there.",
    }
  },
  {
    title:
    {
      zh: "增修條款",
      en: "Additions and Modifications",
    },
    content: {
      zh:
        "這份文件可能會有其他的增修條款。事實上，因為這份文件還在草擬中，我們可以預見將會有許多增添的規範與守則的出現。",
      en:
        "This document may be subject to additions and modifications. In fact, because it is currently under development we can expect more additional rules and guidelines to appear here.",
    }
  },
];

const ENFORCEMENT_INTRO = {
  title: {
    zh: "違規與執行",
    en: "Violations and Enforcement",
  },
  content:
  {
    zh:
      "任何在郵件列表中的內容若有違反上述的行為規範，將會收到一份以上的警告（視此違規的本質與嚴重性）。累犯者將會導致封禁違規使用者。如果在封禁前有任何事前的警告，則警告的次數將會由違規的本質及嚴重性而定。",
    en:
      "Anyone posting to the mailing list in violation of this code of conduct may receive one or more warnings depending on the nature and severity of the infraction. Recurring violations will result in a ban of the offending user. The number of prior warnings, if any, before a ban, will depend on the nature and severity of the violation.",
  }
};

const ENFORCEMENT_CLAUSES = [
  {
    title: {
      zh: "1. 如何判定違規",
      en: "Judging Violations",
    },
    content: {
      zh:
        "許多規則與守則是相當廣泛且模糊的，因此是否某特定的郵件貼文構成違規，將始終是判斷的問題。社群共識將被考慮在內，但最終的決定需要由某個權力單位（個人，或更有可能是新的組織單位）來做出。",
      en:
        "Many of the rules and guidelines are rather broad and vague, and so the decision as to whether a particular mailing list post, or set of posts constitutes a violation will always be a matter of judgement. Community consensus will be taken into account, however final decisions need to rest with some authority (individual, or more likely, a new organisational unit).",
    },
  },
  {
    title:
    {
      zh: "2. 實施封禁",
      en: "Performing a Ban",
    },
    content: {
      zh:
        "系統管理員將執行封禁，作為郵件列表軟體中針對帳戶的設定。這只有在裁決機構確認違規且在給予適當警告後，才會執行。",
      contentEn:
        "System administrators will carry out a ban, as a setting against an account within the mailing list software. This will only be carried out at the behest of the judging authority as and when they identify a violation, and after an appropriate warning has been given.",
    },
  },
  {
    title: {
      zh: "3. 其他管道的不當行為",
      en: "Misconduct Across Other Channels",
    }, content: {
      zh:
        "其他聯絡管道亦在本文件的範疇之內。不同場所可能需要不同的執行方式。對郵件列表封禁做出回應並在其他通訊管道繼續不當行為的使用者，應知道郵件列表上的先前封禁很可能在其他通訊管道更迅速地實施封禁時被納入考量。",
      en:
        "Other contact channels are within scope of this document. Differing enforcement methods may be required in different venues. Users responding to a mailing list ban with further misconduct on other communication channels should be aware that a prior ban on the mailing list may well be taken into consideration in the instigation of more rapid bans on other communication channels.",
    }
  },
];

const CocPage = () => (
  <Layout>
    <PageMeta
      title="社群守則 Code of Conduct"
      keywords={["社群守則", "Code of Conduct"]}
    />
    <section>
      <div className="w-full max-w-4xl mx-auto px-4 py-12 my-6 space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4 space-y-2">
            <span className="block">社群規範（草稿）</span>
            <span className="block">Community Code of Conduct (Draft)</span>
          </h1>
          <div className="text--muted space-y-2 mb-6">
            <p>
              本文件為開放街圖社群規範 OpenStreetMap Community Code of Conduct
            </p>
            <p>最新更新日期 Last Modified:  {lastModified}
            </p>
          </div>
        </div>
        <div className="space-y-6" key="general">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold mb-2">{GENERAL_INTRO.title.zh} {GENERAL_INTRO.title.en}</h2>
            <p className="mt-2 text-xl">{GENERAL_INTRO.content.zh}</p>
            <p className="text--muted tracking-wider mb-6">{GENERAL_INTRO.content.en}</p>
          </div>
          {GENERAL_CLAUSES.map(({ title, content }) => (
            <div key={title.en}>
              <h3 className="text-xl font-semibold mb-4">{title.zh} {title.en}</h3>
              <p className="tracking-widest mb-2">{content.zh}</p>
              <p className="text--muted-sm tracking-wider mb-6">{content.en}</p>
            </div>
          ))}
        </div>
        <div className="space-y-6 mb-8" key="enforcement">
          <div className="space-y-2 mb-6">
            <h2 className="text-3xl font-semibold">{ENFORCEMENT_INTRO.title.zh} {ENFORCEMENT_INTRO.title.en}</h2>
            <p className="tracking-widest mb-2">{ENFORCEMENT_INTRO.content.zh}</p>
            <p className="text--muted tracking-wider mb-2">{ENFORCEMENT_INTRO.content.en}</p>
          </div>
          {ENFORCEMENT_CLAUSES.map(({ title, content }) => (
            <div key={title.en}>
              <h3 className="text-xl font-semibold mb-4">{title.zh} {title.en}</h3>
              <p className="tracking-widest mb-2">{content.zh}</p>
              <p className="text--muted-sm tracking-wider mb-6">{content.en}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">謝啟 Credit</h2>
          <p className="text-sm">
            This document, The (Draft) OpenStreetMap Code of Conduct, is based on the{" "}
            <Link
              href="https://www.ubuntu.com/community/conduct"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Ubuntu Code of Conduct <ExtLinkIcon />
            </Link>{" "}
            and is licensed under the{" "}
            <Link
              href="https://creativecommons.org/licenses/by-sa/3.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Creative Commons Attribution-Share Alike 3.0 license
              <ExtLinkIcon />
            </Link>
            .
          </p>
        </div>
        <div>
          <p className="text--muted-xs">
            原始文件：
            <Link
              href="https://hackmd.io/1tSwa6nlQxKdpKQ3CHpQ3g"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://hackmd.io/1tSwa6nlQxKdpKQ3CHpQ3g
              <ExtLinkIcon />
            </Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default CocPage;
