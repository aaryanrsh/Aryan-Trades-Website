
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <HeroSection />
      <SocialProofBar />
      <ResultsSection />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default Index;
