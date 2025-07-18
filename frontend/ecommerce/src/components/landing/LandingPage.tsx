import React from 'react';
import { HeroSection } from './HeroSection';
import { FeaturesSection } from './FeaturesSection';
import { CategoriesSection } from './CategoriesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { CTASection } from './CTASection';

interface LandingPageProps {
  onGetStarted: () => void;
  onCategoryClick: (category: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onCategoryClick }) => {
  return (
    <div className="min-h-screen">
      <HeroSection onGetStarted={onGetStarted} />
      <FeaturesSection />
      <CategoriesSection onCategoryClick={onCategoryClick} />
      <TestimonialsSection />
      <CTASection onGetStarted={onGetStarted} />
    </div>
  );
};