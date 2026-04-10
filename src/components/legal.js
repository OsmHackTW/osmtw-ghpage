import PropTypes from "prop-types";

export function LegalPageTitle({ zh, en, lastModified }) {
  return (
    <div className="main-title my-8 md:my-16">
      <h1 className="flex flex-col font-bold text-center">
        <span className="text-xl md:text-4xl lg:text-5xl my-4">{zh}</span>
        <span className="text-lg md:text-2xl lg:text-4xl my-4 text-slate-500 dark:text-slate-200">{en}</span>
      </h1>
      <h2 className="font-bold text-slate-400 dark:text-slate-200 text-center my-4">
        最新更新日期 Last Modified: {lastModified}
      </h2>
    </div>
  );
}

LegalPageTitle.propTypes = {
  zh: PropTypes.string.isRequired,
  en: PropTypes.string.isRequired,
  lastModified: PropTypes.string.isRequired,
};

export function LegalArticleRow({ term, striped, children }) {
  return (
    <div className={`legal-row ${striped ? "bg-slate-100" : "bg-white"} dark:bg-slate-800`}>
      <dt className="legal-term">{term}</dt>
      <dd className="legal-body">{children}</dd>
    </div>
  );
}

LegalArticleRow.propTypes = {
  term: PropTypes.node.isRequired,
  striped: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
