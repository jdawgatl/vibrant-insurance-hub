import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/shared/ContactForm";

const carriers = [
  { name: "Progressive", description: "Leading auto insurance provider" },
  { name: "Travelers", description: "Comprehensive coverage solutions" },
  { name: "GEICO", description: "Competitive rates and excellent service" },
  { name: "Safeway", description: "Specialized auto insurance options" },
  { name: "Foremost", description: "Diverse insurance solutions" },
  { name: "Dairyland", description: "Reliable coverage provider" },
  { name: "Branch", description: "Modern insurance solutions" },
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Our Insurance Carriers</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {carriers.map((carrier) => (
              <Card key={carrier.name} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{carrier.name}</h3>
                <p className="text-gray-600">{carrier.description}</p>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-lg text-gray-600">
                Contact us directly at (770) 997-7999 or fill out the form below.
              </p>
            </div>
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;