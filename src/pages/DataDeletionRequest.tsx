
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const DataDeletionRequest = () => {
  return (
    <div className="min-h-screen bg-crypto-gradient">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Data Deletion Request</h1>
            
            <div className="space-y-8 text-gray-300">
              <section>
                <p className="text-lg mb-6">
                  If you would like to request deletion of your personal data from our systems, please follow the instructions below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">How to Request Data Deletion</h2>
                <div className="space-y-4">
                  <p>
                    To request deletion of your personal data, please contact us through one of the following methods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Send us a direct message on Instagram: @aryxntrades</li>
                    <li>Contact us through our Discord community (available to premium members)</li>
                    <li>Message us on TikTok: @aryxntrades</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Information Required</h2>
                <p className="mb-4">
                  When submitting your deletion request, please include the following information to help us identify and process your request:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The email address associated with your account</li>
                  <li>Your Discord username (if applicable)</li>
                  <li>Any subscription or payment information you may have</li>
                  <li>A clear statement that you wish to delete your personal data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Processing Timeline</h2>
                <p>
                  We will process your data deletion request within 30 days of receiving your request. We may contact you to verify your identity before proceeding with the deletion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">What Data Will Be Deleted</h2>
                <p className="mb-4">
                  Upon processing your request, we will delete:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your email address and contact information</li>
                  <li>Payment and subscription history</li>
                  <li>Communication history and preferences</li>
                  <li>Any other personal information we have collected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Data Retention for Legal Purposes</h2>
                <p>
                  Please note that some information may be retained for legal, regulatory, or security purposes as required by law. This may include transaction records for tax purposes or fraud prevention data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-crypto-green mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p>For any questions about data deletion or this process, contact us at:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Instagram: @aryxntrades</li>
                    <li>TikTok: @aryxntrades</li>
                    <li>Discord: Join our premium community for direct support</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataDeletionRequest;
