import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100">JETTHERM</h3>
            <p className="text-gray-400 mt-2">
              Empowering innovation, one step at a time. Join us on our journey to create impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
         

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
             
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
         
          <div>
            <h4 className="text-lg font-semibold text-gray-100">Adress</h4>
            <p className="text-gray-400 mt-4">Registered Office:- House No 8/22,
               Jawahar Nagar, Post - Supela,
                Bhilai-490023, Dist - Durg, 
                Chhattisgarh - India</p>
            
          </div>
        </div>
      </div>
      

      {/* Bottom copyright section */}
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 JETTHERM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
