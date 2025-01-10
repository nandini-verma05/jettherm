import React, { useState, useEffect } from 'react';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';


const images = [pic1, pic2, pic3,pic4];
const quotes = [
  "The Power Solar journey at a glance, a history rich with experience and achievements.",
  "Harness the power of the sun for a brighter future.",
  "Innovation and sustainability for tomorrow's energy needs."
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky h-screen overflow-hidden">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />

      {/* Slideshow Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-all duration-1000 transform scale-105
              ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
            `}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8">
        <div className="transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-baseline mb-2 relative">
            {/* Decorative elements */}
            <div className="absolute -left-8 -top-8 w-16 h-16 border-t-2 border-l-2 border-blue-400 opacity-60" />
            <div className="absolute -right-8 -bottom-8 w-16 h-16 border-b-2 border-r-2 border-red-400 opacity-60" />
            
            <h1 className="font-['Orbitron'] text-5xl md:text-7xl font-bold drop-shadow-lg">
              <span className="text-blue-500 hover:text-blue-400 transition-colors">JET</span>
              <span className="text-red-500 hover:text-red-400 transition-colors">THERM</span>
            </h1>
          </div>
        </div>

        <h2 className="font-['Raleway'] text-2xl md:text-3xl text-white mb-4 tracking-[0.3em] font-light 
          transform translate-y-4 opacity-0 animate-[slideUp_0.5s_ease-out_0.5s_forwards]">
          ENTERPRISES
        </h2>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent my-8 
          transform scale-x-0 animate-[scaleX_0.5s_ease-out_0.8s_forwards]" />

        <p className={`text-white text-xl md:text-2xl text-center max-w-2xl leading-relaxed font-light
          transform transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {quotes[currentIndex]}
        </p>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentIndex ? 'w-8 bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(1rem); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default Banner;