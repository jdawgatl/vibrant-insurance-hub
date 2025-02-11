
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Get Your Insurance Quote
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Auto Insurance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/7bb46239-644e-4af1-b267-4bcac8a8b9e4.png"
                      alt="Safeway Insurance"
                      className="h-12 w-auto mb-4 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold mb-2">Auto Insurance</h2>
                    <p className="text-gray-600 mb-4">
                      Get competitive auto insurance rates through Safeway Insurance.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://www.safewayinsurance.com/', '_blank')}
                    >
                      Get Auto Quote
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Business Insurance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src="/lovable-uploads/49404d50-f5af-47b0-bc6f-079e2f6964e6.png"
                      alt="Next Insurance"
                      className="h-12 w-auto mb-4 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold mb-2">Business Insurance</h2>
                    <p className="text-gray-600 mb-4">
                      Get comprehensive coverage for your business through our partner, Next Insurance.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://www.nextinsurance.com/', '_blank')}
                    >
                      Get Business Coverage
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Surety Bond Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Key className="h-12 w-12 text-primary mb-4 mx-auto" />
                    <h2 className="text-2xl font-semibold mb-2">Surety Bonds</h2>
                    <p className="text-gray-600 mb-4">
                      Quick and easy surety bond solutions for your business needs.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full"
                      onClick={() => window.open('https://www.suretybonds.com/', '_blank')}
                    >
                      Purchase Surety Bond
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>
              <p className="text-gray-600 mb-6">
                Complete the form below to get quotes from additional carriers or for other lines of insurance not listed above.
              </p>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
