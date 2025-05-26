
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jake M.",
      result: "+$6,400 first month",
      quote: "I was skeptical at first, but after making $6,400 in my first month, I'm a believer. These guys know what they're doing. The Discord is active 24/7 and the signals are incredibly accurate.",
      initials: "JM"
    },
    {
      name: "Sarah K.",
      result: "+$18,950 in 8 weeks", 
      quote: "Best $47 I've ever spent. Made it back in the first day and haven't looked back since. The community is amazing and the results speak for themselves.",
      initials: "SK"
    },
    {
      name: "Marcus R.",
      result: "+$31,200 in 3 months",
      quote: "I've tried other signal groups before but nothing comes close to this. The win rate is insane and the risk management is on point. Finally found something that actually works.",
      initials: "MR"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          What Our VIP Members Are Saying
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
