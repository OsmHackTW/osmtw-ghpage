import React, { useState } from "react";
import { uriComponents } from "../glaube";
import { ExtLinkIcon, Link } from "../util";

const logo = "/assets/images/logo.png";

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div>

      <header className="bg-fern-green-200 flex flex-row justify-between w-full px-2 lg:px-8">
        <div className="flex flex-col flex-1 sm:flex-row items-center p-4 max-w-7xl mx-auto md:py-5 sm:items-stretch sm:justify-start">
          <div className=" sm:w-full md:w-1/6 lg:w-1/3 w-full self-start flex flex-row flex-no-wrap justify-between items-center">
            <Link href="/">
              <h1 className="flex flex-grow-0 no-underline">
                <img className="block h-10 w-auto" src={logo} layout="intrinsic" height={40} width={40} alt="OSMTW" />
                <span className="block h-8 px-4 py-1 w-auto text-xl font-bold tracking-tight">
                  <span className="block lg:hidden">
                    OSMTW
                  </span>
                  <span className="hidden lg:block">
                    OpenStreetMap 台灣
                  </span>
                </span>
              </h1>
            </Link>

            <button
              type="button"
              className="block items-center self-end flex-col justify-center p-2 border border-slate-700 rounded md:hidden"
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
                  d={`${isExpanded ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}`}
                />
              </svg>
            </button>
          </div>
          <div className="w-3/4 md:w-5/6 lg:w-2/3 self-start flex flex-row flex-no-wrap justify-between items-center">
            <div className="w-full md:w-3/4 self-start flex flex-row flex-no-wrap justify-between items-center">
              <nav
                className={`${isExpanded ? "block" : "hidden"}
                py-2 md:block md:items-center w-full md:w-auto sm:w-auto md:self-end`}
              >
                {uriComponents.headerLink.map((link) => (
                  <Link
                    className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
                    key={link.title}
                    href={link.route}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="hidden sm:hidden md:block md:w-1/4 float-right flex flex-no-wrap justify-between items-center mt-1">
              <a href="https://osm.org/" className="px-4 py-2 rounded-full font-semibold tracking-wide bg-green-800 text-white outline-none focus:outline-none">
                OSM.org
                <ExtLinkIcon />
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* COVID-19 Alert */}
      <div className="bg-yellow-300 text-slate-800 px-1 py-2 md:p-3" role="alert">
        <div className="container items-center flex flex-row w-full lg:w-11/12 lg:max-w-5xl m-auto px-2 lg:px-0 leading-none">
          <span className="h-8 w-8 md:h-6 md:w-6">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span className="w-11/12 mx-auto ml-2 text-left text-xs font-semibold leading-5 md:text-sm">
            預防感染 COVID-19 （武漢肺炎），請留意
            <a href="https://www.cdc.gov.tw/" className="underline">
              中央疫情中心最新公告防疫政策
              <ExtLinkIcon />
            </a>
            ，配合防疫措施及注意個人衛生習慣，一同防疫大作戰！
          </span>
        </div>
      </div>

    </div>
  );
}
