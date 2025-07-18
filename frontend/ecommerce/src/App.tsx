import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { LandingPage } from './components/landing/LandingPage';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { ProductGrid } from './components/products/ProductGrid';
import { ProductModal } from './components/products/ProductModal';
import { CartSidebar } from './components/cart/CartSidebar';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { ReceiptModal } from './components/receipt/ReceiptModal';
import { useProducts } from './hooks/useProducts';
import type { Product, Order } from './types';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  const {
    products,
    searchTerm,
    setSearchTerm,
    filters,
    updateFilter,
    resetFilters,
    totalProducts
  } = useProducts();

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  const handleCategoryClick = (category: string) => {
    updateFilter('category', category);
    setShowLanding(false);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = (order: Order) => {
    setCurrentOrder(order);
    setIsCheckoutOpen(false);
    setIsReceiptOpen(true);
  };

  if (showLanding) {
    return (
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen">
            <Header
              onSearchChange={setSearchTerm}
              onCartToggle={() => setIsCartOpen(true)}
              onMenuToggle={() => setIsSidebarOpen(true)}
              isMenuOpen={isSidebarOpen}
            />
            
            <LandingPage
              onGetStarted={handleGetStarted}
              onCategoryClick={handleCategoryClick}
            />

            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
            />

            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
              onOrderComplete={handleOrderComplete}
            />

            <ReceiptModal
              isOpen={isReceiptOpen}
              onClose={() => setIsReceiptOpen(false)}
              order={currentOrder}
            />

            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },
              }}
            />
          </div>
        </CartProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header
            onSearchChange={setSearchTerm}
            onCartToggle={() => setIsCartOpen(true)}
            onMenuToggle={() => setIsSidebarOpen(true)}
            isMenuOpen={isSidebarOpen}
          />

          <div className="flex">
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              filters={filters}
              onFilterChange={updateFilter}
              onResetFilters={resetFilters}
            />

            <main className="flex-1 p-6">
              <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Discover Amazing Products
                      </h1>
                      <p className="text-gray-600">
                        {totalProducts} products found
                        {searchTerm && ` for "${searchTerm}"`}
                      </p>
                    </div>
                    <button
                      onClick={() => setShowLanding(true)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>

                <ProductGrid
                  products={products}
                  onViewDetails={handleViewDetails}
                />
              </div>
            </main>
          </div>

          {/* Modals */}
          <ProductModal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />

          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
          />

          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            onOrderComplete={handleOrderComplete}
          />

          <ReceiptModal
            isOpen={isReceiptOpen}
            onClose={() => setIsReceiptOpen(false)}
            order={currentOrder}
          />

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;