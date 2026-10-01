import { CategoryInfo } from '../types';
import {
  ASSET_COOKIES,
  ASSET_LADDOOS,
  ASSET_HEALTH_MALT,
  ASSET_SNACKS_SPREAD,
  ASSET_RASAM_SAMBAR_SPICES,
  ASSET_SPROUTED_FLOUR,
  ASSET_GULKAND_PRESERVE
} from '../utils/productImages';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Millet Cookies',
    slug: 'millet-cookies',
    title: 'Millet Cookies',
    tamilTitle: 'சிறுதானிய குக்கீஸ்',
    description: '100% Maida-free, baked with dark palm jaggery, pure country butter, and medicinal herbs. Wholesome everyday tea-time crunch for the whole family.',
    heroImage: ASSET_COOKIES,
    itemCount: 13,
    accent: '#B5832A'
  },
  {
    id: 'Millet Laddoos',
    slug: 'millet-laddoos',
    title: 'Millet Laddoos',
    tamilTitle: 'சிறுதானிய லட்டு',
    description: 'Little balls of tradition. Hand-rolled with pure desi cow ghee, aged karuppatti (palm jaggery), and freshly roasted ancestral millets.',
    heroImage: ASSET_LADDOOS,
    itemCount: 10,
    accent: '#522D1B'
  },
  {
    id: 'Health Mixes & Malts',
    slug: 'health-mixes-malts',
    title: 'Health Mixes & Malts',
    tamilTitle: 'சத்து மாவு & மால்ட்',
    description: 'Nutrient-rich morning porridges and instant hot malts prepared from 18 sprouted grains, farm beetroots, apples, and almonds. Zero synthetic chemicals.',
    heroImage: ASSET_HEALTH_MALT,
    itemCount: 15,
    accent: '#8C321D'
  },
  {
    id: 'Traditional Snacks',
    slug: 'traditional-snacks',
    title: 'Traditional Snacks',
    tamilTitle: 'பாரம்பரிய நொறுக்குத்தீனி',
    description: 'Hand-twisted Kai Murukku, Crunchy Nei Seedai, and fermented Ghee Adhirasam prepared in cold-pressed oils following authentic Kongu recipes.',
    heroImage: ASSET_SNACKS_SPREAD,
    itemCount: 6,
    accent: '#733E26'
  },
  {
    id: 'Masalas & Podis',
    slug: 'masalas-podis',
    title: 'Masalas & Podis',
    tamilTitle: 'அரைத்த பொடி & மசாலா',
    description: 'The aromatic heart of every South Indian kitchen. Firewood-roasted spices, coarse Gunpowder Idli Podi, Salem turmeric sambar, and herbal rasam powders.',
    heroImage: ASSET_RASAM_SAMBAR_SPICES,
    itemCount: 16,
    accent: '#8C321D'
  },
  {
    id: 'Millet Foods',
    slug: 'millet-foods',
    title: 'Millet Foods',
    tamilTitle: 'பாரம்பரிய சிறுதானியங்கள்',
    description: 'Stone-ground sprouted flours, unpolished heirloom millets, multi-millet noodles, and healthy wave chips for daily nutritious meals.',
    heroImage: ASSET_SPROUTED_FLOUR,
    itemCount: 13,
    accent: '#183E2D'
  },
  {
    id: 'Other Products',
    slug: 'other-products',
    title: 'Other Products',
    tamilTitle: 'மற்ற இயற்கை பொருட்கள்',
    description: 'Speciality preserves, authentic Damask rose Roja Amudham (Gulkand), organic tamarind, pure black dates, and refreshing Paalnila drinks.',
    heroImage: ASSET_GULKAND_PRESERVE,
    itemCount: 6,
    accent: '#751E2B'
  }
];

export const getCategoryBySlug = (slug: string): CategoryInfo | undefined => {
  return CATEGORIES.find(c => c.slug === slug);
};
