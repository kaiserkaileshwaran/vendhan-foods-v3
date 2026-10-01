import React from 'react';
import { useRouter } from '../context/RouterContext';
import { getFeaturedHomeProducts } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowRight, Flame, Cookie, Sun, Utensils } from 'lucide-react';

export const CategoryFeaturedSections: React.FC = () => {
  const { navigate } = useRouter();

  const cookies = getFeaturedHomeProducts('millet-cookies', 6);
  const snacks = getFeaturedHomeProducts('traditional-snacks', 4);
  const laddoos = getFeaturedHomeProducts('millet-laddoos', 6);
  const healthMixes = getFeaturedHomeProducts('health-mixes-malts', 6);
  const masalas = getFeaturedHomeProducts('masalas-podis', 6);

  return (
    <div className="space-y-0">
      {/* 1. TRADITIONAL SNACKS SECTION */}
      <section id="snacks-section" className="py-16 md:py-24 bg-[#F4EEE3] border-b border-[#E8DED0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8C321D] uppercase">
                <Flame className="w-3.5 h-3.5" />
                <span>Kongu Nadu Evenings</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
                Handmade Traditional Snacks
              </h2>
              <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                Crisped in cold-pressed groundnut oil and pure cow butter.
                Traditional Kai Murukku, Crunchy Nei Seedai, chewy Ghee Adhirasam, and fresh Thengai Burfi.
              </p>
            </div>

            <button
              onClick={() => navigate('/categories/traditional-snacks')}
              className="inline-flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All Snacks (6)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFA049]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {snacks.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. MILLET COOKIES SECTION */}
      <section id="cookies-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#B5832A] uppercase">
                <Cookie className="w-3.5 h-3.5" />
                <span>Zero Maida · Baked with Palm Jaggery</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
                MILLET COOKIES
              </h2>
              <p className="font-serif italic text-base text-[#8C321D]">
                Crunchy • Healthy • Tasty
              </p>
              <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                Slow-baked with palm jaggery, pure country butter, and stone-ground native millets.
                Enjoy clean guilt-free tea crunch rich in natural calcium and iron.
              </p>
            </div>

            <button
              onClick={() => navigate('/categories/millet-cookies')}
              className="inline-flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All Cookies (13)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFA049]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cookies.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. MILLET LADDOO SECTION */}
      <section id="laddoos-section" className="py-16 md:py-24 bg-[#F4EEE3] border-b border-[#E8DED0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-[#8C321D] uppercase block">
                Pure Cow Ghee & Dark Palm Jaggery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
                LITTLE BALLS OF TRADITION
              </h2>
              <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                Hand-rolled with roasted pearl millet, sprouted ragi, native sesame, and dry fruits.
                Ancient stamina balls prepared following Sangam recipes.
              </p>
            </div>

            <button
              onClick={() => navigate('/categories/millet-laddoos')}
              className="inline-flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All Laddoos (10)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFA049]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {laddoos.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HEALTH MIX & MALTS SECTION */}
      <section id="health-mix-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#183E2D] uppercase">
                <Sun className="w-3.5 h-3.5 text-[#CFA049]" />
                <span>Morning Nutrition Ritual</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
                Health Mixes & Natural Malts
              </h2>
              <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                Replace chemical-laden malt drinks with pure farm Sathu Maavu, ABC Malt,
                Beetroot Malt, and Sprouted Ragi Malt. 100% natural, zero synthetic additives.
              </p>
            </div>

            <button
              onClick={() => navigate('/categories/health-mixes-malts')}
              className="inline-flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All Health Mixes (15)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFA049]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {healthMixes.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MASALAS & PODIS SECTION */}
      <section id="masalas-section" className="py-16 md:py-24 bg-[#F4EEE3] border-b border-[#E8DED0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8C321D] uppercase">
                <Utensils className="w-3.5 h-3.5" />
                <span>Firewood Roasted Spices</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
                THE HEART OF EVERY KITCHEN
              </h2>
              <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                Stone-ground podis and firewood-roasted masalas. Gunpowder Idli Podi,
                fragrant Sambar Thool, soothing Rasam Podi, and digestive garlic and horsegram powders.
              </p>
            </div>

            <button
              onClick={() => navigate('/categories/masalas-podis')}
              className="inline-flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 self-start md:self-auto"
            >
              <span>Explore All Masalas & Podis (16)</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFA049]" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {masalas.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
