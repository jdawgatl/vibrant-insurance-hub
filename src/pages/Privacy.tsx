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
            <h2>Introduction</h2>
            <p>Standard Financial Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section className="mb-8">
            <h2>Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Name and contact information</li>
              <li>Insurance policy information</li>
              <li>Claims history</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process insurance applications</li>
              <li>Provide customer service</li>
              <li>Send important updates about your policy</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2>Information Security</h2>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </section>

          <section className="mb-8">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at (770) 997-7999 or visit our office.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;