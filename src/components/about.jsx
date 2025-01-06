import React from 'react';
import { Clock, Users, Briefcase, CheckCircle, DollarSign, Building2 } from 'lucide-react';
import logo from './assets/logo.jpeg';
import img from './assets/picture1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const features = [
    { icon: <Clock className="h-6 w-6 text-blue-500" />, title: "Timely Completion", description: "We complete our tasks within the stipulated time period" },
    { icon: <Users className="h-6 w-6 text-green-500" />, title: "Expert Resources", description: "Best industry resources and strong industry experts at your service" },
    { icon: <Briefcase className="h-6 w-6 text-purple-500" />, title: "High Work Ethics", description: "High work ethics and commitment in all our projects" },
    { icon: <CheckCircle className="h-6 w-6 text-red-500" />, title: "Quality Guaranteed", description: "High-quality services guaranteed for all our clients" },
    { icon: <DollarSign className="h-6 w-6 text-yellow-500" />, title: "Economical", description: "Economical cost for any work scope compared to competitors" },
    { icon: <Building2 className="h-6 w-6 text-indigo-500" />, title: "Diverse Expertise", description: "Expanding into horticulture, home, and rural solar solutions" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 mb-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={logo}
            alt="Company logo"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        

        {/* Right side - Content */}
        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
       
       <FontAwesomeIcon icon={faInfoCircle} className="text-2xl text-blue-500 w-12 h-12 text-primary" />
         <h2 className="text-4xl font-bold mb-6 text-gray-900">About </h2>
         <h2 className="font-['Audiowide'] text-lg md:text-4xl font-bold drop-shadow-lg">
             <span className="text-blue-500 ">JET</span>
             <span className="text-red-500 ">THERM</span>
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


      {/* Why Choose Us Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h3>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
  {/* Our Mission Card */}
  <div className="relative rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0 rounded-lg">
      <img 
        src={img} 
        alt="Mission Image" 
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg" />
    </div>

    {/* Content on top of the image */}
    <div className="relative z-10 text-white px-6 py-4">
      <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
      <p className="text-lg">
        To provide innovative and sustainable energy solutions that empower businesses and communities, while maintaining the highest standards of quality and customer satisfaction.
      </p>
    </div>
  </div>

  {/* Our Vision Card */}
  <div className="relative rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0 rounded-lg">
      <img 
        src={img}
        alt="Vision Image" 
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-yellow-900/80 backdrop-blur-sm rounded-lg shadow-lg" />
    </div>

    {/* Content on top of the image */}
    <div className="relative z-10 text-white px-6 py-4">
      <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
      <p className="text-lg">
        To be the leading provider of green energy solutions in the region, driving the transition towards a more sustainable and energy-efficient future.
      </p>
    </div>
  </div>
  </div>
  </div>

  );
};

export default About;

