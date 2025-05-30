
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";

export const TradingResultsGallery = () => {
  const resultCategories = [
    {
      title: "Daily Wins",
      icon: TrendingUp,
      description: "Screenshots of successful daily trades",
      images: [
        { 
          src: "/lovable-uploads/0d6cd3ed-f030-4ba8-82bf-ed96f34c886d.png",
          alt: "evanklife SNQ trade showing $1535.64 profit",
          caption: "75 points 1 trade - $1535.64"
        },
        { 
          src: "/lovable-uploads/d121c0b7-6209-416a-91d1-ad5a9158a82e.png",
          alt: "Account showing $1355.80 total P/L",
          caption: "Total P/L: $1355.80"
        },
        { 
          src: "/lovable-uploads/478635df-89b6-4b98-9a22-07497c469d0b.png",
          alt: "P&L showing $918.50 profit",
          caption: "Daily P&L: $918.50"
        }
      ]
    },
    {
      title: "Weekly Performance",
      icon: DollarSign,
      description: "Weekly P&L summaries and progress",
      images: [
        { 
          src: "/lovable-uploads/faf64ae8-a863-4eb8-8aaa-b03dd416e5ca.png",
          alt: "tahir's unrealized PNL showing 34,340.67 USDT profit",
          caption: "Unrealized PNL: 34,340.67 USDT (+492.57%)"
        },
        { 
          src: "/lovable-uploads/18c88b1d-668b-4a97-ad99-0b49adba86cf.png",
          alt: "theking01753's portfolio showing $16,553.25 with $8,372.03 gains",
          caption: "Portfolio: $16,553.25 (+$8,372.03, +102.33%)"
        },
        { 
          src: "/lovable-uploads/bd9612e4-c8b7-44f1-91a0-6e0e85681fc5.png",
          alt: "Jordy's SPY options trade showing $344.00 profit",
          caption: "SPY $536 Call: +$344.00 (+59.72%)"
        }
      ]
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Verified Trading Results
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          {resultCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-crypto-green/20 rounded-lg">
                    <category.icon className="h-6 w-6 text-crypto-green" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {category.images.map((image, imgIndex) => (
                  <Card key={imgIndex} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-4 hover:scale-105 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="w-full h-48 md:h-56 bg-gray-800 rounded-lg overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-crypto-green font-semibold">{image.caption}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
