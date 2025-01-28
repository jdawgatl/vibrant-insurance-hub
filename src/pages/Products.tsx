import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Home, Building2, Key } from "lucide-react";

const products = [
  {
    title: "Auto Insurance",
    icon: Shield,
    description: "Comprehensive auto coverage for personal and commercial vehicles.",
  },
  {
    title: "Home Insurance",
    icon: Home,
    description: "Protect your home and belongings with our comprehensive coverage options.",
  },
  {
    title: "Commercial Insurance",
    icon: Building2,
    description: "Business insurance solutions tailored to your specific needs.",
  },
  {
    title: "Surety Bonds",
    icon: Key,
    description: "Various bond types to meet your business requirements.",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;