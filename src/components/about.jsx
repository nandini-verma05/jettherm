import React from 'react';
import { useEffect, useRef } from 'react';
import { 
  Clock, Users, Briefcase, CheckCircle, DollarSign, Building2,
  Timer, Award, Shield, Star, TrendingUp, Leaf,
  Target, Rocket, ArrowRight
} from 'lucide-react';
import logo from './assets/logo.png';
import img from './assets/work_process1.jpg';
import img2 from './assets/work2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import SlideInWrapper from './animations/slideinwrapper';
import WhyChooseUs from './about_components/WhyChooseUs';
import AboutHeader from './about_components/AboutHeader';

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
            src={img2}
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
   
     
       
       
        
        <div>
          <AboutHeader />
          <MissionVisionSection />
          <WhyChooseUs />
         
        </div>
        </div>
     
        </div> 
      
      
      
    
   
  );
};

export default About;
