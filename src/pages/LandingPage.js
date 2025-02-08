import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ValuePropositionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
};

export default LandingPage;
