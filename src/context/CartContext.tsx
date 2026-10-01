import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { ASSET_COOKIES, ASSET_SPICES } from '../utils/productImages';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pre-seed with 2 quintessential Vendhan items to exhibit cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: 'ragi-cookies',
        slug: 'ragi-cookies',
        name: 'Ragi Cookies',
        category: 'Millet Cookies',
        categorySlug: 'millet-cookies',
        subtitle: 'Crisp Finger Millet & Palm Jaggery',
        description: 'Slow-baked with sprouted ragi flour, cold-pressed country butter, and dark organic karuppatti.',
        price: 149,
        mrp: 179,
        weight: '200g',
        rating: 4.9,
        reviewsCount: 142,
        image: ASSET_COOKIES,
        images: [ASSET_COOKIES],
        badge: 'Baked with Love',
        ingredients: ['Sprouted Ragi Flour', 'Country Cow Butter', 'Palm Jaggery'],
        benefits: ['Rich in natural calcium', 'Zero refined sugar or maida'],
        nutrition: { calories: '128 kcal / 30g', protein: '3.4g', dietaryFiber: '4.2g', iron: '2.8mg' }
      },
      quantity: 2
    },
    {
      product: {
        id: 'gunpowder-idli-podi',
        slug: 'gunpowder-idli-podi',
        name: 'Gunpowder Idli Podi',
        category: 'Masalas & Podis',
        categorySlug: 'masalas-podis',
        subtitle: 'Roasted Lentils, Sesame & Country Chillies',
        description: 'Slow-roasted on heavy cast iron: urad dal, chana dal, black sesame, curry leaves.',
        price: 120,
        mrp: 145,
        weight: '200g',
        rating: 5.0,
        reviewsCount: 380,
        image: ASSET_SPICES,
        images: [ASSET_SPICES],
        badge: 'Kitchen Essential',
        ingredients: ['Split Urad Dal', 'Bengal Gram', 'Black Sesame', 'Dry Red Chillies'],
        benefits: ['Authentic coarse texture', 'Stone-ground aroma'],
        nutrition: { calories: '95 kcal / 20g', protein: '4.2g', dietaryFiber: '2.8g', iron: '1.9mg' }
      },
      quantity: 1
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${product.name} to your bag`);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
