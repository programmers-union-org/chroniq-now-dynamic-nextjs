import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/homepage";

export interface CategoryData {
  category: string;
  articles: Article[];
}

interface ThreeColSectionProps {
  data: CategoryData[];
}

export default function ThreeColSection({ data }: ThreeColSectionProps) {
  return (
    <section className="pt-6">
      <div className="container mx-auto">
        {/* three columns on lg, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 sm:gap-y-0">
          {data.slice(0, 3).map((col) => (
            <div key={col.category} className="border-t  pt-6">
              <Link
                href={`/${col.category.toLowerCase()}/`}
                title={`${col.category} news`}
              >
                <h2 className="text-2xl sm:text-3xl uppercase text-red-600 mb-6 text-center lg:text-left">
                  {col.category.toUpperCase()}
                </h2>
              </Link>

              <div className="space-y-6">
                {col.articles.slice(0, 4).map((article, index) => (
                  <Link
                    title={article.title}
                    key={article.slug + index}
                    href={`/${col.category.toLowerCase()}/${article.slug}/`}
                    className="
                      flex items-center
                      h-28 lg:h-34
                      bg-white border border-gray-200 shadow-xs  overflow-hidden
                      flex-row lg:flex-row-reverse
                    "
                  >
                    {/* image then title */}
                    <div className="w-32 aspect-[3/4] flex-shrink-0 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={300}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 px-4">
                      <h3 className="text-base font-bold line-clamp-3 leading-snug tracking-tight">
                        {article.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              {/* mobile-only “More” button under each column */}
              <div className="mt-6 block lg:hidden">
                <Link
                  title={`More ${col.category.toUpperCase()} news`}
                  href={`/${col.category.toLowerCase()}/`}
                  className="block w-full text-center py-2 border border-red-600 rounded uppercase text-red-600"
                >
                  More {col.category.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* desktop-only buttons row */}
        <div className="hidden lg:grid grid-cols-3 gap-x-6 mt-6">
          {data.slice(0, 3).map((col) => (
            <Link
              key={col.category}
              title={`More ${col.category.toUpperCase()} news`}
              href={`/${col.category.toLowerCase()}/`}
              className="text-center py-2 border border-red-600 rounded uppercase text-red-600"
            >
              More {col.category.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
