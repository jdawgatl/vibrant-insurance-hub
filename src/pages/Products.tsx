import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Home, Building2, Key, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    id: "auto",
    title: "Auto Insurance",
    icon: Car,
    description: "Comprehensive coverage for your vehicles with competitive rates and flexible payment options.",
    features: ["Liability Coverage", "Collision Coverage", "Comprehensive Coverage", "Personal Injury Protection"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800",
    link: "/products/auto"
  },
  {
    id: "home",
    title: "Home Insurance",
    icon: Home,
    description: "Protect your home and belongings with our comprehensive homeowners insurance policies.",
    features: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Additional Living Expenses"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    link: "/products/home"
  },
  {
    id: "commercial",
    title: "Commercial Insurance",
    icon: Building2,
    description: "Business insurance solutions tailored to your specific industry needs.",
    features: ["Property Coverage", "General Liability", "Workers Compensation", "Business Interruption"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800",
    link: "/products/commercial"
  },
  {
    id: "bonds",
    title: "Surety Bonds",
    icon: Key,
    description: "Various bond types to meet your business requirements and obligations.",
    features: ["Contract Bonds", "License Bonds", "Court Bonds", "Fidelity Bonds"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800",
    link: "/products/bonds"
  },
];

const Products = () => {
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
            Our Insurance Products
          </motion.h1>
          
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.section 
                key={product.id} 
                id={product.id} 
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <product.icon className="h-8 w-8 text-indigo-600" />
                        <h2 className="text-2xl font-semibold">{product.title}</h2>
                      </div>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <ul className="space-y-2 mb-8">
                        {product.features.map((feature, index) => (
                          <motion.li 
                            key={index} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="space-x-4">
                        <Button asChild variant="outline" className="group">
                          <Link to={product.link}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link to="/quote">Get a Quote</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;