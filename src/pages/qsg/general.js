/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import React from "react";
import Layout from "../../components/layouts/qsgLayout";
import SEO from "../../components/seo";
import { ExtLinkIcon } from "../../components/util";

const QsgGeneralPage = () => (
  <Layout title="一般使用者">
    <SEO
      title="入門指南 Quick Start Guide"
      keywords={[
        "OpenStreetMap",
        "OSM",
        "OSMTW",
        "Community",
        "開放街圖",
        "開放街圖台灣",
        "台灣開放街圖",
      ]}
    />
    <div>
      <h4 className="my-2 font-semibold text-xl text-slate-600">應用程式</h4>
      <h5 className="my-1 font-medium">OsmAnd</h5>
      <p className="my-1 ">
        OsmAnd 是以 OpenStreetMap 為基底，在Android及iOS系統上的導航應用程式。
      </p>
      <p className="my-1 mb-4">
        <a className="underline text-fernGreen-600" href="http://osmand.net/">
          http://osmand.net/
        </a>
        <ExtLinkIcon />
      </p>
      <h5 className="my-1 font-medium">MapComplete</h5>
      <p className="my-1 ">
        OpenStreetMap 比利時推出的主題地圖 MapComplete，目前有 27
        個主題地圖，並且開放提案創建新的主題地圖。
      </p>
      <p className="my-1 mb-4">
        <a
          className="underline text-fernGreen-600"
          href="https://mapcomplete.osm.be/"
        >
          https://mapcomplete.osm.be/
        </a>
        <ExtLinkIcon />
      </p>
      <h5 className="my-1 font-medium">StreetComplete</h5>
      <p className="my-1 ">
        StreetComplete 是用以維護地圖資料的行動應用程式，是首批 OSMF
        微型補助金的獲奬者之一。
      </p>
      <p className="my-1 mb-4">
        <a
          className="underline text-fernGreen-600"
          href="https://play.google.com/store/apps/details?id=de.westnordost.streetcomplete"
        >
          {" "}
          Google Play 商店
        </a>
        &nbsp;-&nbsp;
        <a
          className="underline text-fernGreen-600"
          href="https://github.com/streetcomplete/StreetComplete/"
        >
          GitHub
        </a>
        <ExtLinkIcon />
      </p>
    </div>
  </Layout>
);

export default QsgGeneralPage;
