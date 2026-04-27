import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import Header from "./header";
import Footer from "./footer";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-warabi-500 text-white shadow-lg hover:bg-warabi-600 transition-colors"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
}

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-taupe-200 font-sans text-slate-900 dark:bg-slate-700 dark:text-slate-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-warabi-500 focus:text-white focus:rounded focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header>
        <link rel="manifest" href="/assets/manifest/manifest.json" />
      </Header>

      <main id="main-content" className="flex-1 w-full">{children}</main>

      <Footer />
      <BackToTop />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
