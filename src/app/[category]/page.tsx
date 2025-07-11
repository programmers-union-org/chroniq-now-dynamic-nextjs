import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadMoreArticles from "@/components/LoadMoreArticles";
import type { Article } from "@/types/homepage";

// interface CategoryData {
//   category: string;
//   articles: Article[];
// }

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), "src", "data");
  const files = await fs.readdir(dataDir);
  return files
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ category: f.replace(/\.json$/, "") }));
}

export default async function CategoryPage({
  params,
}: {
  params:Promise< { category: string }>;
}) {
  const category = (await params).category;
  const dataPath = path.join(process.cwd(), "src", "data", `${category}.json`);

  let raw: string;
  try {
    raw = await fs.readFile(dataPath, "utf8");
  } catch {
    return notFound();
  }

  // parse the file as an array of Article
  let articles: Article[];
  try {
    articles = JSON.parse(raw) as Article[];
  } catch {
    return notFound();
  }

  // wrap into your CategoryData shape
  // const categoryData: CategoryData = { category, articles };

  // pagination / slicing
  const pageArticles = articles.slice(0, 11);
  const featuredArticle = pageArticles[0];
  const otherPageArticles = pageArticles.slice(1);
  const bottomArticles = pageArticles.slice(7);

  return (
    <>
      <Navbar />

      <main className="container mx-auto py-8 px-2">
        {/* breadcrumb + title */}
        <nav aria-label="Breadcrumb" className="mb-2 text-sm">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="text-red-600 uppercase">
                HOME
              </Link>
            </li>
            <li>
              <span className="mx-2 text-gray-500">»</span>
            </li>
            <li className="uppercase text-gray-900 text-md">{category}</li>
          </ol>
        </nav>

        <div className="flex items-center mb-8">
          <div className="w-0.5 h-8 bg-red-600 mr-3" />
          <h1 className="uppercase text-2xl sm:text-3xl text-gray-900">
            {category}
          </h1>
        </div>

        {/* mobile layout */}
        <div className="block lg:hidden space-y-6">
          <Link
            href={`/${category}/${featuredArticle.slug}`}
            className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-64">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <h2 className="text-xl font-bold">{featuredArticle.title}</h2>
              <p className="mt-2 text-sm text-gray-800">
                {featuredArticle.shortdescription}
              </p>
            </div>
            <div className="w-full bg-white border-t border-gray-100 text-red-600 text-center py-2 font-semibold">
              {featuredArticle.date}
            </div>
          </Link>

          <div className="space-y-4">
            {otherPageArticles.map((item, i) => (
              <Link
                key={item.slug + i}
                href={`/${category}/${item.slug}`}
                className="flex items-center overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 ml-4">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-red-600 font-semibold">
                    {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* desktop layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-x-5">
          {/* left grid */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
            {/* small card */}
            <Link
              href={`/${category}/${otherPageArticles[0].slug}`}
              className="flex flex-col overflow-hidden shadow-xs hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-20 lg:w-full lg:h-full">
                <Image
                  src={otherPageArticles[0].image}
                  alt={otherPageArticles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h2 className="text-sm lg:text-base font-bold leading-snug">
                  {otherPageArticles[0].title}
                </h2>
              </div>
              <div className="w-full bg-white border shadow-sm border-gray-100 text-red-600 text-center py-2 font-semibold">
                {otherPageArticles[0].date}
              </div>
            </Link>

            {/* featured */}
            <Link
              href={`/${category}/${featuredArticle.slug}`}
              className="flex flex-col row-span-2 col-span-2 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-4/5">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-start gap-4">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="hidden lg:block text-sm leading-relaxed text-gray-800">
                  {featuredArticle.shortdescription}
                </p>
              </div>
              <div className="w-full bg-white border shadow-sm border-gray-100 text-red-600 text-center py-2 font-semibold">
                {featuredArticle.date}
              </div>
            </Link>

            {/* second small */}
            <Link
              href={`/${category}/${otherPageArticles[1].slug}`}
              className="flex flex-col overflow-hidden shadow-xs hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-20 lg:w-full lg:h-full">
                <Image
                  src={otherPageArticles[1].image}
                  alt={otherPageArticles[1].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h2 className="text-sm lg:text-base font-bold leading-snug">
                  {otherPageArticles[1].title}
                </h2>
              </div>
              <div className="w-full bg-white border shadow-sm border-gray-100 text-red-600 text-center py-2 font-semibold">
                {otherPageArticles[1].date}
              </div>
            </Link>
          </div>

          {/* right grid */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            {otherPageArticles.slice(2, 6).map((item, i) => (
              <Link
                key={item.slug + i}
                href={`/${category}/${item.slug}`}
                className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between h-[120px]">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 p-2 mt-0">
                    {item.title}
                  </h3>
                  <div className="relative w-35 h-full flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full bg-white p-2 border shadow-sm border-gray-100 text-red-600 text-left py-2 font-semibold">
                  {item.date}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* bottom grid */}
        {bottomArticles.length > 0 && (
          <section className="hidden lg:block mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {bottomArticles.map((item, i) => (
                <Link
                  key={item.slug + i}
                  href={`/${category}/${item.slug}`}
                  className="flex flex-col h-full overflow-hidden border border-gray-100 shadow-sm"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <h4 className="text-base font-bold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-full bg-white border-t border-gray-100 text-red-600 text-center py-2 font-semibold">
                    {item.date}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* load more */}
        {articles.length > 11 && (
          <LoadMoreArticles
            articles={articles.slice(11).map((a) => ({ ...a, id: a.slug }))}
            category={category}
          />
        )}
      </main>

      <Footer />
    </>
  );
}
