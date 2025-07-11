import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getArticleBySlug,
  getLatestArticles,
  getArticlesByCategory,
} from "@/lib/readAlljsonfiles";

const slug = "no-rift-between-buhari-tinubu-garba-shehu"; // TODO: replace with dynamic slug
const article = getArticleBySlug(slug);
const latestArticles = getLatestArticles(10);
const categoryArticles = getArticlesByCategory("business");
const moreArticles = categoryArticles
  .filter((item) => item.slug !== slug)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4);

export default function DetailPage() {
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Article not found.
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* STACK ON MOBILE, ROW ON LARGE */}
        <div className="flex flex-col lg:flex-row w-full">
          {/* Main article */}
          <article className="w-full lg:flex-[0_0_70%] lg:pr-8 mb-8 lg:mb-0">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:underline">
                HOME
              </Link>
              <span className="mx-1">»</span>
              <Link href="/news" className="hover:underline">
                NEWS
              </Link>
              <span className="mx-1">»</span>
              <span>{article.title}</span>
            </nav>

            <div className="flex  space-x-4 items-center mb-4">
              <span className="text-red-600 uppercase text-sm font-semibold">
                business
              </span>
              <span className="text-teal-600 text-sm">{formattedDate}</span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{article.title}</h1>

            <div className="relative w-full h-[400px] mb-6">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <p className="text-lg leading-relaxed mb-6">{article.excerpt}</p>

            {article.description?.map((para, idx) => (
              <p key={idx} className="text-base leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </article>

          {/* Latest news (max 5, one per row on mobile) */}
          <aside className="w-full lg:flex-[0_0_30%] sticky top-45 self-start">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Latest News
            </h2>
            <ul className="space-y-4">
              {latestArticles.slice(0, 5).map((item, index) => (
                <li key={`${item.slug}-${index}`}>
                  <Link
                    href={`/business/${item.slug}`}
                    className="flex items-center  shadow-sm  hover:bg-gray-50"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 mr-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* More in Business (one per row on mobile; grid on larger) */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">More in Business</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreArticles.map((item, index) => (
              <li key={`${item.slug}-${index}`}>
                <Link
                  href={`/business/${item.slug}`}
                  className="block shadow-sm hover:bg-gray-50 overflow-hidden h-full"
                >
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
