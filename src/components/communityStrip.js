import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import HeaderAligned from "./headerAligned";

const communityLinks = [
  { label: "聯絡我們", href: "/contact" },
  {
    label: "社群討論板",
    href: "https://community.openstreetmap.org/c/communities/tw/42",
  },
  { label: "近期活動", href: "/events" },
];

// Closing "ask the community" block shared by the homepage and /qsg.
export default function CommunityStrip({ className = "" }) {
  return (
    <section
      className={`bg-white dark:bg-neutral-700 border-t border-slate-200 dark:border-neutral-600 ${className}`}
    >
      <HeaderAligned className="py-12 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            需要鬥相共？緊來揣社群！
          </h2>
          <p className="text-slate-600 dark:text-neutral-300">
            遇到問題了？歡迎你隨時找社群發問，也歡迎你來參加各類實體活動。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {communityLinks.map((link) => {
            const LinkTag = link.href.startsWith("/") ? Link : "a";
            return (
              <LinkTag
                key={link.href}
                href={link.href}
                className="inline-flex items-center min-h-11 px-5 rounded-full no-underline border border-slate-500 text-warabi-700 hover:bg-slate-100 dark:border-neutral-400 dark:text-neutral-100 dark:hover:bg-neutral-600"
              >
                {link.label}
              </LinkTag>
            );
          })}
        </div>
      </HeaderAligned>
    </section>
  );
}

CommunityStrip.propTypes = {
  className: PropTypes.string,
};
