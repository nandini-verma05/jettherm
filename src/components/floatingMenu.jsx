
import React, { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const SideMenuItem = ({ Icon, text, bgColor, width, ariaLabel, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative px-0 py-0 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute right-0 z-20">
        <button
          className={`flex items-center justify-end transition-all duration-300 ease-in-out ${
            isHovered ? width : 'w-14'
          } ${bgColor} text-white p-4 rounded-l-lg shadow-lg hover:brightness-110`}
          aria-label={ariaLabel}
          onClick={onClick} // Pass the onClick handler here
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
            width="w-56"
            ariaLabel="Call us"
            onClick={() => (window.location.href = 'tel:+7724068116')} // Redirect to dial pad
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Mail}
            text="Email Us"
            bgColor="bg-black"
            width="w-64"
            ariaLabel="Email us"
            onClick={() => (window.location.href = "mailto:Jettherm1991@gmail.com")} // Redirect to email client
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={MessageCircle}
            text="WhatsApp"
            bgColor="bg-green-500"
            width="w-64 "
            ariaLabel="WhatsApp"
            onClick={() =>
              window.open(
                "https://wa.me/7724068116?text=Hello! I would like to inquire about your services."
              )
            } // Redirect to WhatsApp
          />
        </div>
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Instagram}
            text="Instagram"
            bgColor="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            width="w-64"
            ariaLabel="Instagram"
            onClick={() => window.open('https://www.instagram.com/jettherm_solar?igsh=MWhjbnE2OGNxYnNtbg==')} // Redirect to Instagram
          />
        </div>
        
        <div className="h-14 sm:w-full">
          <SideMenuItem
            Icon={Linkedin}
            text="LinkedIn"
            bgColor="bg-blue-700"
            width="w-64"
            ariaLabel="LinkedIn"
            onClick={() => window.open('https://www.linkedin.com/in/birju-choudhary-7420b71aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} // Redirect to LinkedIn
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
