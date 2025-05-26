
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Join Aryan Trades Premium Today
        </h2>
        
        <Card className="bg-card-gradient backdrop-blur-sm border-gray-700 p-12 max-w-lg mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Discord Access</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-crypto-green">Premium</span>
              </div>
              <div className="text-gray-400 mt-2">Trading Community</div>
            </div>
            
            <div className="space-y-3 text-left">
              {[
                "📊 Real-Time Trade Commentary",
                "🧠 Daily Trade Recaps", 
                "💬 Active, No-Fluff Discussions",
                "📚 Educational Content & Analysis",
                "🤝 Supportive Trader Network",
                "📈 Market Structure Insights",
                "⚡ Live Alerts & Breakdowns"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-crypto-green">✅</span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-green-gradient text-black font-bold text-xl py-6 rounded-lg hover:scale-105 transition-all duration-300 animate-glow"
            >
              JOIN ARYAN TRADES PREMIUM
            </Button>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>Instant Discord access • Premium trading community</p>
              <div className="flex items-center justify-center gap-2 text-crypto-green font-medium">
                <span>💰</span>
                <span>Let's build, lock in, and keep stacking wins together</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
