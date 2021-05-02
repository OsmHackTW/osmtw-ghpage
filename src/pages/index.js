import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { ExtLinkIcon, commonComponents, landingPageComponents } from "../components/glaube";
import SEO from "../components/seo";
import RN990698 from "../assets/images/RN990698_2000.jpg";
import mapLayersd0 from "../assets/images/landing_maplayers_d0.png";
import mapLayersd1 from "../assets/images/landing_maplayers_d1.png";
import mapLayersd2 from "../assets/images/landing_maplayers_d2.png";

const learnMore = commonComponents.learnMore;
// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="首頁" keywords={[`OpenStreetMap`, `OSM`, `OSMTW`, `Community`, `開放街圖`, `開放街圖台灣`, `台灣開放街圖`, `地圖`]} />

      {/* Hero */}
      <section className="flex flex-col items-center">
        <div className="relative w-full flex py-32 md:py-64 bg-cover bg-center bg-no-repeat object-fill osmtw-landing-hero osmtw-osmcontributors--bottom-right">
          <div className="w-full md:w-11/12 lg:w-full xl:w-3/4 mx-auto p-2">
            <div className="flex-1 text-center md:text-left bg-grey-100 bg-opacity-25 mx-auto px-4 my-4 md:px-16 md:mr-8 lg:ml-16">
              <div className="text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-none my-4 ">開放街圖・台灣</div>
              <div className="text-2xl lg:text-3xl font-bold tracking-tight text-gray-700 pb-4 md:space-x-4">
                <span className="block md:inline">自由開放的圖資</span>
                <span className="block md:inline">廣泛運用的圖資</span>
              </div>
              <button className="my-2 px-6 py-2 md:my-4 md:px-8 md:py-4 rounded-full font-semibold tracking-wide bg-pink-500 text-white outline-none focus:outline-none hover:shadow-lg hover:bg-pink-600 transition duration-200 ease-in-out">
                立刻開始使用
                </button>
            </div>
          </div>

        </div>
      </section>

      {/* Why OSM */}
      <section className="flex flex-col items-center">
        <div className="relative w-full flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
              <div className="w-full mb-16 mb-4 lg:w-1/2">
                <h2 className="max-w-full text-3xl lg:text-4xl xl:text-5xl font-bold highlight-yellow text-gray-900 xl:max-w-lg">人人可編輯的世界地圖</h2>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-base text-gray-700 md:text-lg">OpenStreetMap（開放街圖，簡稱 OSM）是自由而且開源的全球地圖，於 2004 年由英國的 Steve Coast 發起，採用類似 Wiki 的協作編輯以及開放的授權與格式。OSM 的地圖由像你一樣的使用者繪製。因為來自一般的使用者，所以內容相當多元。資料的來源可能根據手持 GPS 裝置、航照圖以及其他自由內容，甚至是單靠使用者由於對本地的認識而得。雖然不全是經過專業訓練的人士，但可以產生接近專業地理資訊水準的地圖。 地圖以開放資料庫授權（ODbL）方式授權，可以日常生活、導航、學術、甚至商業應用。</h3>
              </div>
            </div>
            <div class="flex mt-6 justify-center mb-16">
              <div class="w-24 h-1 rounded-full bg-teal-500 inline-flex"></div>
            </div>
            <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {landingPageComponents.feature.map((link) => (
                <div className="max-w-md">
                  <div className="flex items-center justify-center relative mx-auto w-24 h-24 mb-4 rounded-full bg-red-200">
                    <svg className="w-16 h-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d={link.SVGpath} />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold text-center md:text-lg leading-5">{link.heading}</h6>
                  <p className="mb-3 text-sm md:text-base gray-900">{link.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ka-ki-e te-too Ka-ki ue */}
      <section className="flex flex-col items-center">
        <div className="relative w-full flex flex-col-reverse bg-teal-300 py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
            <svg
              className="absolute left-0 hidden h-full text-teal-300 transform -translate-x-1/2 lg:block "
              viewBox="0 0 100 100"
              fill="currentColor"
              preserveAspectRatio="none slice"
            >
              <path d="M50 0H100L50 100H0L50 0Z" />
            </svg>
            <img
              className="object-cover w-full h-48 rounded-md shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
              src={RN990698}
              alt="(C) Rainny Lin (C) MSF"
            />
          </div>
          <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
            <div className="lg:my-40 lg:max-w-xl">
              <p className="flex gap-2 ml-2 py-4 hidden md:flex">
                {landingPageComponents.hashtag.map((hashtag) => (<span className="px-3 py-px text-sm font-semibold tracking-wider text-indigo-700 uppercase rounded-full border-2 border-indigo-600 hover:border-blue-800 hover:text-blue-800">{hashtag}</span>))}
              </p>
              <div class="flex px-2 py-4 hidden md:flex">
                <div class="w-24 h-1 rounded-full bg-teal-600 inline-flex"></div>
              </div>
              <h2 className="px-1 mb-5 font-sans text-5xl font-medium tracking-tight text-gray-900 md:px-0.5 md:text-6xl sm:leading-none md:leading-snug space-y-2">
                <span className="block">自己的地圖</span>
                <span className="block font-black">自己畫</span>
              </h2>
              <h3 className="p-2 mb-5 text-base text-gray-700 md:text-lg md:pr-16 lg:pr-4 xl:pr-8">
                地理資訊作為社會共享資源，不應當受個別企業壟斷並完全商業化，就由你我重新奪回地圖的話語權。
              </h3>
              <div className="flex items-center mb-8">
                <a
                  href="https://osm.org/" aria-label=""
                  className="inline-flex items-center justify-center h-12 px-3 py-px px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-indigo-600 hover:bg-blue-600 focus:shadow-outline focus:outline-none"
                >
                  開始畫圖 <ExtLinkIcon />
                </a>
                <Link
                  to="/qsg/mapper"
                  className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-indigo-700"
                >
                  {learnMore}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Different style */}
      <section className="flex flex-col items-center py-16 lg:py-48">
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl px-6 md:px-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center md:pr-8 xl:pr-0">
              <div className="flex flex-col items-end px-2">
                <img className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56" src={mapLayersd2} alt="" />
                <img className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src={mapLayersd1} alt="" />
              </div>
              <div className="px-2">
                <img className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src={mapLayersd0} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center px-5 -mx-4 md:px-0 lg:pl-8 lg:max-w-lg xl:max-w-3xl">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-500">
                <svg className="text-white w-8 h-8" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
                  <path d="M2.125 8.567l-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 sm:leading-none">
                  不同圖磚 各取所需
                </h2>
                <div className="text-base md:text-lg text-gray-700">
                  OpenStreetMap及其他應用服務有提供多種地圖樣式，即使是相同的資料也會給你帶來截然不同的感受！
                </div>
                <a className="inline-flex items-center font-semibold text-green-600" href="https://wiki.openstreetmap.org/wiki/Tile_servers" aria-label="" target="_blank" rel="noopener noreferrer">
                  探索更多地圖樣式
                  <ExtLinkIcon />
                </a><span className="text-grey-400 text-xs mx-1">(英語)</span>
                <blockquote className="text-xs py-4 md:py-8 text-gray-500">&copy; OpenStreetMap contributors</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn more by role */}
      <section className="flex flex-col items-center py-16 ld:py-24">
        <div className="relative　w-full flex-1 text-left max-w-7xl">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-2xl text-green-500 tracking-widest font-semibold title-font mb-1">&#35;當地圖不再只是地圖</h2>
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">發掘開放街圖的更多潛在的可能性</h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {landingPageComponents.quickStartGuide.map((link) => (
                  <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full shadow-lg bg-gray-100 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                          <svg className="p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d={link.SVGpath} />
                          </svg>
                        </div>
                        <h2 className="text-gray-900 text-xl title-font font-medium">我是{link.role}</h2>
                      </div>
                      <div className="flex-grow">
                        <p className="leading-relaxed text-normal">{link.desc}</p>
                        <Link
                          className="mt-3 text-green-500 inline-flex items-center"
                          key={link.title} to={link.route}
                        >{learnMore}
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="flex flex-col items-center">
        <div className="w-full flex object-fill bg-green-200">
          <div className="w-full md:w-3/4 xl:w-3/5 2xl:w-2/3 2xl:max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
              <span className="block py-2">摩拳擦掌？躍躍欲試？</span>
              <span className="block text-indigo-600">馬上開始使用開放街圖！</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a href="https://osm.org/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">開始畫圖<ExtLinkIcon /></a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link to="/qsg" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50">{learnMore}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
