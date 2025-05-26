
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Join The Most Profitable Crypto Community
        </h2>
        
        <Card className="bg-card-gradient backdrop-blur-sm border-gray-700 p-12 max-w-lg mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">VIP Monthly Membership</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-gray-400 line-through">$97</span>
                <span className="text-5xl font-bold text-crypto-green">$47</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            
            <div className="space-y-3 text-left">
              {[
                "Daily crypto signals (3-5 per day)",
                "24/7 Discord community access", 
                "Mobile push notifications",
                "Live market analysis",
                "Risk management training",
                "Performance tracking tools",
                "Direct access to pro traders"
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
              JOIN US NOW - $47/Month
            </Button>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>30-day money-back guarantee • Cancel anytime • No contracts</p>
              <div className="flex items-center justify-center gap-2 text-crypto-green font-medium">
                <span>⏰</span>
                <span>Price increases to $97 in 48 hours - Lock in $47/month forever</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
