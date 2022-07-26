import React from "react";
import Layout from "../../components/layouts/qsgLayout";
import { ExtLinkIcon, Link } from "../../components/util";
import SEO from "../../components/seo";

const ContributePage = () => (
  <Layout title="參與並支持台灣開放街圖社群">
    <SEO
      title="入門指南 Quick Start Guide"
      keywords={[
        "OpenStreetMap",
        "OSM",
        "OSMTW",
        "Community",
        "開放街圖",
        "開放街圖台灣",
        "台灣開放街圖",
        "入門指南",
        "Quick Start Guide",
      ]}
    />
    <div>
      <p className="my-4">
        <span className="font-semibold text-lg text-fernGreen-500">
          OpenStreetMap 開放街圖{" "}
        </span>
        是一個非盈利、由社群驅動、自由且開放的專案。
        正因如此，幾乎所有台灣開放街圖社群的活躍成員都是利用空餘時間，抱持著超過一百分的熱情作出無償貢獻。
      </p>
      <p className="my-4">
        不論是更新圖資，還是協助推廣，每一項貢獻都是有意義的！如果您認同 OSM
        的理念，歡迎您加入成為社群的一員；
        或者是隨喜樂捐，支持台灣開放街圖社群的營運及推廣活動。再次感謝您的參與！
      </p>
      <div className="my-16 space-y-6">
        <div className="flex flex-col lg:flex-row border rounded shadow-md my-3 p-4 justify-between">
          <Link href="/qsg/mapper" className="inline">
            開始畫圖
          </Link>{" "}
          <h2 className="text-sm text-slate-400">/mapper</h2>
        </div>
        <div className="text-fernGreen-500 border rounded shadow-md my-3 p-4">
          <a
            className="flex flex-col lg:flex-row justify-between"
            href="https://ocf.neticrm.tw/civicrm/contribute/transact?id=16"
          >
            <h2 className="flex">
              捐款抖內 Donate
              <ExtLinkIcon />
            </h2>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContributePage;
