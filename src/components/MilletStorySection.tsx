import React, { useState } from 'react';
import { ASSET_SPROUTED_FLOUR } from '../data/products';
import { Wheat, Sparkles, CheckCircle2 } from 'lucide-react';

interface MilletInfo {
  name: string;
  tamilName: string;
  english: string;
  nutrient: string;
  folklore: string;
  highlight: string;
}

const MILLETS: MilletInfo[] = [
  {
    name: 'RAGI',
    tamilName: 'கேழ்வரகு',
    english: 'Finger Millet',
    nutrient: '344mg Calcium / 100g',
    folklore: 'The highest natural calcium source in the plant kingdom. Traditionally given to growing toddlers and elders to build unbreakable bone density.',
    highlight: 'Sprouted for 24h for optimal bio-absorption'
  },
  {
    name: 'KAMBU',
    tamilName: 'கம்பு',
    english: 'Pearl Millet',
    nutrient: '8mg Iron / 100g',
    folklore: 'Kongu farmers endured harsh sun by drinking fermented Kambu Koozh. Rich in magnesium and zinc, it cools the body while delivering sustained energy.',
    highlight: 'Naturally cooling summer stamina grain'
  },
  {
    name: 'THINAI',
    tamilName: 'தினை',
    english: 'Foxtail Millet',
    nutrient: 'Low Glycemic Index (GI 54)',
    folklore: 'Praised in Sangam literature as the food of Lord Murugan and Kurinji mountain tribes. Nourishes the nervous system and keeps blood sugar steady.',
    highlight: 'Rich in dietary fiber and B-complex'
  },
  {
    name: 'SAMAI',
    tamilName: 'சாமை',
    english: 'Little Millet',
    nutrient: 'High Satiety Minerals',
    folklore: 'Delicate grain with immense medicinal value. Recommended in Siddha medicine for metabolic wellness and cleansing visceral fat.',
    highlight: 'Cooks light and gentle on sensitive stomachs'
  },
  {
    name: 'KUTHIRAI VALI',
    tamilName: 'குதிரைவாலி',
    english: 'Barnyard Millet',
    nutrient: '18.6g Dietary Fiber / 100g',
    folklore: 'The highest fiber of all millets. Named for its plume that resembles a galloping horse’s tail, symbolizing strength and swift vitality.',
    highlight: '6x more fiber than polished white rice'
  }
];

export const MilletStorySection: React.FC = () => {
  const [selectedMillet, setSelectedMillet] = useState<number>(0);

  return (
    <section id="millet-story" className="py-16 md:py-24 bg-[#183E2D] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#CFA049]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CFA049] uppercase">
              <Wheat className="w-4 h-4" />
              <span>Ancient Heritage Grains</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
              MILLETS FOR A
              <br />
              <span className="text-[#CFA049]">HEALTHIER TOMORROW</span>
            </h2>

            <p className="text-sm md:text-base text-[#E8DED0]/90 leading-relaxed">
              Long before industrial milling flooded our plates with polished white rice and refined maida,
              South India thrived on drought-hardy, nutrient-rich Siruthaniyangal (millets).
              At Vendhan, we partner with smallholder Kongu farmers to bring these ancestral grains back to your family table.
            </p>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#CFA049]/30">
              <img
                src={ASSET_SPROUTED_FLOUR}
                alt="Native Tamil millet harvest"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#E8DED0]">
                <span className="font-medium">Direct Sourced • Erode Region</span>
                <span className="text-[#CFA049] font-serif italic">100% Pesticide Free</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Millet Information Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#FAF7F2]/20">
              <span className="text-xs uppercase tracking-wider text-[#CFA049] font-semibold">
                Tap to explore grain profile
              </span>
              <span className="text-xs text-[#E8DED0]/70">5 Sacred Millets</span>
            </div>

            <div className="space-y-3">
              {MILLETS.map((millet, idx) => {
                const isActive = selectedMillet === idx;
                return (
                  <div
                    key={millet.name}
                    onClick={() => setSelectedMillet(idx)}
                    className={`p-4 md:p-5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FAF7F2] text-[#183E2D] border-[#CFA049] shadow-lg scale-[1.01]'
                        : 'bg-[#FAF7F2]/5 hover:bg-[#FAF7F2]/10 text-[#FAF7F2] border-[#FAF7F2]/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-serif text-xl font-bold tracking-wide">
                          {millet.name}
                        </h3>
                        <span className={`text-xs ${isActive ? 'text-[#8C321D]' : 'text-[#CFA049]'}`}>
                          ({millet.tamilName} / {millet.english})
                        </span>
                      </div>
                      <span className={`text-xs font-semibold tabular-nums ${isActive ? 'text-[#183E2D]' : 'text-[#CFA049]'}`}>
                        {millet.nutrient}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-[#183E2D]/15 space-y-2 text-xs leading-relaxed text-[#522D1B]">
                        <p>{millet.folklore}</p>
                        <div className="flex items-center gap-1.5 font-medium text-[#183E2D]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#20503A]" />
                          <span>{millet.highlight}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
