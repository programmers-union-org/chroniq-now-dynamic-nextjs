import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types/homepage";

export type CategoryData = {
  category: string;
  articles: Article[];
};

export default function HomeSections({ data }: { data: CategoryData }) {
  const { category, articles } = data;
  const main = articles[0];
  const others = articles.slice(1, 5);

  return (
    <section className="border-t border-black py-5">
      {/* heading */}
      <Link href={`/${category.toLowerCase()}`}>
        <h2 className="text-2xl sm:text-3xl font-medium mb-6 uppercase text-red-600 flex items-center gap-1">
          {category}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-5 h-5 fill-red-600"
          >
            <polygon points="30,20 70,50 30,80" />
          </svg>
        </h2>
      </Link>

      {/* grid: mobile 1-col, desktop 2-col */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* left: latest */}
        <div className="flex flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition ">
          <Link
            href={`/${category.toLowerCase()}/${main.slug}`}
            className="flex flex-col h-full"
          >
            <div className="w-full aspect-[16/9] overflow-hidden">
              <Image
                src={main.image}
                alt={main.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="mt-2 text-xl sm:text-2xl leading-snug tracking-tight font-bold hover:text-red-600">
                {main.title}
              </h3>
              <p className="mt-3 text-gray-700 text-md hidden sm:block">
                {main.shortdescription}
              </p>
            </div>
          </Link>
        </div>

        {/* right: next 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
          {others.map((item, index) => (
            <Link
              key={item.slug + index}
              href={`/${category.toLowerCase()}/${item.slug}`}
              className="flex flex-row sm:flex-col h-full overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="w-24 aspect-square sm:w-full sm:aspect-[4/3] flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 flex-1 flex flex-col justify-center">
                <h4 className="text-sm sm:text-xl font-semibold leading-snug tracking-tight hover:text-red-600">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
