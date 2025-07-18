import React from 'react';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50">
            <Heart size={20} className="text-gray-600" />
          </button>
        </div>
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">{product.category}</span>
          <span className="text-sm text-gray-500">{product.brand}</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(product)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center"
          >
            <Eye size={16} className="mr-2" />
            View
          </button>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors ${
              product.inStock
                ? isInCart(product.id)
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={16} className="mr-2" />
            {isInCart(product.id) ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};