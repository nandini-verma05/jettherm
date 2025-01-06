import React from "react";
import { FaIndustry, FaSolarPanel, FaTools, FaHome, FaSeedling } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title, style }) => (
  <div
    className="p-6 text-center transform hover:scale-105 transition-transform duration-300"
    style={style}
  >
    <div className="bg-blue-200 p-4 rounded-full inline-block">
      {icon}
    </div>
    <h4 className="font-semibold mt-2 text-gray-800">{title}</h4>
  </div>
);

const Services = () => {
  const services = [
    { icon: <FaIndustry className="h-12 w-12 text-blue-600" />, title: "Construction Services" },
    { icon: <FaSolarPanel className="h-12 w-12 text-blue-600" />, title: "Solar Energy Solutions" },
    { icon: <FaTools className="h-12 w-12 text-blue-600" />, title: "Site Preparation" },
    { icon: <FaHome className="h-12 w-12 text-blue-600" />, title: "Facility Renovation" },
    { icon: <FaSeedling className="h-12 w-12 text-blue-600" />, title: "Horticulture Consultancy" },
    { icon: <FaSolarPanel className="h-12 w-12 text-blue-600" />, title: "Home & Rural Solar Solutions" },
  ];

  const circleStyle = {
    position: 'relative',
    width: '300px', // adjust the size of the circle
    height: '300px',
    margin: '0 auto',
    borderRadius: '50%',
  };

  const radius = 200; // distance of cards from the center
  const totalItems = services.length;
  const angle = 360 / totalItems;

  return (
    <div className="relative py-16 mt-24 mb-24">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header and Icon in the Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
          <FontAwesomeIcon icon={faHandsHelping} className="w-12 h-12 mx-auto mb-2 text-blue-500" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Circular Service Cards */}
        <div className="relative" style={circleStyle}>
          {services.map((service, index) => {
            const rotation = angle * index;
            const transformStyle = {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-${radius}px) rotate(-${rotation}deg)`,
            };
            return (
              <ServiceCard key={index} {...service} style={transformStyle} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
