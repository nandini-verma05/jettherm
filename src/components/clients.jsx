
import React, { useState, useEffect } from "react";
import { storage } from "./appwrite_config"; // Import Appwrite config

const BUCKET_ID = "6791ced30003cf1d6c04"; // Replace with your actual bucket ID

// ✅ List of specific logo file IDs stored in Appwrite
const LOGO_IDS = [
  "67a2320d000b19889f45", // Replace with actual Appwrite file IDs 
  "67a23219001581e2d42c",
  "67a2322800186d9e68a4",
  "67a2323a002a2392c564",
  "67a23249003dd8ca0db5",
  "67a2325d00036e2103f3",
  "67a2326e00040254dc9f",
  "67a479c8003acbc1e3d6",
  "67a2328600201940928b",
  "67a231fd0030509b8600"
];

// ✅ Descriptions for each company (should match the number of IDs)
const DESCRIPTIONS = [
  "ACME",
  "LANCO",
  "WIPRO",
  "M+W",
  "TATA POWER GROUP",
  "SUNEDISON INFRASTRUCTURE LTD.",
  "VOLTAS LTD",
  "GENSOL",
  "STERLING WILSON",
  "INFOSYS"
];

const Clients = () => {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const logoUrls = LOGO_IDS.map((id, index) => ({
          url: storage.getFileView(BUCKET_ID, id), // Get file URL from Appwrite
          name: DESCRIPTIONS[index] || `Client ${index + 1}`, // Assign description
        }));
        setLogos(logoUrls);
      } catch (err) {
        console.error("Error fetching logos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  const handleShowAll = () => setShowAll(!showAll);

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
                      alt={logo.name}
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
                      alt={logo.name}
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
                    alt={logo.name}
                    width={240}
                    height={120}
                    className="object-contain w-auto h-24 sm:h-32"
                  />
                  <p className="mt-2 text-center">{logo.name}</p>
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
