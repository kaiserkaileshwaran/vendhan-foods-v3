import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#8C321D] uppercase block">
            Customer Warmth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183E2D]">
            LOVED BY FAMILIES
          </h2>
          <p className="text-xs sm:text-sm text-[#522D1B]/80">
            Real feedback from households who brought Vendhan home across Tamil Nadu and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map(rev => (
            <div
              key={rev.id}
              className="bg-[#F4EEE3]/50 p-6 rounded-2xl border border-[#E8DED0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#B5832A]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#183E2D]/20" />
                </div>

                <p className="text-xs text-[#522D1B]/90 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DED0]/70 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#183E2D]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-[#733E26] block">
                    {rev.location}
                  </span>
                </div>
                {rev.verified && (
                  <div className="flex items-center gap-1 text-[10px] text-[#183E2D] font-medium">
                    <CheckCircle className="w-3 h-3 text-[#20503A]" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
