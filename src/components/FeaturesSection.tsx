
import { BarChart3, MessageCircle, BookOpen, Users, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-Time Trade Commentary",
      description: "Stay ahead with alerts, entries, exits, and breakdowns shared live"
    },
    {
      icon: BarChart3,
      title: "Daily Trade Recaps", 
      description: "Review key setups, wins, and lessons from each trading day to sharpen your edge"
    },
    {
      icon: MessageCircle,
      title: "Active, No-Fluff Discussions",
      description: "Talk setups, share insights, and break down the market in real time"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "Learn how and why we take trades — from supply/demand to liquidity and market structure"
    },
    {
      icon: Users,
      title: "Supportive Trader Network",
      description: "No ego, just traders helping traders. Ask questions, get feedback, and grow"
    },
    {
      icon: TrendingUp,
      title: "Level Up Your Trading",
      description: "Build consistent winning strategies and develop your trading edge"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What to Expect in Aryan Trades Premium
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
