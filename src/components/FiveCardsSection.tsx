import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/homepage";

export interface CategoryData {
  category: string;
  articles: Article[];
}

interface HomeSectionsProps {
  data: CategoryData;
}

export default function HomeSections({ data }: HomeSectionsProps) {
  const { category, articles } = data;
  const displayArticles = articles.slice(0, 5);

  return (
    <section className="border-t pt-6">
      <Link href={`/${category}`}>
        <h2 className="flex items-center text-2xl sm:text-3xl uppercase text-red-600 mb-4">
          {category.toUpperCase()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-5 h-5 fill-red-600 ml-2"
          >
            <polygon points="30,20 70,50 30,80" />
          </svg>
        </h2>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {displayArticles.map((article, index) => (
          <Link
            key={article.slug + index}
            href={`/${category}/${article.slug}`}
            className="flex items-start bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow sm:block"
          >
            <div className="relative w-24 h-full flex-shrink-0 sm:w-full sm:h-40">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>

            <div className="p-4 flex-1">
              <h3 className="font-bold text-lg leading-snug tracking-tight line-clamp-4">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
