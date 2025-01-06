import React from 'react';
import { Truck, Package, CircleDot, ArrowDown } from 'lucide-react';
// import img from './assets/illustration.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const ProcessCard = ({ icon: Icon, title, description, index }) => (
  <div className="relative flex items-center gap-8 group">
    <div className="hidden md:flex w-1/2 justify-end pr-8">
      {index % 2 === 0 && (
        <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
    
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl">
        <span className="text-white font-bold">{index + 1}</span>
      </div>
      <ArrowDown className="h-8 w-8 text-blue-500 mt-2 animate-bounce" />
    </div>

    <div className="md:w-1/2 pl-8">
      {index % 2 === 1 && (
        <div className="bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}
    </div>

    <div className="md:hidden w-full">
      <div className="bg-white p-6 rounded-2xl shadow-lg mt-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-50 rounded-xl">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const WorkProcess = () => {
  const processes = [
    {
      icon: Truck,
      title: "Material Unloading",
      description: "Differentiate the material and unload safely with respect to manpower and material as per installation to save time and ease intra-site transportation."
    },
    {
      icon: Package,
      title: "Heavy Material Handling",
      description: "Use 2-3 hydras at the same time for damage-free unloading of heavy-weighted/valuable material."
    },
    {
      icon: CircleDot,
      title: "Efficient Container Management",
      description: "Stacking sequence in unloading of material from the container, we may unload 3 containers at a time with a single forklift."
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-4">
            <FontAwesomeIcon icon={faSync} className="text-2xl text-blue-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2" />
          <div className="space-y-16">
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