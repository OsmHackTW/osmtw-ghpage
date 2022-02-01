import React from 'react';
import Head from 'next/head';
import config from '../config';

// eslint-disable-next-line react/prop-types
export default function SEO({ description, title }) {
  const siteTitle = config.title;

  return (
    <Head>
      <title>{siteTitle ? `${siteTitle} | ${title}` : null}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
