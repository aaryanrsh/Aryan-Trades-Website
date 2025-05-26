
export const SocialProofBar = () => {
  return (
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">12,847+</div>
            <div className="text-gray-400">Active Members</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">$2.3M+</div>
            <div className="text-gray-400">Member Profits This Month</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">78%</div>
            <div className="text-gray-400">Win Rate</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold text-crypto-green">24/7</div>
            <div className="text-gray-400">Signal Alerts</div>
          </div>
        </div>
      </div>
    </section>
  );
};
