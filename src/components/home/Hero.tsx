
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/images/hero-background1.avif",
  "/images/hero-background2.avif",
  "/images/hero-background3.avif"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative bg-gradient-to-r from-sky-900 to-sky-700 text-white min-h-[60vh] md:min-h-[50vh] flex items-center overflow-hidden"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${image}")`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: 1
          }}
          role="img"
          aria-label={`Background image ${index + 1}`}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Your Trusted Insurance Partner
            </motion.span>
            <motion.span
              className="block text-sky-300 mt-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Since 1989
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200 font-normal"
          >
            Setting the STANDARD in affordable insurance and bonds.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.2,
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Get an insurance quote"
            >
              <Link to="/quote">Get A Quote</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
