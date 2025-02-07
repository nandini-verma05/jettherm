
import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100">JETTHERM</h3>
            <p className="text-gray-400 mt-2">
              Empowering innovation, one step at a time. Join us on our journey to create impactful solutions.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100">Follow Us</h4>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
              <a href="https://wa.me/your-number-here" className="text-gray-400 hover:text-green-500">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Address
          <div>
            <h4 className="text-lg font-semibold text-gray-100">Address</h4>
            <p className="text-gray-400 mt-4">
              Registered Office: Plot No 8/22, Jawahar Nagar, Post - Supela, Bhilai-490023, Dist - Durg, Chhattisgarh - India, Email- Jettherm1991@gmail.com, Phone- +917724068116
            </p>
          </div>
        </div>
      </div> */}
      {/* Address */}
<div>
  <h4 className="text-lg font-semibold text-gray-100">Address</h4>
  <p className="text-gray-400 mt-4">
    <strong>Registered Office:</strong> Plot No 8/22, Jawahar Nagar, Post - Supela, Bhilai-490023, Dist - Durg, Chhattisgarh - India,  
    <strong> Email:</strong> Jettherm1991@gmail.com,  
    <strong> Phone:</strong> +917724068116
  </p>
</div>
</div>
</div>


      {/* Bottom copyright section */}
      <div className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-gray-400 text-sm">
          <p>&copy; 2024 JETTHERM. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
          Developed with ❤️ by 
            <a href="https://www.linkedin.com/in/jayprakash-parida-674ba3242/" className="hover:underline text-gray-300 ml-1">
              Jayprakash Parida
            </a> 
            {" "}
            and 
            <a href="https://www.linkedin.com/in/nandini-singh-verma-91a777267/" className="hover:underline text-gray-300 ml-1">
              Nandini Singh Verma
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

