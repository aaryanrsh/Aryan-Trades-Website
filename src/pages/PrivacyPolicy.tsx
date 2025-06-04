import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Last Updated: June 4, 2025</h2>
                <p>
                  This Privacy Policy describes how Aryan Trades ("we," "our," or "us") collects, uses, and protects your information when you use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email address when you subscribe to our services</li>
                      <li>Payment information processed through secure third-party providers</li>
                      <li>Discord username when you join our community</li>
                      <li>Communication preferences and interaction history</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>How you interact with our website and services</li>
                      <li>Browser type and version</li>
                      <li>Device information and IP address</li>
                      <li>Pages visited and time spent on our site</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our trading signals and educational content</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you trading alerts and market updates</li>
                  <li>Ensure the security and integrity of our platform</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Information Sharing</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With service providers who assist in operating our platform</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Object to certain processing activities</li>
                </ul>
                <p className="mt-4">
                  To request data deletion, please visit our{" "}
                  <Link 
                    to="/data-deletion" 
                    className="text-crypto-green hover:underline"
                  >
                    Data Deletion Request page
                  </Link>
                  {" "}for detailed instructions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When you cancel your subscription, we may retain certain information for record-keeping purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Third-Party Services</h2>
                <p className="mb-4">Our website may contain links to third-party services, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment processors (Whop, Stripe)</li>
                  <li>Social media platforms (Instagram, TikTok)</li>
                  <li>Communication platforms (Discord)</li>
                </ul>
                <p className="mt-4">
                  These third parties have their own privacy policies, and we are not responsible for their practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Instagram: @aryxntrades</li>
                  <li>TikTok: @aryxntrades</li>
                  <li>Discord: Join our premium community for direct support</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
