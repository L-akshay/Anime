export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface AnimeEntry {
  id: string;
  slug: string;
  title: string;
  titleJapanese: string;
  studio: string;
  year: number;
  episodes: number;
  genre: string[];
  rating: number;
  description: string;
  image: string;
  featured: boolean;
}

export interface Review {
  id: string;
  animeSlug: string;
  animeTitle: string;
  rating: number; // overall score
  storyScore: number;
  charactersScore: number;
  animationScore: number;
  musicScore: number;
  verdict: string;
  review: string;
  author: string;
  date: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}