// src/components/About/WhyChooseUs.jsx
import React, { useEffect, useRef } from 'react';
import {
  Clock,
  Users,
  Briefcase,
  CheckCircle,
  DollarSign,
  Building2,
} from 'lucide-react';

const CircularFeatureLayout = ({ features }) => {
  const featureRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.animationPlayState = 'running';
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const centerX = 50;
  const centerY = 50;

  const getRadius = () => (window?.innerWidth < 768 ? 25 : 35);

  const getPosition = (index) => {
    const radius = getRadius();
    const totalFeatures = features.length;
    const angle = (index * (360 / totalFeatures) - 90) * (Math.PI / 180);
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <div className="relative w-full min-h-[600px] lg:min-h-[800px] mx-auto my-12 lg:my-24">
      <svg className="absolute inset-0 w-full h-full -z-10 hidden md:block">
        <circle
          cx={`${centerX}%`}
          cy={`${centerY}%`}
          r={`${getRadius()}%`}
          fill="none"
          stroke="blue"
          strokeWidth="24"
        />
      </svg>

      <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-20">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-full w-32 h-32 flex items-center justify-center shadow-xl">
          <h3 className="text-xl font-bold text-white text-center p-4">Why Choose Us?</h3>
        </div>
      </div>

      <div className="md:absolute inset-0 pt-40 md:pt-0">
        {features.map((feature, index) => {
          const pos = getPosition(index);
          return (
            <div
              ref={(el) => (featureRefs.current[index] = el)}
              key={index}
              className="md:absolute w-full md:w-64 mx-auto mb-6"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                opacity: 0,
              }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Clock />, title: 'Timely Completion', description: 'We deliver on time.' },
    { icon: <Users />, title: 'Expert Resources', description: 'Best industry resources.' },
    { icon: <Briefcase />, title: 'High Work Ethics', description: 'Ethical and reliable.' },
    { icon: <CheckCircle />, title: 'Quality Guaranteed', description: 'Top-notch quality.' },
    { icon: <DollarSign />, title: 'Economical', description: 'Affordable solutions.' },
    { icon: <Building2 />, title: 'Diverse Expertise', description: 'Expanding services.' },
  ];

  return (
    <div className="container mx-auto px-4">
      <CircularFeatureLayout features={features} />
    </div>
  );
};

export default WhyChooseUs;
