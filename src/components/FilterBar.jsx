// src/components/FilterBar.js
import { motion } from 'framer-motion';
import React from 'react';
import './FilterBar.scss';

const FilterBar = ({ keywords, setSelectedKeyword }) => {
  return (
    <div className="filter-bar px-6">
      {keywords.map((keyword, index) => (
        <motion.button
          key={index}
          className="keyword-button bg-purple-300 text-black rounded-full px-4 py-2"
          onClick={() => setSelectedKeyword(keyword === 'all' ? '' : keyword)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {keyword}
        </motion.button>
      ))}
    </div>
  );
};

export default FilterBar;
