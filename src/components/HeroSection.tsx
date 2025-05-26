
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating crypto symbols */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-4xl animate-float">₿</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>Ξ</div>
        <div className="absolute bottom-40 left-20 text-2xl animate-float" style={{ animationDelay: '2s' }}>₳</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float" style={{ animationDelay: '3s' }}>◎</div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Turn <span className="text-crypto-green">$500</span> Into{" "}
          <span className="text-crypto-green">$5,000+</span> Every Month
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          Join 12,000+ Traders Getting Daily Crypto Signals That Actually Work
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Stop guessing. Start winning. Our VIP Discord community delivers high-probability 
          crypto signals with 78% win rate.
        </p>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-green-gradient text-black font-bold text-xl px-12 py-6 rounded-lg hover:scale-105 transition-all duration-300 animate-glow"
          >
            JOIN NOW - $47/Month
          </Button>
          
          <p className="text-sm text-gray-400">
            Cancel anytime • No contracts • Instant access
          </p>
          
          <div className="flex items-center justify-center gap-2 text-crypto-green font-medium">
            <span className="text-xl">⚡</span>
            <span>Limited spots available - Only 50 new members this month</span>
          </div>
        </div>
      </div>
    </section>
  );
};
