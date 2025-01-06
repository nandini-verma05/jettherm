import React, { useState, useEffect } from 'react';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlidingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    { id: 1, name: 'Client 1', quote: 'Innovation drives success!' },
    { id: 2, name: 'Client 2', quote: 'Excellence in every project.' },
    { id: 3, name: 'Client 3', quote: 'Building the future together.' },
    { id: 4, name: 'Client 4', quote: 'Transforming ideas into reality.' },
    { id: 5, name: 'Client 5', quote: 'Committed to quality service.' },
    { id: 6, name: 'Client 6', quote: 'Your success is our priority.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + clients.length) % clients.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 1;

    if (diff === 0) { // Current card
      transform = 'translateX(-50%) scale(1.1)';
      zIndex = 3;
    } else if (diff === 1 || diff === clients.length - 1) { // Adjacent cards
      transform = `translateX(${diff === 1 ? '20%' : '-120%'}) scale(0.9) translateZ(-50px)`;
      zIndex = 2;
      opacity = 0.7;
    } else { // Other cards
      transform = `translateX(${diff < Math.floor(clients.length / 2) ? '150%' : '-150%'}) scale(0.8) translateZ(-100px)`;
      zIndex = 1;
      opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-in-out'
    };
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-24 mt-24 overflow-hidden">
      <FontAwesomeIcon
        icon={faUserFriends}
        className="w-12 h-8 mx-auto mb-2 text-blue-500 block"
      />
      
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Team</h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />

      <div className="relative h-[400px] perspective-1000">
        <div className="absolute w-full top-0 left-1/2">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="absolute w-[400px] top-0 left-0 cursor-pointer"
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 
                            shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.25)]
                            transition-all duration-300">
                <div className="w-20 h-20 rounded-full bg-white mb-6 mx-auto flex items-center justify-center">
                  <FontAwesomeIcon icon={faUserFriends} className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 text-center">{client.name}</h2>
                <p className="text-lg text-white/90 text-center italic">{client.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-3">
        {clients.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default SlidingCards;