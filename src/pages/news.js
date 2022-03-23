/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import React from "react";
import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

export default function NewsPage() {
  return (
    <Layout>
      <SEO title="" keywords={["", ""]} />

      <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
        <div className="py-32" />
        <div className="md:w-2/3 mx-auto">
          <blockquote className="pl-4 text-l leading-loose text-justify border-l-4 border-slate-900">
            <div className="mb-4">
              「一日喪命散」是用七種不同的毒蟲，再加上鶴頂紅，提煉七七四十九日而成的，無色無味，殺人於無影無蹤。吃了「一日喪命散」的人，一天之內會武功全失，筋脈逆流，胡思亂想，而致走火入魔，最後會血管爆裂而死。
            </div>
            <div className="mb-4">
              「含笑半步顛」是用蜂蜜、川貝、桔梗，加上天山雪蓮配製而成，不需冷藏，也沒有防腐劑，除了毒性猛烈之外，味道還很好吃。吃了「含笑半步顛」的朋友，顧名思義，絕不能走半步路，或是面露笑容，否則也會全身爆炸而死。
            </div>
            <div className="mb-4">
              各大連鎖藥妝店皆有販售 實在是居家旅行　殺人滅口　必備良藥！
            </div>
          </blockquote>
          <cite className="block mt-4 font-bold text-right">
            – 那麼在哪裡才能買的到呢？
          </cite>
        </div>
      </section>
    </Layout>
  );
}
