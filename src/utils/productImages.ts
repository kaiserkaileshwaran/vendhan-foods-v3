import heroSpread from '../assets/images/hero_vendhan_millet_spread_1790827037653.jpg';
import cookies from '../assets/images/product_millet_cookies_stack_1790827050435.jpg';
import ragiDarkCookies from '../assets/images/product_ragi_dark_cookies_1790829442907.jpg';
import thinaiCookies from '../assets/images/product_thinai_foxtail_cookies_1790829761512.jpg';
import blackRiceCookies from '../assets/images/product_karuppu_gavuni_black_rice_1790829817908.jpg';
import snacks from '../assets/images/product_traditional_snacks_murukku_1790827061330.jpg';
import snacksSpread from '../assets/images/category_traditional_snacks_spread_1790829792380.jpg';
import adhirasamBurfi from '../assets/images/product_ghee_adhirasam_burfi_1790829492485.jpg';
import healthMalt from '../assets/images/product_health_malt_mix_1790827073037.jpg';
import beetrootMalt from '../assets/images/product_beetroot_abc_malt_1790829455733.jpg';
import laddoos from '../assets/images/product_millet_laddoos_brass_plate_1790828641679.jpg';
import sesameLaddoos from '../assets/images/product_sesame_ellu_urundai_1790829480672.jpg';
import spices from '../assets/images/product_spices_masala_bowls_1790828662687.jpg';
import rasamSambarSpices from '../assets/images/product_rasam_sambar_spices_1790829805635.jpg';
import idliPodi from '../assets/images/product_idli_podi_sesame_oil_1790829466104.jpg';
import noodlesChips from '../assets/images/product_millet_noodles_chips_1790828673590.jpg';
import waveChips from '../assets/images/product_millet_wave_chips_1790830608619.jpg';
import milletPasta from '../assets/images/product_millet_pasta_vermicelli_1790830634589.jpg';
import rawMilletGrains from '../assets/images/product_raw_millet_grains_bowl_1790830622248.jpg';
import sproutedFlour from '../assets/images/product_sprouted_millet_flour_1790829778619.jpg';
import gulkandPreserve from '../assets/images/product_roja_amudham_gulkand_1790828684930.jpg';
import blackDates from '../assets/images/product_black_dates_1790830524843.jpg';
import blackRaisins from '../assets/images/product_black_raisins_1790830536337.jpg';
import tamarindPuli from '../assets/images/product_organic_tamarind_puli_1790830561547.jpg';
import mangoThokku from '../assets/images/product_mango_thokku_preserve_1790830575912.jpg';
import coconutDrink from '../assets/images/product_coconut_milk_drink_1790830590367.jpg';

export const ASSET_HERO_SPREAD = heroSpread;

// Cookies
export const ASSET_COOKIES = cookies;
export const ASSET_RAGI_DARK_COOKIES = ragiDarkCookies;
export const ASSET_THINAI_COOKIES = thinaiCookies;
export const ASSET_BLACK_RICE_COOKIES = blackRiceCookies;

// Snacks
export const ASSET_SNACKS = snacks;
export const ASSET_SNACKS_SPREAD = snacksSpread;
export const ASSET_ADHIRASAM_BURFI = adhirasamBurfi;

// Health Mixes & Malts
export const ASSET_HEALTH_MALT = healthMalt;
export const ASSET_BEETROOT_MALT = beetrootMalt;

// Laddoos
export const ASSET_LADDOOS = laddoos;
export const ASSET_SESAME_LADDOOS = sesameLaddoos;

// Spices, Masalas & Podis
export const ASSET_SPICES = spices;
export const ASSET_RASAM_SAMBAR_SPICES = rasamSambarSpices;
export const ASSET_IDLI_PODI = idliPodi;

// Millet Foods & Grains
export const ASSET_NOODLES_CHIPS = noodlesChips;
export const ASSET_WAVE_CHIPS = waveChips;
export const ASSET_MILLET_PASTA = milletPasta;
export const ASSET_RAW_MILLET_GRAINS = rawMilletGrains;
export const ASSET_SPROUTED_FLOUR = sproutedFlour;

// Preserves & Special Pantry
export const ASSET_GULKAND_PRESERVE = gulkandPreserve;
export const ASSET_BLACK_DATES = blackDates;
export const ASSET_BLACK_RAISINS = blackRaisins;
export const ASSET_TAMARIND_PULI = tamarindPuli;
export const ASSET_MANGO_THOKKU = mangoThokku;
export const ASSET_COCONUT_DRINK = coconutDrink;

export interface FoodVisualConfig {
  slug: string;
  name: string;
  tamilName?: string;
  category: string;
  photoBase: string;
  tintOverlay?: string;
  ingredientTag?: string;
  accentColor?: string;
}

export interface ProductSVGConfig {
  slug: string;
  name: string;
  tamilName?: string;
  category: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  iconSymbol?: string;
  subtitle?: string;
}

/**
 * Returns the direct high-resolution food photography asset URL.
 */
export function generateFoodVisual(config: FoodVisualConfig): string {
  return config.photoBase;
}

/**
 * Resolves to the dedicated high-resolution photography asset for the product category or slug.
 */
export function generateProductSVG(config: ProductSVGConfig): string {
  const slug = (config.slug || '').toLowerCase();
  const cat = (config.category || '').toLowerCase();

  if (slug.includes('date')) return ASSET_BLACK_DATES;
  if (slug.includes('raisin') || slug.includes('grape')) return ASSET_BLACK_RAISINS;
  if (slug.includes('tamarind') || slug.includes('puli')) return ASSET_TAMARIND_PULI;
  if (slug.includes('mango') || slug.includes('thokku')) return ASSET_MANGO_THOKKU;
  if (slug.includes('coconut') || slug.includes('milk') || slug.includes('paal')) return ASSET_COCONUT_DRINK;
  if (slug.includes('chip')) return ASSET_WAVE_CHIPS;
  if (slug.includes('pasta') || slug.includes('vermicelli') || slug.includes('semiya')) return ASSET_MILLET_PASTA;
  if (slug.includes('grain')) return ASSET_RAW_MILLET_GRAINS;

  if (cat.includes('cookie')) return ASSET_COOKIES;
  if (cat.includes('laddoo')) return ASSET_LADDOOS;
  if (cat.includes('snack')) return ASSET_SNACKS;
  if (cat.includes('masala') || cat.includes('podi')) return ASSET_SPICES;
  if (cat.includes('malt') || cat.includes('health')) return ASSET_HEALTH_MALT;
  if (cat.includes('millet')) return ASSET_SPROUTED_FLOUR;
  return ASSET_GULKAND_PRESERVE;
}
