import React from 'react';
import { Smartphone, Coffee, Armchair, Sparkles, Gamepad2, Dumbbell } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    name: 'Electronics',
    description: 'Latest gadgets and tech',
    image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Coffee,
    name: 'Clothing',
    description: 'Gourmet and organic',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Armchair,
    name: 'Home',
    description: 'Comfort meets style',
    image: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Sparkles,
    name: 'Beauty',
    description: 'Skincare and cosmetics',
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Gamepad2,
    name: 'Gaming',
    description: 'Gaming gear and accessories',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Dumbbell,
    name: 'Sports',
    description: 'Fitness and outdoor gear',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    color: 'from-emerald-500 to-green-600'
  }
];

interface CategoriesSectionProps {
  onCategoryClick: (category: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onCategoryClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of products across different categories. 
            Find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => onCategoryClick(category.name)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-center opacity-90">{category.description}</p>
                <div className="mt-4 bg-white text-gray-900 px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Explore Now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};