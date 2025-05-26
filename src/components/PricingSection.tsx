
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PricingSection = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 md:mb-16">
          Join Aryan Trades Premium Today
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="bg-card-gradient backdrop-blur-sm border-gray-700 p-8 md:p-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Free Access</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl md:text-5xl font-bold text-gray-400">Free</span>
                </div>
                <div className="text-gray-400 mt-2">Basic Community</div>
              </div>
              
              <div className="space-y-3 text-left">
                {[
                  "📊 Limited Trade Commentary",
                  "💬 Basic Community Access", 
                  "📈 1 Signal a Month"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-gray-500">✅</span>
                    <span className="text-gray-400 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gray-600 text-white font-bold text-lg md:text-xl py-4 md:py-6 rounded-lg hover:bg-gray-500 transition-all duration-300"
                onClick={scrollToPricing}
              >
                JOIN FREE
              </Button>
            </div>
          </Card>

          {/* Premium Tier */}
          <Card className="bg-card-gradient backdrop-blur-sm border-crypto-green p-8 md:p-12 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-crypto-green text-black px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Premium Discord Access</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl md:text-3xl font-bold text-gray-500 line-through">$200</span>
                  <span className="text-3xl md:text-5xl font-bold text-crypto-green">$120</span>
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <div className="text-crypto-green mt-2 font-medium">Save $80/month!</div>
              </div>
              
              <div className="space-y-3 text-left">
                {[
                  "📊 Real-Time Trade Commentary",
                  "🧠 Daily Trade Recaps", 
                  "💬 Active, No-Fluff Discussions",
                  "📚 Educational Content & Analysis",
                  "🤝 Supportive Trader Network",
                  "📈 1-2 Signals a Day",
                  "⚡ Live Alerts & Breakdowns"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-crypto-green">✅</span>
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-green-gradient text-black font-bold text-lg md:text-xl py-4 md:py-6 rounded-lg hover:scale-105 transition-all duration-300 animate-glow"
                onClick={scrollToPricing}
              >
                JOIN ARYAN TRADES PREMIUM
              </Button>
              
              <div className="space-y-2 text-sm text-gray-400">
                <p>Instant Discord access • Premium trading community</p>
                <div className="flex items-center justify-center gap-2 text-crypto-green font-medium">
                  <span>💰</span>
                  <span className="text-sm md:text-base">Let's build, lock in, and keep stacking wins together</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
