import React from 'react';
import { Truck, Package, CircleDot, ArrowDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import img from "./assets/work_process1.jpg"
import img2 from "./assets/work_process2.jpg";
import SlideInWrapper from './animations/slideinwrapper';

const ProcessNumber = ({ number }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20" />
    <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-20" />
    <div className="absolute -inset-4 bg-blue-50 rounded-full opacity-10" />
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] backdrop-blur-sm border border-blue-400/20">
      <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-blue-400/30" />
      <span className="relative text-xl font-bold text-white drop-shadow-lg">{number}</span>
    </div>
    <div className="absolute top-full left-1/2 w-1 h-48 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2" />
  </div>
);

const ProcessCard = ({ icon: Icon, title, description, index, image }) => (
  <div className="relative flex items-center gap-8 group">
    {/* Left Side Content */}
    {index % 2 === 0 && (
      <div className="hidden md:flex w-1/2 justify-end pr-8">
        <img src={image} alt={title} className="rounded-xl shadow-md max-w-sm" />
      </div>
    )}

    {/* Center Process Number */}
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
      <ProcessNumber number={index + 1} />
      <ArrowDown className="h-8 w-8 text-blue-500 mt-4 animate-bounce opacity-70" />
    </div>

    {/* Right Side Content */}
    <div className="md:w-1/2 pl-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 max-w-md hover:shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-50 rounded-xl">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>

    {/* Alternate Side for Odd Index */}
    {index % 2 === 1 && (
      <div className="hidden md:flex w-1/2 justify-start pl-8">
        <img src={image} alt={title} className="rounded-xl shadow-md max-w-sm" />
      </div>
    )}
  </div>
);

const WorkProcess = () => {
  const processes = [
    {
      icon: Truck,
      title: "Material Unloading",
      description: "Differentiate the material and unload safely with respect to manpower and material as per installation to save time and ease intra-site transportation.",
      image: img,
    },
    {
      icon: Package,
      title: "Heavy Material Handling",
      description: "Use 2-3 hydras at the same time for damage-free unloading of heavy-weighted/valuable material.",
      image: img2,
    },
    {
      icon: CircleDot,
      title: "Efficient Container Management",
      description: "Stacking sequence in unloading of material from the container, we may unload 3 containers at a time with a single forklift.",
      image: img,
    },
  ];

  return (
  
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 mb-4">
            <FontAwesomeIcon icon={faSync} className="text-2xl text-blue-500 w-12 h-16" />
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Our Work Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-1/2" /> */}
          <div className="space-y-24">
            {processes.map((process, index) => (
              <ProcessCard key={index} {...process} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  
   
   
  );
};

export default WorkProcess;
