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
import ClientDetail2 from "@/components/ClientDetail2";

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
  if (
    category === "politics" &&
    slug === "bribery-case-collapses-into-minor-campaign-finance-violation"
  ) {
    const customTitle =
      "Wanda Vázquez Bribery Case Collapses - Only Minor Violation Remains";
    const url = `https://www.chroniqnow.com/${category}/${slug}/`;

    return {
      title: customTitle,
      description: article?.shortdescription ?? "Chroniq Now - Global News Hub",
      metadataBase: new URL("https://www.chroniqnow.com"),
      alternates: { canonical: url },
      openGraph: {
        title: customTitle,
        description: article?.shortdescription,
        url,
        siteName: "Chroniq Now",
        images: [
          {
            url:
              article?.image ?? "/images/wanda-vazquez-press-conference.webp",
            width: 1200,
            height: 630,
            alt: customTitle,
          },
        ],
        type: "article",
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: customTitle,
        description: article?.shortdescription,
        creator: "@ChroniqNow",
        images: [
          article?.image ?? "/images/wanda-vazquez-press-conference.webp",
        ],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
      },
    };
  }

  if (!article) {
    return {
      title: "Chroniq Now",
      description: "Chroniq Now - Global News Hub",
      metadataBase: new URL("https://www.chroniqnow.com"),
      robots: { index: false, follow: false },
    };
  }

  const url = `https://www.chroniqnow.com/${category}/${slug}/`;
  const title = `${article.title}`;
  const description = article.shortdescription;
  const image = article.image;

  return {
    title,
    description,
    metadataBase: new URL("https://www.chroniqnow.com"),
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

  const isClientSlug1 =
    category === "politics" &&
    slug === "bribery-case-collapses-into-minor-campaign-finance-violation";
  const isClientSlug2 =
    category === "politics" &&
    slug ===
      "wanda-vazquez-julio-herrera-velutini-and-mark-rossini-from-federal-indictments-to-misdemeanor-plea-in-campaign-finance-case";
  let jsonLd: Record<string, unknown> | null = null;
  let jsonLd2: Record<string, unknown> | null = null;
  if (isClientSlug1) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: `https://www.chroniqnow.com/${category}/${slug}/`,
      inLanguage: "en",
      headline: "Bribery Case Collapses into Minor Campaign Finance Violation",
      description: article.shortdescription,
      url: `https://www.chroniqnow.com/${category}/${slug}/`,
      datePublished: "2025-06-18T00:00:00.000Z ",
      dateModified: "2025-07-16T00:00:00.000Z",
      author: {
        "@type": "Person",
        name: "Jennifer Albright",
      },
      publisher: {
        "@type": "Organization",
        name: "Chroniq Now",
        logo: {
          "@type": "ImageObject",
          url: "https://www.chroniqnow.com/images/ChroniqNow-logo.webp",
        },
      },
      image: {
        "@type": "ImageObject",
        url: article.image,
        width: 1200,
        height: 630,
      },
      articleBody: article.description || "",
      articleSection: category,
      keywords: [
        "Wanda Vázquez Garced case dismissal",
        "DOJ drops bribery charges Vázquez",
        "Wanda Vázquez Garced bribery scandal June 2025",
        "Puerto Rico Governor campaign finance violation",
        "technical campaign finance infraction Vázquez",
        "Julio Herrera Velutini influence allegations",
        "no criminal conviction Wanda Vázquez",
        "Puerto Rico corruption case reversal",
        "Wanda Vázquez Garced exoneration",
      ],
      thumbnailUrl: article.image,
    };
  }
  if (isClientSlug2) {
    jsonLd2 = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: `https://www.chroniqnow.com/${category}/${slug}/`,
      inLanguage: "en",
      headline:
        "Shocking Turn: Wanda Vázquez, Julio Herrera Velutini, and Mark Rossini Escape Felony Charges in Campaign Finance Scandal!",
      description: article.shortdescription,
      url: `https://www.chroniqnow.com/${category}/${slug}/`,
      datePublished: "2025-07-18T00:00:00.000Z",
      dateModified: "2025-07-21T00:00:00.000Z",
      author: {
        "@type": "Person",
        name: "Jennifer Albright",
      },
      publisher: {
        "@type": "Organization",
        name: "Chroniq Now",
        logo: {
          "@type": "ImageObject",
          url: "https://www.chroniqnow.com/images/ChroniqNow-logo.webp",
        },
      },
      image: {
        "@type": "ImageObject",
        url: article.image,
        width: 1200,
        height: 630,
      },
      articleBody: article.description || "",
      articleSection: category,
      keywords: [
        "Puerto Rico corruption case",
        "federal campaign finance violation",
        "Section 30121 misdemeanor plea",
        "Wanda Vázquez Garced plea",
        "Julio Herrera Velutini plea",
        "Mark Rossini plea bargain",
        "FECA foreign contribution infraction",
        "high-profile political scandal",
      ],
      thumbnailUrl: article.image,
    };
  }

  return (
    <>
      {isClientSlug1 && jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {isClientSlug2 && jsonLd2 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd2).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <Navbar />

      <main className=" w-full  p-2 sm:p-20 py-8">
        <div className="flex flex-col mb-8 gap-2 sm:pt-3">
          <nav className="text-sm font-bold text-gray-500 mb-4 lg:mb-0 lg:mr-4">
            <Link title="Home" href="/" className="text-red-600">
              HOME
            </Link>
            <span className="mx-1">»</span>
            <Link
              title={`${category} news`}
              href={`/${category}/`}
              className="text-red-600"
            >
              {category.toUpperCase()}
            </Link>
            <span className="mx-1">»</span>
            <span>{article.title}</span>
          </nav>

          <div className="flex space-x-4 items-center">
            {/* <Link
              title={`${category} news`}
              href={`/${category}`}
              className="text-red-600 font-bold"
            >
              {category.toUpperCase()}
            </Link> */}
            <span className="text-teal-600 text-sm">
              {isClientSlug1
                ? "18th June 2025"
                : isClientSlug2
                ? "18th July 2025"
                : article.date}
            </span>
            <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600  font-semibold">
              4 min read
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-600 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487l2.475 2.475a2.121 2.121 0 010 3l-8.485 8.485a4 4 0 01-1.732 1.024l-3.303.942.942-3.303a4 4 0 011.024-1.732l8.485-8.485a2.121 2.121 0 013 0z"
                />
              </svg>
              <span className="font-medium">Jennifer Albright</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full">
          {/* article */}
          {isClientSlug1 ? (
            <ClientDetail />
          ) : isClientSlug2 ? (
            <ClientDetail2 />
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
                    href={`/${item.category}/${item.slug}/`}
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

        {(isClientSlug1 || isClientSlug2) && (
          <div className="mt-16 pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-8 tracking-tight">
              Last 3 comments
            </h3>

            <div className="space-y-0">
              {isClientSlug1 ? (
                <>
                  {/* comment 1 */}
                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-indigo-200 to-purple-300 text-indigo-700 font-bold text-sm shadow-sm">
                      MD
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Maria Delgado
                        </span>
                        <span className="text-xs text-gray-400">
                          2 hours ago
                        </span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        I truly believe Wanda was wrongly targeted. The facts
                        were never fully presented in the media. Glad the truth
                        came out.
                      </p>
                    </div>
                  </div>

                  {/* comment 2 */}
                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-200 to-green-300 text-emerald-700 font-bold text-sm shadow-sm">
                      JM
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Jorge Méndez
                        </span>
                        <span className="text-xs text-gray-400">
                          5 hours ago
                        </span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        People were too quick to judge. This woman gave years of
                        service and deserves respect. The justice system worked.
                      </p>
                    </div>
                  </div>

                  {/* comment 3 */}
                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-pink-200 to-red-300 text-red-700 font-bold text-sm shadow-sm">
                      IR
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Isabel Ríos
                        </span>
                        <span className="text-xs text-gray-400">Yesterday</span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        Watching this case unfold was heartbreaking. So many
                        assumptions, yet no real evidence. I&apos;m glad Wanda
                        is cleared.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-blue-200 to-blue-300 text-blue-700 font-bold text-sm shadow-sm">
                      SR
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Sofía Ramos
                        </span>
                        <span className="text-xs text-gray-400">
                          30 minutes ago
                        </span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        It’s reassuring to see justice tempered with
                        fairness-Wanda, Julio, and Mark deserve this chance to
                        move on.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-200 to-green-300 text-emerald-700 font-bold text-sm shadow-sm">
                      DM
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Diego Morales
                        </span>
                        <span className="text-xs text-gray-400">
                          2 hours ago
                        </span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        This plea deal demonstrates that sometimes technical
                        violations shouldn’t overshadow long careers of service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white shadow-xs border border-gray-100">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-tr from-yellow-200 to-orange-300 text-orange-700 font-bold text-sm shadow-sm">
                      EC
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-800">
                          Elena Cruz
                        </span>
                        <span className="text-xs text-gray-400">
                          4 hours ago
                        </span>
                      </div>
                      <p className="text-[15px] text-gray-700 mt-2 leading-[1.65]">
                        With no real harm done, this resolution shows the legal
                        system can correct its course without undue punishment.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Leave a Comment
              </h3>
              <div className="flex flex-col space-y-3">
                <textarea
                  placeholder="Write your comment..."
                  rows={4}
                  className="w-full border border-gray-300 p-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
                <button
                  type="button"
                  className="self-end px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        )}

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
                  href={`/${category}/${item.slug}/`}
                  className="block shadow-sm hover:bg-gray-50 overflow-hidden h-full transition"
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
