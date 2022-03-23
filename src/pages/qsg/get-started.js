import React from "react";
import Layout from "../../components/layouts/qsgLayout";
import SEO from "../../components/seo";
import { landingPageComponents } from "../../components/glaube";
import { Link } from "../../components/util";

const QsgGetStartedPage = () => (
  <Layout title="開始之前">
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
      ]}
    />
    <div className="flex-1 p-2 md:py-2 md:px-12 antialiased w-full items-center justify-center">
      <div>
        <p className="my-1">
          嗨！首先歡迎您！感謝你們使用
          OpenStreetMap，一個非盈利、由社群驅動、自由且開放的專案。
        </p>
        <p className="my-1">您可以依您的角色選擇最適合的頁面瀏覽。</p>
        <div className="my-8 space-y-6">
          {landingPageComponents.quickStartGuide.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="flex flex-col lg:flex-row border rounded shadow-md my-3 p-4 justify-between"
            >
              <div>
                <h2 className="text-fern-green-500">{item.role}</h2>
                <h2 className="text-sm text-slate-400">
                  {item.route.replace("/qsg", "")}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default QsgGetStartedPage;
