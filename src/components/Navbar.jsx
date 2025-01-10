import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Home, User, Briefcase, Image, Phone, FileText, Users } from 'lucide-react';
import { faHome, faInfoCircle, faUsers, faImages, faEnvelope, faNewspaper, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll handler
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close the menu after navigating (for mobile)
  };

  return (
    
    <nav className="sticky top-0 left-0 w-full z-50 bg-opacity-100 bg-gray-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Navbar Flex Container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Company Logo" className="h-12" />
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-12">
            <button
              onClick={() => handleScroll('home')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faHome} className="text-blue-400 mr-2" />
              Home
            </button>
            <button
              onClick={() => handleScroll('about')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faInfoCircle} className="text-blue-400 mr-2" />
              About
            </button>
            <button
              onClick={() => handleScroll('clients')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faUsers} className="text-blue-400 mr-2" />
              Clients
            </button>
            <button
              onClick={() => handleScroll('gallery')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faImages} className="text-blue-400 mr-2" />
              Gallery
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 mr-2" />
              Contact
            </button>
            <button
              onClick={() => handleScroll('blogs')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faNewspaper} className="text-blue-400 mr-2" />
              Blogs
            </button>
            <button
              onClick={() => handleScroll('team')}
              className="flex items-center text-gray-900 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              <FontAwesomeIcon icon={faUserFriends} className="text-blue-400 mr-2" />
              Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:text-Blue-600"
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
              <button
                onClick={() => handleScroll('home')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faHome} className="text-blue-400 mr-3" />
                Home
              </button>
              <button
                onClick={() => handleScroll('about')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-400 mr-3" />
                About
              </button>
              <button
                onClick={() => handleScroll('clients')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faUsers} className="text-blue-400 mr-3" />
                Clients
              </button>
              <button
                onClick={() => handleScroll('gallery')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faImages} className="text-blue-400 mr-3" />
                Gallery
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 mr-3" />
                Contact
              </button>
              <button
                onClick={() => handleScroll('blogs')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faNewspaper} className="text-blue-400 mr-3" />
                Blogs
              </button>
              <button
                onClick={() => handleScroll('team')}
                className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-Blue-600 transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faUserFriends} className="text-blue-400 mr-3" />
                Team
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;