import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calculator, Phone, MessageSquare, Building2, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Quote = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Get a Quote</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instant Quote Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow hover:scale-105 transform duration-200">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Quote</h3>
                <p className="text-gray-600 mb-6">
                  Get an instant quote from Standard Financial Group
                </p>
                <Button className="mt-auto">
                  Start Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>

            {/* Business Insurance Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 bg-gradient-to-br from-secondary-50 to-secondary-100">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Insurance</h3>
                <p className="text-gray-600 mb-6">
                  Get comprehensive business coverage through Next Insurance
                </p>
                <Button 
                  variant="secondary"
                  className="mt-auto"
                  asChild
                >
                  <a href="https://www.nextinsurance.com/" target="_blank" rel="noopener noreferrer">
                    Get Business Coverage <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Surety Bonds Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 bg-gradient-to-br from-primary-50 to-primary-100">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Key className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Surety Bonds</h3>
                <p className="text-gray-600 mb-6">
                  Purchase surety bonds online instantly
                </p>
                <Button 
                  variant="default"
                  className="mt-auto"
                  asChild
                >
                  <a href="https://www.suretybonds.com/" target="_blank" rel="noopener noreferrer">
                    Purchase Bonds <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>

            {/* Contact Methods Card */}
            <Card className="p-6 hover:shadow-lg transition-shadow hover:scale-105 transform duration-200 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
                  <p className="text-gray-600 mb-6">
                    Our licensed agents are here to help you find the perfect coverage
                  </p>
                  <Button 
                    variant="secondary"
                    className="w-full md:w-auto mr-4"
                    asChild
                  >
                    <a href="tel:7709977999">
                      <Phone className="mr-2 h-4 w-4" />
                      (770) 997-7999
                    </a>
                  </Button>
                </div>
                <div className="text-center md:text-right">
                  <Button 
                    variant="outline" 
                    className="w-full md:w-auto"
                    onClick={() => navigate("/contact")}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Form
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;