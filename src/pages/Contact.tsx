import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "490 Bradley Dr Ste A, Fayetteville GA 30214",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 9 AM - 4 PM",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "(770) 997-7999",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@standardfinancialgroup.com",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <Card className="p-6">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.2162383668745!2d-84.4548893!3d33.4469444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4e8f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2s490+Bradley+Dr+STE+A%2C+Fayetteville%2C+GA+30214!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;