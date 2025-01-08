import React from 'react';
import { useEffect, useRef } from 'react';
import { 
  Clock, Users, Briefcase, CheckCircle, DollarSign, Building2,
  Timer, Award, Shield, Star, TrendingUp, Leaf,
  Target, Rocket, ArrowRight
} from 'lucide-react';
import logo from './assets/logo.jpeg';
import img from './assets/work_process1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SlideInWrapper from './animations/slideinwrapper';
const CircularFeatureLayout = ({ features }) => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const centerX = 50;
  const centerY = 50;

  const getRadius = () => {
    if (typeof window === 'undefined') return 35;
    return window.innerWidth < 768 ? 0 : 
           window.innerWidth < 1024 ? 25 : 
           35; 
  };

  const getPosition = (index) => {
    const radius = getRadius();
    const totalFeatures = features.length;
    const angle = (index * (360 / totalFeatures) - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[800px] mx-auto my-12 lg:my-24">
      <svg className="absolute inset-0 w-full h-full -z-10 hidden md:block">
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle
          cx={`${centerX}%`}
          cy={`${centerY}%`}
          r={`${getRadius()}%`}
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth="24"
          className="animate-drawCircle"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          style={{
            animation: 'drawCircle 2s ease-out forwards',
          }}
        />
      </svg>

      <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center p-4">
            Why Choose Us?
          </h3>
        </div>
      </div>

      <div className="md:absolute inset-0 pt-40 md:pt-0">
        {features.map((feature, index) => {
          const pos = getPosition(index);
          return (
            <div
              ref={(el) => (featureRefs.current[index] = el)}
              key={index}
              className="md:absolute w-full md:w-64 lg:w-72 mx-auto mb-6
                md:transform md:-translate-x-1/2 md:-translate-y-1/2
                transition-all duration-500 hover:scale-105"
              style={{
                left: window?.innerWidth >= 768 ? `${pos.x}%` : 'auto',
                top: window?.innerWidth >= 768 ? `${pos.y}%` : 'auto',
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
                animationPlayState: 'paused',
              }}
            >
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow duration-300 mx-4 md:mx-0">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-gray-900">{feature.title}</h4>
                </div>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    { 
      icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />, 
      title: "Timely Completion", 
      description: "We complete our tasks within the stipulated time period"
    },
    { 
      icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-green-500" />, 
      title: "Expert Resources", 
      description: "Best industry resources and strong industry experts at your service"
    },
    { 
      icon: <Briefcase className="h-6 w-6 md:h-8 md:h-8 text-purple-500" />, 
      title: "High Work Ethics", 
      description: "High work ethics and commitment in all our projects"
    },
    { 
      icon: <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-red-500" />, 
      title: "Quality Guaranteed", 
      description: "High-quality services guaranteed for all our clients"
    },
    { 
      icon: <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />, 
      title: "Economical", 
      description: "Economical cost for any work scope compared to competitors"
    },
    { 
      icon: <Building2 className="h-6 w-6 md:h-8 md:w-8 text-indigo-500" />, 
      title: "Diverse Expertise", 
      description: "Expanding into horticulture, home, and rural solar solutions"
    }
  ];

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }
      
      @keyframes drawCircle {
        to {
          stroke-dashoffset: 0;
        }
      }

      @media (max-width: 768px) {
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <CircularFeatureLayout features={features} />
    </div>
  );
};

const MissionVisionSection = () => {
  return (
  
    <div className="grid grid-cols-1 gap-16 mt-16">
      
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 lg:space-x-reverse">
        <div className="flex-1 flex flex-col space-y-6">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-t-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="h-12 w-12 text-white" />
              <h3 className="text-4xl font-bold text-white">Our Vision</h3>
            </div>
            <div className="w-24 h-1 bg-white/50 rounded-full mb-6" />
          </div>
          <div className="bg-white rounded-b-3xl shadow-xl p-8 relative -mt-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the leading provider of green energy solutions in the region, driving the transition towards a more sustainable and energy-efficient future.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Leadership</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Green Energy</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Future-Ready</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Vision Image"
            className="wave-shape rounded-tr-[100px] rounded-bl-[100px] border-4 border-blue shadow-lg"
          />
        </div>
       
      </div>
      
     
      <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1 flex flex-col space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-t-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Target className="h-12 w-12 text-white" />
              <h3 className="text-4xl font-bold text-white">Our Mission</h3>
            </div>
            <div className="w-24 h-1 bg-white/50 rounded-full mb-6" />
          </div>
          <div className="bg-white rounded-b-3xl shadow-xl p-8 relative -mt-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              To provide innovative and sustainable energy solutions that empower businesses and communities, while maintaining the highest standards of quality and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Sustainability</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Quality</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={img}
            alt="Mission Image"
            className="wave-shape rounded-tr-[100px] rounded-bl-[100px] border-4 border-blue shadow-inner"
          />
        </div>
      </div>
     
    </div>
   
    
  );
};

const About = () => {
  return (
   
<div>


      <div id="about">
   
      <div className="container mx-auto px-4 py-16 mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="w-full lg:w-1/2 relative">
            <img 
              src={logo}
              alt="Company logo" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg transform hover:scale-105 transition-duration-300" 
            />
          </div>

          <div className="w-full lg:w-1/2">
            <FontAwesomeIcon icon={faInfoCircle} className="text-2xl text-blue-500 w-12 h-12 text-primary" />
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About</h2>
            <h2 className="font-['Audiowide'] text-lg md:text-4xl font-bold drop-shadow-lg">
              <span className="text-blue-500">JET</span>
              <span className="text-red-500">THERM</span>
            </h2>
            <div className="w-60 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
            
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              Founded in 2012, JETTHERM ENTERPRISES was established with a vision to innovate in the field of green energy. We began by servicing construction and solar-related needs, including erection, site preparation, and facility renovations. Our company pursues its goals with high sincerity, commitment, and integrity, continually striving for new inventions.
            </p>
            <p className="text-gray-800 text-lg mb-8 leading-relaxed">
              In a short span of time, we have achieved 100% client satisfaction. Based on their feedback, we are now expanding our services to include horticulture, home, and rural solar solutions, along with growing our consultancy services.
            </p>
          </div>
        </div>
        </div>
       
       
        
        <div>
          <WhyChooseUs />
          <MissionVisionSection />
        </div>
        </div>
     
        </div> 
      
      
      
    
   
  );
};

export default About;
