import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useRouter } from '../context/RouterContext';

export const CategoryShowcase: React.FC = () => {
  const { navigate } = useRouter();

  const handleSelect = (categorySlug: string) => {
    navigate(`/categories/${categorySlug}`);
  };

  return (
    <section id="explore-categories" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#183E2D] uppercase block">
              Explore Our Kitchen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183E2D]">
              Something Good for Every Table
            </h2>
            <p className="text-sm md:text-base text-[#522D1B]/80 max-w-xl">
              From dawn breakfast health mixes to twilight tea snacks and hearty lunch masalas,
              Vendhan brings traditional Tamil taste crafted with natural grains.
            </p>
          </div>
          <span className="text-xs font-serif italic text-[#8C321D] font-medium hidden md:block">
            Stone-ground in small batches • 100% Homemade
          </span>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.slice(0, 6).map(cat => (
            <div
              key={cat.id}
              onClick={() => handleSelect(cat.slug)}
              className="group relative overflow-hidden rounded-2xl bg-[#F4EEE3] border border-[#E8DED0] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-[360px]"
            >
              {/* Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={cat.heroImage}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183E2D]/95 via-[#183E2D]/50 to-transparent group-hover:via-[#183E2D]/60 transition-colors" />
              </div>

              {/* Top metadata */}
              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="text-[11px] font-semibold tracking-wider text-[#FAF7F2]/90 uppercase">
                  {cat.itemCount} Recipes
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/20 backdrop-blur-md flex items-center justify-center text-[#FAF7F2] group-hover:bg-[#CFA049] group-hover:text-[#183E2D] group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-6 space-y-2">
                <span className="text-xs font-serif italic text-[#CFA049] tracking-wide block">
                  {cat.tamilTitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#FAF7F2] group-hover:translate-x-1 transition-transform">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#E8DED0]/90 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center text-xs font-semibold text-[#CFA049] group-hover:underline decoration-[#CFA049] underline-offset-4">
                    Explore collection →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
