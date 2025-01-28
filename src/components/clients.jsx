
import React, { useState, useEffect } from "react";
import { storage } from "./appwrite_config"; // Import your Appwrite config

const Clients = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Descriptions for the companies (same order as the logos in the bucket)
  const descriptions = [
    "ACME",
    "LANCO",
    "WIPRO",
    "M+W",
    "TATA POWER GROUP",
    "SUNEDISON INFRASTRUCTURE LTD.",
    "VOLTAS LTD",
    "GENSOL",
    "STERLING WILSON",
  ];

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        // Replace 'your-bucket-id' with the actual Appwrite bucket ID
        const response = await storage.listFiles("6790c0ec0005be19d931");
        //console.log("Response:", response);

        // Create an array of logo view URLs
        const logoUrls = response.files.map((file) => ({
          url: storage.getFileView("6790c0ec0005be19d931", file.$id), // Fetch the view URL
          name: file.name, // Add file name if needed
        }));
        setLogos(logoUrls);
      } catch (err) {
        console.error("Error fetching files:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  if (loading) return <p>Loading logos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="clients">
      <section className="py-8 overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-4">
            Our Clients
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-4 rounded-full" />

          <div className="container mx-auto">
            <div className="relative w-full overflow-x-hidden">
              <div className="inline-flex animate-[marquee_8s_linear_infinite] hover:pause">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-8">
                    <img
                      src={logo.url}
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
                      src={logo.url}
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
                    src={logo.url}
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

