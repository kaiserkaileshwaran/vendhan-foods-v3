import { Product } from '../types';
import { COOKIE_PRODUCTS } from './catalog/cookies';
import { LADDOO_PRODUCTS } from './catalog/laddoos';
import { HEALTH_MIX_PRODUCTS } from './catalog/healthMixes';
import { SNACK_PRODUCTS } from './catalog/snacks';
import { MASALA_PRODUCTS } from './catalog/masalas';
import { MILLET_FOOD_PRODUCTS } from './catalog/milletFoods';
import { OTHER_PRODUCTS } from './catalog/otherProducts';

export * from './categories';
export * from '../utils/productImages';

export const PRODUCTS: Product[] = [
  ...COOKIE_PRODUCTS,
  ...LADDOO_PRODUCTS,
  ...HEALTH_MIX_PRODUCTS,
  ...SNACK_PRODUCTS,
  ...MASALA_PRODUCTS,
  ...MILLET_FOOD_PRODUCTS,
  ...OTHER_PRODUCTS
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return PRODUCTS.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  if (!categorySlug || categorySlug === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.categorySlug === categorySlug);
};

export const getFeaturedHomeProducts = (categorySlug: string, limit = 4): Product[] => {
  const catProducts = PRODUCTS.filter(p => p.categorySlug === categorySlug);
  const featured = catProducts.filter(p => p.isFeaturedOnHome || p.isBestSeller);
  if (featured.length >= limit) return featured.slice(0, limit);
  return catProducts.slice(0, limit);
};

export const getRelatedProducts = (currentProduct: Product, limit = 4): Product[] => {
  // First prefer same category
  const sameCategory = PRODUCTS.filter(
    p => p.categorySlug === currentProduct.categorySlug && p.id !== currentProduct.id
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  // Complement with other best sellers
  const others = PRODUCTS.filter(
    p => p.categorySlug !== currentProduct.categorySlug && p.id !== currentProduct.id
  );
  return [...sameCategory, ...others].slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      (p.tamilName && p.tamilName.includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.ingredients.some(ing => ing.toLowerCase().includes(q)) ||
      (p.benefits && p.benefits.some(b => b.toLowerCase().includes(q)))
    );
  });
};

export const REVIEWS_DATA = [
  {
    id: 'rev-1',
    name: 'Priya R.',
    location: 'Anna Nagar, Chennai',
    productName: 'Ragi Cookies & ABC Malt',
    rating: 5,
    comment: 'The Ragi Cookies are a revelation! Crisp, genuinely not made with maida, and with the subtle sweetness of palm jaggery. My 5-year old drinks the ABC Malt every morning now.',
    verified: true,
    date: '2 days ago'
  },
  {
    id: 'rev-2',
    name: 'Karthik Muthusamy',
    location: 'Race Course, Coimbatore',
    productName: 'Gunpowder Idli Podi',
    rating: 5,
    comment: 'Reminds me of my grandmother’s kitchen in Erode. The slow roast aroma of sesame and lentils with gingelly oil is simply unmatched by commercial brands.',
    verified: true,
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    name: 'Meenakshi Sundaram',
    location: 'Adyar, Chennai',
    productName: 'Traditional Kai Murukku & Adhirasam',
    rating: 5,
    comment: 'The Kai Murukku was fresh, extraordinarily crunchy without being oily. The Adhirasam has that soft fermented jaggery core just like festival time.',
    verified: true,
    date: '2 weeks ago'
  },
  {
    id: 'rev-4',
    name: 'Anandhi Venkatesh',
    location: 'T. Nagar, Chennai',
    productName: 'Millets Health Mix (Sathu Maavu)',
    rating: 5,
    comment: '18 sprouted grains clearly make a difference. The porridge fills you up naturally till lunchtime. So happy to support authentic Tamil farm producers.',
    verified: true,
    date: '3 weeks ago'
  }
];

export const CHENNAI_DELIVERY_AREAS = [
  { name: 'Anna Nagar', pincode: '600040', days: 'Same Day / Next Day', hub: 'Central' },
  { name: 'Adyar', pincode: '600020', days: 'Same Day / Next Day', hub: 'South' },
  { name: 'T. Nagar', pincode: '600017', days: 'Same Day / Next Day', hub: 'Central' },
  { name: 'Velachery', pincode: '600042', days: 'Next Day Morning', hub: 'South' },
  { name: 'OMR / Thoraipakkam', pincode: '600097', days: 'Next Day Morning', hub: 'IT Corridor' },
  { name: 'Sholinganallur', pincode: '600119', days: 'Next Day Morning', hub: 'IT Corridor' },
  { name: 'Guindy', pincode: '600032', days: 'Same Day / Next Day', hub: 'Central' },
  { name: 'Tambaram', pincode: '600045', days: 'Next Day Delivery', hub: 'South-West' },
  { name: 'Porur', pincode: '600116', days: 'Next Day Delivery', hub: 'West' },
  { name: 'Mylapore', pincode: '600004', days: 'Same Day / Next Day', hub: 'Heritage Hub' }
];
