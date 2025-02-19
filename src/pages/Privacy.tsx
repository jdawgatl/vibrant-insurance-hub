
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
          
          <section className="mb-8">
            <p className="text-sm text-gray-500 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
            <p>Welcome to our website. We value your privacy and are dedicated to protecting your personal data. This privacy policy outlines how we collect, use, store, and protect your personal data, and your rights concerning this data. We do not share your data with third parties for marketing or promotional purposes.</p>
          </section>

          <section className="mb-8">
            <h2>1. Data Sharing and Disclosure</h2>
            <p>We do not share your personal data with third parties for marketing or promotional purposes. We may share your data with third parties only in the following circumstances:</p>
            <ul>
              <li>Service Providers: With third-party service providers who perform functions on our behalf</li>
              <li>Legal Obligations: When required by law or to respond to legal processes</li>
              <li>Protection: To protect our rights, property, and safety, or that of our customers and others</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>2. Data We Collect</h2>
            <p>We collect various types of personal data, including:</p>
            <ul>
              <li>Identity Data: First and last name</li>
              <li>Contact Data: Email address, phone number (optional), billing and delivery address</li>
              <li>Technical Data: IP address, browser information, time zone setting</li>
              <li>Usage Data: Information about how you use our website and services</li>
              <li>Marketing and Communications Data: Your communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>3. Methods of Data Collection</h2>
            <p>We collect personal data through:</p>
            <ul>
              <li>Direct Interactions: Forms, account creation, service subscriptions</li>
              <li>Automated Technologies: Cookies, server logs, and similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>4. How We Use Your Personal Data</h2>
            <ul>
              <li>SMS Program: Optional messaging service for updates and offers</li>
              <li>Service Provision: To fulfill our contractual obligations</li>
              <li>Marketing and Communications: To send requested materials</li>
              <li>Customer Support: To assist with inquiries and support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>5. Data Protection</h2>
            <p>We implement appropriate security measures including:</p>
            <ul>
              <li>Data Encryption</li>
              <li>Access Controls</li>
              <li>Regular Security Assessments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Object to processing</li>
              <li>Restrict processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>7. Mobile Communications</h2>
            <p>For our SMS program:</p>
            <ul>
              <li>Opt-out by replying "STOP" to any SMS</li>
              <li>Message frequency varies based on interaction</li>
              <li>Standard message and data rates may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>8. Changes to Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Significant changes will be notified to you. Continued use of our services after such changes constitutes acceptance of the updated policy.</p>
          </section>

          <section className="mb-8">
            <h2>Contact Us</h2>
            <p>For privacy-related inquiries, please contact us at (770) 997-7999 or visit our office.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
