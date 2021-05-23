import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { tosPageComponents } from "../components/glaube";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="服務約定條款及細則 Terms and Conditions" keywords={[`服務約定條款及細則`, `Terms and Conditions`]} />
      <section className="antialiased text-gray-900 py-2 h-full flex items-center justify-center">
        <div className="w-full xl:w-8/12 2mx-auto px-4 sm:px-8  pb-16">
          <div className="main-title my-8 md:my-16">
            <h1 className="font-bold text-xl md:text-4xl lg:text-5xl text-center my-4">服務約定條款及細則</h1>
            <h1 className="font-bold text-gray-500 text-lg md:text-2xl lg:text-3xl text-center my-4">Terms and Conditions</h1>
            <h2 className="font-bold text-grey-400 text-center my-4">最新更新日期 Last Modified: 2021-04-06</h2>
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="flex flex-col text-md md:text-xl leading-6 font-medium text-gray-900">
                <span className="pb-2"><span className="md:text-4xl">在</span>使用網站服務前，請您務必仔細閱讀本條款及細則。當您進入本網站及使用其任何服務時，即代表您同意、接受並遵守以下之使用條款及細則（下稱此條款）。
                    此條款為您與本網站共同訂立。</span>
                <span className="pb-2">如您為第三方使用本網站服務，則您將代表第三方接受此條款及承擔責任。除非您明確發出聲明，否則您以任何形式使用本網站服務，包括發布新的產品或服務，均受此條款約束。</span>
                <span className="pb-2">如您不同意、接受或遵守此條款，您將無法使用本網站之任何服務。</span>
              </h3>
              <h5 className="mt-1 max-w-5xl text-sm text-gray-500">
                Yes, yes, we understand that you are not interested. However, please read these terms and conditions before using our service as they are important. If you disagree with the Terms and Conditions, we kindly ask you to leave this site as we will not be able to serve you.
                </h5>
            </div>
            <div className="border-t border-gray-200">
              <dl> {tosPageComponents.tosAritcle.map((article, articleIndex) => (
                <div key={articleIndex} className={'bg-' + (articleIndex % 2 ? 'gray-100' : 'white') + ' px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'}>
                  <dt className="flex md:flex-col text-base font-semibold text-fern-green-600">
                    <span className="pb-1">{article.section_zh}</span>
                    <span className="pb-1 px-2 md:px-0">{article.section_en}</span>
                  </dt>
                  <dd className="flex flex-col mt-1 text-sm text-fern-green-800 sm:mt-0 sm:col-span-2">
                    <span className="pb-2">{article.text_zh}</span>
                    <span className="pb-2">{article.text_en}</span>
                  </dd>
                </div>))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
