"use client";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/homepage";

interface ColumnsProps {
  data: {
    category: string;
    articles: Article[];
  };
}

export default function ColumnsDesign({ data }: ColumnsProps) {
  const { category, articles } = data;

  return (
    <section className="border-t pt-4">
      <h2 className=" text-2xl sm:text-3xl uppercase text-red-600 mb-4 flex items-center">
        <Link href={`/${category}`} className="mr-2">
          {category.toUpperCase()}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-5 h-5 fill-red-600"
        >
          <polygon points="30,20 70,50 30,80" />
        </svg>
      </h2>

      <div className="border border-[#ffe6e6] rounded-lg p-4">
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-container">
          {articles.map((item) => (
            <Link
              key={item.id}
              href={`/${category}/${item.slug}`}
              className="snap-start flex-shrink-0 w-80 h-auto border-2 border-[#ffe6e6] rounded-lg overflow-hidden flex"
            >
              <div className="p-4 flex-1 flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  <span className="text-red-600 text-sm font-bold">
                    {item.time}
                  </span>
                </div>
                <h3 className=" text-[1rem] font-semibold leading-snug ">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-32 h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          height: 4px;
        }
        .scroll-container::-webkit-scrollbar-track {
          background: #e7f6f7;
          border-radius: 9999px;
        }
        .scroll-container::-webkit-scrollbar-thumb {
          background: #7bcdd4;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
