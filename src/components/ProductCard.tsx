import React from 'react';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { ASSET_HERO_SPREAD } from '../utils/productImages';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
  const { addToCart } = useCart();
  const { navigate } = useRouter();

  const handleCardClick = () => {
    navigate(`/products/${product.slug}`);
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group relative bg-[#FAF7F2] rounded-2xl border border-[#E8DED0] hover:border-[#183E2D]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
      role="link"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EEE3]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          decoding="async"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            // Graceful fallback to prevent any blank image
            const target = e.currentTarget;
            if (!target.src.includes('hero_vendhan')) {
              target.src = ASSET_HERO_SPREAD;
            }
          }}
        />

        {/* Subtle non-pill text tag if highlighted */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#183E2D] text-[#FAF7F2] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-xs shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Weight indicator in bottom right of image */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-sm">
          {product.weight}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-3">
        <div>
          {/* Metadata unboxed line */}
          <div className="flex items-center gap-1.5 text-xs text-[#733E26] font-medium mb-1">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-[#B5832A]">
              <Star className="w-3 h-3 fill-current" />
              <span className="tabular-nums font-semibold">{product.rating.toFixed(1)}</span>
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-serif text-lg font-bold text-[#183E2D] group-hover:text-[#20503A] line-clamp-1 transition-colors">
            {product.name}
          </h3>

          {/* Tamil Name if available */}
          {product.tamilName && (
            <p className="font-serif italic text-xs text-[#8C321D]/90 line-clamp-1">
              {product.tamilName}
            </p>
          )}

          {/* Subtitle / Description excerpt */}
          <p className="text-xs text-[#522D1B]/75 line-clamp-2 mt-1 leading-relaxed">
            {product.subtitle || product.description}
          </p>
        </div>

        {/* Pricing and Action row */}
        <div className="pt-2 border-t border-[#E8DED0] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold text-[#183E2D] tabular-nums font-sans">
              ₹{product.price}
            </span>
            {product.mrp > product.price && (
              <span className="text-xs text-[#733E26]/60 line-through tabular-nums">
                ₹{product.mrp}
              </span>
            )}
          </div>

          <button
            onClick={handleAddClick}
            className="inline-flex items-center gap-1.5 bg-[#183E2D] hover:bg-[#20503A] active:scale-95 text-[#FAF7F2] text-xs font-semibold py-2 px-3 sm:px-4 rounded-xl shadow-xs transition-all cursor-pointer z-10"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#CFA049]" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
