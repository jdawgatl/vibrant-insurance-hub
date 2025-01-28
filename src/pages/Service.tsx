import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";

const carriers = [
  "Progressive",
  "Travelers",
  "GEICO",
  "Safeway",
  "Foremost",
  "Dairyland",
  "Branch",
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Insurance Carriers</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carriers.map((carrier) => (
              <Card key={carrier} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{carrier}</h3>
                    <p className="text-gray-600">Insurance Provider</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-4">
              Need assistance with your insurance needs?
            </p>
            <p className="text-lg">
              Call us at{" "}
              <a href="tel:7709977999" className="text-primary hover:underline">
                (770) 997-7999
              </a>{" "}
              or use our contact form.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;