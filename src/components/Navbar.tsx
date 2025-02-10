
import { ShoppingCart, Menu, LogIn, LogOut, Instagram, Facebook, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-lg border-b border-gray-200/50" />
      
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <motion.a 
          href="/" 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.img 
            src="/lovable-uploads/c77061d3-9b60-4e19-abd5-cb48fda9db4f.png" 
            alt="The Heart Junction Logo" 
            className="h-12 w-12"
            initial={{ rotate: -10 }}
            whileHover={{ rotate: 0, transition: { duration: 0.2 } }}
          />
          <span className="self-center text-2xl font-semibold text-gray-900 font-serif">
            The Heart Junction
          </span>
        </motion.a>
        
        <div className="flex md:order-2 items-center space-x-3">
          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-2 mr-4">
            <motion.a
              href="https://instagram.com/theheartjunction_"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#E1306C" }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://facebook.com/theheartjunction"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#1877F2" }}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
          </div>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/+919412383635"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex"
          >
            <Button 
              variant="ghost" 
              size="sm"
              className="text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </motion.a>

          {/* Cart & Auth Buttons */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-heart-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            {user ? (
              <Button variant="ghost" size="icon" onClick={() => signOut()}>
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => navigate("/auth")}>
                <LogIn className="h-5 w-5" />
              </Button>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          <motion.div 
            className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto md:order-1`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/reviews", label: "Reviews" },
                { href: "/about", label: "About" }
              ].map((link) => (
                <motion.li 
                  key={link.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href={link.href} 
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-heart-300/20 md:hover:bg-transparent md:hover:text-heart-500 md:p-0 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};
