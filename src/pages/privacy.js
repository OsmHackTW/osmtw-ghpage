import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import { privacyPageComponents } from "../components/glaube";

const PrivacyPage = () => (
  <Layout>
    <SEO title="隱私權聲明 Privacy Statement" keywords={["隱私權聲明", "Privacy Statement"]} />
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
      <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8  pb-16">
        <div className="main-title my-8 md:my-16">
          <h1 className="font-bold text-xl md:text-4xl lg:text-5xl text-center my-4">隱私權聲明</h1>
          <h1 className="font-bold text-slate-500 text-lg md:text-3xl lg:text-4xl text-center my-4">Privacy Statement</h1>
          <h2 className="font-bold text-slate-400 text-center my-4">
            {`最新更新日期 Last Modified: ${privacyPageComponents.lastModified}`}
          </h2>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="flex flex-col text-lg md:text-xl leading-6 font-medium text-slate-900">
              <span className="py-1">我們非常重視您的個人隱私，在使用本網站服務時，敬請詳閲本隱私權聲明，</span>
              <span className="py-1">了解我們如何蒐集、處理及運用您所提供的個人資料，以及如何保護你的資料安全：</span>
            </h3>
            <h5 className="mt-1 max-w-2xl text-sm text-slate-500">
              Your privacy is our highest priority,
              please refer our privacy policy for more details on how we collect,
              process and protect personal information you have provided.
            </h5>
          </div>
          <div className="border-t border-slate-200">
            <dl>
              {privacyPageComponents.privacyArticle.map((article, index) => (
                <div key={article.id} className={`bg-${index % 2 ? 'slate-100' : 'white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                  <dt className="text-base font-semibold text-fern-green-600">
                    {article.section}
                  </dt>
                  <dd className="mt-1 text-sm text-fern-green-800 sm:mt-0 sm:col-span-2">
                    {article.text}
                    {article.point ? (
                      <ul className="border border-slate-200 mt-4 rounded-md divide-y divide-slate-200">
                        {article.point?.map((pSV) => (
                          <li key={pSV.id} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">{pSV}</li>))}
                      </ul>
                    ) : null}
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

export default PrivacyPage;
