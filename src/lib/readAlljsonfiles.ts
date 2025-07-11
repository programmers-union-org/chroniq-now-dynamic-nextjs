import fs from "fs";
import path from "path";

export type Article = {
  category: string;
  id: string;
  slug: string;
  title: string;
  image: string;
  time: string;
  date: string;
  excerpt?: string;
  description?: string[];
};

export type NewsData = {
  category: string;
  articles: Article[];
};

const dataDir = path.join(process.cwd(), "src", "data");

export function loadAllNews(): NewsData[] {
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".json"));

  return files.map((file) => {
    const filePath = path.join(dataDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data: NewsData = JSON.parse(fileContent);
    return data;
  });
}

export function getAllArticles(): Article[] {
  return loadAllNews().flatMap((section) => section.articles);
}

export function getLatestArticles(limit = 5): Article[] {
  const all = getAllArticles();
  return all
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  const section = loadAllNews().find((s) => s.category === category);
  return section ? section.articles : [];
}
