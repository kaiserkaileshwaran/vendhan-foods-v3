import React from 'react';
import { Home, Search, Grid, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { useAuth } from '../context/AuthContext';

export const MobileBottomNav: React.FC = () => {
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const { navigate, currentPath } = useRouter();
  const { openAuthModal, isAuthenticated } = useAuth();

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#E8DED0] px-3 py-2 shadow-lg"
      aria-label="Mobile Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <button
          onClick={() => navigate('/')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            currentPath === '/' ? 'text-[#183E2D]' : 'text-[#733E26]/70 hover:text-[#183E2D]'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Home</span>
        </button>

        {/* Search */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            currentPath.startsWith('/search') ? 'text-[#183E2D]' : 'text-[#733E26]/70 hover:text-[#183E2D]'
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Search</span>
        </button>

        {/* Categories / Shop */}
        <button
          onClick={() => navigate('/shop')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
            currentPath === '/shop' || currentPath.startsWith('/categories') ? 'text-[#183E2D]' : 'text-[#733E26]/70 hover:text-[#183E2D]'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-semibold tracking-tight">Pantry</span>
        </button>

        {/* Cart (Bag) */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg text-[#733E26]/70 hover:text-[#183E2D] transition-colors cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-[#183E2D]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#8C321D] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight text-[#183E2D]">Bag</span>
        </button>

        {/* Profile / Account (Replaces Erode story) */}
        <button
          onClick={() => openAuthModal()}
          className="relative flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg text-[#733E26]/70 hover:text-[#183E2D] transition-colors cursor-pointer"
        >
          <div className="relative">
            <User className="w-5 h-5" />
            {isAuthenticated && (
              <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-emerald-500 border border-[#FAF7F2]" />
            )}
          </div>
          <span className="text-[10px] font-semibold tracking-tight">Profile</span>
        </button>
      </div>
    </nav>
  );
};
