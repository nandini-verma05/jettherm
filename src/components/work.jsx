import React from 'react';
import { Truck, Package, CircleDot, ArrowDown } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import SlideInWrapper from './animations/slideinwrapper';
import img from "./assets/work13.jpeg"
import img2 from "./assets/work7.jpeg";
import img3 from "./assets/work6.jpeg";

const ProcessNumber = ({ number }) => (
  <div className="relative">
    <div className="absolute inset-0 bg-blue-200 rounded-full animate-ping opacity-20" />
    <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-20" />
    <div className="absolute -inset-4 bg-blue-50 rounded-full opacity-10" />
    <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] backdrop-blur-sm border border-blue-400/20">
      <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-blue-400/30" />
      <span className="relative text-lg md:text-xl font-bold text-white drop-shadow-lg">{number}</span>
    </div>
    <div className="absolute top-full left-1/2 w-1 h-24 md:h-48 bg-gradient-to-b from-blue-500 to-transparent -translate-x-1/2" />
  </div>
);

const ProcessCard = ({ icon: Icon, title, description, index, image }) => (
  <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8 group">
    {/* Image for mobile (shown at top for all cards) */}
    <div className="md:hidden w-full max-w-sm mx-auto mb-4">
      <img src={image} alt={title} className="rounded-xl shadow-md w-full" />
    </div>

    {/* Left Side Content */}
    {index % 2 === 0 && (
      <div className="hidden md:flex w-full md:w-1/2 justify-end pr-4 md:pr-8">
        <img src={image} alt={title} className="rounded-xl shadow-md max-w-sm w-full" />
      </div>
    )}

    {/* Center Process Number */}
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
      <ProcessNumber number={index + 1} />
      <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-blue-500 mt-4 animate-bounce opacity-70" />
    </div>

    {/* Right Side Content */}
    <div className="w-full md:w-1/2 pl-4 md:pl-8">
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="p-2 md:p-3 bg-blue-50 rounded-xl">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>

    {/* Alternate Side for Odd Index */}
    {index % 2 === 1 && (
      <div className="hidden md:flex w-full md:w-1/2 justify-start pl-4 md:pl-8">
        <img src={image} alt={title} className="rounded-xl shadow-md max-w-sm w-full" />
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
      image: img3,
    },
  ];

  return (
    <div className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 md:p-4 mb-3 md:mb-4">
            <FontAwesomeIcon icon={faSync} className="text-xl md:text-2xl text-blue-500 w-8 h-12 md:w-12 md:h-16" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 md:mb-4">Our Work Process</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="space-y-16 md:space-y-24">
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