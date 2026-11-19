import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Layout from "./layout";

function QsgLayout({ title, children }) {
  return (
    <Layout>
      <article className="w-full max-w-3xl mx-auto px-6 py-12 md:py-16">
        <Link href="/qsg/" className="text--muted-xs hover:underline">
          ← 入門指南 Quick Start Guide
        </Link>
        <h1 className="mt-2 mb-6 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {title}
        </h1>
        <hr className="mb-8 border-slate-300 dark:border-slate-600" />
        {children}
      </article>
    </Layout>
  );
}

QsgLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default QsgLayout;
