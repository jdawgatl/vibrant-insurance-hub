import { Link } from "react-router-dom";
import { Car, Home, Building, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Auto Insurance",
    description: "Comprehensive coverage for your vehicles",
    icon: Car,
    href: "/products#auto",
  },
  {
    title: "Home Insurance",
    description: "Protect your most valuable asset",
    icon: Home,
    href: "/products#home",
  },
  {
    title: "Commercial Insurance",
    description: "Tailored solutions for your business",
    icon: Building,
    href: "/products#commercial",
  },
  {
    title: "Surety Bonds",
    description: "Guarantee your contractual obligations",
    icon: Shield,
    href: "/products#bonds",
  },
];

const ServiceCards = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Insurance Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive coverage options to protect what matters most
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary text-sm font-medium">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;