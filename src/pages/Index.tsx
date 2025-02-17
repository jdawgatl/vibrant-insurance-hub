
import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import CarrierLogos from "@/components/home/CarrierLogos";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const benefits = [
  {
    title: "Expert Guidance",
    description: "Our experienced agents provide personalized advice to help you make informed decisions.",
    image: "/images/expert-guidance-card.avif"
  },
  {
    title: "Comprehensive Coverage",
    description: "Access to multiple carriers ensures you get the best coverage at competitive rates.",
    image: "/images/comprehensive-coverage-card.avif"
  },
  {
    title: "Local Service",
    description: "We're your neighbors, providing friendly, face-to-face service when you need it most.",
    image: "/images/local-service-card.avif"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceCards />
        <CarrierLogos />

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose a Local Agent?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Ready to explore your insurance options? Contact us today for a free
                consultation.
              </p>
            </div>
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
