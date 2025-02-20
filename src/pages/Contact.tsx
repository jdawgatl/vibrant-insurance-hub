import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/shared/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | Standard Financial Group | Insurance Agency in Fayetteville, GA</title>
        <meta name="description" content="Contact Standard Financial Group for all your insurance needs. Visit our office in Fayetteville, GA, call us at (770) 997-7999, or send us a message. Expert insurance solutions since 1989." />
        <meta name="keywords" content="insurance agency Fayetteville GA, Standard Financial Group, contact insurance agent, insurance quotes Georgia" />
        <meta property="og:title" content="Contact Standard Financial Group | Insurance Agency in Fayetteville, GA" />
        <meta property="og:description" content="Contact Standard Financial Group for all your insurance needs. Visit our office in Fayetteville, GA, call us at (770) 997-7999, or send us a message." />
        <link rel="canonical" href="https://standardfinancialgroup.com/contact" />
      </Helmet>

      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get in touch with our team of insurance experts. We're here to help you find the right coverage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-600/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600">490 Bradley Dr Ste A</p>
                      <p className="text-gray-600">Fayetteville, GA 30214</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-600/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9 AM - 4 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-600/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+17709977999" className="text-gray-600 hover:text-sky-600 transition-colors">(770) 997-7999</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-600/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@standardfinancialgroup.com" className="text-gray-600 hover:text-sky-600 transition-colors">info@standardfinancialgroup.com</a>
                    </div>
                  </div>
                </div>
              </Card>
              
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
