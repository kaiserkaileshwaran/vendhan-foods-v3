import React from 'react';
import { Truck, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CHENNAI_DELIVERY_AREAS } from '../data/products';

export const ChennaiDelivery: React.FC = () => {
  return (
    <section id="chennai-delivery" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8DED0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Promises */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#8C321D] uppercase">
              <Truck className="w-4 h-4" />
              <span>Direct Express Logistics</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183E2D] leading-tight">
              GOODNESS,
              <br />
              <span className="text-[#522D1B]">DELIVERED ACROSS CHENNAI</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#522D1B]/80 leading-relaxed">
              Crafted fresh in our Erode kitchen and dispatched promptly to homes across the Chennai metropolitan area.
              Vacuum-sealed in food-grade eco pouches to preserve authentic crunch and aroma.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 bg-[#F4EEE3]/60 rounded-xl border border-[#E8DED0]">
                <Clock className="w-4 h-4 text-[#183E2D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#183E2D] block">Fast Metro Transit</span>
                  <span className="text-[#522D1B]/80">Orders packed daily at 4:00 PM for overnight transit to Chennai delivery hubs.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-[#F4EEE3]/60 rounded-xl border border-[#E8DED0]">
                <ShieldCheck className="w-4 h-4 text-[#183E2D] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#183E2D] block">Aroma-Lock Fresh Packaging</span>
                  <span className="text-[#522D1B]/80">Zero moisture seepage; keeps murukku and cookies crisp for 60+ days naturally.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Delivery Hubs Grid */}
          <div className="lg:col-span-7 bg-[#F4EEE3] p-6 sm:p-8 rounded-3xl border border-[#E8DED0] shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DED0] mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C321D]" />
                <span className="font-serif text-lg font-bold text-[#183E2D]">
                  Chennai Priority Hubs & Pin Codes
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#183E2D] bg-[#183E2D]/10 px-2.5 py-1 rounded">
                Active Coverage
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
              {CHENNAI_DELIVERY_AREAS.map(area => (
                <div
                  key={area.name}
                  className="bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E8DED0] hover:border-[#183E2D]/40 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-xs text-[#183E2D]">
                      {area.name}
                    </h4>
                    <span className="text-[11px] text-[#733E26]/80 font-mono">
                      PIN: {area.pincode}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-[#20503A] bg-[#20503A]/10 px-2 py-0.5 rounded">
                    {area.days}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#733E26]/70 mt-5 text-center">
              *Also delivering across all Tamil Nadu districts, Bengaluru, and pan-India via express courier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
