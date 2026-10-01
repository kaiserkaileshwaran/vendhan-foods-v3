import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IntroLoader } from './components/IntroLoader';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ShopPage } from './pages/ShopPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { CheckCircle2 } from 'lucide-react';

const PageRenderer: React.FC = () => {
  const { currentPath, activeCategorySlug, activeProductSlug } = useRouter();

  if (activeProductSlug) {
    return <ProductDetailPage productSlug={activeProductSlug} />;
  }

  if (activeCategorySlug) {
    return <CategoryPage categorySlug={activeCategorySlug} />;
  }

  if (currentPath === '/shop') {
    return <ShopPage />;
  }

  if (currentPath.startsWith('/search')) {
    return <SearchResultsPage />;
  }

  return <HomePage />;
};

const MainApp: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const { toastMessage } = useCart();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#29221C] flex flex-col font-sans selection:bg-[#183E2D] selection:text-white">
      {/* Intro Loader Animation on initial load */}
      {!introFinished && <IntroLoader onComplete={() => setIntroFinished(true)} />}

      {/* Main Header */}
      <Header />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        <PageRenderer />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Interactive Cart Drawer */}
      <CartDrawer />

      {/* Search Modal */}
      <SearchModal />

      {/* Profile & Authentication Modal */}
      <AuthModal />

      {/* Floating Direct WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 lg:bottom-20 right-6 z-50 bg-[#183E2D] text-[#FAF7F2] px-4 py-3 rounded-2xl shadow-xl border border-[#CFA049]/40 flex items-center gap-2.5 animate-bounce text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#CFA049]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </RouterProvider>
  );
}
