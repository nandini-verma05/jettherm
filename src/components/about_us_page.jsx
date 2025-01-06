import React from "react";
import {
  Building2,
  Briefcase,
  HardHat,
  Zap,
  Leaf,
  Home,
  Wrench,
  Shield,
} from "lucide-react";
import img from "./assets/work_process.svg";
import Footer from "./footer";

const ServiceCard = ({ icon, title }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
    <div className="pt-6">
      {icon}
      <h4 className="font-semibold mt-2">{title}</h4>
    </div>
  </div>
);

const ScopeCard = ({ title, items, icon }) => (
  <div className="bg-gradient-to-br from-white via-gray-100 to-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="p-6 border-b border-gray-200">
      <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-700">
        {icon}
        <span>{title}</span>
      </h3>
    </div>
    <div className="p-6">
      <ul className="list-disc list-inside space-y-3 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const AboutUs = () => {
  const services = [
    { icon: <Briefcase className="h-12 w-12 mx-auto" />, title: "Construction Services" },
    { icon: <Zap className="h-12 w-12 mx-auto" />, title: "Solar Energy Solutions" },
    { icon: <Building2 className="h-12 w-12 mx-auto" />, title: "Site Preparation" },
    { icon: <Home className="h-12 w-12 mx-auto" />, title: "Facility Renovation" },
    { icon: <Leaf className="h-12 w-12 mx-auto" />, title: "Horticulture Consultancy" },
    { icon: <Zap className="h-12 w-12 mx-auto" />, title: "Home & Rural Solar Solutions" },
  ];

  const scopes = [
    {
      title: "Civil Scope",
      icon: <Building2 className="h-6 w-6" />,
      items: ["Pile Anchoring, Pile Cap", "Construction of Inverter Control Room"],
    },
    {
      title: "Mechanical Scope",
      icon: <Wrench className="h-6 w-6" />,
      items: [
        "Pre Engineering Building",
        "Solar MMS (Module Mounting Structure)",
        "All kinds of Erection at any height",
        "Material unloading with intra-site transportation",
        "Fabrication",
        "All kinds of welding (e.g. Arc, Organic, Mig, Gas etc.)",
      ],
    },
    {
      title: "Electrical Scope",
      icon: <Zap className="h-6 w-6" />,
      items: [
        "Cable laying with proper dressing & numbering",
        "Connection of junction boxes, Erection of SRCB with foundation",
        "All DC side activities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="container max mx-auto p-6 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading through quality work with time management & innovation.
          </p>
        </header>

        <div className="relative">
          <img
            src={img}
            alt="Work Process Illustration"
            className="w-screen max-w-full h-48 object-cover mb-4"
          />
        </div>

        <section>
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scopes.map((scope, index) => (
              <ScopeCard key={index} title={scope.title} items={scope.items} icon={scope.icon} />
            ))}
          </div>
        </section>

        <div className="bg-gradient-to-br from-white via-gray-100 to-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-700">
                <HardHat className="h-6 w-6 text-blue-500" />
                Work Process
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-600">
                <li>
                  Unloading: Differentiate the material and unload safely with respect to
                  manpower and material as per installation to save time and ease intra-site
                  transportation.
                </li>
                <li>Use 2-3 hydras at the same time for damage-free unloading of heavy-weighted/valuable material.</li>
                <li>
                  Stacking sequence in unloading of material from the container, we may unload
                  3 containers at a time with a single forklift.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center p-6">
              <img
                src={img}
                alt="Work Process Illustration"
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
