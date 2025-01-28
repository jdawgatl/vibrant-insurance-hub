import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Get a Quote</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Instant Auto Quote</h3>
              <p className="text-gray-600 mb-6">
                Get an instant quote from Safeway Insurance for your auto coverage needs.
              </p>
              <Button className="w-full">
                Start Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Business Insurance</h3>
              <p className="text-gray-600 mb-6">
                Get an instant business policy quote through Next Insurance.
              </p>
              <Button className="w-full">
                Start Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Custom Quote</h3>
              <p className="text-gray-600 mb-6">
                Get a personalized quote from all our carriers for the best rates.
              </p>
              <div className="space-y-4">
                <Link to="/contact">
                  <Button className="w-full">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" /> (770) 997-7999
                </Button>
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