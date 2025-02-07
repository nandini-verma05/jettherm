import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AnimationWrapper from '../animations/AnimationWrapper';

const AboutHeader = () => {
  const logoUrl = `https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67925bc8002ed225e28c/view?project=6790c07f0018598d5209&project=6790c07f0018598d5209&mode=admin`;

  return (
    <AnimationWrapper direction="left" delay={0.1}>
      <div className="container mx-auto py-4 px-0 mb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="w-full lg:w-1/2 relative">
            <img
              src={logoUrl}
              alt="Company logo"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-6 sm:px-12 md:px-24">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-2xl text-blue-500 w-12 h-12 text-primary mb-2"
            />
            <h2 className="text-4xl font-bold mb-2 text-gray-900">About</h2>
            <h2 className="font-['Audiowide'] text-lg md:text-4xl font-bold drop-shadow-lg">
              <span className="text-blue-500">JET</span>
              <span className="text-red-500">THERM</span>
            </h2>
            <div className="w-60 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto lg:mx-0 my-4 rounded-full" />
            <p className="text-gray-800 text-lg mb-4 leading-relaxed text-justify">
              Founded in 2012, JETTHERM ENTERPRISES was established with a vision to innovate in the field of green energy. We began by servicing construction and solar-related needs, including erection, site preparation, and facility renovations.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-justify">
              In a short span of time, we have achieved 100% client satisfaction. Based on their feedback, we are now expanding our services to include horticulture, home, and rural solar solutions.
            </p>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default AboutHeader;
