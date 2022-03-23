import React from "react";
import { uriComponents } from "../glaube";
import { ExtLinkIcon, Link } from "../util";

function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="max-w-7xl py-4 md:pt-16 m-auto text-slate-800 flex flex-wrap justify-left">
        <div className="p-5 sm:w-4/12 md:w-4/12">
          <div className="bg-teal-800 text-white p-3 mb-4">
            <div className="sm:text-2-xl md:text-s sm:text-2-xl lg:text-2xl font-medium mb-2">
              OpenStreetMap Taiwan
            </div>
            <div className="text-2-xl md:text-l sm:text-2-xl lg:text-2xl font-bold">
              開放街圖台灣
            </div>
          </div>
          <div className="text-sm text-slate-200 font-medium px-1 mb-6">
            OpenStreetMap 成立於 2004
            年，是內容自由且所有人都能夠編輯的世界地圖協作計劃。
            經過多年的發展，世界各地的地理圖資逐漸增加，部分地區圖資的詳細程度甚至可用以一般商業應用。
          </div>
          <div className="flex flex-row px-1 my-2 w-full item-center">
            {uriComponents.footerLink.infoLinks.map((link) => (
              <Link
                className="w-1/2 flex text-slate-200 hover:text-slate-100 text-xs font-medium duration-700"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-5 sm:w-8/12 md:w-8/12 m-auto text-slate-800 flex flex-wrap justify-left">
          <div className="p-2 w-1/2 sm:w-4/12 md:w-4/12">
            <div className="text-xs uppercase text-blue-100 font-medium mb-4">
              了解更多 Find out more
            </div>
            {uriComponents.footerLink.sitemapLinks.map((link) => (
              <Link
                className="my-2 block text-slate-200 hover:text-slate-100 text-sm font-medium duration-700"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="p-2 w-1/2 sm:w-4/12 md:w-4/12">
            <div className="text-xs uppercase text-blue-100 font-medium mb-4">
              台灣社群據點 Community Hubs
            </div>
            {uriComponents.footerLink.communityLinks.map((href) => (
              <a
                className="my-3 block text-slate-200 hover:text-slate-100 text-sm font-medium duration-700"
                href={href.url}
                rel="noopener noreferrer"
                target="_blank"
                key={href.title}
              >
                {href.title}
                <ExtLinkIcon />
              </a>
            ))}
          </div>

          <div className="p-2 w-1/2 sm:w-4/12 md:w-4/12">
            <div className="text-xs uppercase text-blue-100 font-medium mb-4">
              法律事項 Legal Stuff
            </div>
            {uriComponents.footerLink.legalLinks.map((link) => (
              <Link
                className="my-2 block text-slate-200 hover:text-slate-100 text-sm font-medium duration-700"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </Link>
            ))}
            <a
              className="my-2 block text-slate-200 hover:text-slate-100 text-xs font-medium duration-700"
              href="https://www.openstreetmap.org/copyright/zh-TW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex gap-2">
                <div className="flex flex-col">
                  <span>開放街圖版權與授權條款</span>
                  <span>Copyright and License of OSM</span>{" "}
                </div>
                <ExtLinkIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* copyright section 版權告示 */}
      <div className="pt-1">
        <div className="flex px-3 m-auto py-4 border-t border-slate-500 text-slate-50 text-sm flex-col md:flex-row max-w-7xl">
          <div className="mt-2 ml-3">
            <div className="flex flex-col">
              <div>OSMTW Community 台灣開放街圖社群 2021</div>
              <div className="py-4">
                <div className="text-slate-500 text-xs pb-1">
                  除另有聲明外，本站文字內容均以 姓名標示 4.0 國際 條款（CC BY
                  4.0）授權使用。
                </div>
                <div className="text-slate-500 text-xs">
                  Content is available under Creative Commons Attribution 4.0
                  International license unless otherwise noted.
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 ml-2 flex-row flex text-white">
            <a
              className="w-1/8 mx-1 text-slate-400 hover:text-slate-100 text-xs font-medium duration-700"
              href="https://github.com/OsmHackTW/osmtw-ghpage/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View Source on Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
