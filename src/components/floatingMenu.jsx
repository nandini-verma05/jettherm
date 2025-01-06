import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

const SideMenuItem = ({ Icon, text, bgColor, width, ariaLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute right-0">
        <button
          className={`flex items-center justify-end transition-all duration-300 ease-in-out ${
            isHovered ? width : 'w-14'
          } ${bgColor} text-white p-4 rounded-l-lg shadow-lg hover:brightness-110`}
          aria-label={ariaLabel}
        >
          <div
            className={`absolute right-14 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <span className="whitespace-nowrap">{text}</span>
          </div>
          <Icon className="w-6 h-6 relative z-10" />
        </button>
      </div>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        <div className="h-14">
          <SideMenuItem
            Icon={Phone}
            text="Call Us"
            bgColor="bg-black"
            width="w-56"
            ariaLabel="Call us"
          />
        </div>
        <div className="h-14">
          <SideMenuItem
            Icon={Mail}
            text="Email Us"
            bgColor="bg-black"
            width="w-64"
            ariaLabel="Email us"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;