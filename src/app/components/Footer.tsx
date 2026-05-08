import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/footer.png"
                alt="KlimaSouth Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm">
              <b>RESIDENTIAL | OFFICE | COMMERCIAL</b>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Cleaning Services</li>
              <li>Pull Down</li>
              <li>AC Relocation</li>
              <li>Inspection and Repair</li>
              <li>Refrigerant Charging</li>
              <li>ACUs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:09175401688" className="hover:text-blue-400 transition-colors block">
                    0917 540 1688
                  </a>
                  <a href="tel:09681721688" className="hover:text-blue-400 transition-colors block">
                    0968 172 1688
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:inquiry@klimasouth.com" className="hover:text-blue-400 transition-colors">
                  inquiry@klimasouth.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving Metro Manila & Cavite</span>
              </li>
              <li className="flex items-start space-x-2">
                <Facebook className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/photo/?fbid=122124994671011112&set=a.122096219709011112" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KlimaSouth. All rights reserved. Website made by Sari-sari.</p>
        </div>
      </div>
    </footer>
  );
}