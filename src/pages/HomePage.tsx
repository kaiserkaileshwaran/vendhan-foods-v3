import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { IngredientMarquee } from '../components/IngredientMarquee';
import { CategoryShowcase } from '../components/CategoryShowcase';
import { BestSellersCarousel } from '../components/BestSellersCarousel';
import { MilletStorySection } from '../components/MilletStorySection';
import { CategoryFeaturedSections } from '../components/CategoryFeaturedSections';
import { WhyVendhan } from '../components/WhyVendhan';
import { BrandStory } from '../components/BrandStory';
import { Testimonials } from '../components/Testimonials';
import { ChennaiDelivery } from '../components/ChennaiDelivery';
import { InstagramFeed } from '../components/InstagramFeed';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <IngredientMarquee />
      <CategoryShowcase />
      <BestSellersCarousel />
      <MilletStorySection />
      <CategoryFeaturedSections />
      <WhyVendhan />
      <BrandStory />
      <Testimonials />
      <ChennaiDelivery />
      <InstagramFeed />
    </div>
  );
};
