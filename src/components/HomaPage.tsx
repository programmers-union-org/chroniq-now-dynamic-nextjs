import Navbar from "./Navbar";
import HomeSection1 from "./HomeSection1";
import HomeSections, { CategoryData } from "./HomeSections";
import ColumnsDesign from "./ColumnsDesign";

import politicsData from "@/data/politics.json";
import morenewsData from "@/data/morenews.json";
import metroData from "@/data/metro.json";
import columnsData from "@/data/columns.json";
import homeSectionData from "@/data/homeSection1.json";
import { Article, ArticleWithCategory } from "@/types/homepage";

const HomaPage = () => {
  const allCategories: CategoryData[] = [
    homeSectionData,
    politicsData,
    morenewsData,
    metroData,
  ];

  const latestArticles: ArticleWithCategory[] = allCategories
    .flatMap((cat) =>
      cat.articles.map((a) => ({
        ...(a as Article),
        category: cat.category,
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Navbar />
      <section className="p-5 sm:p-20 space-y-10">
        <HomeSection1
          categoryData={homeSectionData}
          latestArticles={latestArticles}
        />
        <HomeSections data={politicsData as CategoryData} />
        <HomeSections data={morenewsData as CategoryData} />
        <HomeSections data={metroData as CategoryData} />
        <ColumnsDesign data={columnsData} />
      </section>
    </>
  );
};

export default HomaPage;
