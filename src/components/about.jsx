import React, { useState } from 'react';
import { Target, Rocket } from 'lucide-react';
import img from './assets/work_process1.jpg';
import img2 from './assets/work2.jpeg';
import WhyChooseUs from './about_components/WhyChooseUs';
import AboutHeader from './about_components/AboutHeader';
import AnimationWrapper from './animations/AnimationWrapper';

const MissionVisionSection = ({ showVision, showMission, handleShowVision, handleShowMission }) => {
  return (
    <AnimationWrapper direction="right" delay={0.1}>
      <div className="grid grid-cols-1 px-0 py-0 mt-16">
        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 lg:space-x-reverse">
          <div className="flex-1 flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-t-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Rocket className="h-12 w-12 text-white" />
                <h3 className="text-4xl font-bold text-white">Our Vision</h3>
              </div>
              <div className="w-24 h-1 bg-white/50 rounded-full mb-6" />
            </div>
            <div className="bg-white rounded-b-3xl shadow-xl p-8 relative -mt-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                To be the leading provider of green energy solutions in the region, driving the transition towards a more sustainable and energy-efficient future.
              </p>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleShowVision}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Read More
                </button>
              </div>
              {showVision && (
                <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed space-y-4">
                    {/* Vision expanded content */}
                    <p className="mb-4">
                      We aspire to become the foremost provider of green energy solutions within the region, playing a pivotal role in transforming the energy landscape.
                    </p>
                    <p className="mb-4">
                      Our vision encompasses creating a sustainable future where renewable energy is accessible to all, driving innovation and environmental stewardship.
                    </p>
                    <p>
                      Through our commitment to excellence and sustainability, we aim to lead the transition to clean energy and create lasting positive impact.
                    </p>
                  </p>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Leadership</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Green Energy</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Future-Ready</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={img}
              alt="vision"
              className="wave-shape rounded-tr-[100px] rounded-bl-[100px] border-4 border-blue shadow-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center space-y-6 lg:space-y-0 lg:space-x-6 mt-16">
          <div className="flex-1 flex flex-col space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-t-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="h-12 w-12 text-white" />
                <h3 className="text-4xl font-bold text-white">Our Mission</h3>
              </div>
              <div className="w-24 h-1 bg-white/50 rounded-full mb-6" />
            </div>
            <div className="bg-white rounded-b-3xl shadow-xl p-8 relative -mt-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                To provide innovative and sustainable energy solutions that empower businesses and communities, while maintaining the highest standards of quality and customer satisfaction.
              </p>
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleShowMission}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Read More
                </button>
              </div>
              {showMission && (
                <div className="mt-8 bg-blue-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed space-y-4">
                    {/* Mission expanded content */}
                    <p className="mb-4">
                      Our mission is to revolutionize the energy sector by delivering cutting-edge sustainable solutions that meet the evolving needs of our clients and the planet.
                    </p>
                    <p className="mb-4">
                      We are committed to maintaining the highest standards of quality while fostering innovation and environmental responsibility in everything we do.
                    </p>
                    <p>
                      Through continuous improvement and customer-centric approaches, we strive to be the partner of choice for businesses and communities seeking sustainable energy solutions.
                    </p>
                  </p>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Innovation</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Sustainability</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">Quality</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={img2}
              alt="Mission"
              className="wave-shape rounded-tr-[100px] rounded-bl-[100px] border-4 border-blue shadow-inner"
            />
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

const About = () => {
  const [showVision, setShowVision] = useState(false);
  const [showMission, setShowMission] = useState(false);

  const handleShowVision = () => {
    setShowVision(!showVision);
  };

  const handleShowMission = () => {
    setShowMission(!showMission);
  };

  return (
    <div id="about" className="px-0 py-0">
      <AboutHeader />
      <MissionVisionSection 
        showVision={showVision}
        showMission={showMission}
        handleShowVision={handleShowVision}
        handleShowMission={handleShowMission}
      />
      <WhyChooseUs />
    </div>
  );
};

export default About;