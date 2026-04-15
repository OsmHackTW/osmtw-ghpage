import React from "react";

export default function AnchorBar({ sections }) {
  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-600">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 overflow-x-auto">
        <ul className="flex gap-1 py-2 whitespace-nowrap list-none">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="inline-block px-3 py-2 rounded-full xl:text-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-warabi-100 dark:hover:bg-slate-600 hover:text-warabi-700 dark:hover:text-warabi-200 transition-colors no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
