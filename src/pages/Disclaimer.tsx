
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-crypto-green mb-8 text-center">
            ARYAN TRADES DISCLAIMER PAGE
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Legal Disclaimer</h2>
              <p className="text-red-400 font-semibold mb-4">IMPORTANT: READ CAREFULLY BEFORE ACCESSING OUR SERVICES</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Investment & Trading Risks</h3>
              <p className="mb-4">
                Aryan Trades does not provide investment advice and is not a registered investment advisor. All information, signals, and content provided through our Discord server are strictly opinions for educational and informational purposes only.
              </p>
              <p className="mb-4">
                Cryptocurrency trading carries substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. The volatile nature of cryptocurrency markets means you could lose some or all of your invested capital.
              </p>
              <p>
                It is strongly recommended that you conduct your own research and consult with qualified financial professionals before making any trading decisions. You should carefully consider your financial situation and risk tolerance before participating in cryptocurrency trading.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">No Guarantee of Profits</h3>
              <p className="mb-4">
                While we share our analysis and trading signals, there is no guarantee of profits or success. Trading results will vary significantly between individuals. Testimonials and profit examples shown represent exceptional results and should not be considered typical outcomes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Limitation of Liability</h3>
              <p className="mb-3">By accessing our Discord server and services, you acknowledge and agree that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are solely responsible for your own trading decisions and any resulting profits or losses</li>
                <li>Aryan Trades shall not be held liable for any financial losses, damages, or adverse consequences resulting from your use of our information or services</li>
                <li>You understand that all trading involves risk and you could lose money</li>
                <li>You are using our services entirely at your own risk</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Intellectual Property</h3>
              <p className="mb-3">
                All content, materials, signals, and information provided on the Aryan Trades Discord server are protected by copyright and owned exclusively by Aryan Trades.
              </p>
              <p className="mb-3">Unauthorized use is strictly prohibited, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Copying, reproducing, or redistributing our content</li>
                <li>Sharing signals or analysis outside our community</li>
                <li>Recording or screenshotting content for distribution</li>
              </ul>
              <p>
                Violation of these terms may result in immediate termination of access and legal action.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Service Availability</h3>
              <p className="mb-3">
                Aryan Trades reserves the right to modify or discontinue services at any time without prior notice. There may be periods where no signals are provided due to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Market conditions</li>
                <li>Vacation or personal time</li>
                <li>Technical issues</li>
                <li>Lack of suitable trading opportunities</li>
              </ul>
              <p>We do not guarantee daily signals or continuous service availability.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Membership & Refunds</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All sales are final once payment is processed</li>
                <li>Refunds are only provided within the first 30 days of membership as part of our money-back guarantee</li>
                <li>Partial refunds are not available</li>
                <li>To cancel your subscription, you must provide written notice</li>
                <li>Access continues until your next billing cycle after cancellation</li>
                <li>Aryan Trades reserves the right to refuse service to anyone</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Age Requirement</h3>
              <p>
                You must be at least 18 years old to access our services. By using our Discord server, you confirm you meet this age requirement.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Governing Law</h3>
              <p>
                This disclaimer and all related matters are governed by the laws of [Your State/Country]. Any disputes will be resolved in the appropriate courts of [Your Jurisdiction].
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">Contact Information</h3>
              <p className="mb-4">For questions regarding this disclaimer or our services, contact us at:</p>
              <p className="text-crypto-green font-semibold">support@aryantrades.com</p>
            </section>

            <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mt-8">
              <p className="text-red-300 font-bold text-center">
                BY ACCESSING OUR DISCORD SERVER OR USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY ALL TERMS OF THIS DISCLAIMER.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Disclaimer;
