
import { Card } from "@/components/ui/card";
import { Image } from "lucide-react";

export const ResultsSection = () => {
  const results = [
    {
      achievement: "Consistent Edge",
      timeframe: "Daily",
      quote: "Real-time commentary helps me catch setups I would miss",
      highlight: "Live Market Analysis",
      benefit: "Better entries & exits",
      imageAlt: "Daily trading results screenshot"
    },
    {
      achievement: "Skill Development",
      timeframe: "Weekly", 
      quote: "Daily recaps teach me market structure and liquidity concepts",
      highlight: "Educational Content",
      benefit: "Improved understanding",
      imageAlt: "Weekly progress charts"
    },
    {
      achievement: "Community Support",
      timeframe: "24/7",
      quote: "No-fluff discussions keep me sharp and focused on results",
      highlight: "Active Network",
      benefit: "Continuous learning",
      imageAlt: "Community discussion screenshots"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16 px-4">
          Real Value From Our Premium Community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-6 md:p-8 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                  <div className="text-center text-gray-400">
                    <Image className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Add result image here</p>
                    <p className="text-xs mt-1">{result.imageAlt}</p>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="text-2xl md:text-4xl font-bold text-crypto-green">{result.achievement}</div>
                  <div className="text-gray-300 font-medium">{result.timeframe}</div>
                  <div className="text-gray-400 italic text-sm md:text-base">"{result.quote}"</div>
                  
                  <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-300">Focus: {result.highlight}</div>
                    <div className="text-sm text-crypto-green font-medium">Result: {result.benefit}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
