
import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Image } from "lucide-react";

// List of image URLs from your bucket
const images = [
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36b0b001e319b1131/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36b0b001e319b1131/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36fb800161b550444/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a36fc30006ea4ca820/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a370030038ef2064b3/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3700f00312f39df79/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3701d00055543e7dc/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3702a000f5127d273/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3703a00193d9c502d/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a370480005c1e34ce8/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a37054002ff6cbd6ce/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a370750038c3498722/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a37082002453a7d0fd/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3708f0012534370b2/view?project=6790c07f0018598d5209&mode=admin",
  "https://cloud.appwrite.io/v1/storage/buckets/6791ced30003cf1d6c04/files/67a3701d00055543e7dc/view?project=6790c07f0018598d5209&mode=admin",

];

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "transparent",
    overflow: "hidden",
    padding: "0",
    width: "90vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigateImage = (direction) => {
    setSelectedImageIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      }
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  return (
    <section id="gallery">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <Image className="w-12 h-12 mx-auto mb-2 text-blue-500" />
          <h2 className="text-3xl font-bold inline-block border-b-4 border-blue-500 pb-2 text-gray-900">
            Gallery
          </h2>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none z-10"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Display Image */}
            <img
              src={images[selectedImageIndex]}
              alt={`Project ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 text-white text-4xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 text-white text-4xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Gallery;
