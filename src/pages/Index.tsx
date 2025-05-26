
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ResultsSection } from "@/components/ResultsSection";
import { TradingResultsGallery } from "@/components/TradingResultsGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <Navigation />
      <HeroSection />
      <SocialProofBar />
      <div id="results">
        <ResultsSection />
      </div>
      <TradingResultsGallery />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
