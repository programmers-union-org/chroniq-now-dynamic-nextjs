export interface Article {
  id: string;
  slug: string;
  title: string;
  image: string;
  time: string;
  date: string;
  excerpt?: string;
}

export interface ArticleWithCategory extends Article {
  category: string;
}
