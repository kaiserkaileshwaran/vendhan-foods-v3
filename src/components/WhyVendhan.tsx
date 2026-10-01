import React from 'react';
import { Leaf, Ban, Palette, Wheat, BookOpen, Heart } from 'lucide-react';

const REASONS = [
  {
    icon: Leaf,
    title: 'PURE INGREDIENTS',
    desc: 'Direct harvest from smallholder farms in Erode. Native unpolished millets, cold-pressed oils, and pure A2 cow ghee.'
  },
  {
    icon: Ban,
    title: 'NO PRESERVATIVES',
    desc: 'Zero chemical stabilizers, MSG, or artificial shelf-life extenders. Cooked fresh in small weekly batches.'
  },
  {
    icon: Palette,
    title: 'NO ARTIFICIAL COLOURS',
    desc: 'Deep natural colors derived only from Salem golden turmeric, dark palm jaggery, beetroot, and Guntur chillies.'
  },
  {
    icon: Wheat,
    title: 'NO MAIDA',
    desc: 'Completely maida-free cookies and snacks. We use whole sprouted ragi, kambu, and native whole grains.'
  },
  {
    icon: BookOpen,
    title: 'TRADITIONAL RECIPES',
    desc: 'Time-tested recipes handed down through generations of Tamil homes, roasted on wood fires and stone-ground.'
  },
  {
    icon: Heart,
    title: 'MADE WITH CARE',
    desc: 'Prepared with the genuine care of a mother’s kitchen in Nanjai Uthukuli, ensuring your family eats only clean goodness.'
  }
];

export const WhyVendhan: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-semibold tracking-widest text-[#183E2D] uppercase block">
            Our Kitchen Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183E2D]">
            Why Families Choose Vendhan
          </h2>
          <p className="text-xs sm:text-sm text-[#522D1B]/80">
            In an era of industrial food shortcuts, we stand steadfast by ancient culinary principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 bg-[#F4EEE3]/60 hover:bg-[#FAF7F2] rounded-2xl border border-[#E8DED0] hover:border-[#183E2D]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#183E2D]/10 text-[#183E2D] group-hover:bg-[#183E2D] group-hover:text-[#FAF7F2] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#183E2D] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
