
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { carriers } from "@/data/carriers";
import { motion } from "framer-motion";

const CarrierLogos = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Insurance Carriers
          </h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with top-rated insurance carriers to provide you with the best coverage options.
          </p>
        </motion.div>
        <div className="relative px-8">
          <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
            <CarouselContent className="-ml-1">
              {carriers.map((carrier, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="p-6">
                      <div className="aspect-square relative flex items-center justify-center p-2">
                        <img 
                          src={carrier.logo} 
                          alt={carrier.name} 
                          loading="lazy" 
                          decoding="async" 
                          className="object-contain max-w-full max-h-full" 
                          width="200" 
                          height="200" 
                        />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="sm:flex" />
            <CarouselNext className="sm:flex" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarrierLogos;
