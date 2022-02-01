import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  OsmtwGuideTitle, Link, landingPageComponents,
} from '../glaube';

function Layout({ children }) {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 z-50">
      <div className="border-b shadow z-40">
        <header className="w-full 2xl:w-3/4 mx-auto px-2 lg:px-8">
          <div className="flex flex-col sm:flex-row p-4 lg:py-5 justify-around sm:items-stretch sm:justify-start">
            <div className="flex flex-row justify-around ">
              <div className="">
                <button
                  type="button"
                  className="w-1/4 items-center flex-col inline-flex p-2 px-4 lg:hidden"
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
                      d={`${isExpanded ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}`}
                    />
                  </svg>
                </button>
              </div>
              <div className="w-3/4 lg:w-full">
                <Link href="/qsg/contribute/">
                  <OsmtwGuideTitle />
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      <main className="flex flex-1 w-full mx-auto">
        <div className="min-h-screen bg-white mt-0 lg:w-1/3 ">
          <aside className="w-full">
            <nav
              className={`${isExpanded ? 'inline z-30' : 'hidden'}
              py-2 lg:block lg:items-center fixed min-h-screen h-full lg:relative flex flex-col w-11/12 lg:w-full bg-slate-100 border-r`}
            >
              <div className="static w-full pl-4 xl:mt-8 2xl:pl-48 mx-auto">
                <ul className="py-4 ml-8 lg:ml-16 flex-1 overflow-auto font-bold">
                  <li>
                    <Link
                      href="/qsg/get-started/"
                      activeClassName="border-t border-b border-l bg-slate-50 text-fern-green-500 hover:bg-slate-50"
                      className="block mt-4 p-3 no-underline w-full lg:inline-block lg:mt-0 text-slate-700 hover:bg-slate-300"
                    >
                      開始之前
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/qsg/contribute/"
                      activeClassName="border-t border-b border-l bg-slate-50 text-fern-green-500 hover:bg-slate-50"
                      className="block mt-4 p-3 no-underline w-full lg:inline-block lg:mt-0 text-slate-700 hover:bg-slate-300"
                    >
                      參與貢獻
                    </Link>
                  </li>
                </ul>
                <ul className="py-4 ml-8 lg:ml-16 flex-1 overflow-auto font-bold">
                  {landingPageComponents.quickStartGuide.map((item) => (
                    <li>
                      <Link
                        activeClassName="border-t border-b border-l bg-slate-50 text-fern-green-500 hover:bg-slate-50"
                        className="block mt-4 p-3 no-underline w-full lg:inline-block lg:mt-0 text-slate-700 hover:bg-slate-300"
                        key={item.role}
                        href={item.route}
                      >
                        {item.role}
                      </Link>
                    </li>

                  ))}
                  <li>
                    <Link
                      activeClassName="border-t border-b border-l bg-slate-50 text-fern-green-500 hover:bg-slate-50"
                      className="block mt-4 p-3 no-underline w-full lg:inline-block lg:mt-0 text-slate-700 hover:bg-slate-300"
                      key="covid-mapping"
                      href="/qsg/covid19-mapping/"
                    >
                      COVID-19 Mapping
                    </Link>
                  </li>
                </ul>
                <div className="py-4 ml-8 lg:ml-16 lg:my-24 flex-1 overflow-auto font-bold">
                  <Link href="/" className="no-underline lg:inline-block lg:mt-0 p-3 text-slate-400 hover:text-slate-500">
                    回到主頁
                  </Link>
                </div>
              </div>
            </nav>
          </aside>
        </div>
        <div className="bg-slate-50 p-2 w-full lg:w-3/4 xl:pr-64 container relative mx-auto min-h-screen">
          {children}
        </div>
      </main>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
