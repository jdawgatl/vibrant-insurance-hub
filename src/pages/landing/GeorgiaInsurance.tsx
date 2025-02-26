import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Car, Building2, Users, Shield } from "lucide-react";

const GeorgiaInsurance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <img
            src="/images/products-commercial-cover.avif"
            alt="Georgia Insurance Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Insurance Services in Georgia</h1>
              <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Comprehensive Insurance Solutions in Georgia
              </h2>
              <p className="text-lg text-gray-600">
                As a leading insurance agency in Georgia, we provide comprehensive coverage
                options tailored to your needs. Our local expertise ensures you get the
                best rates and coverage in the Peach State.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Auto Insurance</h3>
                    <p className="text-gray-600">Competitive rates for Georgia drivers</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Commercial Insurance</h3>
                    <p className="text-gray-600">Protect your Georgia business</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Workers Compensation</h3>
                    <p className="text-gray-600">Georgia workers comp coverage</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">General Liability</h3>
                    <p className="text-gray-600">Business protection in Georgia</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/quote">Get a Georgia Insurance Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/products-commercial-commercial-insurance.avif"
                alt="Georgia Insurance Coverage"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us for Georgia Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Local Georgia insurance experts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple carrier options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Competitive Georgia rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Fast claims service
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeorgiaInsurance;
