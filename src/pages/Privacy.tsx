
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                Welcome to our website. We value your privacy and are dedicated to protecting your personal data. This privacy policy outlines how we collect, use, store, and protect your personal data, and your rights concerning this data. We do not share your data with third parties for marketing or promotional purposes.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p className="text-gray-700">We do not share your personal data with third parties for marketing or promotional purposes. We may share your data with third parties only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Service Providers: With third-party service providers who perform functions on our behalf</li>
                  <li>Legal Obligations: When required by law or to respond to legal processes</li>
                  <li>Protection: To protect our rights, property, and safety, or that of our customers and others</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data We Collect</h2>
              <div className="space-y-4">
                <p className="text-gray-700">We collect various types of personal data, including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Identity Data: First and last name</li>
                  <li>Contact Data: Email address, phone number (optional), billing and delivery address</li>
                  <li>Technical Data: IP address, browser information, time zone setting</li>
                  <li>Usage Data: Information about how you use our website and services</li>
                  <li>Marketing and Communications Data: Your communication preferences</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Methods of Data Collection</h2>
              <div className="space-y-4">
                <p className="text-gray-700">We collect personal data through:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Direct Interactions: Forms, account creation, service subscriptions</li>
                  <li>Automated Technologies: Cookies, server logs, and similar technologies</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Opt-In Data and Consent</h2>
              <div className="space-y-4">
                <p className="text-gray-700">Your privacy is paramount to us. We want to emphasize that:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li className="font-medium">Text messaging originator opt-in data and consent information will not be shared with any third parties under any circumstances</li>
                  <li>All consent records are stored securely and separately from other personal data</li>
                  <li>You can revoke your consent at any time by contacting us</li>
                  <li>We maintain detailed records of when and how consent was obtained</li>
                  <li>Your opt-in choices are regularly reviewed and updated</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Protection</h2>
              <div className="space-y-4">
                <p className="text-gray-700">We implement appropriate security measures including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Data Encryption</li>
                  <li>Access Controls</li>
                  <li>Regular Security Assessments</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-700">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your personal data</li>
                  <li>Request corrections</li>
                  <li>Request deletion</li>
                  <li>Object to processing</li>
                  <li>Restrict processing</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Mobile Communications</h2>
              <div className="space-y-4">
                <p className="text-gray-700">For our SMS program:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Opt-out by replying "STOP" to any SMS</li>
                  <li>Message frequency varies based on interaction</li>
                  <li>Standard message and data rates may apply</li>
                </ul>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. Significant changes will be notified to you. Continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-sky-50 rounded-lg shadow-sm p-6 border border-sky-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                For privacy-related inquiries, please contact us at{" "}
                <a href="tel:+17709977999" className="text-sky-600 hover:text-sky-700">
                  (770) 997-7999
                </a>{" "}
                or visit our office.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
