import React from 'react';
import { Building2, Wrench, Zap } from 'lucide-react';
import img from './assets/pic2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const ScopeCard = ({ title, items, icon }) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-700">
        {React.cloneElement(icon, { className: "h-6 w-6 text-blue-600" })}
        <span>{title}</span>
      </h3>
    </div>
    <div className="p-6">
      <ul className="list-disc list-inside space-y-3 text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Scope = () => {
  const scopes = [
    {
      title: "Civil Scope",
      icon: <Building2 />,
      items: ["Pile Anchoring, Pile Cap", "Construction of Inverter Control Room"],
    },
    {
      title: "Mechanical Scope",
      icon: <Wrench />,
      items: [
        "Pre Engineering Building",
        "Solar MMS (Module Mounting Structure)",
        "All kinds of Erection at any height",
        "Material unloading with intra-site transportation",
        "Fabrication",
        "All kinds of welding (e.g. Arc, Organic, Mig, Gas etc.)",
      ],
    },
    {
      title: "Electrical Scope",
      icon: <Zap />,
      items: [
        "Cable laying with proper dressing & numbering",
        "Connection of junction boxes, Erection of SRCB with foundation",
        "All DC side activities",
      ],
    },
  ];

  return (
    <div className="relative py-16 min-h-screen mb-16 mt-48">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-gray-900/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
        <FontAwesomeIcon icon={faCogs} className="text-2xl w-12 h-12 text-primary text-blue-500" />
          <h2 className="text-4xl font-bold text-white mb-4">Our Scope of Work</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Comprehensive solutions across civil, mechanical, and electrical domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scopes.map((scope, index) => (
            <div key={index} className="transform hover:-translate-y-1 transition-transform duration-300">
              <ScopeCard {...scope} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scope;