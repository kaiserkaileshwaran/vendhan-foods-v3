import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { ASSET_HERO_SPREAD, ASSET_COOKIES, ASSET_SNACKS, ASSET_HEALTH_MALT } from '../data/products';

const SOCIAL_ITEMS = [
  {
    image: ASSET_COOKIES,
    caption: 'Baked with organic palm jaggery & sprouted ragi. #MilletCookies #VendhanFoods'
  },
  {
    image: ASSET_SNACKS,
    caption: 'The rhythmic spiral of handmade Kai Murukku. Traditional taste from Erode. #Murukku'
  },
  {
    image: ASSET_HEALTH_MALT,
    caption: '18 grains, zero chemicals. Morning nourishment the way our ancestors intended. #SathuMaavu'
  },
  {
    image: ASSET_HERO_SPREAD,
    caption: 'From our kitchen in Nanjai Uthukuli to your family dining table. #PureTamilFoods'
  }
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#183E2D] uppercase">
              <Instagram className="w-3.5 h-3.5" />
              <span>@vendhanfoods</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183E2D]">
              Moments From Our Kitchen
            </h2>
          </div>
          <span className="text-xs text-[#733E26] hover:text-[#183E2D] transition-colors font-medium flex items-center gap-1 cursor-pointer">
            Follow our culinary journey <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SOCIAL_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#E8DED0] shadow-sm cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#183E2D]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-[#FAF7F2]">
                <Instagram className="w-5 h-5 self-end text-[#CFA049]" />
                <p className="text-[11px] leading-relaxed line-clamp-3">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
