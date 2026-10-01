import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, ArrowUpDown } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const { navigate } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    let list = selectedCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter(p => p.categorySlug === selectedCategory);

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy]);

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
              Shop All
            </span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8DED0] pb-6">
          <div className="space-y-1.5">
            <span className="text-xs font-semibold tracking-widest text-[#8C321D] uppercase block">
              Complete Kitchen Pantry
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183E2D]">
              Shop the Full Vendhan Range
            </h1>
            <p className="text-xs sm:text-sm text-[#522D1B]/80 max-w-xl">
              Authentic South Indian millet foods, firewood-roasted podis, maida-free cookies,
              and festive laddoos stone-ground in Nanjai Uthukuli, Erode.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#733E26] font-medium hidden sm:inline">
              Showing <strong className="text-[#183E2D]">{filteredProducts.length}</strong> recipes
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#522D1B]">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#733E26]" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="p-1.5 rounded-lg border border-[#E8DED0] bg-white text-xs font-semibold text-[#183E2D]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#183E2D] text-[#FAF7F2] shadow-sm'
                : 'bg-[#F4EEE3] hover:bg-[#E8DED0] text-[#522D1B]'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.slug
                  ? 'bg-[#183E2D] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F4EEE3] hover:bg-[#E8DED0] text-[#522D1B]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
