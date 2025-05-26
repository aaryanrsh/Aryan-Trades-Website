
import { Target, Phone, ChartLine, Users, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      title: "Daily High-Probability Signals",
      description: "3-5 carefully selected trades per day with exact entry/exit points"
    },
    {
      icon: Phone,
      title: "Instant Mobile Alerts", 
      description: "Never miss a profitable trade with push notifications"
    },
    {
      icon: ChartLine,
      title: "Live Market Analysis",
      description: "Real-time chart breakdowns and market insights from pro traders"
    },
    {
      icon: Users,
      title: "VIP Community Access",
      description: "Connect with 12,000+ successful traders sharing strategies and wins"
    },
    {
      icon: Shield,
      title: "Risk Management Guide",
      description: "Learn proper position sizing and stop-loss strategies"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Track your profits with our member-exclusive tools"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Everything You Get Inside Our VIP Discord
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-8 hover:scale-105 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-crypto-green/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-crypto-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
