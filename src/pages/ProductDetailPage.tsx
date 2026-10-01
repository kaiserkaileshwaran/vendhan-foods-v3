import React, { useState, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { getProductBySlug, getRelatedProducts, getCategoryBySlug } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ASSET_HERO_SPREAD } from '../utils/productImages';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Clock,
  Plus,
  Minus,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const ProductDetailPage: React.FC<{ productSlug: string }> = ({ productSlug }) => {
  const { navigate } = useRouter();
  const { addToCart, setIsCartOpen } = useCart();
  const product = getProductBySlug(productSlug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'nutrition' | 'storage' | 'reviews'>('ingredients');

  useEffect(() => {
    setSelectedImageIndex(0);
    setQuantity(1);
  }, [productSlug]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#183E2D]">Product Not Found</h1>
        <p className="text-sm text-[#522D1B]/80">
          The product you are looking for may have moved or does not exist.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="bg-[#183E2D] text-white px-6 py-2.5 rounded-xl text-xs font-semibold cursor-pointer"
        >
          Explore All Foods
        </button>
      </div>
    );
  }

  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = getRelatedProducts(product, 4);

  const galleryImages = product.images && product.images.length > 0
    ? [product.image, ...product.images.filter(img => img !== product.image)]
    : [product.image];

  const currentDisplayImage = galleryImages[selectedImageIndex] || product.image;

  const discountPercent = product.mrp > product.price
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24 md:pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F4EEE3]/60 border-b border-[#E8DED0] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#733E26] overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
            <button
              onClick={() => navigate('/')}
              className="hover:text-[#183E2D] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#522D1B]/40 shrink-0" />
            <button
              onClick={() => navigate('/shop')}
              className="hover:text-[#183E2D] transition-colors cursor-pointer"
            >
              Shop
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#522D1B]/40 shrink-0" />
            <button
              onClick={() => navigate(`/categories/${product.categorySlug}`)}
              className="hover:text-[#183E2D] transition-colors cursor-pointer"
            >
              {category?.title || product.category}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#522D1B]/40 shrink-0" />
            <span className="text-[#183E2D] font-semibold truncate max-w-[200px]" aria-current="page">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Hero / Purchase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Display */}
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-[#F4EEE3] border border-[#E8DED0] shadow-sm group">
              <img
                src={currentDisplayImage}
                alt={product.name}
                loading="eager"
                referrerPolicy="no-referrer"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-300 ease-out"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('hero_vendhan')) {
                    target.src = ASSET_HERO_SPREAD;
                  }
                }}
              />

              {/* Left & Right Arrow Mark Controls for changing images */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#183E2D] shadow-lg border border-[#E8DED0] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 opacity-90 hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#183E2D]" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#183E2D] shadow-lg border border-[#E8DED0] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 opacity-90 hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 text-[#183E2D]" />
                  </button>

                  {/* Image Counter Indicator */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tabular-nums z-10">
                    {selectedImageIndex + 1} / {galleryImages.length}
                  </div>
                </>
              )}

              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#183E2D] text-[#FAF7F2] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-sm shadow-md z-10">
                  {product.badge}
                </div>
              )}

              <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10">
                {product.weight}
              </div>
            </div>

            {/* Thumbnail Navigation Row */}
            {galleryImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 bg-[#F4EEE3] ${
                      selectedImageIndex === idx
                        ? 'border-[#183E2D] shadow-md scale-105'
                        : 'border-[#E8DED0] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Assurances Under Gallery */}
            <div className="grid grid-cols-3 gap-3 pt-3 text-center text-xs text-[#522D1B]">
              <div className="p-3 bg-white rounded-xl border border-[#E8DED0] shadow-2xs">
                <ShieldCheck className="w-4 h-4 mx-auto text-[#183E2D] mb-1" />
                <span className="font-semibold block text-[11px]">100% Maida Free</span>
                <span className="text-[10px] text-[#733E26]/80">Zero Chemical Additives</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E8DED0] shadow-2xs">
                <Truck className="w-4 h-4 mx-auto text-[#183E2D] mb-1" />
                <span className="font-semibold block text-[11px]">Fresh Erode Dispatch</span>
                <span className="text-[10px] text-[#733E26]/80">Chennai 24-48h Delivery</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-[#E8DED0] shadow-2xs">
                <HeartHandshake className="w-4 h-4 mx-auto text-[#183E2D] mb-1" />
                <span className="font-semibold block text-[11px]">Homemade Care</span>
                <span className="text-[10px] text-[#733E26]/80">Traditional Recipes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs">
                <button
                  onClick={() => navigate(`/categories/${product.categorySlug}`)}
                  className="font-semibold text-[#8C321D] hover:underline uppercase tracking-wider cursor-pointer"
                >
                  {product.category}
                </button>
                <div className="flex items-center gap-1.5 text-[#B5832A]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold tabular-nums text-sm">{product.rating.toFixed(1)}</span>
                  <span className="text-[#522D1B]/60">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Tamil Name */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#183E2D] tracking-tight">
                {product.name}
              </h1>

              {product.tamilName && (
                <p className="font-serif italic text-base sm:text-lg text-[#8C321D] font-medium">
                  {product.tamilName}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#733E26] font-medium">
                {product.subtitle}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-4 bg-white rounded-2xl border border-[#E8DED0] shadow-2xs space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-3xl sm:text-4xl font-bold text-[#183E2D] tabular-nums">
                  ₹{product.price}
                </span>
                {product.mrp > product.price && (
                  <>
                    <span className="text-base text-[#733E26]/60 line-through tabular-nums">
                      ₹{product.mrp}
                    </span>
                    <span className="text-xs font-semibold text-[#8C321D] bg-[#8C321D]/10 px-2 py-0.5 rounded">
                      {discountPercent}% OFF
                    </span>
                  </>
                )}
                <span className="text-xs text-[#522D1B]/60 ml-auto">
                  (Inclusive of all taxes)
                </span>
              </div>
              <p className="text-[11px] text-[#183E2D] font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#CFA049]" />
                Fresh batch packed upon order confirmation
              </p>
            </div>

            {/* Product Description */}
            <p className="text-xs sm:text-sm text-[#522D1B]/85 leading-relaxed">
              {product.description}
            </p>

            {/* Pack Size Selector */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-[#522D1B] block">Available Pack:</span>
              <div className="flex gap-2">
                <div className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#183E2D] bg-[#183E2D] text-white">
                  {product.weight} Standard Pack
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 pt-4 border-t border-[#E8DED0]">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-[#522D1B]">Quantity:</span>
                <div className="flex items-center border border-[#E8DED0] bg-white rounded-xl px-2 py-1 gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 flex items-center justify-center text-[#522D1B] hover:bg-[#F4EEE3] rounded cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold tabular-nums px-1">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 flex items-center justify-center text-[#522D1B] hover:bg-[#F4EEE3] rounded cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-semibold text-[#183E2D] tabular-nums ml-auto">
                  Subtotal: ₹{product.price * quantity}
                </span>
              </div>

              {/* Desktop Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#FAF7F2] hover:bg-[#183E2D] border-2 border-[#183E2D] text-[#183E2D] hover:text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4 text-[#CFA049]" />
                  <span>Add to Bag</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#183E2D] hover:bg-[#20503A] text-white font-semibold text-xs py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4 text-[#CFA049]" />
                </button>
              </div>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="pt-4 border-t border-[#E8DED0] space-y-2">
              <span className="text-xs font-semibold text-[#522D1B] uppercase tracking-wider block">
                Food Highlights
              </span>
              <div className="space-y-1.5 text-xs text-[#183E2D]">
                {product.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20503A] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs Section */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-[#E8DED0]">
          <div className="flex gap-4 border-b border-[#E8DED0] overflow-x-auto no-scrollbar pb-3">
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`text-xs font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'ingredients'
                  ? 'border-[#183E2D] text-[#183E2D]'
                  : 'border-transparent text-[#733E26] hover:text-[#183E2D]'
              }`}
            >
              Ingredients & Sourcing
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`text-xs font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'nutrition'
                  ? 'border-[#183E2D] text-[#183E2D]'
                  : 'border-transparent text-[#733E26] hover:text-[#183E2D]'
              }`}
            >
              Nutrition Profile
            </button>
            <button
              onClick={() => setActiveTab('storage')}
              className={`text-xs font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'storage'
                  ? 'border-[#183E2D] text-[#183E2D]'
                  : 'border-transparent text-[#733E26] hover:text-[#183E2D]'
              }`}
            >
              Preparation & Storage
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`text-xs font-semibold pb-2 border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-[#183E2D] text-[#183E2D]'
                  : 'border-transparent text-[#733E26] hover:text-[#183E2D]'
              }`}
            >
              Customer Reviews ({product.reviewsCount})
            </button>
          </div>

          <div className="py-6">
            {activeTab === 'ingredients' && (
              <div className="max-w-2xl space-y-4 text-xs text-[#522D1B]/90 leading-relaxed">
                <p>
                  Every ingredient is hand-inspected in our Nanjai Uthukuli kitchen in Erode, Tamil Nadu.
                  We never use artificial colors, chemical preservatives, or industrial leavening agents.
                </p>
                <div className="p-4 bg-white rounded-2xl border border-[#E8DED0] space-y-2">
                  <span className="font-bold text-[#183E2D] block">Formula Composition:</span>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="max-w-xl space-y-4">
                <p className="text-xs text-[#522D1B]/80">
                  Approximate nutritional breakdown per single serving (demo values):
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 bg-white rounded-xl border border-[#E8DED0]">
                    <span className="text-[11px] text-[#733E26] block">Energy</span>
                    <span className="font-bold text-sm text-[#183E2D]">{product.nutrition.calories}</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E8DED0]">
                    <span className="text-[11px] text-[#733E26] block">Plant Protein</span>
                    <span className="font-bold text-sm text-[#183E2D]">{product.nutrition.protein}</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E8DED0]">
                    <span className="text-[11px] text-[#733E26] block">Dietary Fiber</span>
                    <span className="font-bold text-sm text-[#183E2D]">{product.nutrition.dietaryFiber}</span>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-[#E8DED0]">
                    <span className="text-[11px] text-[#733E26] block">Natural Iron</span>
                    <span className="font-bold text-sm text-[#183E2D]">{product.nutrition.iron}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="max-w-2xl space-y-3 text-xs text-[#522D1B]/90 leading-relaxed">
                <p>
                  <strong>Preparation:</strong> {product.prepTip || 'Enjoy ready-to-eat directly from the aroma-lock pouch or pair with hot beverages.'}
                </p>
                <p>
                  <strong>Storage:</strong> {product.storage || 'Store in a clean, airtight stainless steel or glass container in a cool, dry pantry away from direct sunlight.'}
                </p>
                <p>
                  <strong>Shelf Life:</strong> Best consumed within 60 days of packaging date for maximum crunch and natural aroma.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-2xl space-y-4">
                <div className="p-4 bg-white rounded-2xl border border-[#E8DED0] space-y-2">
                  <div className="flex items-center gap-1 text-[#B5832A]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-[#183E2D] ml-2">Priya Ramanathan (Chennai)</span>
                  </div>
                  <p className="text-xs text-[#522D1B]/80 italic">
                    "Exceptionally fresh and authentic. You can immediately taste the honest butter and palm jaggery. Will order again!"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <div className="mt-16 pt-12 border-t border-[#E8DED0]">
          <div className="flex justify-between items-end mb-8">
            <div className="space-y-1">
              <span className="text-xs font-semibold tracking-wider text-[#8C321D] uppercase">
                From Our Kitchen
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#183E2D]">
                You May Also Like
              </h2>
            </div>
            <button
              onClick={() => navigate(`/categories/${product.categorySlug}`)}
              className="text-xs font-semibold text-[#183E2D] hover:underline cursor-pointer"
            >
              View More in {product.category} →
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map(rel => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Purchase Bar */}
      <div className="lg:hidden fixed bottom-14 left-0 right-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DED0] px-4 py-2.5 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-[10px] text-[#733E26] block">Price</span>
          <span className="font-sans text-lg font-bold text-[#183E2D] tabular-nums">
            ₹{product.price}
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-[#183E2D] active:scale-95 text-[#FAF7F2] font-semibold text-xs px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#CFA049]" />
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
};
