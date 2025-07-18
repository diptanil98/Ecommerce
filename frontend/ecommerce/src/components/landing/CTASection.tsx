import React from 'react';
import { ArrowRight, Gift, Bell } from 'lucide-react';

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
            <Gift className="text-yellow-400 mr-2" size={20} />
            <span className="font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and discover amazing products at unbeatable prices. 
            Sign up today and get 20% off your first order!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center group"
            >
              Start Shopping Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <div className="flex items-center text-blue-100">
              <Bell size={16} className="mr-2" />
              <span className="text-sm">Get notified about exclusive deals</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">10,000+</div>
              <div className="text-blue-200 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-blue-200 text-sm">Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">99%</div>
              <div className="text-blue-200 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full animate-ping"></div>
    </section>
  );
};