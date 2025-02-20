
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Car, Shield, Umbrella, AlertTriangle } from "lucide-react";

const Auto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <img
            src="/images/toyota.avif"
            alt="Auto Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Auto Insurance</h1>
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
                Comprehensive Auto Coverage
              </h2>
              <p className="text-lg text-gray-600">
                Protect yourself and your vehicle with our comprehensive auto insurance
                options. We offer competitive rates and flexible coverage plans to meet
                your specific needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Liability Coverage</h3>
                    <p className="text-gray-600">Protection for other drivers and vehicles</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Collision Coverage</h3>
                    <p className="text-gray-600">Repairs for your vehicle after an accident</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Umbrella className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Comprehensive Coverage</h3>
                    <p className="text-gray-600">Protection against theft and natural disasters</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Uninsured Motorist Coverage</h3>
                    <p className="text-gray-600">Protection from uninsured drivers</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/camaro-resized.avif"
                alt="Car Insurance"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Auto Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple discount opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    24/7 claims service
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Flexible payment options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Roadside assistance available
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

export default Auto;
