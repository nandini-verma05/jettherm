// src/components/About/AboutHeader.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';


const AboutHeader = () => {
  return (
    <div className="container mx-auto  mt-12 mb-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        <div className="w-full lg:w-1/2 relative">
          <img
            src={logo}
            alt="Company logo"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="text-2xl text-blue-500 w-12 h-12 text-primary"
          />
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About</h2>
          <h2 className="font-['Audiowide'] text-lg md:text-4xl font-bold drop-shadow-lg">
            <span className="text-blue-500">JET</span>
            <span className="text-red-500">THERM</span>
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
          <p className="text-gray-800 text-lg mb-8 leading-relaxed">
            Founded in 2012, JETTHERM ENTERPRISES was established with a vision to innovate in the field of green energy. We began by servicing construction and solar-related needs, including erection, site preparation, and facility renovations.
          </p>
          <p className="text-gray-800 text-lg mb-8 leading-relaxed">
            In a short span of time, we have achieved 100% client satisfaction. Based on their feedback, we are now expanding our services to include horticulture, home, and rural solar solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
