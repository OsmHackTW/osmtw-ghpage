import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Layout from "../../components/layouts/layout";
import PageMeta from "../../components/metadata";
import { qsgSections } from "../../components/qsgData";
import { ExtLinkIcon } from "../../components/util";
import HeaderAligned from "../../components/headerAligned";
import CommunityStrip from "../../components/communityStrip";

const LandingImg = "/assets/images/RN990586_2000.jpg";

function RoleSection({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-36 py-12 md:py-18 border-b last:border-b-0 border-slate-200 dark:border-neutral-700 flex flex-wrap gap-10"
    >
      <div className="flex-[1_1_280px] flex flex-col gap-3">
        <p className="text-sm font-bold text-warabi-600 dark:text-warabi-200">
          {section.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {section.title}
        </h2>
        <p className="leading-relaxed text-slate-600 dark:text-neutral-300">
          {section.lead}
        </p>
        {section.related && (
          <Link
            href={section.related.route}
            className="font-bold text-warabi-600 dark:text-warabi-300 hover:underline"
          >
            {section.related.label} →
          </Link>
        )}
      </div>
      <ul className="flex-[999_1_560px] min-w-0 list-none grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {section.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-2 p-5 rounded-xl bg-white border border-slate-200 dark:bg-neutral-800 dark:border-neutral-700"
          >
            {item.eyebrow && (
              <p className="text-sm font-bold text-warabi-600 dark:text-warabi-300">
                {item.eyebrow}
              </p>
            )}
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-neutral-300">
              {item.desc}
            </p>
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm font-bold text-warabi-600 dark:text-warabi-300 hover:underline"
              >
                {item.linkLabel}
                <ExtLinkIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

RoleSection.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string,
    eyebrow: PropTypes.string,
    title: PropTypes.string,
    lead: PropTypes.string,
    related: PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
    }),
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

const QsgIndexPage = () => (
  <Layout>
    <PageMeta title="入門指南 Quick Start Guide" />

    {/* Hero */}
    <section className="relative bg-slate-100 dark:bg-neutral-800 overflow-hidden">
      <HeaderAligned className="py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32">
        <div className="sm:text-center lg:text-left lg:w-3/5 lg:pr-12 xl:w-1/2">
          <p className="text-sm font-semibold tracking-widest text-warabi-600 dark:text-warabi-300 mb-3">
            入門指南 Quick Start Guide
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl md:text-6xl space-y-3">
            <span className="block">以開源圖資豐富</span>
            <span className="block text-warabi-600 dark:text-warabi-300">
              數位體驗
            </span>
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-neutral-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            無論你是首次使用 OpenStreetMap
            圖資或是温故知新，都希望你能透過這份簡單指南找到所需的入門資訊。
          </p>
          <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start text-base">
            <a
              href={`#${qsgSections[0].id}`}
              className="flex justify-center rounded-full shadow px-8 py-3 font-bold text-white bg-warabi-600 hover:bg-warabi-700 md:py-4 md:text-lg md:px-10"
            >
              開始行動
            </a>
          </div>
        </div>
      </HeaderAligned>
      <div className="relative h-56 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-2/5 xl:w-1/2">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={LandingImg}
          alt=""
        />
      </div>
    </section>

    {/* Role jump bar */}
    <nav
      aria-labelledby="qsg-roles-title"
      className="sticky top-0 z-20 shadow-sm bg-warabi-50 dark:bg-warabi-700"
    >
      <HeaderAligned className="py-5">
        <p
          id="qsg-roles-title"
          className="mb-2 font-bold text-slate-900 dark:text-white"
        >
          你想用開放街圖做什麼？
        </p>
        {/* One scrollable row on phones so the pinned bar stays short; wraps from md up. */}
        <div className="flex gap-2 overflow-x-auto md:flex-wrap md:overflow-visible">
          {qsgSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 inline-flex items-center min-h-11 px-5 rounded-full font-medium whitespace-nowrap no-underline bg-white text-warabi-700 hover:bg-warabi-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              {section.task}
            </a>
          ))}
        </div>
      </HeaderAligned>
    </nav>

    <HeaderAligned>
      {/* Wrapped per group so last:border-b-0 drops the line before the separator / community strip */}
      <div>
        {qsgSections
          .filter((section) => section.group === "use")
          .map((section) => (
            <RoleSection key={section.id} section={section} />
          ))}
      </div>

      <div
        role="separator"
        aria-label="給地圖貢獻者與開發者"
        className="flex items-center gap-4 py-10 text-sm font-bold text-slate-600 dark:text-neutral-300"
      >
        <span
          className="flex-auto h-0.5 bg-warabi-600 dark:bg-warabi-300"
          aria-hidden="true"
        />
        <span>給地圖貢獻者與開發者</span>
        <span
          className="flex-auto h-0.5 bg-warabi-600 dark:bg-warabi-300"
          aria-hidden="true"
        />
      </div>

      {/* Wrapped per group so last:border-b-0 drops the line before the separator / community strip */}
      <div>
        {qsgSections
          .filter((section) => section.group === "contribute")
          .map((section) => (
            <RoleSection key={section.id} section={section} />
          ))}
      </div>
    </HeaderAligned>

    <CommunityStrip className="mt-12" />
  </Layout>
);

export default QsgIndexPage;
