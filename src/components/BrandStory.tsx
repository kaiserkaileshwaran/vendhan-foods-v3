import React from 'react';
import { HeartHandshake } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="brand-story" className="py-20 md:py-28 bg-[#183E2D] text-[#FAF7F2] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFA049]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#CFA049] uppercase">
            <HeartHandshake className="w-4 h-4" />
            <span>Our Kitchen In Erode</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
            FROM OUR KITCHEN
            <br />
            <span className="text-[#CFA049]">TO YOUR HOME</span>
          </h2>

          <p className="font-serif italic text-lg md:text-xl text-[#E8DED0]/90">
            "Food prepared with pure intent and honest ingredients creates healthy minds and happier homes."
          </p>

          <p className="text-sm md:text-base text-[#E8DED0]/80 leading-relaxed pt-2">
            Vendhan began in Nanjai Uthukuli, Erode, rooted in the fertile agricultural belt of the Bhavani River.
            We observed everyday dining tables losing touch with Tamil Nadu’s nutrient-rich millet heritage and honest homemade foods.
            Commercial biscuits loaded with palm oil and maida replaced wholesome evening snacks; chemical malt powders replaced traditional Sathu Maavu.
          </p>

          <p className="text-sm md:text-base text-[#E8DED0]/80 leading-relaxed">
            Every product we make—whether hand-twisting crunchy Kai Murukku, rolling warm Kambu Laddoos with pure cow ghee,
            or baking palm jaggery Ragi Cookies—is prepared exactly the way a mother prepares food for her own family.
          </p>

          <div className="pt-6 flex justify-center items-center gap-6 text-xs text-[#CFA049] tracking-widest uppercase font-semibold">
            <span>Nanjai Uthukuli</span>
            <span>•</span>
            <span>Erode</span>
            <span>•</span>
            <span>Tamil Nadu</span>
          </div>
        </div>
      </div>
    </section>
  );
};
