export type Language = 'en' | 'ar';

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  price: number | 'Free';
  lessons: number;
  rating: number;
  image: string;
  avatar: string;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  }
}