import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { ASSET_HERO_SPREAD } from '../data/products';
import { useRouter } from '../context/RouterContext';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E8DED0]/60">
      {/* Subtle organic background foliage glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#183E2D]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CFA049]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Story & Headline */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            {/* Small eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#183E2D] uppercase">
              <span className="w-6 h-[1.5px] bg-[#CFA049]" />
              <span>From Our Kitchen To Your Home</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#183E2D] leading-[1.08] tracking-tight">
                GOOD FOOD.
                <br />
                <span className="text-[#522D1B]">HAPPIER FAMILIES.</span>
              </h1>
            </div>

            {/* Supporting Serif / Script Accent */}
            <p className="font-serif italic text-xl md:text-2xl text-[#8C321D] font-medium tracking-wide">
              Pure • Traditional • Healthy • Homemade
            </p>

            {/* Descriptive Body */}
            <p className="text-base text-[#522D1B]/80 max-w-xl leading-relaxed">
              Handcrafted in Nanjai Uthukuli, Erode. We stone-grind nutrient-rich native millets,
              roast on slow firewood, and blend pure farm ingredients with age-old Tamil kitchen wisdom.
              Zero preservatives, zero chemicals, pure nourishment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/shop')}
                className="inline-flex items-center gap-2.5 bg-[#183E2D] hover:bg-[#20503A] text-[#FAF7F2] font-semibold text-xs py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer group"
              >
                <span>Shop All Foods</span>
                <ArrowRight className="w-4 h-4 text-[#CFA049] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate('/categories/millet-cookies')}
                className="inline-flex items-center gap-2 border border-[#522D1B]/30 hover:border-[#183E2D] text-[#522D1B] hover:text-[#183E2D] font-semibold text-xs py-3.5 px-6 rounded-xl transition-all hover:bg-[#E8DED0]/40 cursor-pointer"
              >
                <span>Explore Millet Cookies</span>
              </button>
            </div>

            {/* Three key pillars */}
            <div className="pt-4 border-t border-[#E8DED0] flex flex-wrap gap-6 text-xs text-[#522D1B]/85">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#183E2D]" />
                <span className="font-medium">100% Maida & Chemical Free</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#CFA049]" />
                <span className="font-medium">Wood-Pressed Oils & Pure Ghee</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8C321D]" />
                <span className="font-medium">Direct Erode Farm Harvest</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Food Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative border frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#CFA049]/40 transform -rotate-1 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#E8DED0]">
                <img
                  src={ASSET_HERO_SPREAD}
                  alt="Vendhan traditional South Indian millet foods, cookies, and snacks"
                  referrerPolicy="no-referrer"
                  className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Content Tag on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-md p-4 rounded-xl border border-[#E8DED0] shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#8C321D] tracking-wider uppercase">
                      Signature Kitchen Collection
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#183E2D]">
                      Authentic Millet Laddoos & Sathu Maavu
                    </h3>
                  </div>
                  <button
                    onClick={() => navigate('/categories/millet-laddoos')}
                    className="p-2.5 bg-[#183E2D] hover:bg-[#20503A] text-white rounded-lg transition-transform active:scale-95 cursor-pointer"
                    aria-label="View millet laddoos collection"
                  >
                    <ArrowRight className="w-4 h-4 text-[#CFA049]" />
                  </button>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 bg-[#FAF7F2] border border-[#E8DED0] px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#183E2D]" />
                <span className="text-xs font-semibold text-[#183E2D]">18 Sprouted Grains</span>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3 -right-3 bg-[#183E2D] text-[#FAF7F2] px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-[#CFA049]/40">
                <span className="text-xs font-serif italic text-[#CFA049]">Handmade in Erode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
