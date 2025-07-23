import { useState, useEffect, useMemo } from 'react';
import type { Product, FilterState } from '../types';
import { useDisplayProduct } from './useDisplayProduct';

export const useProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    brand: 'All',
    priceRange: [0, 500],
    rating: 0,
    inStock: false,
    sortBy: 'name',
    sortOrder: 'asc'
  });
  const {products,loading} = useDisplayProduct();

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower) ||
          product.brand.toLowerCase().includes(searchLower) ||
          product.tags.some(tag => tag.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      
      if (filters.category !== 'All' && product.category !== filters.category) {
        return false;
      }

      
      if (filters.brand !== 'All' && product.brand !== filters.brand) {
        return false;
      }

      
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

  
      if (product.rating < filters.rating) {
        return false;
      }

      
      if (filters.inStock && !product.inStock) {
        return false;
      }

      return true;
    });

    
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (filters.sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'newest':
          aValue = a.id;
          bValue = b.id;
          break;
        default:
          aValue = a.name;
          bValue = b.name;
      }

      if (filters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchTerm, filters]);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'All',
      brand: 'All',
      priceRange: [0, 500],
      rating: 0,
      inStock: false,
      sortBy: 'name',
      sortOrder: 'asc'
    });
    setSearchTerm('');
  };

  return {
    products: filteredProducts,
    searchTerm,
    setSearchTerm,
    filters,
    updateFilter,
    resetFilters,
    totalProducts: filteredProducts.length
  };
};