import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const BestSellersCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#8C321D] uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>Favourites From Vendhan</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
              Beloved by South Indian Kitchens
            </h2>
            <p className="text-xs sm:text-sm text-[#522D1B]/80">
              Loved for their traditional taste, stone-ground texture, and honest wholesome ingredients.
            </p>
          </div>

          {/* Navigation Arrows for Carousel */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#522D1B]/30 hover:border-[#183E2D] hover:bg-[#183E2D] hover:text-white text-[#522D1B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#522D1B]/30 hover:border-[#183E2D] hover:bg-[#183E2D] hover:text-white text-[#522D1B] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {bestSellers.map(product => (
            <div
              key={product.id}
              className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
