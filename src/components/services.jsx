import React from 'react';
import { Briefcase, Zap, Building2, Home, Leaf } from 'lucide-react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="pt-6">
      {icon}
      <h4 className="font-semibold mt-2 text-gray-800">{title}</h4>
    </div>
  </div>
);

const Services = () => {
  const services = [
    { icon: <Briefcase className="h-12 w-12 mx-auto text-blue-600" />, title: "Construction Services" },
    { icon: <Zap className="h-12 w-12 mx-auto text-blue-600" />, title: "Solar Energy Solutions" },
    { icon: <Building2 className="h-12 w-12 mx-auto text-blue-600" />, title: "Site Preparation" },
    { icon: <Home className="h-12 w-12 mx-auto text-blue-600" />, title: "Facility Renovation" },
    { icon: <Leaf className="h-12 w-12 mx-auto text-blue-600" />, title: "Horticulture Consultancy" },
    { icon: <Zap className="h-12 w-12 mx-auto text-blue-600" />, title: "Home & Rural Solar Solutions" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16 mb-24 mt-48">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
        <svg
          className="w-full h-16"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22L48 27.3C96 32.7 192 43.3 288 43.3C384 43.3 480 32.7 576 27.3C672 22 768 22 864 27.3C960 32.7 1056 43.3 1152 43.3C1248 43.3 1344 32.7 1392 27.3L1440 22V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
        <FontAwesomeIcon icon={faHandsHelping} className="w-12 h-12 mx-auto mb-2 text-blue-500" />

          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions across construction, renewable energy, and environmental services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="w-full h-16"
          viewBox="0 0 1440 54"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22L48 27.3C96 32.7 192 43.3 288 43.3C384 43.3 480 32.7 576 27.3C672 22 768 22 864 27.3C960 32.7 1056 43.3 1152 43.3C1248 43.3 1344 32.7 1392 27.3L1440 22V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Services;