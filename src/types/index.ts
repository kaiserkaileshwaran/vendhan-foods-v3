export type ProductCategory =
  | 'Millet Foods'
  | 'Health Mixes & Malts'
  | 'Traditional Snacks'
  | 'Millet Cookies'
  | 'Millet Laddoos'
  | 'Masalas & Podis'
  | 'Other Products';

export interface NutritionFacts {
  calories: string;
  protein: string;
  dietaryFiber: string;
  iron: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tamilName?: string;
  category: ProductCategory;
  categorySlug: string;
  subtitle: string;
  description: string;
  price: number;
  mrp: number;
  weight: string;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  badge?: string;
  ingredients: string[];
  benefits: string[];
  nutrition: NutritionFacts;
  prepTip?: string;
  storage?: string;
  isBestSeller?: boolean;
  isFeaturedOnHome?: boolean;
  tags?: string[];
  stock?: boolean;
}

export interface CategoryInfo {
  id: ProductCategory;
  slug: string;
  title: string;
  tamilTitle: string;
  description: string;
  heroImage: string;
  itemCount: number;
  accent: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  productName: string;
  rating: number;
  comment: string;
  verified: boolean;
  date: string;
}

export interface FilterState {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating' | 'popular' | 'newest';
  tag?: string;
}
