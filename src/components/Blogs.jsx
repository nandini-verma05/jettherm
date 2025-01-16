import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
// Service data array
const data = [
  {
   
    title: "Civil & Mechanical (15MW)",
    content: `Involves site preparation, land grading, and the construction of foundations for solar panels, inverters, and other infrastructure. Also built access roads, drainage systems, and fencing for the plant. Have also done the installation of solar panel mounting structures, trackers, and mechanical components.`,
    backgroundImage: require("./assets/work1.jpeg"),
  },
  {
   
    title: "Mechanical Installation (8MW)",
    content: `Assembled and secured components like mounting structures, solar trackers, and support systems. We ensure that the solar panels are properly aligned for maximum sunlight absorption. Our work guarantees the system's stability and efficiency in all environmental conditions.`,
    backgroundImage: require("./assets/work2.jpeg"),
  },
  {
    title: "Erection (8MW)",
    content: `Have handled the lifting, positioning, and installation of structures and equipment like panel mounts, inverters, and transformers. We ensured that all components are securely fixed and aligned according to design specifications. We focus on maintaining structural integrity and supporting the efficient operation of the plant.`,
    backgroundImage: require("./assets/work3.jpeg"),
  },
  {
    title: "Electrical DC Connection (8MW)",
    content: `I connect solar panels in series or parallel to form strings and link them to combiner boxes. I ensure proper wiring, polarity, and insulation for efficient power flow. My work guarantees the safe and reliable transfer of DC electricity to the next stage of the system.`,
    backgroundImage: require("./assets/work4.jpeg"),
  },
  {
    title: "Civil Control Room (2MW)",
    content: `Constructed and finished the building to house critical electrical and monitoring equipment with proper foundation, ventilation, and structural integrity to protect sensitive systems. Our work focuses on creating a durable and functional space for efficient plant operations.`,
    backgroundImage: require("./assets/work5.jpeg"),
  },
  {
    title: "Erection (1MW)",
    content: `Have handled the lifting, positioning, and installation of structures and equipment like panel mounts, inverters, and transformers. We ensured that all components are securely fixed and aligned according to design specifications. We focus on maintaining structural integrity and supporting the efficient operation of the plant.`,
    backgroundImage: require("./assets/work6.jpeg"),
  },
  {
    title: "Erection and Mechanical Installation (5MW)",
    content: `Have handled the assembly, lifting, positioning, and securing of mounting structures, trackers, and other mechanical components with assurance that all parts are properly aligned and stable for optimal performance. We guarantee the structural integrity and durability of the plant under various conditions.`,
    backgroundImage: require("./assets/work7.jpeg"),
  },
  {
    title: "Self (2MW)",
    content: `We took responsibility for tasks like assembly, installation, and ensuring the proper functioning of various components with focus on precision, alignment, and safety to maximize efficiency and durability. Our role contributes to building a reliable and sustainable energy system.`,
    backgroundImage: require("./assets/work8.jpeg"),
  },
  {
    title: "Tracker (8MW)",
    content: `We expertly installed solar trackers, aligning and positioning them for maximum sunlight absorption. Our team ensured that the trackers were securely set up and calibrated to follow the sun’s path, significantly enhancing the plant’s energy efficiency.`,
    backgroundImage: require("./assets/work9.jpeg"),
  },
  {
    title: "Structure (8MW)",
    content: `We expertly installed solar mounting structures, ensuring precise alignment and secure anchoring for the panels. Our team focused on providing durable and stable support, capable of withstanding various environmental conditions to enhance the long-term performance of the solar plant.`,
    backgroundImage: require("./assets/work10.jpeg"),
  },
  {
    title: "Mechanical Installation (15MW)",
    content: `We have successfully completed mechanical installation work in several solar power plants, ensuring seamless integration of key components. We handled the assembly, positioning, and securing of mounting structures, solar trackers, and other mechanical components with precision.`,
    backgroundImage: require("./assets/work11.jpeg"),
  },
  {
    title: "MMS/ Module Installation & DC Work (30MW)",
    content: `Installed module mounting structures and mounted solar panels with precise alignment to ensure maximum energy absorption. Our team ensured secure fastening and optimal panel orientation for reliable long-term performance.`,
    backgroundImage: require("./assets/work12.jpeg"),
  },
  {
    title: "MMS/ Module Installation (5MW)",
    content: `Have efficiently installed module mounting structures and securely mounted solar panels, ensuring precise alignment for optimal energy generation. Our team focused on stability and durability, guaranteeing the panels are well-positioned to maximize sunlight absorption.`,
    backgroundImage: require("./assets/work13.jpeg"),
  },
  {
    title: "MMS/ Module Installation (20MW)",
    content: `Have installed module mounting structures and securely mounted solar panels, ensuring precise alignment for optimal energy generation. Our team focused on stability and durability, guaranteeing the panels are well-positioned to maximize sunlight absorption.`,
    backgroundImage: require("./assets/work13.jpeg"),
  },
];


const Blogs= () => {
  return (
    <section id="blogs">
    <div className="container mx-auto px-4 py-4">
       <div className="flex justify-center mb-4"> 
    <FontAwesomeIcon icon={faNewspaper} className="text-blue-500 w-12 h-12" />
  </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Blogs</h2>
      <div className="w-48 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 mb-12 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="bg-white border-2 border-blue-500 rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105"
          >
            {/* Image */}
            <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${service.backgroundImage})` }}>
              <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-50">
              
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Blogs;
