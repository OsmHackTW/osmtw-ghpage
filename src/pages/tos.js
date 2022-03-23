import * as React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import { tosPageComponents } from "../components/glaube";

const acceptance = [
  {
    english:
      'Welcome to the OpenStreetMap Taiwan website. By using our website, you are agreeing to comply with and be bound by the following terms and conditions of use (the "agreement"), and notices contained herein and as they may change, from time to time. Please review them carefully.',
  },
  {
    english:
      'If you are entering into this agreement on behalf of third parties, you represent that you have the authority to bind such parties to these Terms and Conditions, in which the case "You" or "Your" shall refer to such parties. If you do not have such authority, or if you disagree with any part of these terms and conditions, please do not use our service.',
  },
];

// markup
export default function TosPage() {
  return (
    <Layout>
      <SEO
        title="服務約定條款及細則 Terms and Conditions"
        keywords={["服務約定條款及細則", "Terms and Conditions"]}
      />
      <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
        <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8  pb-16">
          <div className="main-title my-8 md:my-16">
            <h1 className="font-bold text-xl md:text-4xl lg:text-5xl text-center my-4">
              服務約定條款及細則
            </h1>
            <h1 className="font-bold text-slate-500 text-lg md:text-2xl lg:text-3xl text-center my-4">
              Terms and Conditions
            </h1>
            <h2 className="font-bold text-slate-400 text-center my-4">
              {`最新更新日期 Last Modified: ${tosPageComponents.lastModified}`}
            </h2>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="flex flex-col text-md md:text-xl leading-6 font-medium text-slate-900">
                <span className="pb-2">
                  <span className="md:text-4xl">在</span>
                  使用網站服務前，請您務必仔細閱讀本條款及細則。當您進入本網站及使用其任何服務時，即代表您同意、接受並遵守以下之使用條款及細則（下稱此條款）。
                  此條款為您與本網站共同訂立。
                </span>
                <span className="pb-2">
                  如您為第三方使用本網站服務，則您將代表第三方接受此條款及承擔責任。除非您明確發出聲明，否則您以任何形式使用本網站服務，包括發布新的產品或服務，均受此條款約束。
                </span>
                <span className="pb-2">
                  如您不同意、接受或遵守此條款，您將無法使用本網站之任何服務。
                </span>
              </h3>
              <h5 className="mt-1 max-w-5xl text-md text-slate-500">
                {acceptance.map((op) => (
                  <span className="pb-2" key={op.id}>
                    {op.english}
                  </span>
                ))}
              </h5>
            </div>
            <div className="border-t border-slate-200">
              <dl>
                {tosPageComponents.tosAritcle.map((article, articleIndex) => (
                  <div
                    key={article.id}
                    className={`bg-${
                      articleIndex % 2 ? "slate-100" : "white"
                    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                  >
                    <dt className="flex md:flex-col text-base font-semibold text-fern-green-600">
                      <span className="pb-1">{article.section_zh}</span>
                      <span className="pb-1 px-2 md:px-0">
                        {article.section_en}
                      </span>
                    </dt>
                    <dd className="flex flex-col mt-1 text-sm text-fern-green-800 sm:mt-0 sm:col-span-2">
                      <span className="pb-2">{article.text_zh}</span>
                      <span className="pb-2">{article.text_en}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
