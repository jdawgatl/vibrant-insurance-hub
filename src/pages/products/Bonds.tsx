import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Contract Bonds
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  License Bonds
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Court Bonds
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Fidelity Bonds
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
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bonds;