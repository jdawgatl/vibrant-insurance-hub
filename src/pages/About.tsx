
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jason Standard",
    role: "Owner/Agent",
    experience: "26+ years experience",
    image: "/images/Jason_Standard.avif"
  },
  {
    name: "Jessica Dover",
    role: "Licensed Agent",
    experience: "5+ years experience",
    image: "/images/Jessica_Dover.avif"
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-12 border border-gray-100">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Since 1989, Standard Financial Group (formerly S & S Insurance Agency) has been serving the insurance needs of our community. In 2019, we evolved into Standard Financial Group, continuing our commitment to providing exceptional insurance services.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over three decades of experience, we've built our reputation on personalized service, expert guidance, and a deep understanding of our clients' needs. Our team of dedicated professionals works tirelessly to ensure you receive the best coverage at competitive rates.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="p-8 hover:shadow-lg transition-shadow bg-white">
                    <div className="flex flex-col items-center text-center">
                      {member.image ? (
                        <div className="mb-6">
                          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-100 shadow-md">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-32 h-32 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                          <UserCircle className="w-20 h-20 text-sky-600" />
                        </div>
                      )}
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-sky-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-500">{member.experience}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

