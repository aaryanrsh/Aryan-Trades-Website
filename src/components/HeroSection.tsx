
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Floating crypto symbols */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 md:left-10 text-2xl md:text-4xl animate-float">₿</div>
        <div className="absolute top-32 md:top-40 right-4 md:right-20 text-xl md:text-3xl animate-float" style={{ animationDelay: '1s' }}>Ξ</div>
        <div className="absolute bottom-32 md:bottom-40 left-4 md:left-20 text-lg md:text-2xl animate-float" style={{ animationDelay: '2s' }}>₳</div>
        <div className="absolute bottom-20 right-4 md:right-10 text-xl md:text-3xl animate-float" style={{ animationDelay: '3s' }}>◎</div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/a8a727ed-c8f4-4201-babf-8695587d67c0.png" 
            alt="Aryan Trades Logo" 
            className="h-40 md:h-48 w-auto"
          />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
          Welcome to <span className="text-crypto-green">Aryan Trades</span> Premium 🔥
        </h1>
        
        <h2 className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 md:mb-4 font-medium px-4">
          Join a Focused, High-Level Trading Community Built for Traders Who Want Results
        </h2>
        
        <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Whether you're new or experienced, this is where you level up. 
          No ego, just traders helping traders build, lock in, and keep stacking wins together.
        </p>
        
        <div className="space-y-3 md:space-y-4 px-4">
          <Button 
            size="lg" 
            className="bg-green-gradient text-black font-bold text-base md:text-lg px-6 md:px-12 py-3 md:py-6 rounded-lg hover:scale-105 transition-all duration-300 animate-glow w-full sm:w-auto"
            onClick={scrollToPricing}
          >
            JOIN ARYAN TRADES PREMIUM
          </Button>
          
          <p className="text-xs md:text-sm text-gray-400">
            Instant Discord access • Premium trading community • Real results
          </p>
          
          <div className="flex items-center justify-center gap-2 text-crypto-green font-medium">
            <span className="text-lg md:text-xl">💰</span>
            <span className="text-xs md:text-sm">Let's get to work and keep stacking wins</span>
          </div>
        </div>
      </div>
    </section>
  );
};
