import React, { useState } from "react";
import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";
import AnchorBar from "../components/anchorBar";
import { ExtLinkIcon } from "../components/util";

const FaqList = [{
  key: "general",
  title: "關於 OpenStreetMap",
  faqs: [
    {
      question: "OpenStreetMap 開放街圖是什麼？",
      answer: "OpenStreetMap（OSM、開放街圖）源起於英國，由 Steve Coast 在 2004 年成立。和開放資料（Open Data）的核心精神一樣，OSM 強調開放與自由——地圖由全球在地社群共同協作繪製，使用開放的資料格式、開源工具，以及開放授權。",
    },
    {
      question: "OSM 的地圖從哪裡來？",
      answer: "主要來自志願者的貢獻：上傳 GPS 軌跡、參考衛星影像描繪道路與建築。2010 年海地地震後，微軟 Bing Map 將衛星影像授權給 OSM 社群使用，大幅加速了全球地圖的完整度。",
    },
    {
      question: "為什麼要用 OSM？",
      answer: "OSM 就像地圖版的維基百科——開放、透明、免費。相較於 Google Maps 等商業服務的授權限制與高昂費用，OSM 讓任何人都能自由取用地理資訊。想了解更多，可以參考 https://switch2osm.org/",
    },
    {
      question: "我要如何參與？",
      answer: "歡迎加入！首先到 https://www.openstreetmap.org/ 申請帳號。發現地圖有誤？幾分鐘就能幫忙標記修正。出遊時也可以用手機記錄軌跡，或用 iD 編輯器直接線上編輯。不熟悉的話，可以參考我們的教學文件，或參加社群活動，大家都很歡迎新手！",
    },
  ],
},
{
  key: "commercial",
  title: "使用與商業應用",
  faqs: [
    {
      question: "OSM 可以用在商業用途嗎？",
      answer: "可以！關鍵在於你有沒有修改地圖內容，簡而言之：沒動地圖就自由用，改了就要回饋社群。。如果沒有修改（例如直接印出來、做加值應用、商業引用），可以自由使用，不需要回饋。但如果有修改或更新地圖資料，就必須以開放格式將修改後的內容回饋給 OSM 社群。",
    },
    {
      question: "我想把 OSM 地圖印在傳單上，還可以加上其他語言的標籤嗎？需要申請授權嗎？",
      answer: "在地圖上加標籤屬於修改行為。不過如果只是商業用途印傳單、沒有改動地圖本身的內容，是可以直接使用的，毌須另外申請。請記得標示出處，通常會在右下角標註「© OpenStreetMap contributors」或「© OpenStreetMap 貢獻者」。",
    },
    {
      question: "我想設計成海報印刷販售，可以嗎？",
      answer: "可以！只要標示出處「© OpenStreetMap contributors」或「© OpenStreetMap 貢獻者」（通常在右下角）即可。詳細授權說明可以參考 https://www.openstreetmap.org/copyright",
    },
    {
      question: "我想把 OSM 地圖印在衣服或包包上販售，出處要標在哪裡？",
      answer: "可以販售！由於衣物和包包沒有明顯的角落可以標示出處，因此建議標在吊牌或洗標上，寫上「地圖資料 © OpenStreetMap 貢獻者」即可。詳細授權說明請參考 https://www.openstreetmap.org/copyright",
    },
  ],
},
{
  key: "accuracy",
  title: "資料準確度與編輯",
  faqs: [
    {
      question: "我發現地圖上的點位位置不對、有偏移，怎麼辦？",
      answer: "這是已知的歷史問題——台灣 OSM 早期使用的空照圖有座標偏移，導致部分舊資料位置不準。目前可以參考 NLSC 開放資料地圖、各縣市政府公開的地址點位，搭配現地實察來修正偏移或新增正確點位。如果不確定怎麼做，歡迎到社群發問！",
    },
    {
      question: "我們機構想使用 OSM，但很多點位精準度不足，怎麼改善？",
      answer: "歡迎直接登入編輯！如果還不熟悉 OSM 編輯器，可以到 Facebook 社團「OpenStreetMap 台灣」發問，社群夥伴很樂意協助你上手。https://www.facebook.com/groups/468945293170945/",
    },
  ],
},
{
  key: "technical",
  title: "技術問題",
  faqs: [
    {
      question: "我的程式呼叫經緯度轉地址 API 被封 IP 了，怎麼辦？",
      answer: "這通常是短時間內呼叫頻率太高，觸發了伺服器的自動防護機制。建議在測試或正式環境中加入適當的呼叫間隔，避免對公共 API 造成過大負擔。被封後通常等一段時間會自動解除。",
    },
    {
      question: "我的網站用了 OSRM API 算路徑，一直出現 502、503 錯誤",
      answer: "502/503 通常是伺服器端的問題。台灣社群有維護部分服務，可以到社群回報狀況。要注意的是，OSM 的基礎硬體是由英國的 OpenStreetMap Foundation 負責，台灣社群主要負責在地推廣與技術協助，無法直接處理全球基礎設施的問題。",
    },
    {
      question: "我網站上的 OSM 地圖突然變空白，是 API 改版了嗎？",
      answer: "先檢查瀏覽器的開發者工具看有沒有錯誤訊息。常見原因是 Leaflet 套件的載入來源失效——例如從 https://npmcdn.com/ 載入可能會收到 HTTP 403。換一個有效的 CDN 來源通常就能解決。",
    },
    {
      question: "我一直進不了 OSM 的製圖編輯頁面",
      answer: "有可能是 OSM 官方伺服器正在維護。可以到官方論壇查看最新狀況：https://community.openstreetmap.org/",
    },
    {
      question: "我要在網站外嵌 OSM 地圖，有什麼要注意的？",
      answer: "建議確認 Leaflet 和圖磚來源的載入連結是否正常，並參考 Leaflet 官方文件的範例。另外記得在地圖上標示出處「© OpenStreetMap contributors」，這是使用 OSM 資料的基本要求。",
    },
  ],
},
{
  key: "content",
  title: "內容與安全問題",
  faqs: [
    {
      question: "OSM 地圖上標示了軍事設施（營區），這樣安全嗎？",
      answer: "這是 OSM 資料完整性的討論議題。台灣社群也有收到民眾和相關單位的反映，但這類內容的最終決定權在英國的 OpenStreetMap Foundation，台灣社群無法代為決定移除。如果你有顧慮，建議透過 OSM 官方社群管道反映。",
    },
  ],
},
{
  key: "community",
  title: "社群與交流",
  faqs: [
    {
      question: "台灣 OSM 社群在哪裡交流？有 Matrix 嗎？",
      answer: "目前主要活躍的平台有：Telegram 群組（最即時）、Facebook 社團 https://www.facebook.com/groups/468945293170945/、郵件論壇（偶爾使用），以及 OSMF 官方論壇 https://community.openstreetmap.org/。曾經有 Matrix 房間，但使用率很低，現在已沒有在維護了。",
    },
    {
      question: "有問題或想貢獻，怎麼聯絡台灣社群？",
      answer: "可以到 https://openstreetmap.community/?map=23.68984,121.00137&zoom=7 找到台灣社群的聯絡資訊，或直接在 Facebook 社團發文提問，大家都很歡迎新朋友！",
    },
  ],
}]

