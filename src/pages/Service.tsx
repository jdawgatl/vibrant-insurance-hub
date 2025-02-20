import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { carriers } from "@/data/carriers";

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trusted Insurance Carriers - Contact Information
              </h2>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                For your convenience, we have compiled the contact information for the
                insurance carriers we represent. Please use the details below to reach out to
                the appropriate company for policy service or claims inquiries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carriers.map((carrier) => (
                <Card
                  key={carrier.name}
                  className="p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <a 
                      href={carrier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-40 h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={carrier.logo}
                        alt={carrier.name}
                        className="h-12 object-contain"
                      />
                    </a>
                    <h3 className="text-xl font-semibold">{carrier.name}</h3>
                    <div className="space-y-2 w-full">
                      <div>
                        <p className="text-gray-600">Customer Service:</p>
                        <a
                          href={`tel:${carrier.customerService}`}
                          className="text-sky-600 hover:text-sky-800"
                        >
                          {carrier.customerService}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-600">Claims:</p>
                        <a
                          href={`tel:${carrier.claims}`}
                          className="text-sky-600 hover:text-sky-800"
                        >
                          {carrier.claims}
                        </a>
                      </div>
                    </div>
                    <a
                      href={carrier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors gap-2"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
