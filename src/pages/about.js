import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { aboutPageComponents } from '../components/glaube';

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={['OSM', '開放街圖']}
        title="什麼是開放街圖"
      />
      <section className="antialiased text-gray-900 py-2 h-full flex items-center justify-center">
        <div className="w-full xl:w-2/3 mx-auto px-4 sm:px-8 ">
          {aboutPageComponents.aboutOSM.map((paragraph) => (
            <div className="main-title my-8 md:my-16 w-full md:w-3/4 mx-auto" id={paragraph.key}>

              <h1 className="font-bold text-xl md:text-3xl lg:text-4xl text-center text-gray-600">{paragraph.title}</h1>
              {paragraph.description.map((desc) => (
                <h5 className="text-base md:text-xl text-leading my-8">{desc.segment}</h5>))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
