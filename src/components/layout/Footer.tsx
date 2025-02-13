
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (770) 997-7999
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                490 Bradley Dr Ste A
                <br />
                Fayetteville, GA 30214
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Mon - Fri: 9 AM - 4 PM
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sky-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-sky-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-sky-300 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="hover:text-sky-300 transition-colors"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/auto"
                  className="hover:text-sky-300 transition-colors"
                >
                  Auto Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/products/home"
                  className="hover:text-sky-300 transition-colors"
                >
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/products/commercial"
                  className="hover:text-sky-300 transition-colors"
                >
                  Commercial Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/products/bonds"
                  className="hover:text-sky-300 transition-colors"
                >
                  Surety Bonds
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get a Quote</h3>
            <p className="mb-4">
              Ready to get started? Get your free quote today!
            </p>
            <Button
              asChild
              className="w-full bg-sky-600 hover:bg-sky-700 text-white"
            >
              <Link to="/quote">Get A Quote</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Standard Financial Group. All rights
              reserved.
            </p>
            <div className="mt-2">
              <Link
                to="/privacy"
                className="hover:text-sky-300 transition-colors"
              >
                Privacy Policy
              </Link>
              {" | "}
              <Link
                to="/blog"
                className="hover:text-sky-300 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
