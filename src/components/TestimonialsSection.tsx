
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sohson",
      result: "$20,085.33 (+218%)",
      quote: "thanks for getting me into crypto @aryanjashim 😃",
      initials: "S",
      image: "/lovable-uploads/b396364d-d098-4685-bc68-a81f20fa3224.png"
    },
    {
      name: "evandabest", 
      result: "+$846.00 (+371.67%)",
      quote: "SPX options trade delivered incredible returns in just one day",
      initials: "E",
      image: "/lovable-uploads/498beb9c-a10d-4246-a13b-ea28eb5a9d3e.png"
    },
    {
      name: "tendorla",
      result: "$310.85 (38.24%) Today",
      quote: "The goat @aryanjashim - consistent daily wins with QQQ options",
      initials: "T",
      image: "/lovable-uploads/908d813d-f2bb-4ded-b4cc-6e7eb5d39e41.png"
    },
    {
      name: "jack",
      result: "+$210.00 (+79.55%)",
      quote: "HE TOLD US 🤷‍♂️👨‍💼 - Multiple winning trades following the signals",
      initials: "J",
      image: "/lovable-uploads/8a117b89-c9e9-439b-8473-26f55274162d.png"
    },
    {
      name: "tendorla",
      result: "Realized +$194.00",
      quote: "Consistent profits with QQQ options strategies - real results daily",
      initials: "T",
      image: "/lovable-uploads/e1fe5af0-7999-4fbf-a47e-3cfe5b46864f.png"
    },
    {
      name: "Randisimo",
      result: "+$183.00 (+79.57%)",
      quote: "QQQ $519 Put 5/23 and SPY $589 Put 5/23 - both winners from the calls",
      initials: "R",
      image: "/lovable-uploads/7b33637a-b5c6-462d-83f4-875676a195ec.png"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Real Results From Our Premium Members
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-6 md:p-8">
              <div className="space-y-6">
                {/* Trading result image */}
                <div className="w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`Trading result showing ${testimonial.result}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-crypto-green text-black font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-crypto-green text-sm font-bold">{testimonial.result}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic text-sm md:text-base">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
