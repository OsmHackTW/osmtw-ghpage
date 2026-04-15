import React from "react";
import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";
import { LegalPageTitle } from "../components/legal";

const lastModified = "2021-12-22";

const articles = [
  {
    section: "一、隱私權保護政策的適用範圍",
    text: "隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。",
  },
  {
    section: "二、個人資料的蒐集、處理及利用方式",
    text: "當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。 為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。",
  },
  {
    section: "三、資料安全保護承諾",
    text: "本網站採取適當的技術與安全維護措施來協助保護您的個人資料安全，只由經過授權的人員才能接觸您的個人資料，如有違反保密義務者，將會受到相關的法律處分。如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。",
  },
  {
    section: "四、網站對外的相關連結",
    text: "我們的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。",
  },
  {
    section: "五、與第三方共用個人資料之政策",
    text: "本網站不會將您提供的個人資訊轉移給其他個人、團體、私人企業或公務機關，作行銷或市場推廣使用；但有法律依據或合約義務者，不在此限。前項但書之情形包括不限於：",
    items: [
      "① 經由您書面同意；",
      "② 法律明文規定；",
      "③ 為免除您生命、身體、自由或財產上之危險；",
      "④ 與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集著依其揭露方式無從識別特定之當事人；",
      "⑥ 有利於您的權益；",
      "⑦ 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。",
    ],
  },
  {
    section: "六、Cookie之使用",
    text: "為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導至網站某些功能無法正常執行 。",
  },
  {
    section: "七、隱私權保護政策之修正",
    text: "本網站隱私權保護政策會因應需求隨時進行修正，當我們對此聲明作出更改時，我們將修改此頁面頂部的「更新」日期。您在本政策修訂後繼續使用本網站，即視為您認可這些變更。",
  },
  {
    section: "附一、Google Analytics",
    paragraphs: [
      {
        text: "本網站使用 Google Analytics 以收集有關使用者的資訊，透過分析使用者與之互動來進一步改善網站，這當中可能包括使用者概略的位置資訊。有關本站如何使用 Google Analytics 的更多資訊，請瀏覽：",
        href: "https://www.google.com/analytics/terms/us.html",
      },
      {
        text: "若您不希望被 Google Analytics 追蹤，Google 有提供 Google Analytics 選擇退出附加元件 (Google Analytics Opt-out Browser Add-on) 下載，請瀏覽：",
        href: "https://tools.google.com/dlpage/gaoptout?hl=zh-tw",
      },
    ],
  },{
    section: "附二、Google Analytics",
    paragraphs: [
      {
        text: "本網站使用 Cloudflare Browser Insights 收集網站 Web Vitals 和效能指標，透過分析使用者與之互動來進一步改善網站，這當中可能包括使用者概略的位置資訊。有關本站如何使用 Google Analytics 的更多資訊，請瀏覽：",
        href: "https://www.google.com/analytics/terms/us.html",
      },
      {
        text: "若您不希望被 Google Analytics 追蹤，Google 有提供 Google Analytics 選擇退出附加元件 (Google Analytics Opt-out Browser Add-on) 下載，請瀏覽：",
        href: "https://tools.google.com/dlpage/gaoptout?hl=zh-tw",
      },
    ],
  },
];

const PrivacyPage = () => (
  <Layout>
    <PageMeta
      title="隱私權聲明 Privacy Statement"
      keywords={["隱私權聲明", "Privacy Statement"]}
    />
    <section className="legal-page-section">
      <div className="w-full xl:w-8/12 mx-auto px-4 sm:px-8 pb-16">
        <LegalPageTitle zh="隱私權聲明" en="Privacy Statement" lastModified={lastModified} />
        <div className="legal-card mb-4">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="flex flex-col text-lg md:text-xl leading-6 font-medium text-slate-900 dark:text-slate-200">
              <span className="py-1">我們非常重視您的個人隱私，在使用本網站服務時，敬請詳閲本隱私權聲明，</span>
              <span className="py-1">了解我們如何蒐集、處理及運用您所提供的個人資料，以及如何保護你的資料安全：</span>
            </h3>
            <h5 className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-200">
              Your privacy is our highest priority, please refer our privacy policy for more details on how we collect, process and protect personal information you have provided.
            </h5>
          </div>
        </div>
        <div className="grid gap-4">
          {articles.map((article, i) => (
            <div key={i} className="legal-card">
              <div className="px-4 py-4 sm:px-6 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-200">
                  {article.section}
                </h3>
              </div>
              <div className="px-4 py-4 sm:px-6 text-sm text-slate-700 dark:text-slate-300">
                {article.paragraphs
                  ? article.paragraphs.map((p, j) => (
                    <p key={j} className={j > 0 ? "mt-4" : ""}>
                      {p.text}
                      <a className="text--warabi break-all" href={p.href} target="_blank" rel="noopener noreferrer">
                        {p.href}
                      </a>
                    </p>
                  ))
                  : <>
                    {article.text}
                    {article.items && (
                      <ul className="border border-slate-200 mt-4 rounded-md divide-y divide-slate-200">
                        {article.items.map((item) => (
                          <li key={item} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;
