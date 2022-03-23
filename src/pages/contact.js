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
          <div className="p-4 md:px-12 md:py-6">
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
                  className={`inline-block px-4 py-2 mr-3 text-xs font-medium leading-6 text-center text-white transition rounded-full shadow ripple focus:outline-none bg-${button.colorBg}-700 hover:bg-${button.colorBg}-800`}
                >
                  {button.title}
                </a>
              ))}
            </div>
            <h3 className="text-slate-600 dark:text-slate-400">
              您也可以填寫此表單與我們的社群成員聯繫：
            </h3>
            <h3 className="text-slate-600 dark:text-slate-400">
              Or email our community member via this form:
            </h3>
            <div className="pt-4">
              <form
                action="https://formspree.io/f/mzbkygdb"
                method="POST"
                id="form"
              >
                <div className="mb-6">
                  <label htmlFor="nom">
                    <span className="block mb-2 text-sm text-slate-600 dark:text-slate-400">
                      姓名 Name
                    </span>
                    <input
                      type="text"
                      id="nom"
                      name="name"
                      autoComplete="name"
                      pattern=".{2,}"
                      placeholder="一介圖客 A mapper"
                      required
                      className="w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label htmlFor="courrier">
                    <span className="block mb-2 text-sm text-slate-600 dark:text-slate-400">
                      Email地址 Email address
                    </span>
                    <input
                      placeholder="you@mail.com"
                      required
                      className="w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"
                      type="text"
                      id="courrier"
                      name="_replyto"
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label htmlFor="sujet">
                    <span className="block mb-2 text-sm text-slate-600 dark:text-slate-400">
                      主旨 Subject
                    </span>
                    <input
                      type="text"
                      id="sujet"
                      name="_subject"
                      placeholder="我要問有關... I'd like to ask smth abt..."
                      pattern=".{6,}"
                      required
                      className="w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label htmlFor="message">
                    <span className="block mb-2 text-sm text-slate-600 dark:text-slate-400">
                      您的留言 Your message
                    </span>
                    <textarea
                      type="text"
                      id="msg"
                      name="message"
                      rows="8"
                      maxLength="256"
                      placeholder="您的留言 Your Message"
                      className="w-full px-3 py-2 placeholder-slate-300 border border-slate-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-slate-700 dark:text-white dark:placeholder-slate-500 dark:border-slate-600 dark:focus:ring-slate-900 dark:focus:border-slate-500"
                      required
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    value="Send"
                    className="w-full px-3 py-4 text-white font-bold bg-fern-green-500 rounded-md hover:bg-fern-green-400ripple waves-light hover:shadow-lg focus:outline-none"
                  >
                    送出 Submit
                  </button>
                </div>
                <div className="hidden">
                  {/* <!-- Boty-Mcbotface-proofing, do not remove --> */}
                  <input name="_gotcha" />
                </div>
              </form>
            </div>
            <div className="mb-6">
              <h5 className="text-sm text-slate-500">
                收到郵件後，開放街圖台灣社群成員將會儘快與您取得聯繫。謝謝！
              </h5>
              <h5 className="text-sm text-slate-500">
                OSMTW community members will get back to you as soon as
                available once received. Much obliged!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
