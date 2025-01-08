// src/components/About/MissionVisionSection.jsx
import React from 'react';

const MissionVisionSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Our Mission & Vision</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Our Mission</h3>
          <p className="text-gray-700">
            To innovate and provide sustainable energy solutions for the betterment of society and the environment.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-600 mb-4">Our Vision</h3>
          <p className="text-gray-700">
            To be a global leader in green energy and renewable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
