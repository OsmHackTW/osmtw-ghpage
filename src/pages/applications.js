import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layouts/layout";
import PageMeta from "../components/metadata";
import { ExtLinkIcon } from "../components/util";
import { apps } from "../components/appsData";

const ToolCard = ({ href, name, provider, description, platform }) => (
  <a
    href={href}
    className="block min-h-[130px] bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-sm border border-slate-100 dark:border-neutral-600 hover:dark:bg-neutral-700/65 hover:shadow-md transition no-underline"
    target="_blank"
    rel="noreferrer noopener"
  >
    <div className="font-semibold text-xl text--warabi">{name} <ExtLinkIcon /></div>
    <div className="text-base text-warabi-800 dark:text-neutral-400 mt-1">{provider}</div>
    <div className="text-sm text-slate-600 dark:text-neutral-400 mt-1">{description}</div>
    {platform?.length > 0 && (
      <div className="flex flex-wrap gap-1 mt-3">
        {platform.map((p) => (
          <span key={p} className="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-neutral-300">
            {p}
          </span>
        ))}
      </div>
    )}
  </a>
);

ToolCard.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  provider: PropTypes.string,
  description: PropTypes.string,
  platform: PropTypes.arrayOf(PropTypes.string),
};

ToolCard.defaultProps = {
  provider: "",
  description: "",
  platform: [],
};

const listOfApps = [
  {
    "title": "OpenStreetMap 相關軟體與工具",
    "key": "whentouse",
    "sections": [
      {
        "subtitle": "應用程式",
        "groups": [
          {
            "subgroup": "地圖及導航",
            "items": [
              "osmand",
              "comaps",
              "organic-maps",
              "osmapp",
              "mapcarta",
              "oruxmaps",
              "locus-map",
              "greentracks",
              "wadi",
              "umap",
              "mapcomplete",
              "opentopomap",
              "cyclosm",
              "openrailwaymap",
              "transitous"
            ]
          },
          {
            "subgroup": "應用服務",
            "items": [
              "cwa-typhoon",
              "ncdr-3d-hazard",
              "yushan-hiking",
              "tbn",
              "leju-price-map",
              "trfc"
            ]
          },
          {
            "subgroup": "戶外運動",
            "items": [
              "rudymap",
              "komoot",
              "waymarked-trails",
              "brouter",
              "openandromaps",
              "hiking-biji"
            ]
          },
          {
            "subgroup": "軌跡記錄",
            "items": [
              "osmtracker",
              "gpslogger",
              "opentracks",
              "gpx-tracker"
            ]
          },
          {
            "subgroup": "圖資貢獻",
            "items": [
              "every-door",
              "streetcomplete",
              "josm",
              "maproulette",
              "hot-tasking-manager",
              "mapillary",
              "panoramax-tw",
              "osmcha",
              "osmose",
              "taginfo"
            ]
          }
        ]
      },
      {
        "subtitle": "開發者工具",
        "groups": [
          {
            "subgroup": "資料查詢與處理",
            "items": [
              "nominatim",
              "overpass-turbo",
              "osmium-tool",
              "postgis",
              "geofabrik"
            ]
          },
          {
            "subgroup": "圖磚服務",
            "items": [
              "openmaptiles",
              "pmtiles"
            ]
          },
          {
            "subgroup": "路線規劃",
            "items": [
              "osrm",
              "valhalla",
              "graphhopper",
              "opentripplanner"
            ]
          },
          {
            "subgroup": "JavaScript",
            "items": [
              "leaflet",
              "openlayers",
              "maplibre"
            ]
          },
          {
            "subgroup": "Python",
            "items": [
              "osmnx",
              "prettymapp",
              "overpass-wrapper",
              "osmapi",
              "python-mapnik"
            ]
          }
        ]
      }
    ]
  }
]

const AboutPage = () => (
  <Layout>
    <PageMeta keywords={["OSM", "開放街圖"]} title="應用場景" />
    <h1 className="sr-only">應用場景</h1>

    {/* Where to Use */}
    <section className="antialiased text-slate-900 dark:text-neutral-200 py-12 md:py-20">
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10">
        {listOfApps.map((paragraph) => (
          <div className="mb-16 md:mb-24 scroll-mt-20" id={paragraph.key} key={paragraph.key}>
            <div className="flex items-start gap-4 mb-8">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug text-slate-800 dark:text-neutral-100">
                {paragraph.title}
              </h2>
            </div>
            <div className="mb-8 h-px bg-gradient-to-r from-teal-400 via-slate-200 to-transparent dark:via-neutral-700" />
            <div className="space-y-10">
              {paragraph.sections.map((section) => (
                <div key={section.subtitle}>
                  <h4 className="section-subtitle">
                    {section.subtitle}
                  </h4>
                  {section.items && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {section.items.map((id) => (
                        <ToolCard key={id} {...apps[id]} />
                      ))}
                    </div>
                  )}
                  {section.groups && section.groups.map((group) => (
                    <div key={group.subgroup ?? "_top"} className="mb-2">
                      {group.subgroup && (
                        <h5 className="subgroup-badge">
                          {group.subgroup}
                        </h5>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {group.items.map((id) => (
                          <ToolCard key={id} {...apps[id]} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              <p className="text-sm text-slate-600 dark:text-neutral-400">
                更多請瀏覽：<a href="https://osm-apps.org/" className="text--warabi" target="_blank" rel="noreferrer noopener">OSM App Catalog</a><ExtLinkIcon />及<a href="https://github.com/osmlab/awesome-openstreetmap" className="text--warabi" target="_blank" rel="noreferrer noopener">osmlab/awesome-openstreetmap</a><ExtLinkIcon />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default AboutPage;
