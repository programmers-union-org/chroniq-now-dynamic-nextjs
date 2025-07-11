// src/app/page.tsx (or wherever your home page lives)
import Navbar from "./Navbar";
import HomeSection1 from "./HomeSection1";
import HomeSections, { CategoryData } from "./HomeSections";
import ColumnsDesign from "./ColumnsDesign";
import FiveCardsSection from "@/components/FiveCardsSection";
import ThreeColSection from "@/components/ThreeColSection";
import Footer from "@/components/Footer";

// data imports for each section
import politicsData from "@/data/politics.json";
import morenewsData from "@/data/morenews.json";
import metroData from "@/data/metro.json";
import columnsData from "@/data/columns.json";
import homeSectionData from "@/data/homeSection1.json";
import entertainmentData from "@/data/entertainment.json";
import web3Data from "@/data/web3.json";
import promotedData from "@/data/promoted.json";
import videosData from "@/data/videos.json";
import NaijaDiasporaData from "@/data/NaijaDiaspora.json";
import icymiData from "@/data/icymi.json";
import cartoonData from "@/data/cartoon.json";
import businessData from "@/data/business.json";
import healthData from "@/data/health.json";
import sportsData from "@/data/sports.json";
import relationshipData from "@/data/relationship.json";
import specialreportData from "@/data/specialreport.json";
import technologyData from "@/data/technology.json";
import educationData from "@/data/education.json";

// types
import type { ArticleWithCategory } from "@/types/homepage";

// your lib
import { getLatestArticles } from "@/lib/readAlljsonfiles";

export default function HomePage() {
  // grabs the 5 most recent articles (with `category` included)
  const latestArticles = getLatestArticles() as ArticleWithCategory[];

  return (
    <>
      <Navbar />

      <section className="p-5 sm:p-20 space-y-10">
        {/* main hero section + latest list */}
        <HomeSection1
          categoryData={homeSectionData as CategoryData}
          latestArticles={latestArticles}
        />

        {/* two HomeSections */}
        <HomeSections data={politicsData as CategoryData} />
        <HomeSections data={morenewsData as CategoryData} />

        {/* one ColumnsDesign */}
        <ColumnsDesign data={columnsData as CategoryData} />

        {/* another HomeSection */}
        <HomeSections data={metroData as CategoryData} />

        {/* FiveCardsSection */}
        <FiveCardsSection data={entertainmentData as CategoryData} />

        {/* more HomeSections and FiveCardsSections */}
        <HomeSections data={web3Data as CategoryData} />
        <FiveCardsSection data={promotedData as CategoryData} />
        <FiveCardsSection data={videosData as CategoryData} />
        <HomeSections data={NaijaDiasporaData as CategoryData} />
        <HomeSections data={icymiData as CategoryData} />
        <FiveCardsSection data={cartoonData as CategoryData} />
        <HomeSections data={businessData as CategoryData} />
        <FiveCardsSection data={healthData as CategoryData} />
        <HomeSections data={sportsData as CategoryData} />
        <FiveCardsSection data={relationshipData as CategoryData} />

        {/* three-column wrap */}
        <ThreeColSection
          data={[
            specialreportData,
            technologyData,
            educationData,
          ] as CategoryData[]}
        />
      </section>

      <Footer />
    </>
  );
}
