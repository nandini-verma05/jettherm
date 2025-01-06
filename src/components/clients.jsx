import React from "react";

// Array of logo images
const logos = [
  require("./assets/company_logo/logo1.png"),
  require("./assets/company_logo/logo2.webp"),
  require("./assets/company_logo/logo3.png"),
  require("./assets/company_logo/logo5.png"),
  require("./assets/company_logo/logo12.jpeg"),
  require("./assets/company_logo/logo13.avif"),
  require("./assets/company_logo/logo14.jpg"),
];

const Clients = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8"> Our Clients</h2>
        <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />

        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap items-center justify-start space-x-8 animate-marquee pb-4">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={240}
                  height={120}
                  className="object-contain w-auto h-24 sm:h-32"
                />
              </div>
            ))}
            {/* Duplicate the logos to create a continuous scroll effect */}
            {logos.map((logo, index) => (
              <div key={index + logos.length} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={240}
                  height={120}
                  className="object-contain w-auto h-24 sm:h-32"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
