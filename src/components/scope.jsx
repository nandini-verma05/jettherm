import React from 'react';
import { Building2, Wrench, Zap, ChevronRight } from 'lucide-react';
import img from './images/15.jpeg'
import img2 from './images/6.jpeg'
import img3 from './images/3.jpeg'
const ScopeCard = ({ title, items, icon, index ,imageUrl}) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl mx-auto">
      {/* Text Content - Always First on Mobile */}
      <div className="flex items-start gap-8 w-full md:w-1/2 order-1">
        {/* Icon Section */}
        <div className="relative shrink-0">
          <div className="absolute -inset-2 bg-blue-500/100 rounded-full blur-xl" />
          <div className="relative w-16 md:w-20 h-16 md:h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
            {React.cloneElement(icon, { 
              className: "w-8 md:w-10 h-8 md:h-10 text-blue-600" 
            })}
          </div>
          
          {/* Connector Line - Only visible on desktop */}
          {index !== 2 && (
            <div className="hidden md:block absolute top-full left-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2" />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
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

      {/* Image - Order changes based on index on desktop, always second on mobile */}
      <div className={`w-full md:w-1/2 order-2 md:order-${isEven ? 2 : 1}`}>
        <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 mt-8 md:mt-0">
          <img
            src={imageUrl}
            alt={`${title} illustration`}
            className="w-full h-48 md:h-64 object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
      imageUrl :img
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
      imageUrl :img2
    },
    {
      title: "Electrical Scope",
      icon: <Zap />,
      items: [
        "Cable laying with proper dressing & numbering",
        "Connection of junction boxes, Erection of SRCB with foundation",
        "All DC side activities",
      ],
      imageUrl :img3
    },
  ];

  return (
    <div className="relative py-12 md:py-24 min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-full bg-blue-600/10 mb-6 md:mb-8">
            <Wrench className="w-8 md:w-10 h-8 md:h-10 text-blue-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">
            Our Scope of Work
          </h2>
          <div className="w-32 md:w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-4 rounded-full" />

          <p className="text-base md:text-lg text-grey-500 max-w-2xl mx-auto">
            Comprehensive solutions across civil, mechanical, and electrical domains
          </p>
        </div>

        {/* Zigzag Layout */}
        <div className="space-y-16 md:space-y-24">
          {scopes.map((scope, index) => (
            <ScopeCard key={index} {...scope} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scope;