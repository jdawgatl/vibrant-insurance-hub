
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Commercial = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <img
            src="/images/products-commercial-cover.avif"
            alt="Commercial Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Commercial Insurance
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
                Protect Your Business
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive commercial insurance solutions designed to protect your
                business assets, employees, and operations. We offer tailored coverage
                options to meet your industry-specific needs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600" />
                  Property Coverage
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600" />
                  General Liability
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600" />
                  Workers Compensation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-600" />
                  Business Interruption
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6 bg-sky-600 hover:bg-sky-700">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/products-commercial-commercial-insurance.avif"
                alt="Commercial Insurance"
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

export default Commercial;
