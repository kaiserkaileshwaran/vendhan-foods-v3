import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { getCategoryBySlug, getProductsByCategory, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';

export const CategoryPage: React.FC<{ categorySlug: string }> = ({ categorySlug }) => {
  const { navigate } = useRouter();
  const category = getCategoryBySlug(categorySlug);

  const [priceFilter, setPriceFilter] = useState<'all' | 'under-150' | '150-200' | 'above-200'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const rawProducts = useMemo(() => {
    return getProductsByCategory(categorySlug);
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    let list = [...rawProducts];

    // Price filtering
    if (priceFilter === 'under-150') {
      list = list.filter(p => p.price < 150);
    } else if (priceFilter === '150-200') {
      list = list.filter(p => p.price >= 150 && p.price <= 200);
    } else if (priceFilter === 'above-200') {
      list = list.filter(p => p.price > 200);
    }

    // Tag filtering
    if (selectedTag !== 'all') {
      list = list.filter(p => p.badge?.toLowerCase().includes(selectedTag.toLowerCase()));
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [rawProducts, priceFilter, sortBy, selectedTag]);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#183E2D]">Category Not Found</h1>
        <p className="text-sm text-[#522D1B]/80">The category you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-[#183E2D] text-white px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
        >
          View All Products
        </button>
      </div>
    );
  }

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
            <button
              onClick={() => navigate('/shop')}
              className="hover:text-[#183E2D] transition-colors cursor-pointer"
            >
              Shop
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#522D1B]/40" />
            <span className="text-[#183E2D] font-semibold" aria-current="page">
              {category.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Category Hero Banner */}
      <div className="relative bg-[#183E2D] text-[#FAF7F2] overflow-hidden py-12 md:py-16 border-b border-[#CFA049]/30">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={category.heroImage}
            alt={category.title}
            loading="eager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#183E2D] via-[#183E2D]/90 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#CFA049] uppercase block">
              Vendhan Collection · {rawProducts.length} Handcrafted Recipes
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2]">
              {category.title}
            </h1>
            <p className="font-serif italic text-sm md:text-base text-[#CFA049]">
              {category.tamilTitle}
            </p>
            <p className="text-xs sm:text-sm text-[#E8DED0]/90 leading-relaxed pt-1">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Left Sidebar Filters */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="p-5 bg-white rounded-2xl border border-[#E8DED0] shadow-2xs space-y-6 sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-[#E8DED0]">
                <span className="font-serif text-base font-bold text-[#183E2D] flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#8C321D]" />
                  Filters
                </span>
                {(priceFilter !== 'all' || sortBy !== 'featured' || selectedTag !== 'all') && (
                  <button
                    onClick={() => {
                      setPriceFilter('all');
                      setSortBy('featured');
                      setSelectedTag('all');
                    }}
                    className="text-[11px] text-[#8C321D] hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Price Filter */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#522D1B] block">Price Range</span>
                <div className="space-y-1.5 text-xs text-[#522D1B]/90">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === 'all'}
                      onChange={() => setPriceFilter('all')}
                      className="accent-[#183E2D]"
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === 'under-150'}
                      onChange={() => setPriceFilter('under-150')}
                      className="accent-[#183E2D]"
                    />
                    <span>Under ₹150</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === '150-200'}
                      onChange={() => setPriceFilter('150-200')}
                      className="accent-[#183E2D]"
                    />
                    <span>₹150 – ₹200</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceFilter === 'above-200'}
                      onChange={() => setPriceFilter('above-200')}
                      className="accent-[#183E2D]"
                    />
                    <span>Above ₹200</span>
                  </label>
                </div>
              </div>

              {/* Other Categories Quick Links */}
              <div className="space-y-2 pt-4 border-t border-[#E8DED0]">
                <span className="text-xs font-semibold text-[#522D1B] block">Other Categories</span>
                <div className="space-y-1 text-xs">
                  {CATEGORIES.filter(c => c.slug !== categorySlug).map(c => (
                    <button
                      key={c.slug}
                      onClick={() => navigate(`/categories/${c.slug}`)}
                      className="block text-left py-1 text-[#733E26] hover:text-[#183E2D] hover:underline transition-colors w-full cursor-pointer"
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Product Grid Area */}
          <main className="lg:col-span-9 space-y-6">
            {/* Top Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E8DED0] shadow-2xs">
              <span className="text-xs font-medium text-[#733E26]">
                Showing <strong className="text-[#183E2D]">{filteredProducts.length}</strong> of {rawProducts.length} items
              </span>

              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F4EEE3] rounded-lg text-xs font-semibold text-[#183E2D] cursor-pointer"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Filters</span>
                </button>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-1.5 text-xs text-[#522D1B]">
                  <ArrowUpDown className="w-3.5 h-3.5 text-[#733E26]" />
                  <span className="hidden sm:inline font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value as any)}
                    className="p-1.5 rounded-lg border border-[#E8DED0] bg-[#FAF7F2] text-xs font-semibold text-[#183E2D] focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile collapsible filter sheet */}
            {mobileFilterOpen && (
              <div className="lg:hidden p-4 bg-white rounded-2xl border border-[#E8DED0] space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-[#E8DED0]">
                  <span className="font-serif text-sm font-bold text-[#183E2D]">Filter Options</span>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-xs text-[#8C321D]"
                  >
                    Close
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => setPriceFilter('all')}
                    className={`px-3 py-1.5 rounded-lg border ${priceFilter === 'all' ? 'bg-[#183E2D] text-white' : 'bg-white'}`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setPriceFilter('under-150')}
                    className={`px-3 py-1.5 rounded-lg border ${priceFilter === 'under-150' ? 'bg-[#183E2D] text-white' : 'bg-white'}`}
                  >
                    Under ₹150
                  </button>
                  <button
                    onClick={() => setPriceFilter('150-200')}
                    className={`px-3 py-1.5 rounded-lg border ${priceFilter === '150-200' ? 'bg-[#183E2D] text-white' : 'bg-white'}`}
                  >
                    ₹150–₹200
                  </button>
                  <button
                    onClick={() => setPriceFilter('above-200')}
                    className={`px-3 py-1.5 rounded-lg border ${priceFilter === 'above-200' ? 'bg-[#183E2D] text-white' : 'bg-white'}`}
                  >
                    Above ₹200
                  </button>
                </div>
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center bg-white rounded-3xl border border-[#E8DED0] p-8 space-y-3">
                <p className="font-serif text-lg font-bold text-[#183E2D]">No products found</p>
                <p className="text-xs text-[#522D1B]/70">Try changing your price filter or sorting options.</p>
                <button
                  onClick={() => setPriceFilter('all')}
                  className="bg-[#183E2D] text-white text-xs px-4 py-2 rounded-xl"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
