import React from 'react';

const WorkforceCard = ({ role, range }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{role}</h3>
    <div className="flex items-center justify-between">
      <span className="text-gray-600">Workforce Range:</span>
      <span className="text-lg font-medium text-blue-600">{range}</span>
    </div>
  </div>
);

const Workforce = () => {
  const workforce = [
    {
      role: "Supervisor",
      range: "10 - 15"
    },
    {
      role: "Mason",
      range: "20 - 30"
    },
    {
      role: "Welder",
      range: "05 - 08"
    },
    {
      role: "Fabricator",
      range: "10 - 15"
    },
    {
      role: "Electrician",
      range: "20 - 25"
    },
    {
      role: "Landscape Designer",
      range: "02 - 05"
    },
    {
      role: "Store In-charge",
      range: "02 - 05"
    },
    {
      role: "Erection Skilled Labour",
      range: "20 - 25"
    },
    {
      role: "Semi Skilled Labour",
      range: "100 - 150"
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Workforce Overview</h1>
          
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto rounded-full" />

          <p className="text-gray-600">Our team composition and workforce strength</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workforce.map((item, index) => (
            <WorkforceCard
              key={index}
              role={item.role}
              range={item.range}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>Total Approximate Workforce: 189 - 278</p>
        </div>
      </div>
    </div>
  );
};

export default Workforce;