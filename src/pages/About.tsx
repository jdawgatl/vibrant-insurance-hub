import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Jason Standard",
    role: "Owner/Agent",
    experience: "26 years experience",
  },
  {
    name: "Jessica Dover",
    role: "Licensed Agent",
    experience: "5 years experience",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-[400px] mb-16 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80"
              alt="Office Environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">About Us</h1>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="prose max-w-none"
            >
              <p className="text-lg text-gray-600 mb-6">
                Since 1989, Standard Financial Group (formerly S & S Insurance Agency) has been serving the insurance needs of our community. In 2019, we evolved into Standard Financial Group, continuing our commitment to providing exceptional insurance services.
              </p>
              <p className="text-lg text-gray-600">
                With over three decades of experience, we've built our reputation on personalized service, expert guidance, and a deep understanding of our clients' needs. Our team of dedicated professionals works tirelessly to ensure you receive the best coverage at competitive rates.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80"
                alt="Office Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <UserCircle className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-1">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;