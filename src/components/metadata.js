import React from "react";
import Head from "next/head";
import config from "../config";

// eslint-disable-next-line react/prop-types
export default function PageMeta({ title, description }) {
  const { title: siteTitle, siteUrl, social, description: siteDescription, author, og } = config;
  const socialLinks = Object.values(social);

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      {/* <!-- Basic Meta Tags --> */}
      <meta name="description" content={description ?? siteDescription} />
      <meta name="author" content={author.name} />
      <meta name="theme-color" content="#4f7942" />
      <meta name="format-detection" content="telephone=no" />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description ?? siteDescription} />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:width" content="929" />
      <meta property="og:image:height" content="523" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={`${siteTitle} - ${author.summary}`} />
      {/* <!-- Twitter Card --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@osmtw" />
      <meta name="twitter:creator" content="@osmtw" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description ?? siteDescription} />
      <meta name="twitter:image" content={og.image} />
      <meta name="twitter:image:alt" content={`${siteTitle} - ${author.summary}`} />
      {/* <!-- Canonical URL --> */}
      <link rel="canonical" href={siteUrl} />
      {/* <!-- JSON-LD Structured Data --> */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteTitle,
            "description": siteDescription,
            "url": siteUrl,
            "inLanguage": ["zh-TW", "en"],
            "publisher": {
              "@type": "Organization",
              "name": author.name,
              "url": siteUrl,
              "logo": {
                "@type": "ImageObject",
                "url": og.image,
                "width": 929,
                "height": 523,
              },
            },
            "sameAs": socialLinks,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": author.name,
            "url": siteUrl,
            "logo": og.image,
            "description": author.description,
            "foundingDate": "2010",
            "sameAs": socialLinks,
          }),
        }}
      />
    </Head>
  );
}
