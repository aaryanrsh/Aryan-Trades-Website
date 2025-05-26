
import { Card } from "@/components/ui/card";

export const ResultsSection = () => {
  const results = [
    {
      achievement: "Consistent Edge",
      timeframe: "Daily",
      quote: "Real-time commentary helps me catch setups I would miss",
      highlight: "Live Market Analysis",
      benefit: "Better entries & exits"
    },
    {
      achievement: "Skill Development",
      timeframe: "Weekly", 
      quote: "Daily recaps teach me market structure and liquidity concepts",
      highlight: "Educational Content",
      benefit: "Improved understanding"
    },
    {
      achievement: "Community Support",
      timeframe: "24/7",
      quote: "No-fluff discussions keep me sharp and focused on results",
      highlight: "Active Network",
      benefit: "Continuous learning"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Real Value From Our Premium Community
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-8 hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-crypto-green">{result.achievement}</div>
                <div className="text-gray-300 font-medium">{result.timeframe}</div>
                <div className="text-gray-400 italic">"{result.quote}"</div>
                
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-300">Focus: {result.highlight}</div>
                  <div className="text-sm text-crypto-green font-medium">Result: {result.benefit}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
