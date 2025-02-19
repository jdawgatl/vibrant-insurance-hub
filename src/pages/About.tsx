
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

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
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
          
          <div className="prose max-w-none mb-16">
            <p className="text-lg text-gray-600 mb-6">
              Since 1989, Standard Financial Group (formerly S & S Insurance Agency) has been serving the insurance needs of our community. In 2019, we evolved into Standard Financial Group, continuing our commitment to providing exceptional insurance services.
            </p>
            <p className="text-lg text-gray-600">
              With over three decades of experience, we've built our reputation on personalized service, expert guidance, and a deep understanding of our clients' needs. Our team of dedicated professionals works tirelessly to ensure you receive the best coverage at competitive rates.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4 object-cover border border-gray-300"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                      <UserCircle className="w-16 h-16 text-sky-600" />
                    </div>
                  )}
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
