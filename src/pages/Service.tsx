import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const carriers = [
  {
    name: "Progressive",
    logo: "/lovable-uploads/3af76832-0ae0-4af4-8708-da12430b65a0.png",
    customerService: "1-800-776-4737",
    claims: "1-800-776-2778",
    website: "https://www.progressive.com",
  },
  {
    name: "Travelers",
    logo: "/lovable-uploads/71fcc12a-2dc8-4b51-bd52-782e87250fab.png",
    customerService: "1-800-872-8353",
    claims: "1-800-238-6225",
    website: "https://www.travelers.com",
  },
  {
    name: "GEICO",
    logo: "/lovable-uploads/4dc6de33-3cc1-4a38-802d-4b9f61c83240.png",
    customerService: "1-800-207-7847",
    claims: "1-800-841-3000",
    website: "https://www.geico.com",
  },
  {
    name: "Safeway",
    logo: "/lovable-uploads/7bb46239-644e-4af1-b267-4bcac8a8b9e4.png",
    customerService: "1-800-334-1990",
    claims: "1-800-334-1991",
    website: "https://www.safewayinsurance.com",
  },
  {
    name: "Foremost",
    logo: "/lovable-uploads/fa26e0a4-6240-42da-adb6-cc2a9f2ad2b0.png",
    customerService: "1-800-527-3907",
    claims: "1-800-274-7865",
    website: "https://www.foremost.com",
  },
  {
    name: "Dairyland",
    logo: "/lovable-uploads/b17c33e6-5d2d-4e54-9fd9-5a69b4a3da59.png",
    customerService: "1-800-334-0090",
    claims: "1-800-334-0090",
    website: "https://www.dairylandinsurance.com",
  },
  {
    name: "Branch",
    logo: "/lovable-uploads/4e12f6dc-aa00-44c2-9ba0-781c796962ff.png",
    customerService: "1-833-427-2624",
    claims: "1-833-427-2624",
    website: "https://www.branch.com",
  },
  {
    name: "American Modern",
    logo: "/lovable-uploads/2f0bfea4-aaf3-4978-829c-98543600dffb.png",
    customerService: "1-800-543-2644",
    claims: "1-800-375-2075",
    website: "https://www.amig.com",
  },
  {
    name: "Berkshire Hathaway",
    logo: "/lovable-uploads/766072cf-b18a-4e4e-9c24-311224645190.png",
    customerService: "1-844-472-0967",
    claims: "1-800-544-3056",
    website: "https://www.bhhc.com",
  },
  {
    name: "Clearcover",
    logo: "/lovable-uploads/dbe3056c-c1bf-4233-8dea-3126f8745a4a.png",
    customerService: "1-855-444-1875",
    claims: "1-855-444-1875",
    website: "https://www.clearcover.com",
  },
  {
    name: "National General",
    logo: "/lovable-uploads/6e76a1aa-5554-42d3-b91d-d1001785ed84.png",
    customerService: "1-800-462-2123",
    claims: "1-800-325-1088",
    website: "https://www.nationalgeneral.com",
  },
  {
    name: "Next",
    logo: "/lovable-uploads/49404d50-f5af-47b0-bc6f-079e2f6964e6.png",
    customerService: "1-855-222-5919",
    claims: "1-855-222-5919",
    website: "https://www.nextinsurance.com",
  },
  {
    name: "Openly",
    logo: "/lovable-uploads/61e6fa68-0a62-4880-9dcd-eb91699163cf.png",
    customerService: "1-844-526-0995",
    claims: "1-844-526-0995",
    website: "https://www.openly.com",
  },
  {
    name: "RLI",
    logo: "/lovable-uploads/97cb19ff-95fb-46aa-ac49-8b438c614ca8.png",
    customerService: "1-800-331-4929",
    claims: "1-800-444-0406",
    website: "https://www.rlicorp.com",
  },
];

const whyChooseSection = [
  {
    title: "Local Expertise",
    description: "We understand your community's unique needs and can provide personalized coverage recommendations.",
  },
  {
    title: "Personal Relationship",
    description: "Build a lasting relationship with an agent who knows you and your family's needs.",
  },
  {
    title: "Dedicated Support",
    description: "Get direct access to an experienced agent who will advocate for you during claims.",
  }
];

const Service = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-4">
              Why Choose a Local Agent?
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {whyChooseSection.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <h2 className="text-4xl font-bold text-center mb-4">
              Trusted Insurance Carriers - Contact Information
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              For your convenience, we have compiled the contact information for the
              insurance carriers we represent. Please use the details below to reach out to
              the appropriate company for policy service or claims inquiries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carriers.map((carrier) => (
                <Card
                  key={carrier.name}
                  className="p-6 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <a 
                      href={carrier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-40 h-16 flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={carrier.logo}
                        alt={carrier.name}
                        className="h-12 object-contain"
                      />
                    </a>
                    <h3 className="text-xl font-semibold">{carrier.name}</h3>
                    <div className="space-y-2 w-full">
                      <div>
                        <p className="text-gray-600">Customer Service:</p>
                        <a
                          href={`tel:${carrier.customerService}`}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          {carrier.customerService}
                        </a>
                      </div>
                      <div>
                        <p className="text-gray-600">Claims:</p>
                        <a
                          href={`tel:${carrier.claims}`}
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          {carrier.claims}
                        </a>
                      </div>
                    </div>
                    <a
                      href={carrier.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors gap-2"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Service;
