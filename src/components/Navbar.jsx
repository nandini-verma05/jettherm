import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

import logo from './assets/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Navbar Flex Container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            
              <img src={logo}alt="Company Logo" className="h-12" />
           
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
            <Link
              to="/home"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/client"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Clients
            </Link>
            <Link
              to="/gallery"
              className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-medium"
            >
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:text-gray-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/AboutUs"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/SlidingCards"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
              >
                Clients
              </Link>
              <Link
                to="/Gallery"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
