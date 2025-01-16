import React, { useEffect, useState } from 'react';
import { Clock, Users, Briefcase, CheckCircle, DollarSign, Building2 } from 'lucide-react';
import img1 from '../assets/a.jpg'
import img2 from '../assets/b.jpg'
import img3 from '../assets/c.jpg'
import img4 from '../assets/work10.jpeg'
import img5 from '../assets/work11.jpeg'
import img6 from '../assets/work12.jpeg'
import { useInView } from 'react-intersection-observer';
const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
    return 'w-48';
  };

  const getCardHeight = () => {
    if (windowWidth < 640) return 'h-32';
    if (windowWidth < 768) return 'h-36';
    if (windowWidth < 1024) return 'h-40';
    return 'h-52';
  };

  const outerCircleRadius = getResponsiveRadius();
  const centerCircleSize = getCenterCircleSize();
  const cardWidth = getCardWidth();
  const cardHeight = getCardHeight();

  const circumference = 2 * Math.PI * outerCircleRadius;

  const [ref, inView] = useInView({
    triggerOnce: false, // Allow repeated triggers
    threshold: 0.1, // Trigger when 20% of the element is visible
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  // Update animation state
  useEffect(() => {
    if (inView) {
      setHasAnimated(true); // Component enters view
    } else if (!inView && hasAnimated) {
      setHasAnimated(false); // Reset if component exits view
    }
  }, [inView, hasAnimated]);

  return (
    <div className="w-full relative w-full max-w-full mx-auto bg-blue-50 p-8 overflow-hidden">
      <WaveBackground />
      
      <div className="aspect-square relative w-full h-full">
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
                <div className={`relative ${cardHeight} rounded-xl border border-blue-600 shadow-sm hover:shadow-md 
                  transition-all duration-300 overflow-hidden group hover:scale-105 hover:-translate-y-1`}>
                  <img 
                    src={feature.imageSrc}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 group-hover:from-blue-900/95 group-hover:to-blue-900/50 transition-all duration-300"/>
                  
                  <div className="relative h-full p-3 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-white">
                        {React.cloneElement(feature.icon, { 
                          size: windowWidth < 640 ? 16 : windowWidth < 1024 ? 18 : 20,
                          className: "transition-transform duration-300 group-hover:rotate-12"
                        })}
                      </div>
                      <h4 className="text-sm sm:text-base font-medium text-white">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs text-blue-100 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};



const WhyChooseUs = ({windowWidth}) => {
  const features = [
    { 
      icon: <Clock />, 
      title: 'Fast Delivery', 
      description: 'Quick & reliable service delivery.',
      imageSrc: img1 // Fast delivery image
    },
    { 
      icon: <Users />, 
      title: 'Expert Team', 
      description: 'Skilled professionals at work.',
      imageSrc: img2 // Team image
    },
    { 
      icon: <Briefcase />, 
      title: 'Professional', 
      description: 'High standards & ethics.',
      imageSrc: img3 // Professional image
    },
    { 
      icon: <CheckCircle />, 
      title: 'Guaranteed', 
      description: 'Quality you can trust.',
      imageSrc: img4 // Quality guarantee image
    },
    { 
      icon: <DollarSign />, 
      title: 'Best Value', 
      description: 'Competitive & transparent pricing.',
      imageSrc:img5 // Value image
    },
    { 
      icon: <Building2 />, 
      title: 'Scale Ready', 
      description: 'Solutions that grow with you.',
      imageSrc: img6 // Scalability image
    }
  ];
  const MobileLayout = () => (
    <div className="flex flex-col space-y-4 px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`relative rounded-xl border border-blue-600 shadow-sm hover:shadow-md 
            transition-all duration-300 overflow-hidden group hover:scale-105 hover:-translate-y-1`}
        >
          <img
            src={feature.imageSrc}
            alt={feature.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 group-hover:from-blue-900/95 group-hover:to-blue-900/50 transition-all duration-300" />
          <div className="relative h-full p-3 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-1">
              <div className="text-white">
                {React.cloneElement(feature.icon, {
                  size: windowWidth < 640 ? 16 : windowWidth < 1024 ? 18 : 20,
                  className: "transition-transform duration-300 group-hover:rotate-12"
                })}
              </div>
              <h4 className="text-sm sm:text-base font-medium text-white">
                {feature.title}
                </h4>
              </div>
              <p className="text-xs text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-6 overflow-hidden">
     {windowWidth < 640 ? <MobileLayout /> : <CircularFeatureLayout features={features} />}
    </div>
  );
};

export default WhyChooseUs;