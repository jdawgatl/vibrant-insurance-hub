import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/492834625.sd.mp4?s=23ac4f0d5c4e21f9a2e8d636096aca46a77b1494&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Trusted Insurance Partner Since 1989
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Protecting what matters most with comprehensive insurance solutions
            tailored to your needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary-600 text-white"
          >
            <Link to="/quote">Get A Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;