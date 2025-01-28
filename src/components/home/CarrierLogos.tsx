const carriers = [
  { name: "Progressive", logo: "/carrier-logos/progressive.png" },
  { name: "Travelers", logo: "/carrier-logos/travelers.png" },
  { name: "GEICO", logo: "/carrier-logos/geico.png" },
  { name: "Safeway", logo: "/carrier-logos/safeway.png" },
  { name: "Foremost", logo: "/carrier-logos/foremost.png" },
  { name: "Dairyland", logo: "/carrier-logos/dairyland.png" },
  { name: "Branch", logo: "/carrier-logos/branch.png" },
];

const CarrierLogos = () => {
  return (
    <div className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our Trusted Insurance Partners
        </h2>
        <div className="relative">
          <div className="flex space-x-12 animate-slide-in">
            {[...carriers, ...carriers].map((carrier, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 w-32 flex items-center justify-center"
              >
                <img
                  src={carrier.logo}
                  alt={carrier.name}
                  className="h-8 object-contain"
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