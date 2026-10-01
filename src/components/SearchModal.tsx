import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { searchProducts } from '../data/products';
import { ProductCard } from './ProductCard';

const POPULAR_SEARCHES = [
  'Ragi Cookies',
  'Millet Health Mix',
  'Laddoo',
  'Idli Podi',
  'Murukku',
  'Rasam Podi',
  'ABC Malt',
  'Thinai'
];

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const { navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return searchProducts(searchTerm).slice(0, 6);
  }, [searchTerm]);

  if (!isSearchOpen) return null;

  const handleFullSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    setIsSearchOpen(false);
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative min-h-screen p-4 sm:p-6 md:p-10 flex flex-col items-center">
        <div className="w-full max-w-4xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#E8DED0] p-6 sm:p-8 space-y-6 relative z-10 my-auto">
          {/* Top row with close */}
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DED0]">
            <span className="text-xs font-semibold tracking-wider text-[#8C321D] uppercase">
              Vendhan Kitchen Search
            </span>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-[#522D1B] hover:text-[#183E2D] hover:bg-[#E8DED0] rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Heading */}
          <div className="text-center space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
              WHAT ARE YOU CRAVING?
            </h2>
            <p className="text-xs text-[#522D1B]/80">
              Discover traditional sprouted cookies, firewood-roasted podis, or farm malts.
            </p>
          </div>

          {/* Large search input */}
          <form onSubmit={handleFullSearch} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#733E26]" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by food name, ingredient, or recipe (e.g. Ragi, Murukku, Podi)..."
              className="w-full pl-12 pr-28 py-4 rounded-2xl bg-white border border-[#E8DED0] text-sm text-[#183E2D] placeholder-[#522D1B]/40 focus:outline-none focus:border-[#183E2D] focus:ring-2 focus:ring-[#183E2D]/10 shadow-inner"
            />
            {searchTerm && (
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#183E2D] text-white text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer"
              >
                Search
              </button>
            )}
          </form>

          {/* Popular searches suggestions */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#733E26] block">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map(item => (
                <button
                  key={item}
                  onClick={() => handleTagClick(item)}
                  className="text-xs px-3 py-1.5 rounded-lg border bg-white hover:bg-[#F4EEE3] text-[#522D1B] border-[#E8DED0] transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Results preview */}
          {searchTerm.trim() && (
            <div className="pt-4 border-t border-[#E8DED0] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-[#522D1B]">
                  Live matches for "{searchTerm}":
                </span>
                <button
                  onClick={handleFullSearch}
                  className="text-xs font-semibold text-[#183E2D] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View all results</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {filteredProducts.length > 0 ? (
                <div
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[45vh] overflow-y-auto pr-1"
                  onClick={() => setIsSearchOpen(false)}
                >
                  {filteredProducts.map(p => (
                    <ProductCard key={p.id} product={p} compact />
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-xs text-[#522D1B]/70 space-y-2">
                  <p>No products found matching "{searchTerm}".</p>
                  <p>Try searching for "Ragi", "Malt", "Seedai", or "Sambar".</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
