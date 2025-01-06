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

const WaveTop = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden rotate-180">
    <svg
      className="w-full h-16"
      viewBox="0 0 1440 54"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M0 22L48 27.3C96 32.7 192 43.3 288 43.3C384 43.3 480 32.7 576 27.3C672 22 768 22 864 27.3C960 32.7 1056 43.3 1152 43.3C1248 43.3 1344 32.7 1392 27.3L1440 22V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
        fill="url(#waveGradient1)"
      />
    </svg>
  </div>
);

const WaveBottom = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg
      className="w-full h-16"
      viewBox="0 0 1440 54"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M0 22L48 27.3C96 32.7 192 43.3 288 43.3C384 43.3 480 32.7 576 27.3C672 22 768 22 864 27.3C960 32.7 1056 43.3 1152 43.3C1248 43.3 1344 32.7 1392 27.3L1440 22V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
        fill="url(#waveGradient2)"
      />
    </svg>
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
    <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16 px-4 mb-12">
      <WaveTop />
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
      <WaveBottom />
    </div>
  );
};

export default CardsContainer;