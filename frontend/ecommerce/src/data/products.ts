import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 99.99,
    originalPrice: 149.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'SoundTech',
    rating: 4.5,
    reviews: 1234,
    inStock: true,
    tags: ['wireless', 'bluetooth', 'noise-cancelling', 'headphones']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor and GPS',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'FitTrack',
    rating: 4.7,
    reviews: 892,
    inStock: true,
    tags: ['fitness', 'smartwatch', 'gps', 'heart-rate']
  },
  {
    id: '3',
    name: 'Premium Coffee Beans',
    description: 'Organic single-origin coffee beans from Ethiopia',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    brand: 'BrewMaster',
    rating: 4.8,
    reviews: 456,
    inStock: true,
    tags: ['coffee', 'organic', 'ethiopia', 'single-origin']
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic office chair with lumbar support',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Furniture',
    brand: 'ComfortPlus',
    rating: 4.6,
    reviews: 324,
    inStock: true,
    tags: ['office', 'chair', 'ergonomic', 'lumbar-support']
  },
  {
    id: '5',
    name: 'Portable Power Bank',
    description: '20000mAh fast-charging power bank with USB-C and wireless charging',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.pexels.com/photos/4526943/pexels-photo-4526943.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'PowerTech',
    rating: 4.4,
    reviews: 678,
    inStock: true,
    tags: ['power-bank', 'portable', 'wireless-charging', 'fast-charging']
  },
  {
    id: '6',
    name: 'Organic Skincare Set',
    description: 'Complete organic skincare routine with cleanser, serum, and moisturizer',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    brand: 'NaturalGlow',
    rating: 4.9,
    reviews: 567,
    inStock: true,
    tags: ['skincare', 'organic', 'natural', 'routine']
  },
  {
    id: '7',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision gaming mouse with RGB lighting and customizable buttons',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'GameTech',
    rating: 4.3,
    reviews: 789,
    inStock: false,
    tags: ['gaming', 'mouse', 'wireless', 'rgb']
  },
  {
    id: '8',
    name: 'Premium Yoga Mat',
    description: 'Non-slip yoga mat with alignment guides and eco-friendly materials',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports',
    brand: 'YogaLife',
    rating: 4.7,
    reviews: 234,
    inStock: true,
    tags: ['yoga', 'mat', 'non-slip', 'eco-friendly']
  }
];

export const categories = ['All', 'Electronics', 'Food', 'Furniture', 'Beauty', 'Sports'];
export const brands = ['All', 'SoundTech', 'FitTrack', 'BrewMaster', 'ComfortPlus', 'PowerTech', 'NaturalGlow', 'GameTech', 'YogaLife'];