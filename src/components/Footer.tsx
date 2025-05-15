
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">F-BMI</h3>
            <p className="mb-4">
              Solutions informatiques complètes pour particuliers et professionnels. 
              Expertise technique et service de qualité.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Actualités</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/maintenance" className="hover:text-white transition-colors">Maintenance informatique</Link></li>
              <li><Link to="/services/repair" className="hover:text-white transition-colors">Réparation de matériel</Link></li>
              <li><Link to="/services/formation" className="hover:text-white transition-colors">Formation en informatique</Link></li>
              <li><Link to="/services/network" className="hover:text-white transition-colors">Installation réseau Wi-Fi</Link></li>
              <li><Link to="/services/starlink" className="hover:text-white transition-colors">Installation Starlink</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>SOCODE, quartier KOMAH, à 300 mètres du Stade municipal de SOCODE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+22893750572" className="hover:text-white transition-colors">+228 93750572</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:alfaismail64@gmail.com" className="hover:text-white transition-colors">alfaismail64@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span>Lun-Sam: 8h00 - 18h00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {currentYear} F-BMI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
