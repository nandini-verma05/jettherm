import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

const Card = ({ name, photo, quote }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-grey-300 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <img
      src={photo}
      alt={name}
      className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
      <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
      <p className="text-lg text-gray-200 font-medium">{quote}</p>
    </div>
  </div>
);






const CardsContainer = () => {
  const cards = [
    {
      name: 'Shri Birju Choudhary',
      photo: '/api/placeholder/400/500',
      quote: 'Managing Director',
    },
    {
      name: 'Shri Sanjay Choudhary',
      photo: '/api/placeholder/400/500',
      quote: 'CEO',
    },
    {
      name: 'Shri Abhishek Kumar',
      photo: '/api/placeholder/400/500',
      quote: 'Business & Execution Head',
    },
  ];

  return (
    <div className="relative  py-16 px-4 mb-12 overflow-hidden">
     
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
        <FontAwesomeIcon icon={faUserTie} className="text-2xl text-primary text-blue-500 w-12 h-12" />
          <h1 className="text-4xl font-bold text-black mb-4">Our Management</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
          
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default CardsContainer;