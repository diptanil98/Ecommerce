import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { AuthModal } from '../auth/AuthModal';

interface HeaderProps {
  onSearchChange: (term: string) => void;
  onCartToggle: () => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  onCartToggle,
  onMenuToggle,
  isMenuOpen
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={onMenuToggle}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-blue-600 ml-2 lg:ml-0">
                ShopHub
              </h1>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={onCartToggle}
                className="relative p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <User size={24} />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user?.name}
                    </span>
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {user?.email}
                      </div>
                      <button
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="inline mr-2" size={16} />
                        Profile
                      </button>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <LogOut className="inline mr-2" size={16} />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};