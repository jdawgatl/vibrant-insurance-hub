
const carriers = [
  { name: "American Modern", logo: "/lovable-uploads/2f0bfea4-aaf3-4978-829c-98543600dffb.png" },
  { name: "Berkshire Hathaway", logo: "/lovable-uploads/766072cf-b18a-4e4e-9c24-311224645190.png" },
  { name: "Branch", logo: "/lovable-uploads/4e12f6dc-aa00-44c2-9ba0-781c796962ff.png" },
  { name: "Clearcover", logo: "/lovable-uploads/dbe3056c-c1bf-4233-8dea-3126f8745a4a.png" },
  { name: "Dairyland", logo: "/lovable-uploads/b17c33e6-5d2d-4e54-9fd9-5a69b4a3da59.png" },
  { name: "Foremost", logo: "/lovable-uploads/fa26e0a4-6240-42da-adb6-cc2a9f2ad2b0.png" },
  { name: "GEICO", logo: "/lovable-uploads/4dc6de33-3cc1-4a38-802d-4b9f61c83240.png" },
  { name: "National General", logo: "/lovable-uploads/6e76a1aa-5554-42d3-b91d-d1001785ed84.png" },
  { name: "Next", logo: "/lovable-uploads/49404d50-f5af-47b0-bc6f-079e2f6964e6.png" },
  { name: "Openly", logo: "/lovable-uploads/61e6fa68-0a62-4880-9dcd-eb91699163cf.png" },
  { name: "Progressive", logo: "/lovable-uploads/3af76832-0ae0-4af4-8708-da12430b65a0.png" },
  { name: "RLI", logo: "/lovable-uploads/97cb19ff-95fb-46aa-ac49-8b438c614ca8.png" },
  { name: "Safeway", logo: "/lovable-uploads/7bb46239-644e-4af1-b267-4bcac8a8b9e4.png" },
  { name: "Travelers", logo: "/lovable-uploads/71fcc12a-2dc8-4b51-bd52-782e87250fab.png" },
];

const CarrierLogos = () => {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Our Trusted Insurance Partners
        </h2>
        <div className="relative">
          <div className="flex space-x-16 animate-[slide-in_40s_linear_infinite]">
            {[...carriers, ...carriers].map((carrier, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-48 flex items-center justify-center"
              >
                <img
                  src={carrier.logo}
                  alt={carrier.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierLogos;
