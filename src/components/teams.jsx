import React, { useState, useEffect } from 'react';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from './assets/team/1.jpeg'
import img2 from './assets/team/2.jpeg'
import img3 from './assets/team/3.jpeg'
import img4 from './assets/team/4.jpeg'
import img5 from './assets/team/5.jpeg'
import img6 from './assets/team/6.jpeg'

const SlidingCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {  quote: 'Innovation drives success!', image: img1 },
    {  quote: 'Excellence in every project.', image: img2 },
    {  quote: 'Building the future together.', image: img3 },
    {  quote: 'Transforming ideas into reality.', image: img4 },
    {  quote: 'Committed to quality service.', image: img5 },
    {  quote: 'Your success is our priority.', image: img6 },
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
    <section id="team">
      <div className="relative w-full max-w-6xl mx-auto mb-24 mt-24 overflow-hidden">
        <FontAwesomeIcon
          icon={faUserFriends}
          className="w-12 h-8 mx-auto mb-2 text-blue-500 block"
        />
        
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Team</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />

        <div className="relative h-[600px] perspective-1000">
          <div className="absolute w-full top-0 left-1/2">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="absolute w-[500px] h-[500px] top-0 left-0 cursor-pointer rounded-xl overflow-hidden"
                style={{
                  ...getCardStyle(index),
                  backgroundImage: `url(${client.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="w-full h-full bg-gradient-to-b from-black/40 to-black/70 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-white mb-4 text-center">{client.name}</h2>
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
    </section>
  );
};

export default SlidingCards;