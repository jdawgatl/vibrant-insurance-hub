import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Key, Phone, Mail } from "lucide-react";
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Business Insurance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Building2 className="h-12 w-12 text-primary mb-4" />
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
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Key className="h-12 w-12 text-primary mb-4" />
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

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full transform transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex space-x-4 mb-4">
                      <Phone className="h-12 w-12 text-primary" />
                      <Mail className="h-12 w-12 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                      Speak with our insurance experts or send us a message.
                    </p>
                    <div className="space-y-4">
                      <a 
                        href="tel:+17709977999"
                        className="flex items-center text-primary hover:text-primary-600 transition-colors"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        (770) 997-7999
                      </a>
                      <a 
                        href="mailto:info@standardfinancialgroup.com"
                        className="flex items-center text-primary hover:text-primary-600 transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Email Us
                      </a>
                    </div>
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
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
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