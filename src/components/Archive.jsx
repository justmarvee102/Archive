// src/components/Archive.js

import React, { useState } from 'react';
import ImageOverlay from './ImageOverlay';
import './Archive.scss';

const Archive = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid gap-8 px-7 py-7 grid-cols-1 sm:grid-cols-2 sm:px-12 md:grid-cols-3 lg:grid-cols-5 lg:px-28 lg:py-8 archive-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`archive-item relative rounded-lg overflow-hidden ${
              image.special ? 'border-4 border-blue-500' : ''
            }`}
            style={image.style}
            onClick={() => handleImageClick(image)}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
            />
          </div>
        ))}
        {selectedImage && (
          <ImageOverlay image={selectedImage} onClose={handleCloseOverlay} />
        )}
      </div>
    </>
  );
};

export default Archive;
