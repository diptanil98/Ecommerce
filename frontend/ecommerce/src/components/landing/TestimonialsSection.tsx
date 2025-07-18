import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Verified Customer',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Amazing shopping experience! The products arrived quickly and exactly as described. The customer service is outstanding.',
    product: 'Wireless Headphones'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Enthusiast',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Best prices I\'ve found online! The checkout process is smooth and secure. Highly recommend ShopHub to everyone.',
    product: 'Smart Watch'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Regular Shopper',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Love the variety of products and the user-friendly interface. Returns are hassle-free and shipping is always fast.',
    product: 'Skincare Set'
  }
];

export const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 text-blue-100" size={32} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  Purchased: {testimonial.product}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm">
            <div className="flex items-center mr-4">
              {renderStars(5)}
            </div>
            <span className="text-gray-900 font-semibold">4.9/5</span>
            <span className="text-gray-600 ml-2">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};