
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow">
        <motion.div style={{ scale }}>
          <Hero />
        </motion.div>

        <AnimatedSection>
          <ServiceCards />
        </AnimatedSection>

        <AnimatedSection>
          <CarrierLogos />
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center text-gray-900 mb-12"
              >
                Why Choose a Local Agent?
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form Section */}
        <AnimatedSection>
          <section className="py-16 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Ready to explore your insurance options? Contact us today for a free
                  consultation.
                </p>
              </motion.div>
              <Card className="p-6">
                <ContactForm />
              </Card>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
