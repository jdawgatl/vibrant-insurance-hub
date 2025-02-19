
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Key, Shield, FileCheck, Landmark } from "lucide-react";

const Bonds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <img
            src="/images/products-surety-cover.avif"
            alt="Surety Bonds"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Surety Bonds
            </h1>
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
                Guarantee Your Obligations
              </h2>
              <p className="text-lg text-gray-600">
                Our surety bond solutions help businesses and individuals meet their
                contractual obligations. We offer various types of bonds to suit your
                specific requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Key className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Contract Bonds</h3>
                    <p className="text-gray-600">Guarantees for construction projects</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">License Bonds</h3>
                    <p className="text-gray-600">Required for business licensing</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Landmark className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Court Bonds</h3>
                    <p className="text-gray-600">Protection for legal proceedings</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Fidelity Bonds</h3>
                    <p className="text-gray-600">Coverage against employee dishonesty</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/products-surety-surety-bonds.avif"
                alt="Surety Bonds"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Surety Bonds?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Quick approval process
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Competitive rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Expert guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple bond types available
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

export default Bonds;
