import React from "react";

import Layout from "../components/layout";
// import SEO from "../components/seo";

function CocPage() {
  return (
    <Layout>
     {/* <SEO 
            keywords={[``,``]}
            title=""
      />*/}

      <section className="w-full">
        <div className="">
          <iframe className="w-full iframe--stretch" src="https://hackmd.io/1tSwa6nlQxKdpKQ3CHpQ3g" title="社群守則 Code of Conduct" loading="lazy" referrerpolicy="no-referrer" width="100%" height="720px"></iframe>
        </div>

      </section>
    </Layout>
  );
}

export default CocPage;