export const SocialProofBar = () => {
  return (
    <section className="py-8 md:py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-crypto-green">500+</div>
            <div className="text-gray-400 text-sm md:text-base">Members</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-crypto-green">24/7</div>
            <div className="text-gray-400 text-sm md:text-base">Live Commentary</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-crypto-green">Daily</div>
            <div className="text-gray-400 text-sm md:text-base">Trade Recaps</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl md:text-3xl font-bold text-crypto-green">Real-Time</div>
            <div className="text-gray-400 text-sm md:text-base">Market Analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
