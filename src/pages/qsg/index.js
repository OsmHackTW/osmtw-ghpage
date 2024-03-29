import React, { useState } from "react";
import SEO from "../../components/seo";
import Footer from "../../components/layouts/footer";
import { landingPageComponents } from "../../components/glaube";
import { ExtLinkIcon, OsmtwGuideTitle, Link } from "../../components/util";

const LandingImg = "../assets/images/RN990586_2000.jpg";

const QsgIndexPage = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="antialiased text-slate-900 h-full items-center justify-center">
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
      <div className="bg-slate-100 overflow-hidden mx-auto flex flex-wrap">
        <div className="w-full lg:w-3/5 xl:w-1/2 xl:max-w-3xl xl:mt-8 mb-8 lg:mb-0 mx-auto bg-qsg-landing-background">
          {/* Header */}
          <header className="flex flex-row w-full px-2 mx-auto">
            <div className="flex flex-col flex-1 w-max-5xl sm:flex-row py-5 mx-auto">
              <div className="w-full md:w-1/4 flex flex-row flex-no-wrap px-2 pb-4 md:px-0 md:pb-0 justify-between md:justify-around place-items-center no-underline">
                <Link href="/qsg/contribute/">
                  <OsmtwGuideTitle />
                </Link>

                <button
                  type="button"
                  className="block items-center self-end flex-col justify-center p-2 border rounded md:hidden"
                  onClick={() => toggleExpansion(!isExpanded)}
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    className="block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={`${
                        isExpanded
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }`}
                    />
                  </svg>
                </button>
              </div>
              <div className="w-full md:w-3/4 flex flex-row flex-no-wrap justify-around self-center place-items-center no-underline">
                <nav
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } px-2 md:block md:items-center w-full md:w-auto sm:w-auto md:self-end space-y-1`}
                >
                  {landingPageComponents.quickStartGuide.map((item) => (
                    <Link
                      className="block md:inline pr-8 font-medium text-lg text-fernGreen-400 hover:text-fernGreen-600"
                      key={item.role}
                      href={item.route}
                    >
                      {item.role}
                    </Link>
                  ))}

                  <Link
                    href="/"
                    className="block md:inline-block font-medium text-lg text-slate-600 hover:text-slate-900"
                  >
                    回到主頁
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          {/* Hero-left */}
          <section className="relative z-10 pb-8 bg-slate-100 mx-auto sm:pb-16 md:pb-24 lg:max-w-4xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl md:text-6xl space-y-3">
                  <span className="block">以開源圖資豐富</span>
                  <span className="block text-fernGreen-600">數位體驗</span>
                </h1>
                <h4 className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  無論你是首次使用 OpenStreetMap
                  圖資或是温故知新，都希望你能夠透過這份簡單指南找到所需的入門資訊。
                  也歡迎你隨時來參與線上及實體各類活動，和社群成員有更多討論及互動。
                </h4>
                <div className="items-center text-base mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
                  <div className="justify-center font-bold text-white">
                    <Link
                      href="/qsg/get-started/"
                      className="w-full flex rounded-full shadow px-8 py-3 bg-fernGreen-600 hover:bg-fernGreen-700 md:py-4 md:text-lg md:px-10"
                    >
                      開始行動
                    </Link>
                  </div>
                  <div className="justify-center font-medium text-fernGreen-700 mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://www.openstreetmap.org/"
                      className="w-full flex rounded-full shadow px-8 py-3 bg-fernGreen-100 hover:bg-fernGreen-200 md:py-4 md:text-lg md:px-10"
                    >
                      OpenStreetMap.org
                      <ExtLinkIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Hero-right: image */}
        <div className="w-full lg:w-2/5 xl:w-1/2 mb-10 lg:mb-0 overflow-hidden">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={LandingImg}
            alt=""
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QsgIndexPage;
