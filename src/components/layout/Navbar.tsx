
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigation = [{
    name: "HOME",
    href: "/"
  }, {
    name: "PRODUCTS",
    href: "/products"
  }, {
    name: "SERVICE",
    href: "/service"
  }, {
    name: "ABOUT",
    href: "/about"
  }, {
    name: "CONTACT",
    href: "/contact"
  }];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="text-center">
              <Link to="/" className="block">
                <h1 className="text-2xl md:text-3xl font-bold animate-fade-in">
                  <span className="bg-gradient-to-r from-sky-800 to-sky-500 bg-clip-text text-transparent border-2 border-sky-600 px-2 py-1 rounded-lg">
                    STANDARD
                  </span>
                  <span className="text-[80%] text-gray-600 ml-2">
                    Financial Group
                  </span>
                </h1>
              </Link>
              <div className="mt-1">
                <a 
                  href="tel:+17709977999" 
                  className="inline-flex items-center text-lg text-sky-600 hover:text-sky-700 transition-colors group"
                  aria-label="Call us at (770) 997-7999"
                >
                  <Phone className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                  (770) 997-7999
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="relative text-gray-700 hover:text-sky-600 transition-colors py-2 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-sky-600 after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-sky-600 transition-colors p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-gray-700 hover:text-sky-600 transition-colors block px-3 py-2 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