const SecretFaqs = {
  key: "secret",
  title: "🎸 一輩子的 FAQ",
  faqs: [
    {
      question: "畫地圖是一輩子的事嗎？",
      answer: "是一輩子喔，一輩子。你貢獻的每一條路、每一個節點，都永遠留在地圖上。這就是 OSM 的本質——不會消失的痕跡。",
    },
    {
      question: "那個……我可以加入 OSM 社群嗎？（貓貓喝水",
      answer: "貴安，當然可以。歡迎你。一直都可以加入的——不需要問，直接來就好了。",
    },
    {
      question: "現在是復權的時刻——我的編輯帳號被鎖了，要怎麼辦？",
      answer: "等一下，先冷靜下來談談吧。先別急。到 https://community.openstreetmap.org/ 說明情況，社群會一起想辦法的。復權，是遲早的事。",
    },
    {
      question: "我只是想畫地圖，為什麼要在意這麼多規則？（初華看手機",
      answer: "因為地圖不只是你的，是大家的。就像母雞卡說的——演奏不是為了自己，是為了那個當下所有在場的人。",
    },
    {
      question: "我想在社群裡扮演一個不同的角色，可以嗎？",
      answer: "面具戴上之後，舞台上的你就是另一個人了。OSM 不是只有畫地圖這一種角色——你可以寫程式、送 PR 給開源工具（像 iD 編輯器、JOSM）；可以做資料分析、把 OSM 資料做成有用的應用；可以寫文件、翻譯、辦活動、回答新手問題。每一種都是真實的貢獻，每一種面具下都是同一張地圖。",
    },
    {
      question: "社群裡有人在吵架，我該怎麼辦？（妳是來找我吵架的嗎.jpg",
      answer: "還真是高高在上啊。OSM 社群很大，每個人都有自己的堅持，靜靜看著就好。(對健康不好喔🙅) 吵完還是會繼續畫地圖的，這就是開源社群的一輩子。Per aspera ad astra.",
    },
    {
      question: "要怎麼舉報地圖被惡搞啊？這樣太不負責了吧？（不爽世",
      answer: "我早知道會這樣了，真的很莫名其妙。先試試在變更集（Changeset）留言跟對方溝通，有時候只是不小心畫錯。如果對方擺明惡意、或是長期濫用帳號，就要把證據交給 Data Working Group（DWG）——他們有權封鎖違規帳號。記得附上截圖和 changeset 連結，讓 DWG 好處理。舉報入口：https://www.openstreetmap.org/reports/new",
    },
    {
      question: "之前有個地圖專案做到一半，維護的人不見了……留下來的資料還有意義嗎？",
      answer: "有意義。OSM 的資料不會因為貢獻者消失就跟著消失——那些節點、道路、標記都還在，等著下一個人繼續。CRYCHIC 解散了，但音樂沒有消失，重女樂團就是從那裡長出來的。",
    },
    {
      question: "怎麼還沒傳完啊——我的 changeset 上傳一直轉圈，是卡住了嗎？",
      answer: "你等它三分鐘。OSM 伺服器有時候就是慢。不過如果你一次傳了幾千個節點，那建議下次拆小一點——大型 changeset 不只容易 timeout，社群審查起來也很吃力，一旦出錯整批都要追。建議每次只上傳一個邏輯單位的修改（例如一條路、一個區域），並在 changeset 留言寫清楚改了什麼、資料來源是哪裡（記得不能用 Google Maps）。上傳完可以用 OSMCha https://osmcha.org/ 確認自己的變更有沒有問題。真的卡死的話，關掉重開編輯器，通常還是會傳上去的，別急。",
    },
    {
      question: "我在 OSM 社群裡感覺沒有存在感。Quid Faciam?",
      answer: "Fluctuat Nec Mergitur. 每一個你畫下的節點，都是存在過的證明。就算沒人注意到，地圖記得你來過。",
    },
  ],
};

