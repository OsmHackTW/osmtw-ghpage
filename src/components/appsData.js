// Single source for app/tool identity (name, official link, platforms) shared by /applications and /qsg.
// Pages keep their own wording: /applications uses `description`, QSG cards set their own short `desc`.
const apps = {
  osmand: {
    name: "OsmAnd",
    href: "https://osmand.net/",
    description:
      "功能完整的離線地圖與導航應用，支援步行、騎行、開車等多種路線模式，可預先下載地圖離線使用，並支援等高線與海拔資訊顯示。",
    platform: ["Android", "iOS"],
  },
  comaps: {
    name: "CoMaps",
    href: "https://comaps.app/",
    description: "支援離線健行、騎行與開車導航，注重隱私",
    platform: ["Android", "iOS"],
  },
  "organic-maps": {
    name: "Organic Maps",
    href: "https://organicmaps.app/",
    description:
      "以 OSM 為基礎的免費離線地圖應用，不含廣告與追蹤器，支援步行、騎行與開車導航，圖資定期更新，在注重隱私的使用者社群中廣受推薦。",
    platform: ["Android", "iOS"],
  },
  osmapp: {
    name: "OsmAPP",
    href: "https://osmapp.org/",
    description: "通用網頁地圖及 OSM 資料編輯器",
    platform: ["Web", "Android", "iOS"],
  },
  mapcarta: {
    name: "Mapcarta",
    href: "https://mapcarta.com/",
    description:
      "以 OSM 為基礎的互動式地圖，整合 Wikipedia 地點資訊，可瀏覽全球景點、設施等 POI 並查閱詳細介紹。",
    platform: ["Web", "Android", "iOS"],
  },
  oruxmaps: {
    name: "OruxMaps",
    href: "https://www.oruxmaps.com/",
    description:
      "專為戶外活動設計的進階地圖應用，支援多種離線地圖格式、GPX 軌跡記錄，適合登山健行及越野活動。",
    platform: ["Android"],
  },
  "locus-map": {
    name: "Locus Map",
    href: "https://www.locusmap.app/",
    description:
      "專業級戶外地圖應用，支援離線地圖、GPX 軌跡記錄、導航與地理快取，適合登山、單車及野外探險。",
    platform: ["Android", "iOS"],
  },
  greentracks: {
    name: "綠野遊蹤",
    href: "https://greentracks.app/",
    description:
      "國人自製的手機GPS軟體，可匯入GPX檔案，在地圖上描繪路線，登山健行的好幫手",
    platform: ["Android"],
  },
  wadi: {
    name: "蛙弟 wadi",
    href: "https://play.google.com/store/apps/details?id=tw.div.balawu.wadi",
    description:
      "國人自製的地圖檔案及GPS檔案的檢視及管理工具，登山健行的好幫手",
    platform: ["Android"],
  },
  umap: {
    name: "uMap",
    href: "https://umap.openstreetmap.fr/zh-tw/",
    description: "在 OSM 上製作自己的地圖，適合整理私人書籤。",
    platform: ["Web"],
  },
  mapcomplete: {
    name: "MapComplete",
    href: "https://mapcomplete.osm.be/",
    description: "OSM 比利時推出的主題地圖，可提案新主題。",
    platform: ["Web"],
  },
  opentopomap: {
    name: "OpenTopoMap",
    href: "https://opentopomap.org/",
    description: "以 OSM 資料製作的等高線地形圖。",
    platform: ["Web"],
  },
  cyclosm: {
    name: "CyclOSM",
    href: "https://www.cyclosm.org/",
    description: "為騎車設計的 OSM 地圖樣式，標出自行車道與坡度。",
    platform: ["Web"],
  },
  openrailwaymap: {
    name: "OpenRailwayMap",
    href: "https://www.openrailwaymap.org/",
    description: "以 OSM 製作的鐵道地圖，標出軌道、車站與號誌。",
    platform: ["Web"],
  },
  transitous: {
    name: "Transitous",
    href: "https://transitous.org/",
    description: "以開放資料規劃大眾運輸路線與班次。",
    platform: ["Web"],
  },
  "cwa-typhoon": {
    name: "颱風消息",
    href: "https://app.cwa.gov.tw/web/obsmap/typhoon.html",
    provider: "交通部中央氣象署",
    description: "以 OSM 為底圖的即時颱風動態與路徑預測地圖。",
  },
  "ncdr-3d-hazard": {
    name: "3D災害潛勢地圖",
    href: "https://dmap.ncdr.nat.gov.tw/1109/map/",
    provider: "國家災害防救科技中心",
    description:
      "以 OSM 為底圖的互動式三維地圖，呈現全台土石流、淹水、地震等災害潛勢分布。",
  },
  "yushan-hiking": {
    name: "玉山登山資訊",
    href: "https://www.ysnp.gov.tw/Folder/Mountaineering",
    provider: "玉山國家公園管理處",
    description:
      "提供玉山國家公園各登山路線資訊、入園申請及即時路況，底圖使用 OSM。",
  },
  tbn: {
    name: "台灣生物多樣性網絡 Taiwan Biodiversity Network",
    href: "https://www.tbn.org.tw/",
    provider: "農業部生物多樣性研究所",
    description:
      "整合全台動植物物種觀察記錄的開放資料平台，以 OSM 為底圖呈現生物分布地圖。",
  },
  "leju-price-map": {
    name: "實價登錄地圖",
    href: "https://www.leju.com.tw/map",
    provider: "樂居 Leju",
    description:
      "結合內政部實價登錄資料與 OSM 底圖，視覺化呈現全台各區域房價行情。",
  },
  trfc: {
    name: "臺灣宗教與民俗文化平臺",
    href: "https://trfc.tw/",
    provider: "台灣淡南民俗文化研究會",
    description:
      "以 OSM 為底圖，記錄並呈現臺灣各地廟宇、祭典與民俗文化地點的地理資訊。",
  },
  rudymap: {
    name: "魯地圖 MOI.OSM – Taiwan TOPO",
    href: "https://rudymap.tw",
    description:
      "由社群成員們開發的臺灣登山地圖，具備離線容量小且可呈現多款地圖樣式的優點，結合OSM圖資、山友分享的軌跡檔，以及內政部開放的20米解析度DEM資料製作而成。",
  },
  komoot: {
    name: "Komoot",
    href: "https://www.komoot.com/",
    description:
      "專為戶外活動設計的路線規劃與導航應用，以 OSM 為基礎，支援單車、登山、健行等多種活動模式，提供詳盡的地形與路面資訊，在台灣單車社群中廣受歡迎。",
    platform: ["Web", "Android", "iOS"],
  },
  "waymarked-trails": {
    name: "Waymarked Trails",
    href: "https://waymarkedtrails.org/",
    description: "顯示自行車與登山車路線的地圖。",
    platform: ["Web"],
  },
  brouter: {
    name: "BRouter",
    href: "https://brouter.de/",
    description: "以 OSM 資料規劃騎車與步行路線的工具。",
    platform: ["Web", "Android"],
  },
  openandromaps: {
    name: "OpenAndroMaps",
    href: "https://www.openandromaps.org/en",
    description: "可下載的離線向量地圖，依地區下載後使用。",
    platform: ["Android"],
  },
  "hiking-biji": {
    name: "健行筆記",
    href: "https://hiking.biji.co/",
    description: "台灣的健行社群網站，分享路線與經驗。",
    platform: ["Web"],
  },
  osmtracker: {
    name: "OSMTracker",
    href: "https://github.com/labexp/osmtracker-android",
    description:
      "專為 OSM 設計的離線 GPS 軌跡記錄工具，支援沿途標記地物與錄音，方便事後補充圖資。",
    platform: ["Android"],
  },
  gpslogger: {
    name: "GPSLogger",
    href: "https://github.com/BasicAirData/GPSLogger",
    description:
      "極度輕量的 GPS 軌跡記錄工具，省電高效，支援直接上傳 GPX 軌跡至 OpenStreetMap，是社群中廣受推薦的 OSM 軌跡貢獻工具。",
    platform: ["Android"],
  },
  opentracks: {
    name: "OpenTracks",
    href: "https://opentracksapp.com/",
    description:
      "開源且注重隱私的 GPS 軌跡記錄應用，不含雲端同步與帳號要求，支援 GPX 匯出，為 Google My Tracks 的開源替代方案。",
    platform: ["Android"],
  },
  "gpx-tracker": {
    name: "GPX Tracker",
    href: "https://github.com/friedricherbs/GpxTracker",
    description:
      "iOS 上免費開源的 GPX 軌跡記錄工具，介面簡潔，專注於軌跡記錄與匯出，是 iOS 使用者貢獻 OSM 軌跡的輕便選擇。",
    platform: ["iOS"],
  },
  "every-door": {
    name: "Every Door",
    href: "https://every-door.app/",
    description:
      "專為新增與修改 OSM 地點資訊設計的行動編輯器，介面直觀，適合快速補充店家、設施等 POI 資料，是貢獻 OSM 的最佳入門工具之一。",
    platform: ["Android", "iOS"],
  },
  streetcomplete: {
    name: "StreetComplete",
    href: "https://streetcomplete.app/",
    description:
      "以問答遊戲形式引導使用者補充 OSM 缺漏資訊，無需地圖編輯知識即可輕鬆參與貢獻，每回答一題即完成一筆 OSM 資料更新。",
    platform: ["Android"],
  },
  josm: {
    name: "JOSM",
    href: "https://josm.openstreetmap.org/",
    description: "功能完整的桌面編輯器，適合批次修改大量資料。",
    platform: ["Desktop"],
  },
  maproulette: {
    name: "MapRoulette",
    href: "https://maproulette.org/",
    description: "小型的引導式修圖任務，不用先學編輯器。",
    platform: ["Web"],
  },
  "hot-tasking-manager": {
    name: "HOT Tasking Manager",
    href: "https://tasks.hotosm.org/",
    description: "組織化的製圖專案，適合加入團體一起畫。",
    platform: ["Web"],
  },
  mapillary: {
    name: "Mapillary",
    href: "https://www.mapillary.com/",
    description: "上傳街景照片，協助確認地圖上的地物。",
    platform: ["Web", "Android", "iOS"],
  },
  "panoramax-tw": {
    name: "Panoramax 台灣站",
    href: "https://panoramax.osm.tw/",
    description:
      "開源的街景照片平台，可上傳與瀏覽街景照片。台灣站由在地社群架設維護，儲存硬碟由熱心人士捐贈，主要收集台灣各地的街景。",
    platform: ["Web"],
  },
  osmcha: {
    name: "OSMcha",
    href: "https://osmcha.org/",
    description: "檢視地圖編輯紀錄（changeset），快速審查與找出可疑修改。",
    platform: ["Web"],
  },
  osmose: {
    name: "Osmose",
    href: "https://osmose.openstreetmap.fr/",
    description: "自動檢查地圖錯誤，列出待修清單。",
    platform: ["Web"],
  },
  taginfo: {
    name: "Taginfo",
    href: "https://taginfo.openstreetmap.org/",
    description: "查看各種標籤的使用量，幫你選擇常見的標籤。",
    platform: ["Web"],
  },
  nominatim: {
    name: "Nominatim",
    href: "https://nominatim.org/",
    description:
      "OpenStreetMap 官方地理編碼引擎，提供地址搜尋與座標反查功能，是最廣泛使用的 OSM 地名查詢服務，可自架或使用公開 API。",
    platform: ["C++", "API"],
  },
  "overpass-turbo": {
    name: "overpass-turbo",
    href: "https://overpass-turbo.eu/",
    description:
      "基於 Overpass API 的線上 OpenStreetMap 資料探勘工具，支援以語法查詢特定地物並視覺化結果。",
    platform: ["Web"],
  },
  "osmium-tool": {
    name: "osmium-tool",
    href: "https://osmcode.org/osmium-tool/",
    description:
      "處理 OSM 資料檔案的必備命令列工具，支援 .osm.pbf 格式的篩選、合併與格式轉換，是 OSM 資料前處理流程的標準工具。",
    platform: ["C++", "CLI"],
  },
  postgis: {
    name: "PostGIS",
    href: "https://postgis.net/",
    description:
      "PostgreSQL 的空間資料延伸套件，支援地理空間查詢與分析，是絕大多數 OSM 資料處理管線的核心資料庫解決方案。",
    platform: ["PostgreSQL"],
  },
  geofabrik: {
    name: "Geofabrik",
    href: "https://download.geofabrik.de/",
    description: "提供各地區 OSM 資料下載，含台灣範圍，適合自架服務。",
    platform: ["Web"],
  },
  openmaptiles: {
    name: "OpenMapTiles",
    href: "https://openmaptiles.org/",
    description:
      "自帶有 50 種以上語言支援的自架地圖圖磚開源服務，可完整在地端部署，無需依賴第三方圖磚供應商。",
    platform: ["Docker", "CLI"],
  },
  pmtiles: {
    name: "PMTiles",
    href: "https://protomaps.com/docs/pmtiles",
    description:
      "雲端優化的單檔向量圖磚格式，無需圖磚伺服器即可直接從物件儲存（如 S3）提供地圖服務，大幅降低自架地圖的門檻。",
    platform: ["CLI", "API"],
  },
  osrm: {
    name: "OSRM",
    href: "https://project-osrm.org/",
    description:
      "基於 OSM 資料的高效能路線規劃引擎，提供 HTTP API 介面，支援最短路徑、距離矩陣及旅行推銷員問題求解，是部署路線規劃服務的主流選擇之一。",
    platform: ["C++", "API"],
  },
  valhalla: {
    name: "Valhalla",
    href: "https://valhalla.github.io/valhalla/",
    description:
      "功能豐富的開源路線規劃引擎，支援逐向導航、等時圈分析、路程矩陣及地圖匹配等，適合建置進階的交通分析與導航服務。",
    platform: ["C++", "API"],
  },
  graphhopper: {
    name: "GraphHopper",
    href: "https://github.com/graphhopper/graphhopper",
    description:
      "以 Java 實作的開源路線規劃引擎，支援多種交通模式與自訂路網模型，提供 HTTP API 及嵌入式使用兩種方式。",
    platform: ["Java", "API"],
  },
  opentripplanner: {
    name: "OpenTripPlanner",
    href: "https://github.com/opentripplanner/OpenTripPlanner",
    description:
      "多模式大眾運輸路線規劃引擎，整合公車、捷運、步行、騎車等交通方式，可結合 GTFS 資料建置城市路線查詢服務。",
    platform: ["Java", "API"],
  },
  leaflet: {
    name: "Leaflet",
    href: "https://leafletjs.com/",
    description:
      "最廣泛使用的 OSM 地圖渲染與嵌入元件庫之一，輕量且支援行動裝置，API 簡潔易上手，適合快速在網頁中嵌入互動式地圖。",
  },
  openlayers: {
    name: "OpenLayers",
    href: "https://openlayers.org/",
    description:
      "功能豐富的網頁地圖元件庫，支援 WMS、WFS、向量圖層等多種資料格式，適合建置複雜的 GIS 地圖應用。",
  },
  maplibre: {
    name: "MapLibre GL JS",
    href: "https://maplibre.org/",
    description: "支援 GPU 加速運算的向量地圖渲染元件庫",
  },
  osmnx: {
    name: "osmnx",
    href: "https://github.com/gboeing/osmnx",
    description:
      "可用於建模、分析與呈現城市街道網路及地理空間資料的街道路網視覺化工具。它能輕鬆繪製高品質的城市街道地圖、計算路網統計數據，並支援步行、駕車及騎行等多種模式的網路分析。",
  },
  prettymapp: {
    name: "prettymapp",
    href: "https://github.com/chrieke/prettymapp",
    description:
      "以 OSM 資料為素材，透過 Python 快速生成具設計感的城市主題地圖海報，支援多種色彩風格。",
  },
  "overpass-wrapper": {
    name: "overpass-wrapper",
    href: "https://github.com/mvexel/overpass-api-python-wrapper",
    description:
      "簡化 Overpass API 查詢操作的 Python 套件，方便以程式批次擷取 OSM 地理資料。",
  },
  osmapi: {
    name: "osmapi",
    href: "https://github.com/metaodi/osmapi",
    description:
      "存取 OpenStreetMap 主 API 的 Python 套件，可用於讀取、新增及修改 OSM 節點、路徑與關係資料。",
  },
  "python-mapnik": {
    name: "python-mapnik",
    href: "https://github.com/mapnik/python-mapnik",
    description:
      "Mapnik 地圖渲染引擎的 Python 綁定，可程式化生成高品質地圖圖像並自訂樣式。",
  },
};

export { apps };
