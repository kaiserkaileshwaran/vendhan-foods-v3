import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { searchProducts, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, ChevronRight, Sparkles } from 'lucide-react';

const POPULAR_SEARCHES = [
  'Ragi Cookies',
  'Millet Health Mix',
  'Laddoo',
  'Idli Podi',
  'Murukku',
  'Rasam Podi',
  'ABC Malt',
  'Karuppu Gavuni'
];

export const SearchResultsPage: React.FC = () => {
  const { searchQuery, navigate } = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');

  const results = useMemo(() => {
    const q = searchQuery || searchTerm;
    return searchProducts(q);
  }, [searchQuery, searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F4EEE3]/60 border-b border-[#E8DED0] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#733E26]" aria-label="Breadcrumb">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#183E2D] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#522D1B]/40" />
            <span className="text-[#183E2D] font-semibold" aria-current="page">
              Search Results
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 space-y-6">
        {/* Search Header & Input */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#183E2D]">
            Search Our Kitchen
          </h1>
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#733E26]" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by food name, ingredient, or recipe (e.g. Ragi, Podi, Murukku)..."
              className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white border border-[#E8DED0] text-sm text-[#183E2D] focus:outline-none focus:border-[#183E2D] shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#183E2D] text-white text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Quick Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
            <span className="text-[#733E26] font-medium">Popular:</span>
            {POPULAR_SEARCHES.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="px-2.5 py-1 bg-white hover:bg-[#F4EEE3] rounded-lg border border-[#E8DED0] text-[#522D1B] transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Grid */}
        <div className="pt-6 border-t border-[#E8DED0]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-[#522D1B]">
              Found <strong className="text-[#183E2D]">{results.length}</strong> recipes for "{searchQuery || searchTerm || 'All'}"
            </span>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DED0] p-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#F4EEE3] flex items-center justify-center text-2xl">
                🌾
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#183E2D]">
                  No matching recipes found
                </h3>
                <p className="text-xs text-[#522D1B]/80 max-w-sm mx-auto">
                  Try searching for ingredients like "Ragi", "Malt", "Seedai", "Kambu", or explore our full catalog.
                </p>
              </div>
              <button
                onClick={() => navigate('/shop')}
                className="bg-[#183E2D] text-white px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Explore Full Pantry
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
