
export const SocialProofBar = () => {
  return (
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">500+</div>
            <div className="text-gray-400">Premium Members</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">24/7</div>
            <div className="text-gray-400">Live Commentary</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">Daily</div>
            <div className="text-gray-400">Trade Recaps</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">Real-Time</div>
            <div className="text-gray-400">Market Analysis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
