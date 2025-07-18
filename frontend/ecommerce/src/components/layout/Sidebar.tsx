import React from 'react';
import { Filter, X, RefreshCw } from 'lucide-react';
import type { FilterState } from '../../types';
import { categories, brands } from '../../data/products';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onResetFilters: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onResetFilters
}) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 w-80 bg-white shadow-lg lg:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block
      `}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="mr-2" size={20} />
              Filters
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={onResetFilters}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Reset Filters"
              >
                <RefreshCw size={16} />
              </button>
              <button
                onClick={onClose}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={filters.category === category}
                      onChange={(e) => onFilterChange('category', e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Brand</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={filters.brand === brand}
                      onChange={(e) => onFilterChange('brand', e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => onFilterChange('priceRange', [0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Minimum Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1, 0].map(rating => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={filters.rating === rating}
                      onChange={(e) => onFilterChange('rating', parseInt(e.target.value))}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      {rating === 0 ? 'All Ratings' : `${rating}+ Stars`}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Stock Filter */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => onFilterChange('inStock', e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">In Stock Only</span>
              </label>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Sort By</h3>
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split('-');
                  onFilterChange('sortBy', sortBy);
                  onFilterChange('sortOrder', sortOrder);
                }}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="rating-desc">Rating (High to Low)</option>
                <option value="newest-desc">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};