import Link from 'next/link'
import Layout from "../components/layouts/layout";

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
          <p className="block pt-16 font-bold text-center underline">
            <Link href="/">回到首頁 Back to Home</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
