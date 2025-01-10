import React, { useEffect, useState } from 'react';
import { Clock, Users, Briefcase, CheckCircle, DollarSign, Building2 } from 'lucide-react';

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Top wave */}
    <svg 
      className="absolute top-0 w-full h-48 text-blue-100 transform rotate-180"
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
     
    >
      <path 
        fill="currentColor" 
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    
    
    {/* Bottom wave */}
    <svg 
      className="absolute bottom-0 w-full h-48 text-blue-100"
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <path 
        fill="currentColor" 
        fillOpacity="1" 
        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
   
  </div>
);

const CircularFeatureLayout = ({ features }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [isVisible, setIsVisible] = useState(false);
  const centerX = 50;
  const centerY = 50;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const getResponsiveRadius = () => {
    if (windowWidth < 640) return 32;
    if (windowWidth < 768) return 34;
    if (windowWidth < 1024) return 36;
    return 30;
  };

  const getPosition = (index) => {
    const totalFeatures = features.length;
    const angle = (index * (360 / totalFeatures) - 90) * (Math.PI / 180);
    const radius = getResponsiveRadius();
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const getCenterCircleSize = () => {
    if (windowWidth < 640) return 'w-20 h-20';
    if (windowWidth < 768) return 'w-24 h-24';
    if (windowWidth < 1024) return 'w-28 h-28';
    return 'w-32 h-32';
  };

  const getCardWidth = () => {
    if (windowWidth < 640) return 'w-28';
    if (windowWidth < 768) return 'w-32';
    if (windowWidth < 1024) return 'w-36';
    return 'w-40';
  };

  const outerCircleRadius = getResponsiveRadius();
  const centerCircleSize = getCenterCircleSize();
  const cardWidth = getCardWidth();

  const circumference = 2 * Math.PI * outerCircleRadius;

  return (
    <div className="  w-full relative w-full max-w-full mx-auto bg-blue-50  p-8 overflow-hidden">
        {/* <div className="w-full relative max-w-full mx-auto bg-blue-50 p-8 overflow-hidden"></div> */}
      <WaveBackground />
      
      <div className="aspect-square relative w-full h-full">
        {/* Outer Circle */}
        <svg 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid meet"
        >
          <circle
            cx={centerX}
            cy={centerY}
            r={outerCircleRadius}
            fill="none"
            stroke="#A3B9FF"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? 0 : circumference}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Central Circle */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div 
            className={`${centerCircleSize} bg-white border border-blue-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm
              ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'} 
              transition-all duration-700 ease-out`}
          >
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-800 text-center px-2">
              Why Us?
            </h3>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="absolute inset-0 z-20">
          {features.map((feature, index) => {
            const pos = getPosition(index);
            return (
              <div
                key={index}
                className={`absolute ${cardWidth} transform -translate-x-1/2 -translate-y-1/2`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transition: 'all 0.5s ease-out',
                  opacity: isVisible ? 1 : 0,
                  transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-blue-600 shadow-sm hover:shadow-md transition-all duration-300 p-3
                  hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-500 transform transition-transform duration-300 group-hover:rotate-12">
                      {React.cloneElement(feature.icon, { 
                        size: windowWidth < 640 ? 16 : windowWidth < 1024 ? 18 : 20,
                        className: "transition-transform duration-300 hover:rotate-12"
                      })}
                    </div>
                    <h4 className="text-sm sm:text-base font-medium text-blue-800">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-xs text-blue-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Clock />, title: 'Fast Delivery', description: 'Quick & reliable service delivery.' },
    { icon: <Users />, title: 'Expert Team', description: 'Skilled professionals at work.' },
    { icon: <Briefcase />, title: 'Professional', description: 'High standards & ethics.' },
    { icon: <CheckCircle />, title: 'Guaranteed', description: 'Quality you can trust.' },
    { icon: <DollarSign />, title: 'Best Value', description: 'Competitive & transparent pricing.' },
    { icon: <Building2 />, title: 'Scale Ready', description: 'Solutions that grow with you.' },
  ];

  return (
    <div className="container mx-auto px-4 py-6 overflow-hidden">
      <CircularFeatureLayout features={features} />
    </div>
  );
};

export default WhyChooseUs;