
import { Card } from "@/components/ui/card";

export const ResultsSection = () => {
  const results = [
    {
      profit: "+$8,420",
      timeframe: "In 3 weeks",
      quote: "Started with $1,200, followed every signal religiously",
      signal: "SOL Long @$89",
      exit: "$127 (+42.7%)"
    },
    {
      profit: "+$12,680",
      timeframe: "In 6 weeks", 
      quote: "Best investment I've ever made, changed my life",
      signal: "MATIC Long @$0.85",
      exit: "$1.34 (+57.6%)"
    },
    {
      profit: "+$21,350",
      timeframe: "In 2 months",
      quote: "Finally quit my day job thanks to these signals",
      signal: "AVAX Long @$18.50", 
      exit: "$31.20 (+68.6%)"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Real Results From Real Members
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-8 hover:scale-105 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-crypto-green">{result.profit} Profit</div>
                <div className="text-gray-300 font-medium">{result.timeframe}</div>
                <div className="text-gray-400 italic">"{result.quote}"</div>
                
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <div className="text-sm text-gray-300">Signal: {result.signal}</div>
                  <div className="text-sm text-crypto-green font-medium">Exit: {result.exit}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
