
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Shield, Users, AlertCircle } from "lucide-react";

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
                <li className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Property Coverage</h3>
                    <p className="text-gray-600">Protection for your business property</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">General Liability</h3>
                    <p className="text-gray-600">Coverage for third-party claims</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Workers Compensation</h3>
                    <p className="text-gray-600">Protection for your employees</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Business Interruption</h3>
                    <p className="text-gray-600">Coverage for operational disruptions</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="/images/products-commercial-commercial-insurance.avif"
                alt="Commercial Insurance"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Commercial Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Industry-specific coverage options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Risk management expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Customizable policy options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Dedicated business support
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

export default Commercial;
