import React, { useState } from 'react';

// Array of logo images
const logos = [
  require("./assets/company_logo/logo1.png"),
  require("./assets/company_logo/logo2.webp"),
  require("./assets/company_logo/logo3.png"),
  require("./assets/company_logo/logo5.png"),
  require("./assets/company_logo/logo12.jpeg"),
  require("./assets/company_logo/logo13.avif"),
  require("./assets/company_logo/logo14.jpg"),
  require("./assets/company_logo/logo15.jfif"),
  require("./assets/company_logo/logo16.png"),
];

const Clients = () => {
  const [showAll, setShowAll] = useState(false);
  
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
 const descriptions =[
  "ACME",
  "LANCO",
  "WIPRO",
  "M+W ",
  "TATA POWER GROUP",
  "SUNEDISION INFRASTRUCRE LTD. ",
  "VOLTAS LTD",
  "GENSOL",
  "STERLING WILSON "

 ]
  return (
    <section id="clients">
      <section className="py-8 overflow-hidden">
        <div className="container mx-auto ">
          <h2 className="text-3xl font-bold text-center text-black mb-4"> Our Clients</h2>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-4 rounded-full" />

          <div className="container mx-auto ">
          <div className="relative w-full overflow-x-hidden">
            <div className="inline-flex animate-[marquee_8s_linear_infinite] hover:pause">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={240}
                    height={120}
                    className="object-contain w-auto h-24 sm:h-32"
                  />
                </div>
              ))}
              {/* Second set of logos for seamless loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-8">
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
            {/* dupilcate */}
           
          </div>
          <div className="flex justify-center mt-6">
  <button
    onClick={handleShowAll}
    className="px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
  >
    Show All Companies
  </button>
</div>
          {showAll && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-blue-50 gap-4">
              {logos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={240}
                    height={120}
                    className="object-contain w-auto h-24 sm:h-32"
                  />
                  <p className="mt-2 text-center">{descriptions[index]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Clients;
