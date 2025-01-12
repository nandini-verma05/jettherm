import React, { useState, useEffect } from "react";
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

const MobileServiceCard = ({ icon, title }) => (
  <div className=" px-2 py-4 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="bg-blue-200 p-3 rounded-full inline-block">
      {icon}
    </div>
    <h4 className="font-semibold mt-2 text-gray-800 text-sm">{title}</h4>
  </div>
);

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    { icon: <FaIndustry className="h-12 w-12 text-blue-600" />, title: "Construction Services" },
    { icon: <FaSolarPanel className="h-12 w-12 text-blue-600" />, title: "Solar Energy Solutions" },
    { icon: <FaTools className="h-12 w-12 text-blue-600" />, title: "Site Preparation" },
    { icon: <FaHome className="h-12 w-12 text-blue-600" />, title: "Facility Renovation" },
    { icon: <FaSeedling className="h-12 w-12 text-blue-600" />, title: "Horticulture Consultancy" },
    { icon: <FaSolarPanel className="h-12 w-12 text-blue-600" />, title: "Home & Rural Solar Solutions" },
  ];

  const CircularLayout = () => {
    const radius = 300;
    const totalItems = services.length;
    const angle = 360 / totalItems;

    return (
      <div className="relative" style={{ height: '500px', margin: '0 auto' }}>
        {services.map((service, index) => {
          const rotation = angle * index;
          const transformStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-${radius}px) rotate(-${rotation}deg)`,
            width: '150px',
          };
          return <ServiceCard key={index} {...service} style={transformStyle} />;
        })}
      </div>
    );
  };

  const MobileLayout = () => (
    <div className="grid grid-cols-2 gap-2 px-4">
      {services.map((service, index) => (
        <MobileServiceCard key={index} {...service} />
      ))}
    </div>
  );

  // Enhanced MobileLayout with Layers (2 columns, header on top)
  


  return (
    <div className="relative py-16 mt-12 mb-12 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Header Section */}
       
          <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20">
          <div className="text-center mb-8">
          <FontAwesomeIcon 
            icon={faHandsHelping} 
            className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 text-blue-500" 
          />
          <h3 className="text-xl md:text-2xl font-bold text-black text-center p-4">
           Our services
          </h3>
       
      </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>

        {/* Conditional Layout Rendering */}
        {isMobile ? <MobileLayout/> : <CircularLayout />}
      </div>
    </div>
  );
};

export default Services;