function renderAnswer(text) {
  const parts = text.split(/(https?:\/\/[^\s）。，、]+)/g);
  return parts.map((part, i) =>
    part.match(/^https?:\/\//)
      ? <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text--warabi hover:underline break-all">{part}<ExtLinkIcon /></a>
      : part
  );
}

const HINT_TEXTS = ["還差 4 次⋯⋯", "還差 3 次⋯⋯", "還差 2 次，你快發現了", "再一次！🎸"];

const FaqSection = ({ list }) => (
  <div id={list.key} className="md:w-3/4 mx-auto space-y-4 py-6 scroll-mt-14">
    <h2 className="text-xl lg:text-3xl font-semibold text-slate-700 dark:text-white py-2">
      {list.title}
    </h2>
    {list.faqs.map((faq, i) => (
      <div key={i}>
        <h3 className="text-lg lg:text-xl text-slate-600 dark:text-warabi-100 py-3">
          {faq.question}
        </h3>
        <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-slate-900">
          {renderAnswer(faq.answer)}
        </blockquote>
      </div>
    ))}
  </div>
);

const faqSections = FaqList.map(({ key, title }) => ({ id: key, label: title }));

const FaqPage = () => {
  const [titleClicks, setTitleClicks] = useState(0);
  const unlocked = titleClicks >= 5;
  const hintText = HINT_TEXTS[titleClicks - 1];

  return (
    <Layout>
      <PageMeta keywords={["常見問題", "FAQ"]} title="常見問題集 FAQs" />
      <AnchorBar sections={faqSections} />
      <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center dark:text-slate-200">
        <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8 mb-16">
          <div className="main-title my-8 md:my-12">
            <h1
              className={`font-bold text-3xl md:text-5xl text-center select-none ${unlocked ? "cursor-default" : "cursor-help"}`}
              onClick={() => { if (!unlocked) setTitleClicks(n => n + 1); }}
            >
              <span>常見問題集 FAQs</span>
              {unlocked && (<span> 🎸</span>)}
            </h1>
            <p
              key={titleClicks}
              className={`text-center text-sm py-4 transition-opacity duration-500 ${hintText && !unlocked ? "text-slate-400 animate-pulse" : "opacity-0 pointer-events-none"}`}
            >
              {hintText ?? "\u200b"}
            </p>
          </div>

          {/* 一輩子喔 */}
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${unlocked ? "opacity-100 max-h-[9999px]" : "opacity-0 max-h-0"}`}>
            <FaqSection list={SecretFaqs} />
          </div>

          {FaqList.map((list) => <FaqSection key={list.key} list={list} />)}
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
