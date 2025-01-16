import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const SideMenuItem = ({ Icon, text, bgColor, width, ariaLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute right-0 ">
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
      <div className="flex flex-col space-y-4 sm:space-y-2">
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Phone}
            text="Call Us"
            bgColor="bg-black"
            width="w-56 sm:w-full"
            ariaLabel="Call us"
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Mail}
            text="Email Us"
            bgColor="bg-black"
            width="w-64 sm:w-full"
            ariaLabel="Email us"
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Instagram}
            text="Instagram"
            bgColor="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            width="w-64 sm:w-full"
            ariaLabel="Instagram"
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Facebook}
            text="Facebook"
            bgColor="bg-blue-600"
            width="w-64 sm:w-full"
            ariaLabel="Facebook"
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Linkedin}
            text="LinkedIn"
            bgColor="bg-blue-700"
            width="w-64 sm:w-full"
            ariaLabel="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;