import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import config from "../config";

// Keeps retired URLs working on a static host, where server redirects are unavailable.
export default function Redirect({ to }) {
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <link rel="canonical" href={`${config.siteUrl}${to}`} />
        <meta name="robots" content="noindex" />
      </Head>
      <p className="p-8">
        此頁已移至 This page has moved to <a href={to} className="link--warabi">{to}</a>
      </p>
    </>
  );
}

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};
