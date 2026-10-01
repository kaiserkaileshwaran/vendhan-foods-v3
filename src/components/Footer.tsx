import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#183E2D] text-[#FAF7F2] pt-16 pb-24 lg:pb-16 border-t border-[#CFA049]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FAF7F2]/15">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <button onClick={() => navigate('/')} className="text-left cursor-pointer">
              <h3 className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                VENDHAN
              </h3>
            </button>
            <p className="font-serif italic text-[#CFA049] text-base tracking-wide">
              Pure • Traditional • Healthy • Homemade
            </p>
            <p className="text-xs sm:text-sm text-[#E8DED0]/80 max-w-sm leading-relaxed">
              Rooted in the agricultural lands of Nanjai Uthukuli, Erode. We bring back authentic
              Tamil culinary traditions with sprouted millets, native cold-pressed oils, and age-old recipes.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#E8DED0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CFA049] shrink-0 mt-0.5" />
                <span>Nanjai Uthukuli, Erode, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CFA049] shrink-0" />
                <span>9445319249</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CFA049] shrink-0" />
                <span>vmerode23@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#CFA049] shrink-0" />
                <a
                  href="https://instagram.com/VENDHAN_MASALA"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline"
                >
                  @VENDHAN_MASALA
                </a>
              </div>
            </div>
          </div>

          {/* Quick Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CFA049]">
              Food Categories
            </h4>
            <ul className="space-y-2 text-xs text-[#E8DED0]/85">
              <li>
                <button
                  onClick={() => navigate('/categories/millet-foods')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Millet Foods & Grains
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/health-mixes-malts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Health Mixes & Malts
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/traditional-snacks')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Traditional Kai Snacks
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/millet-cookies')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Millet Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/millet-laddoos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Traditional Laddoos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/masalas-podis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fresh Ground Podis & Masalas
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/categories/other-products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Speciality Natural Preserves
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Assistance & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#CFA049]">
              Customer Care & Direct Orders
            </h4>
            <p className="text-xs text-[#E8DED0]/80 leading-relaxed">
              Have questions about sprouted grain recipes or bulk orders for festivals and events?
              Call or message our Erode kitchen directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="https://wa.me/919445319249"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#0f271c] font-semibold text-xs py-2.5 px-4 rounded-xl shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:9445319249"
                className="inline-flex items-center justify-center gap-2 border border-[#FAF7F2]/30 hover:border-white text-[#FAF7F2] font-semibold text-xs py-2.5 px-4 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Kitchen</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#E8DED0]/70">
              <span>Operating Hours: Monday – Saturday (8:00 AM – 7:30 PM IST)</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Anti-Slop Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DED0]/60 gap-4">
          <p>© {new Date().getFullYear()} Vendhan Foods. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>100% Homemade</span>
            <span>·</span>
            <span>No Chemical Additives</span>
            <span>·</span>
            <span>Erode Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
