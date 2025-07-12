import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientDetail from "@/components/ClientDetail";
import {
  getArticleBySlug,
  getLatestArticles,
  getArticlesByCategory,
} from "@/lib/readAlljsonfiles";

interface DetailPageProps {
  params: {
    category: string;
    detail: string;
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, detail: slug } = params;

  const article = getArticleBySlug(slug);
  const latestArticles = getLatestArticles(10);
  const categoryArticles = getArticlesByCategory(category);
  const moreArticles = categoryArticles
    .filter((item) => item.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Article not found.
      </div>
    );
  }

  const isClientSlug =
    category === "politics" &&
    slug === "bribery-case-collapses-into-minor-campaign-finance-violation";

  return (
    <>
      <Navbar />

      <main className="container mx-auto  py-8">
        <div className="flex flex-col mb-8">
          <nav className="text-sm font-bold text-gray-500 mb-4 lg:mb-0 lg:mr-4">
            <Link href="/" className="hover:underline">
              HOME
            </Link>
            <span className="mx-1">»</span>
            <Link href={`/${category}`} className="hover:underline">
              {category.toUpperCase()}
            </Link>
            <span className="mx-1">»</span>
            <span>{article.title}</span>
          </nav>

          <div className="flex space-x-4 items-center">
            <span className="text-red-600 uppercase text-sm font-semibold">
              {category}
            </span>
            <span className="text-teal-600 text-sm">{article.date}</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          {/* article */}
          {isClientSlug ? (
            <ClientDetail />
          ) : (
            <article className="w-full lg:w-2/3 lg:pr-8 mb-12 lg:mb-0">
              <h1 className=" text-3xl sm:text-4xl font-bold mb-6">
                {article.title}
              </h1>

              <div className="w-full mb-6 overflow-hidden shadow-md">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover "
                />
              </div>

              <p className="text-lg leading-relaxed mb-6 font-bold">
                {article.shortdescription}
              </p>

              {article.description && (
                <p className="text-base leading-relaxed mb-4">
                  {article.description}
                </p>
              )}
            </article>
          )}

          {/* latest News */}
          <aside className="w-full lg:w-1/3 sticky top-50 self-start">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Latest News
            </h2>
            <ul className="space-y-4">
              {latestArticles.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${item.category}/${item.slug}`}
                    className="flex items-center shadow-sm hover:bg-gray-50 transition"
                  >
                    <div className="w-30 h-20  flex-shrink-0 mr-3 overflow-hidden ">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-bold leading-snug tracking-tight">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        {item.date}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* more in this category */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-semibold mb-6">
            More in {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreArticles.map((item, index) => (
              <li key={`${item.slug}-${index}`}>
                <Link
                  href={`/${category}/${item.slug}`}
                  className="block shadow-sm hover:bg-gray-50 overflow-hidden h-full transition"
                >
                  <div className="w-full h-40 sm:h-70 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={320}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold leading-snug tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
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
