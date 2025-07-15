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
import { Metadata } from "next";

interface DetailPageProps {
  params: Promise<{
    category: string;
    detail: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; detail: string }>;
}): Promise<Metadata> {
  const { category, detail: slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Chroniq Now",
      description: "Chroniq Now - Global News Hub",
      metadataBase: new URL("https://chroniqnow.com"),
      robots: { index: false, follow: false },
    };
  }

  const url = `https://chroniqnow.com/${category}/${slug}`;
  const title = `${article.title} | Chroniq Now`;
  const description = article.shortdescription;
  const image = article.image;

  return {
    title,
    description,
    metadataBase: new URL("https://chroniqnow.com"),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Chroniq Now",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@ChroniqNow",
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export async function generateStaticParams() {
  const articles = [
    ...getArticlesByCategory("business"),
    ...getArticlesByCategory("health"),
    ...getArticlesByCategory("politics"),

    ...getArticlesByCategory("science"),

    ...getArticlesByCategory("sports"),
    ...getArticlesByCategory("technology"),
  ];

  return articles.map((article) => ({
    category: article.category,
    detail: article.slug,
  }));
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, detail: slug } = await params;

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

      <main className=" w-full  p-2 sm:p-20 py-8">
        <div className="flex flex-col mb-8 gap-2 sm:pt-3">
          <nav className="text-sm font-bold text-gray-500 mb-4 lg:mb-0 lg:mr-4">
            <Link title="Home" href="/" className="hover:text-red-600">
              HOME
            </Link>
            <span className="mx-1">»</span>
            <Link
              title={`${category} news`}
              href={`/${category}`}
              className="hover:text-red-600"
            >
              {category.toUpperCase()}
            </Link>
            <span className="mx-1">»</span>
            <span>{article.title}</span>
          </nav>

          <div className="flex space-x-4 items-center">
            <Link
              title={`${category} news`}
              href={`/${category}`}
              className="text-red-600 font-bold"
            >
              {category.toUpperCase()}
            </Link>
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
          <aside className="w-full lg:w-1/3 sticky top-45 self-start">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Latest News
            </h2>
            <ul className="space-y-4">
              {latestArticles.slice(0, 5).map((item) => (
                <li key={item.slug}>
                  <Link
                    title={item.title}
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
        {/* author  */}
        <div className="mt-16 text-center bg-white px-8 py-6 shadow-sm">
  <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-2">
    Written by
  </p>
  <h3 className="text-2xl font-bold text-gray-900 mb-3">
    Jennifer Albright
  </h3>
  <p className="text-base text-gray-700 leading-relaxed ">
    Jennifer Albright is a veteran political correspondent with over two decades of experience reporting on
    justice, government, and international policy. She’s known for her in-depth analysis and dedication
    to uncovering stories that matter most to the public.
  </p>
</div>


        {/* more in this category */}
        <section className="mt-12 w-full pb-3">
          <h2 className="text-2xl font-semibold mb-6">
            More in {category.charAt(0).toUpperCase() + category.slice(1)}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreArticles.map((item, index) => (
              <li key={`${item.slug}-${index}`}>
                <Link
                  title={item.title}
                  href={`/${category}/${item.slug}`}
                  className="block shadow-sm hover:bg-gray-50 overflow-hidden h-full transition"
                >
                  <div className="w-full h-60 sm:h-70 overflow-hidden">
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
