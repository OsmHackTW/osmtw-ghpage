import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-200 font-sans text-slate-900">
      <Header>
        <link rel="manifest" href="/assets/manifest/manifest.json" />
      </Header>

      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
