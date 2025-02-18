
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { carriers } from "@/data/carriers";

const CarrierLogos = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
          Our Trusted Insurance Partners
        </h2>
        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {carriers.map((carrier, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/2 sm:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card className="p-6">
                      <div className="aspect-square relative flex items-center justify-center p-2">
                        <img
                          src={carrier.logo}
                          alt={carrier.name}
                          className="object-contain max-w-full max-h-full"
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
