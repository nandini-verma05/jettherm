import React from 'react';
import { 
  Clock, Users, Briefcase, CheckCircle, DollarSign, Building2,
  Timer, Award, Shield, Star, TrendingUp, Leaf,
  Target, Rocket, ArrowRight
} from 'lucide-react';
 import logo from './assets/logo.jpeg';
// import img from './assets/picture1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';




const FeatureCard = ({ icon, title, description, index, decorativeIcon: DecorativeIcon }) => (
  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full max-w-4xl mx-auto mb-8`}>
    <div className="w-1/2 p-8 flex justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 w-full">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
        </div>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
    <div className="w-1/2 flex justify-center items-center">
      <DecorativeIcon className="w-48 h-48 text-gray-200 opacity-80" />
    </div>
  </div>
);

const About = () => {
  const features = [
    { 
      icon: <Clock className="h-8 w-8 text-blue-500" />, 
      title: "Timely Completion", 
      description: "We complete our tasks within the stipulated time period",
      decorativeIcon: Timer
    },
    { 
      icon: <Users className="h-8 w-8 text-green-500" />, 
      title: "Expert Resources", 
      description: "Best industry resources and strong industry experts at your service",
      decorativeIcon: Award
    },
    { 
      icon: <Briefcase className="h-8 w-8 text-purple-500" />, 
      title: "High Work Ethics", 
      description: "High work ethics and commitment in all our projects",
      decorativeIcon: Shield
    },
    { 
      icon: <CheckCircle className="h-8 w-8 text-red-500" />, 
      title: "Quality Guaranteed", 
      description: "High-quality services guaranteed for all our clients",
      decorativeIcon: Star
    },
    { 
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />, 
      title: "Economical", 
      description: "Economical cost for any work scope compared to competitors",
      decorativeIcon: TrendingUp
    },
    { 
      icon: <Building2 className="h-8 w-8 text-indigo-500" />, 
      title: "Diverse Expertise", 
      description: "Expanding into horticulture, home, and rural solar solutions",
      decorativeIcon: Leaf
    },
  ];

// Previous FeatureCard component and imports remain the same...

const MissionVisionSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
    {/* Mission Card */}
    <div className="flex flex-col space-y-6">
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

    {/* Vision Card */}
    <div className="flex flex-col space-y-6">
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
  </div>
);

  return (
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
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Founded in 2012, JETTHERM ENTERPRISES was established with a vision to innovate in the field of green energy. We began by servicing construction and solar-related needs, including erection, site preparation, and facility renovations. Our company pursues its goals with high sincerity, commitment, and integrity, continually striving for new inventions.
          </p>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            In a short span of time, we have achieved 100% client satisfaction. Based on their feedback, we are now expanding our services to include horticulture, home, and rural solar solutions, along with growing our consultancy services.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />
        <div className="space-y-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>

      <MissionVisionSection />
      </div>
    
  );
};

export default About;