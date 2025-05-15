
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground px-4 py-1 text-sm hidden md:flex items-center justify-end">
        <div className="flex items-center space-x-4">
          <a href="tel:+22893750572" className="flex items-center gap-1 hover:underline">
            <Phone className="w-3 h-3" />
            +228 93750572
          </a>
          <a href="mailto:alfaismail64@gmail.com" className="flex items-center gap-1 hover:underline">
            <Mail className="w-3 h-3" />
            alfaismail64@gmail.com
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          F-BMI
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
            À propos
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
            Actualités
          </Link>
          <Link to="/contact">
            <Button>Contactez-nous</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 py-2 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 py-2 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 py-2 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 py-2 border-b border-gray-100 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Actualités
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="flex flex-col space-y-2 py-3 border-t border-gray-100">
              <a href="tel:+22893750572" className="flex items-center gap-2 text-gray-700 hover:text-primary">
                <Phone className="w-4 h-4" />
                +228 93750572
              </a>
              <a href="mailto:alfaismail64@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-primary">
                <Mail className="w-4 h-4" />
                alfaismail64@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
