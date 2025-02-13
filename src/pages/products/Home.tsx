import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Home as HomeIcon, Umbrella, DollarSign } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80"
            alt="Home Insurance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Home Insurance
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
                Protect Your Home and Peace of Mind
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive home insurance policies protect your most valuable
                asset and everything inside it. We offer coverage options tailored to your needs:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <HomeIcon className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Dwelling Coverage</h3>
                    <p className="text-gray-600">Protection for your home's structure</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Umbrella className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Personal Property Protection</h3>
                    <p className="text-gray-600">Coverage for your belongings</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Liability Coverage</h3>
                    <p className="text-gray-600">Protection against lawsuits</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-sky-600" />
                  <div>
                    <h3 className="font-semibold">Additional Living Expenses</h3>
                    <p className="text-gray-600">Coverage for temporary housing</p>
                  </div>
                </li>
              </ul>
              <Button asChild size="lg" className="mt-6">
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                alt="Home Insurance Coverage"
                className="rounded-lg shadow-lg"
              />
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why Choose Our Home Insurance?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Competitive rates and flexible payment options
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    24/7 claims service
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Multiple discount opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-sky-600" />
                    Experienced local agents
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

export default Home;
