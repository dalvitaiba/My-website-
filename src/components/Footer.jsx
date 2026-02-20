import React from 'react';
import { Heart, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#8B1538] to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Taiba Caterers</span>{' '}
              <span className="text-[#B8860B]">and Decorators</span>
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded by Naeem Dalvi in 2007. Turning your dream events into reality with premium catering and exquisite decorations. Your vision, our expertise.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="w-4 h-4" />
              <span>Mhasla, Maharashtra, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-[#B8860B] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:9423382328" className="flex items-center text-gray-300 hover:text-[#B8860B] transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 94233 82328
                </a>
              </li>
              <li>
                <a href="mailto:taibacaterers@gmail.com" className="flex items-center text-gray-300 hover:text-[#B8860B] transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/taibacaterersanddecorators"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-[#B8860B] transition-colors"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Taiba Caterers and Decorators. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> for creating memorable moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Missing import fix
const MapPin = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default Footer;
