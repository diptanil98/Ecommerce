import React from 'react';
import { Shield, Truck, CreditCard, Headphones, Star, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: 'Your data is protected with bank-level security and encrypted transactions.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free shipping on orders over $50. Express delivery available.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: CreditCard,
    title: 'Easy Payments',
    description: 'Multiple payment options including cards, wallets, and buy now pay later.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is always ready to help you.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Star,
    title: 'Quality Products',
    description: 'Carefully curated products from trusted brands and sellers.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day hassle-free returns and exchanges on all products.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ShopHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best shopping experience possible. 
            Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};