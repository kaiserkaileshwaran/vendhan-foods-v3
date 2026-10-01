import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Phone, MapPin, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';

export const Header: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const { navigate, currentPath } = useRouter();
  const { openAuthModal, isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#183E2D] text-[#E8DED0] text-xs py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CFA049] animate-pulse shrink-0" />
            <span className="font-medium tracking-wide truncate">
              Fresh Homemade Goodness • Traditional Recipes • Millet Inspired
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#E8DED0]/80 shrink-0">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#CFA049]" />
              Nanjai Uthukuli, Erode, Tamil Nadu
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#CFA049]" />
              Direct Care: 9445319249
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DED0] py-2.5'
            : 'bg-[#FAF7F2] border-b border-[#E8DED0]/60 py-3.5 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* =========================================================================
              MOBILE HEADER (lg:hidden)
              - Pure, clean centered brand mark
              - Shop, Bag, Search and Profile are accessible via Mobile Bottom Nav
             ========================================================================= */}
          <div className="flex lg:hidden items-center justify-center h-12">
            <button
              onClick={() => navigate('/')}
              className="text-center group cursor-pointer focus-visible:outline-none"
              aria-label="Vendhan Home"
            >
              <span className="block font-serif text-2xl font-bold tracking-wider text-[#183E2D] group-hover:text-[#20503A] transition-colors leading-none">
                VENDHAN
              </span>
              <span className="block text-[8px] tracking-[0.28em] font-bold text-[#8C321D] uppercase mt-0.5">
                TRADITIONAL
              </span>
            </button>
          </div>

          {/* =========================================================================
              DESKTOP / LAPTOP / WIDE SCREEN HEADER (hidden lg:flex)
              - Zone 1: Brand Wordmark (Left)
              - Zone 2: Navigation Links (Center)
              - Zone 3: Search, Bag, Profile alone (Top Right Corner)
             ========================================================================= */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark */}
            <button
              onClick={() => navigate('/')}
              className="text-left group cursor-pointer focus-visible:outline-none"
            >
              <span className="font-serif text-3xl lg:text-4xl font-bold tracking-tight text-[#183E2D] group-hover:text-[#20503A] transition-colors">
                VENDHAN
              </span>
            </button>

            {/* Zone 2: Primary Nav Links */}
            <nav className="flex items-center gap-6 text-[13px] font-medium text-[#522D1B]/90 tracking-wide">
              <button
                onClick={() => navigate('/')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigate('/shop')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/shop' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => navigate('/categories/millet-foods')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/millet-foods' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Millet Foods
              </button>
              <button
                onClick={() => navigate('/categories/health-mixes-malts')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/health-mixes-malts' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Health Mixes
              </button>
              <button
                onClick={() => navigate('/categories/traditional-snacks')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/traditional-snacks' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Snacks
              </button>
              <button
                onClick={() => navigate('/categories/millet-cookies')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/millet-cookies' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Cookies
              </button>
              <button
                onClick={() => navigate('/categories/millet-laddoos')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/millet-laddoos' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Laddoos
              </button>
              <button
                onClick={() => navigate('/categories/masalas-podis')}
                className={`transition-colors hover:text-[#183E2D] cursor-pointer ${
                  currentPath === '/categories/masalas-podis' ? 'text-[#183E2D] font-semibold underline underline-offset-8 decoration-[#CFA049]' : ''
                }`}
              >
                Masalas
              </button>
            </nav>

            {/* Zone 3: Search, Bag, Profile alone in top right corner */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 text-[#522D1B] hover:text-[#183E2D] hover:bg-[#E8DED0]/60 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                aria-label="Search traditional foods"
              >
                <Search className="w-4 h-4" />
                <span className="hidden xl:inline">Search</span>
              </button>

              {/* Bag */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 bg-[#183E2D] hover:bg-[#20503A] text-[#FAF7F2] px-4 py-2 rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-4 h-4 text-[#CFA049]" />
                <span className="text-xs font-semibold tracking-wide">Bag</span>
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-[#CFA049] text-[#183E2D] rounded-full tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button
                onClick={() => openAuthModal()}
                className="flex items-center gap-2 text-[#522D1B] hover:text-[#183E2D] hover:bg-[#E8DED0]/60 px-3.5 py-2 rounded-xl transition-all border border-[#E8DED0] active:scale-95 cursor-pointer text-xs font-semibold"
                aria-label="Account and Profile"
              >
                <div className="relative">
                  <User className="w-4 h-4 text-[#183E2D]" />
                  {isAuthenticated && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </div>
                <span>{isAuthenticated && user ? user.name.split(' ')[0] : 'Profile'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
