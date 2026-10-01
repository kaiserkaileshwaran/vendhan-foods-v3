import React from 'react';

const INGREDIENTS = [
  'SPROUTED RAGI',
  'NATIVE KAMBU',
  'UNPOLISHED THINAI',
  'SAMAI GRAINS',
  'MAPILAI SAMBA',
  'KARUPPATTI PALM JAGGERY',
  'COLD-PRESSED GINGELLY OIL',
  'PURE A2 COW GHEE',
  'BLACK SESAME',
  'NATIVE COUNTRY PEANUT',
  'FRESH POLLACHI COCONUT',
  'SALEM TURMERIC',
  'TELLICHERRY BLACK PEPPER'
];

export const IngredientMarquee: React.FC = () => {
  return (
    <div className="py-4 bg-[#183E2D] text-[#FAF7F2] overflow-hidden border-y border-[#CFA049]/30">
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {INGREDIENTS.concat(INGREDIENTS).map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-serif text-sm tracking-[0.2em] font-semibold text-[#FAF7F2]">
              {item}
            </span>
            <span className="text-[#CFA049] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
