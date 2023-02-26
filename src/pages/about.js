import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import { aboutPageComponents } from "../components/glaube";

const AboutPage = () => (
  <Layout>
    <SEO keywords={["OSM", "開放街圖"]} title="什麼是開放街圖" />
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center dark:text-slate-200">
      <div className="w-full xl:w-2/3 mx-auto px-4 sm:px-8 ">
        {aboutPageComponents.aboutOSM.map((paragraph) => (
          <div
            className="main-title my-8 md:my-16 w-full md:w-3/4 mx-auto"
            id={paragraph.key}
            key={paragraph.key}
          >
            <h2 className="my-8 font-bold text-xl md:text-3xl lg:text-4xl text-center text-slate-600 dark:text-slate-100">
              {paragraph.title}
            </h2>
            {paragraph.description.map((desc) => (
              <React.Fragment key={desc.id}>
                {desc.subtitle ?
                  <h4 className="text-base my-4 tracking-widest font-semibold uppercase">
                    {desc.subtitle}
                  </h4> :
                  null
                }
                <div className="py-4">{desc.segment}</div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default AboutPage;
