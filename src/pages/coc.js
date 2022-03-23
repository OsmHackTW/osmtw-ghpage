import React from "react";

import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

const CocPage = () => (
  <Layout>
    <SEO
      title="社群守則 Code of Conduct"
      keywords={["社群守則", "Code of Conduct"]}
    />

    <section className="w-full">
      <div className="">
        <iframe
          className="w-full iframe--stretch"
          src="https://hackmd.io/1tSwa6nlQxKdpKQ3CHpQ3g"
          title="社群守則 Code of Conduct"
          loading="lazy"
          referrerpolicy="no-referrer"
          width="100%"
          height="100vh"
        />
      </div>
    </section>
  </Layout>
);

export default CocPage;
