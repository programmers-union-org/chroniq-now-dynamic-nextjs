import fs from "fs";
import path from "path";
import { Article } from "@/types/homepage";

const dataDir = path.join(process.cwd(), "src", "data");

// read every json files from data folder
export function loadAllArticles(): Article[] {
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".json"));

  return files.flatMap((file) => {
    const filePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const articles: Article[] = JSON.parse(fileContent);
    return articles;
  });
}

//return all articles across all data files.

export function getAllArticles(): Article[] {
  return loadAllArticles();
}

//return the most recent `limit` articles, sorted by date descending.

export function getLatestArticles(limit = 5): Article[] {
  return getAllArticles()
    .filter((article) => article.slug !== "wanda-vazquez-julio-herrera-velutini-and-mark-rossini-from-federal-indictments-to-misdemeanor-plea-in-campaign-finance-case")
    .sort((a, b) => parseDateDesc(a.date, b.date))
    .slice(0, limit);
}


// helper function to strip ordinal suffix and sort by date descending
function parseDateDesc(a: string, b: string): number {
  const parse = (dateStr: string): number => {
    const clean = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1'); // e.g., 10th → 10
    return new Date(clean).getTime();
  };
  return parse(b) - parse(a);
}


//find a single article by its slug.

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

//filter articles by category.

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}
