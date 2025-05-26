
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-crypto-green mb-8 text-center">
            ARYAN TRADES TERMS & CONDITIONS
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Terms and Conditions of Service</h2>
              <p className="mb-2">Effective Date: [Current Date]</p>
              <p className="mb-4">Last Updated: [Current Date]</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">1. Agreement to Terms</h3>
              <p>
                By accessing or using Aryan Trades services, including our Discord server, website, and any related platforms ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">2. Description of Services</h3>
              <p className="mb-3">Aryan Trades provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Day trading signals and market analysis</li>
                <li>Educational content about day trading strategies</li>
                <li>Access to a private Discord community</li>
                <li>Trading tools and resources</li>
                <li>Market commentary and insights</li>
              </ul>
              <p>Our services are for educational and informational purposes only and do not constitute financial advice.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">3. Eligibility</h3>
              <p className="mb-3">To use our Services, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Not be prohibited from using our Services under applicable laws</li>
                <li>Provide accurate and complete registration information</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">4. Account Registration and Security</h3>
              <h4 className="text-md font-bold text-white mb-2">4.1 Account Creation</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>You must create an account to access our Services</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">4.2 Account Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are solely responsible for all activities under your account</li>
                <li>You must not share your account access with others</li>
                <li>You must not create multiple accounts without permission</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">5. Membership and Payments</h3>
              <h4 className="text-md font-bold text-white mb-2">5.1 Subscription Terms</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Memberships are billed monthly or as otherwise specified</li>
                <li>Payments are processed automatically on your billing date</li>
                <li>All fees are non-refundable except as specified in our refund policy</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">5.2 Price Changes</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>We reserve the right to modify pricing with 30 days notice</li>
                <li>Existing members will be grandfathered at their current rate unless they cancel and rejoin</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">5.3 Refund Policy</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>New members may request a full refund within 30 days of initial purchase</li>
                <li>Refunds must be requested via email to jashimaryan@gmail.com</li>
                <li>No partial refunds are provided for unused portions of membership periods</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">6. Acceptable Use Policy</h3>
              <h4 className="text-md font-bold text-white mb-2">6.1 Permitted Use</h4>
              <p className="mb-4">You may use our Services only for lawful purposes and in accordance with these Terms.</p>
              <h4 className="text-md font-bold text-white mb-2">6.2 Prohibited Activities</h4>
              <p className="mb-3">You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Share, redistribute, or resell our content outside the community</li>
                <li>Record, screenshot, or copy our signals or analysis for distribution</li>
                <li>Use automated systems or bots to access our Services</li>
                <li>Engage in harassment, spam, or disruptive behavior</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to reverse engineer or hack our systems</li>
                <li>Create fake accounts or impersonate others</li>
                <li>Share your account access with unauthorized persons</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">7. Intellectual Property Rights</h3>
              <h4 className="text-md font-bold text-white mb-2">7.1 Our Content</h4>
              <p className="mb-3">All content, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Trading signals and analysis</li>
                <li>Educational materials</li>
                <li>Software and tools</li>
                <li>Logos and branding</li>
                <li>Written content and commentary</li>
              </ul>
              <p className="mb-4">is owned by Aryan Trades and protected by copyright, trademark, and other intellectual property laws.</p>
              <h4 className="text-md font-bold text-white mb-2">7.2 Limited License</h4>
              <p>We grant you a limited, non-exclusive, non-transferable license to access and use our Services for personal, non-commercial purposes only.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">8. Community Guidelines</h3>
              <h4 className="text-md font-bold text-white mb-2">8.1 Discord Server Rules</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Respect all community members</li>
                <li>No spam, advertising, or self-promotion</li>
                <li>Keep discussions relevant to trading and markets</li>
                <li>Follow Discord's Terms of Service</li>
                <li>No sharing of external trading groups or competing services</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">8.2 Enforcement</h4>
              <p className="mb-3">Violation of community guidelines may result in:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warning or temporary mute</li>
                <li>Temporary or permanent ban from Discord server</li>
                <li>Termination of membership without refund</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">9. Disclaimers and Risk Warnings</h3>
              <h4 className="text-md font-bold text-white mb-2">9.1 Trading Risks</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Day trading involves substantial risk of loss</li>
                <li>Past performance does not guarantee future results</li>
                <li>You may lose some or all of your invested capital</li>
                <li>Market conditions can change rapidly and unpredictably</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">9.2 No Investment Advice</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our Services provide educational content and opinions only</li>
                <li>We are not licensed investment advisors</li>
                <li>You should consult qualified professionals before making investment decisions</li>
                <li>All trading decisions are your sole responsibility</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">10. Limitation of Liability</h3>
              <h4 className="text-md font-bold text-white mb-2">10.1 No Warranties</h4>
              <p className="mb-4">Our Services are provided "as is" without warranties of any kind, express or implied.</p>
              <h4 className="text-md font-bold text-white mb-2">10.2 Limitation of Damages</h4>
              <p className="mb-3">To the maximum extent permitted by law, Aryan Trades shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Financial losses from trading decisions</li>
                <li>Damages arising from service interruptions or technical issues</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">10.3 Maximum Liability</h4>
              <p>Our total liability to you shall not exceed the amount you paid for our Services in the 12 months preceding the claim.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">11. Indemnification</h3>
              <p className="mb-3">You agree to indemnify and hold harmless Aryan Trades from any claims, damages, or expenses arising from:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your trading activities</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">12. Termination</h3>
              <h4 className="text-md font-bold text-white mb-2">12.1 Termination by You</h4>
              <p className="mb-4">You may cancel your membership at any time by contacting jashimaryan@gmail.com. Access will continue until your next billing cycle.</p>
              <h4 className="text-md font-bold text-white mb-2">12.2 Termination by Us</h4>
              <p className="mb-3">We may terminate your access immediately for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Abuse of our Services or community</li>
                <li>Non-payment of fees</li>
              </ul>
              <h4 className="text-md font-bold text-white mb-2">12.3 Effect of Termination</h4>
              <p className="mb-3">Upon termination:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to Services will cease immediately</li>
                <li>You must stop using all our content and materials</li>
                <li>Outstanding fees remain due and payable</li>
                <li>Survival clauses will remain in effect</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">13. Privacy Policy</h3>
              <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">14. Modifications to Terms</h3>
              <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of our Services constitutes acceptance of modified Terms.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">15. Dispute Resolution</h3>
              <h4 className="text-md font-bold text-white mb-2">15.1 Governing Law</h4>
              <p className="mb-4">These Terms are governed by the laws of [Your State/Country] without regard to conflict of law principles.</p>
              <h4 className="text-md font-bold text-white mb-2">15.2 Arbitration</h4>
              <p className="mb-4">Any disputes arising from these Terms or your use of our Services shall be resolved through binding arbitration rather than in court, except for claims that may be brought in small claims court.</p>
              <h4 className="text-md font-bold text-white mb-2">15.3 Class Action Waiver</h4>
              <p>You agree not to participate in class action lawsuits or class-wide arbitration against Aryan Trades.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">16. General Provisions</h3>
              <h4 className="text-md font-bold text-white mb-2">16.1 Entire Agreement</h4>
              <p className="mb-4">These Terms constitute the entire agreement between you and Aryan Trades regarding our Services.</p>
              <h4 className="text-md font-bold text-white mb-2">16.2 Severability</h4>
              <p className="mb-4">If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
              <h4 className="text-md font-bold text-white mb-2">16.3 Waiver</h4>
              <p className="mb-4">Our failure to enforce any provision does not constitute a waiver of that provision.</p>
              <h4 className="text-md font-bold text-white mb-2">16.4 Assignment</h4>
              <p>You may not assign your rights under these Terms. We may assign our rights without restriction.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-crypto-green mb-3">17. Contact Information</h3>
              <p className="mb-4">For questions about these Terms or our Services, contact us at:</p>
              <p className="text-crypto-green font-semibold">jashimaryan@gmail.com</p>
            </section>

            <div className="bg-red-900/30 border border-red-500 rounded-lg p-6 mt-8">
              <p className="text-red-300 font-bold text-center">
                BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
