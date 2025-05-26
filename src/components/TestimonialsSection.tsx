
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mike R.",
      result: "Consistent profitable trades",
      quote: "The real-time commentary and daily recaps have completely changed my trading approach. Aryan's insights on market structure are next level. Finally found a community that's actually focused on results.",
      initials: "MR"
    },
    {
      name: "Jessica T.",
      result: "Improved win rate significantly", 
      quote: "Best trading community I've joined. The educational content is incredible and the no-fluff discussions keep you sharp. Learning about supply/demand concepts has been a game changer.",
      initials: "JT"
    },
    {
      name: "David K.",
      result: "Leveled up trading skills",
      quote: "The supportive network here is amazing. No ego, just traders helping each other grow. The daily trade recaps help me understand setups I would have missed on my own.",
      initials: "DK"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What Our Premium Members Are Saying
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card-gradient backdrop-blur-sm border-gray-700 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-crypto-green text-black font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-crypto-green text-sm font-medium">{testimonial.result}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
