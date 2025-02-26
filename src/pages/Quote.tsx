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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Insurance Quote</h1>
            <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Choose from our range of quoting options or fill out our form for a personalized quote.
            </p>
          </motion.div>

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
                      src="/images/safeway-insurance.avif"
                      alt="Safeway Insurance"
                      className="h-12 w-auto mb-4 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-center">Auto Insurance</h2>
                    <p className="text-gray-600 mb-4">
                      Get an instant car insurance quote through our partner, Safeway Insurance.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-sky-600 hover:bg-sky-700"
                      onClick={() => window.open('https://www.safewayxchange.com/SafewayDirect/Token/AgencyQuote?QuotingId=72650486', '_blank')}
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
                      src="/images/next-insurance.avif"
                      alt="Next Insurance"
                      className="h-12 w-auto mb-4 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-center">Business Insurance</h2>
                    <p className="text-gray-600 mb-4">
                      Get comprehensive coverage for your business through our partner, Next Insurance.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-sky-600 hover:bg-sky-700"
                      onClick={() => window.open('https://track.nextinsurance.com/links?agent_affiliation=Sqh6ZajqLANkIHy2&serial=992855993&channel=affiliation', '_blank')}
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
                    <img
                      src="/images/rli-surety.avif"
                      alt="RLI Surety"
                      className="h-12 w-auto mb-4 mx-auto"
                    />
                    <h2 className="text-2xl font-semibold mb-2 text-center">Surety Bonds</h2>
                    <p className="text-gray-600 mb-4">
                      Quote and issue title bonds, probate bonds, and more through our partner, RLI.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-sky-600 hover:bg-sky-700"
                      onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
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
