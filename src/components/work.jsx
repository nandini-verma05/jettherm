import React from 'react';
import { HardHat, Truck, Package, CircleDot } from 'lucide-react';
import img from './assets/illustration.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const WorkProcess = () => {
  const processes = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Material Unloading",
      description: "Differentiate the material and unload safely with respect to manpower and material as per installation to save time and ease intra-site transportation."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Heavy Material Handling",
      description: "Use 2-3 hydras at the same time for damage-free unloading of heavy-weighted/valuable material."
    },
    {
      icon: <CircleDot className="h-8 w-8" />,
      title: "Efficient Container Management",
      description: "Stacking sequence in unloading of material from the container, we may unload 3 containers at a time with a single forklift."
    }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          
          <FontAwesomeIcon icon={faSync} className="text-2xl w-8 h-8 text-blue-500 text-primary mb-2" />
           
          <h2 className="text-3xl font-bold mb-4">Our Work Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full mb-6" />
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="md:w-1/2 p-8">
              <div className="space-y-8">
                {processes.map((process, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-50 rounded-xl">
                        {React.cloneElement(process.icon, { className: "h-6 w-6 text-blue-600" })}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-900/20" />
              <img
                src={img}
                alt="Work Process Illustration"
                className=" mt-16 object-fit"
              />
              <div className="absolute bottom-0 left-0 right-0  bg-white" />
            </div>
          </div>

        
         
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;