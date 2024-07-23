// src/components/ImageOverlay.js

import React from 'react';
import { motion } from 'framer-motion';

const ImageOverlay = ({ image, onClose }) => {
  return (
    <motion.div
      className=" fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className=" relative w-10/12 md:w-8/12 lg:w-4/12 sm:w-8/12 max-h-8/12 flex justify-center items-center  p-6 rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src} alt={image.alt} className="overlay-image " />
        <button
          className="absolute top-2 right-2 text-white text-3xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ImageOverlay;
