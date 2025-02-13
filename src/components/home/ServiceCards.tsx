
import { Link } from "react-router-dom";
import { Car, Home, Building, Shield, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles",
    icon: Car,
    href: "/products/auto",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80",
  },
  {
    title: "Home Insurance",
    description: "Protect your most valuable asset",
    icon: Home,
    href: "/products/home",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80",
  },
  {
    title: "Commercial Insurance",
    description: "Tailored solutions for your business",
    icon: Building,
    href: "/products/commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
  },
  {
    title: "Surety Bonds",
    description: "Guarantee your contractual obligations",
    icon: Shield,
    href: "/products/bonds",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
  },
];

const ServiceCards = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Insurance Products
          </h2>
          <p className="text-lg text-gray-600">
            A full suite of protection
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="block transform hover:scale-105 transition-all duration-300"
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2">
                        <service.icon className="h-6 w-6" />
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{service.description}</p>
                    <div className="mt-4 flex items-center text-sky-600 font-medium group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
