
import React, { useState, useEffect } from "react";
import { storage } from "./appwrite_config"; // Adjust based on your service


const Blogs = () => {
  const [images, setImages] = useState([]);
  const bucketId = "6791ced30003cf1d6c04"; // Replace with your bucket ID

  // File IDs, Titles, and Descriptions
  const fileData = [
    {
      fileId: "67925ca1000d23117a17", // Replace with actual file IDs
      title: "Civil & Mechanical (15MW)",
      description:
        "Involves site preparation, land grading, and the construction of foundations for solar panels, inverters, and other infrastructure.",
    },
    {
      fileId: "67925cb2001ae5787b2a",
      title: "Mechanical Installation (8MW)",
      description:
        "Assembled and secured components like mounting structures, solar trackers, and support systems to ensure maximum sunlight absorption.",
    },
    {
      fileId: "67925cc8002a1d4d9fcf",
      title: "Erection (8MW)",
      description:
        "Handled lifting, positioning, and installation of structures and equipment like panel mounts, inverters, and transformers.",
    },
    {
      fileId: "67925cd600260fef6110",
      title: "Electrical DC Connection (8MW)",
      description:
        "I connect solar panels in series or parallel to form strings and link them to combiner boxes. I ensure proper wiring, polarity, and insulation for efficient power flow. My work guarantees the safe and reliable transfer of DC electricity to the next stage of the system.",
    },
    {
      fileId: "67925ce50034714c2639",
      title: "Civil Control Room (2MW)",
      description:
        "Constructed and finished the building to house critical electrical and monitoring equipment with proper foundation, ventilation, and structural integrity to protect sensitive systems. Our work focuses on creating a durable and functional space for efficient plant operations.",
    },
    {
      fileId: "67925cf7000bfc691a22",
      title: "Erection (1MW)",
      description:
        "Have handled the lifting, positioning, and installation of structures and equipment like panel mounts, inverters, and transformers. We ensured that all components are securely fixed and aligned according to design specifications. We focus on maintaining structural integrity and supporting the efficient operation of the plant.",
    },
    {
      fileId: "67925d0600344c2c8333",
      title: "Erection and Mechanical Installation (5MW)",
      description:
        "Have handled the assembly, lifting, positioning, and securing of mounting structures, trackers, and other mechanical components with assurance that all parts are properly aligned and stable for optimal performance. We guarantee the structural integrity and durability of the plant under various conditions.",
    },
    {
      fileId: "67925d130031619efc21",
      title: "Self (2MW)",
      description:
        "We took responsibility for tasks like assembly, installation, and ensuring the proper functioning of various components with focus on precision, alignment, and safety to maximize efficiency and durability. Our role contributes to building a reliable and sustainable energy system.",
    },
    {
      fileId: "67925d200015b16f266d",
      title: "Tracker (8MW)",
      description:
        "We expertly installed solar trackers, aligning and positioning them for maximum sunlight absorption. Our team ensured that the trackers were securely set up and calibrated to follow the sun’s path, significantly enhancing the plant’s energy efficiency.",
    },
    {
      fileId: "67925d2e001d480f17ff",
      title: "Structure (8MW)",
      description:
        "We expertly installed solar mounting structures, ensuring precise alignment and secure anchoring for the panels. Our team focused on providing durable and stable support, capable of withstanding various environmental conditions to enhance the long-term performance of the solar plant.",
    },
    {
      fileId: "67925d4000314d983806",
      title: "Mechanical Installation (15MW)",
      description:
        "We have successfully completed mechanical installation work in several solar power plants, ensuring seamless integration of key components. We handled the assembly, positioning, and securing of mounting structures, solar trackers, and other mechanical components with precision.",
    },
    {
      fileId: "67925d50001dad197699",
      title: "MMS/ Module Installation & DC Work (30MW)",
      description:
        "Installed module mounting structures and mounted solar panels with precise alignment to ensure maximum energy absorption. Our team ensured secure fastening and optimal panel orientation for reliable long-term performance.",
    },
    {
      fileId: "67925d5d003b1437f4b8",
      title: "MMS/ Module Installation (5MW)",
      description:
        "Have efficiently installed module mounting structures and securely mounted solar panels, ensuring precise alignment for optimal energy generation. Our team focused on stability and durability, guaranteeing the panels are well-positioned to maximize sunlight absorption.",
    },
    {
      fileId: "67925d5d003b1437f4b8",
      title: "MMS/ Module Installation (20MW)",
      description:
        "Have installed module mounting structures and securely mounted solar panels, ensuring precise alignment for optimal energy generation. Our team focused on stability and durability, guaranteeing the panels are well-positioned to maximize sunlight absorption.",
    },
  ];

  useEffect(() => {
    // Fetch individual images
    const fetchImages = async () => {
      try {
        const fetchedImages = await Promise.all(
          fileData.map(async (file) => {
            const filePreview = storage.getFilePreview(bucketId, file.fileId);
            return filePreview;
          })
        );
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <section id="blogs">
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Blogs</h2>
        <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white border-2 border-blue-500 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-500 mb-4">
                  {fileData[index].title}
                </h3>
                <p className="text-gray-700">{fileData[index].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

