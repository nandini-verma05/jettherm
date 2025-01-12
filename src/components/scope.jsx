import React from 'react';
import { Building2, Wrench, Zap, ChevronRight } from 'lucide-react';
import img1 from './assets/bg1.jpg';
import img2 from './assets/bg2.jpg';

const ScopeCard = ({ title, items, icon, index }) => {
  const backgroundImage = index % 2 === 0 ? img1 : img2; // Alternate between img1 and img2 for each card

  return (
    <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full max-w-4xl mx-auto`}>
      {/* Icon Section */}
      <div className="relative shrink-0">
        <div className="absolute -inset-2 bg-blue-500/100 rounded-full blur-xl" />
        <div className="relative w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
          {React.cloneElement(icon, { 
            className: "w-10 h-10 text-blue-600" 
          })}
        </div>
        
        {/* Connector Line */}
        {index !== 2 && (
          <div className="absolute top-full left-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2" />
        )}
      </div>

      {/* Content Card with background image */}
      <div
        className="group flex-1 bg-white/95 backdrop-blur-md rounded-xl shadow-lg p-6 opacticity-50% relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative arrow */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${
          index % 2 === 0 ? '-left-3' : '-right-3'
        } w-6 h-6 bg-white transform rotate-45`} />
        
        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>{title}</span>
          </h3>
          
          <ul className="space-y-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-gray-900">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
   
    <div className="relative py-24 min-h-screen overflow-hidden">
      {/* Background with multiple gradients for a more interesting effect */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/10 mb-8">
            <Wrench className="w-10 h-10 text-blue-500" />
          </div>
          
          <h2 className="text-5xl font-bold text-black mb-6">
            Our Scope of Work
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-4 rounded-full" />

          <p className="text-lg text-grey-500 max-w-2xl mx-auto">
            Comprehensive solutions across civil, mechanical, and electrical domains
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-16">
          {scopes.map((scope, index) => (
            <ScopeCard key={index} {...scope} index={index} />
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Scope;
