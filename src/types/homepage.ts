export interface Article {
  category: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  shortdescription: string;
  description: string;
}

export interface ArticleWithCategory extends Article {
  category: string;
}
