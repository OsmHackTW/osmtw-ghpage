import Layout from "../components/layouts/layout";
import { Link } from "../components/util";

// markup
const NotFoundPage = () => (
  <Layout>
    <section className="antialiased text-slate-900 py-2 h-full flex items-center justify-center">
      <div className="md:w-2/3 mx-auto">
        <div className="main-title my-8 md:my-16 space-y-3 text-center">
          <h1 className="font-bold text-xl md:text-3xl lg:text-5xl">
            阿北～初四了！阿北～！
          </h1>
          <h3 className="font-bold text-md md:text-xl lg:text-2xl">
            我們掉到４０４了啦！
          </h3>
          <h2 className="font-bold text-2xl">
            Mission Control, we&apos;ve hit a 404.
          </h2>
        </div>
        <div className="my-8 md:my-16 space-y-3">
          <h2 className="text-lg text-slate-600 text-center py-3">
            [工商時間 AD]
          </h2>
          <div className="flex flex-col space-y-4 lg:p-8">
            {/* 工商 - 這是一個<a>包起來的圖卡 AD here - this an <a> wrapped card */}
            <div className="max-w-4xlmx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white">
              <a
                href="https://coscup.org/2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* 圖檔 Hero image here */}
                <img
                  className="w-full overflow-hidden"
                  src="https://coscup.org/2022/assets/banner.24fd488a.svg"
                  alt="COSCUP 2021"
                />
                <div className="px-6 pt-4 space-y-3">
                  {/* 字字字字 Descripion here */}
                  <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">
                    COSCUP x KCD Taiwan 2022
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl">
                    COSCUP x KCD 2022 重磅回歸實體！近 30 軌議程，真的是太狂啦！
                  </p>
                </div>
                <div className="px-6 py-4 space-y-3">
                  {/* 標籤 Hashtag here */}
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">
                    #COSCUP
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">
                    #全亞洲最熱情
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">
                    #志工主辦
                  </span>
                  <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold bg-fern-green-50 mr-2">
                    #活力滿點
                  </span>
                </div>
              </a>
            </div>
            {/* 下方可以依需求再加圖卡 Card can be added as needed below */}
          </div>
          <p className="block pt-16 font-bold text-center underline">
            <Link href="/">回到首頁 Back to Home</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
