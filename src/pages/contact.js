import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";
import { contactPageComponents } from "../components/glaube";

const mthMtg = "assets/images/mth_mtg.jpg";

const ContactPage = () => (
  <Layout>
    <SEO title="聯絡我們 Contact Us" keywords={["Contact", "聯絡我們"]} />
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
      <div className="container mx-auto">
        <div className="max-w-xl lg:max-w-4xl mx-auto my-6 bg-white md:rounded-lg shadow-sm overflow-hidden">
          <img
            className="object-cover bg-center w-full h-64"
            src={mthMtg}
            alt="月聚 Monthly gathering"
          />
          <div className="p-4 md:px-12 md:py-6 dark:bg-slate-800">
            <h1 className="my-3 text-3xl font-semibold text-slate-700 dark:text-slate-200">
              聯絡我們 Contact Us
            </h1>
            <h3 className="text-slate-600 dark:text-slate-400">
              您可透過以下渠道與社群交流：{" "}
            </h3>
            <h3 className="text-slate-600 dark:text-slate-400">
              Contact our community members via the following channels:
            </h3>
            <div className="pt-4 pb-12 space-y-3">
              {contactPageComponents.communityButton.map((button) => (
                <a
                  href={button.href}
                  key={button.title}
                  aria-label=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block bg-${button.bgColor}-500 px-4 py-2 mr-3 text-xs font-medium leading-6 text-center text-white rounded-full shadow`}
                >
                  {button.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
