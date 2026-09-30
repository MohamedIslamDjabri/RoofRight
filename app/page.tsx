import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ServiceComparison from '@/components/sections/ServiceComparison';
import HomeExteriorDiagram from '@/components/exterior/HomeExteriorDiagram';
import BeforeAfterSlider from '@/components/sections/BeforeAfterSlider';
import FeaturedCaseStudy from '@/components/sections/FeaturedCaseStudy';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FinancingSection from '@/components/sections/FinancingSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'RoofRight Exteriors | Roofing, Gutters & Siding',
  description: 'Protect your home from the top down. Single-point contractor reliability for roofing, roof repair, roof replacement, gutters, and siding across Austin & Central Texas.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section & Fast Consultation Planner */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Complete Exterior Services */}
      <ServicesGrid />

      {/* 4. Diagnostic Service Comparison Matrix */}
      <ServiceComparison />

      {/* 5. One Exterior. One Coordinated Defense. (Interactive Hotspots) */}
      <HomeExteriorDiagram />

      {/* 6. Interactive Before & After Comparison Slider */}
      <BeforeAfterSlider />

      {/* 7. Featured Project Case Study */}
      <FeaturedCaseStudy />

      {/* 8. Verified Homeowner Reviews */}
      <ReviewsSection />

      {/* 9. Financing & Warranty Trust Callout */}
      <FinancingSection />

      {/* 10. Final Call To Action Banner */}
      <CTASection />
    </div>
  );
}
