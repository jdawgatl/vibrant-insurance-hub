
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-sky-900 to-sky-700 text-white min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Background Images with Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url("${image}")`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: 1,
          }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2
            }}
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your Trusted Insurance Partner
            </motion.span>
            <motion.span 
              className="block text-sky-300"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Since 1989
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Protecting what matters most with comprehensive insurance solutions
            tailored to your needs.
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
            >
              <Link to="/quote">Get A Quote</Link>
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute left-10 top-1/4 w-20 h-20 border-t-2 border-l-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
          <motion.div
            className="absolute right-10 bottom-1/4 w-20 h-20 border-b-2 border-r-2 border-white/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 45 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
