import React from 'react';
import { ArrowRight, ShoppingBag, Star, Users, Truck } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Star className="text-yellow-400 mr-2" size={16} />
              <span className="text-sm font-medium">Trusted by 10,000+ customers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Shop Smart,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Live Better
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover amazing products at unbeatable prices. From electronics to fashion, 
              we've got everything you need with fast shipping and secure payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Start Shopping
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">10K+</div>
                <div className="text-blue-200 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-blue-200 text-sm">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">99%</div>
                <div className="text-blue-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Product Cards */}
              <div className="space-y-4">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm mb-1">Wireless Headphones</h3>
                  <p className="text-blue-200 text-xs mb-2">Premium Sound Quality</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$99.99</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="text-xs ml-1">4.8</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 delay-100">
                  <div className="w-full h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm mb-1">Smart Watch</h3>
                  <p className="text-blue-200 text-xs mb-2">Fitness Tracking</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$199.99</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="text-xs ml-1">4.7</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 delay-200">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm mb-1">Coffee Beans</h3>
                  <p className="text-blue-200 text-xs mb-2">Organic Premium</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$24.99</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="text-xs ml-1">4.9</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 transform hover:scale-105 transition-all duration-300 delay-300">
                  <div className="w-full h-32 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-sm mb-1">Office Chair</h3>
                  <p className="text-blue-200 text-xs mb-2">Ergonomic Design</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">$299.99</span>
                    <div className="flex items-center">
                      <Star className="text-yellow-400 fill-current" size={12} />
                      <span className="text-xs ml-1">4.6</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              50% OFF
            </div>
            <div className="absolute top-1/2 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              Free Shipping
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-gray-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};