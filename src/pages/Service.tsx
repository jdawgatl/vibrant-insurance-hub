import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ExternalLink, Phone } from "lucide-react";
import { motion } from "framer-motion";

const carriers = [
  {
    name: "Progressive",
    logo: "/carrier-logos/progressive.png",
    customerService: "1-800-776-4737",
    claims: "1-800-776-2778",
    website: "https://www.progressive.com",
  },
  {
    name: "Travelers",
    logo: "/carrier-logos/travelers.png",
    customerService: "1-800-872-8353",
    claims: "1-800-238-6225",
    website: "https://www.travelers.com",
  },
  {
    name: "GEICO",
    logo: "/carrier-logos/geico.png",
    customerService: "1-800-207-7847",
    claims: "1-800-841-3000",
    website: "https://www.geico.com",
  },
  {
    name: "Safeway",
    logo: "/carrier-logos/safeway.png",
    customerService: "1-800-334-1990",
    claims: "1-800-334-1991",
    website: "https://www.safewayinsurance.com",
  },
  {
    name: "Foremost",
    logo: "/carrier-logos/foremost.png",
    customerService: "1-800-527-3907",
    claims: "1-800-274-7865",
    website: "https://www.foremost.com",
  },
  {
    name: "Dairyland",
    logo: "/carrier-logos/dairyland.png",
    customerService: "1-800-324-9526",
    claims: "1-800-324-9524",
    website: "https://www.dairylandinsurance.com",
  },
  {
    name: "Branch",
    logo: "/carrier-logos/branch.png",
    customerService: "1-800-123-4567",
    claims: "1-800-123-4568",
    website: "https://www.branch.com",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[300px] mb-16 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80"
              alt="Insurance Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center">
                Trusted Insurance Carriers - Contact Information
              </h1>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            For your convenience, we have compiled the contact information for the
            insurance carriers we represent. Please use the details below to reach out to
            the appropriate company for policy service or claims inquiries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carriers.map((carrier, index) => (
              <motion.div
                key={carrier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-32 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={carrier.logo}
                        alt={carrier.name}
                        className="h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{carrier.name}</h3>
                    <div className="space-y-2 w-full">
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <p className="text-gray-600">Customer Service:</p>
                        <a
                          href={`tel:${carrier.customerService}`}
                          className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          {carrier.customerService}
                        </a>
                      </div>
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors">
                        <p className="text-gray-600">Claims:</p>
                        <a
                          href={`tel:${carrier.claims}`}
                          className="text-indigo-600 hover:text-indigo-800 flex items-center justify-center gap-2"
                        >
                          <Phone className="h-4 w-4" />
                          {carrier.claims}
                        </a>
                      </div>
                    </div>
                    <a
                      href={carrier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors gap-2 w-full"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
