import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Jason Standard",
      role: "Owner/Agent",
      experience: "26 years experience",
      description: "Leading our team with extensive industry knowledge and dedication to client service.",
    },
    {
      name: "Jessica Dover",
      role: "Licensed Agent",
      experience: "5 years experience",
      description: "Providing exceptional service and expertise in insurance solutions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Since 1989, Standard Financial Group (formerly S & S Insurance Agency) has been serving the Fayetteville community with reliable insurance solutions. In 2019, we evolved into Standard Financial Group, continuing our legacy of trust and excellence in insurance services.
            </p>
            <p className="text-lg text-gray-700">
              With over three decades of experience, we've built our reputation on personalized service, expert guidance, and a commitment to finding the best insurance solutions for our clients.
            </p>
          </div>

          <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                <p className="text-gray-700">{member.description}</p>
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