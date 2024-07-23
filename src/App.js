import React, { useState } from 'react';
import Archive from './components/Archive';
import { Navbar } from './components';
import FilterBar from './components/FilterBar';
import './App.scss';

const images = [
  { src: 'beer.png', alt: 'Beer Design', keywords: ['Product Design', 'All'] },
  {
    src: 'coffee.png',
    alt: 'Design 2',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'coffee1.png',
    alt: 'Design 3',
    keywords: ['Product Design', 'Dark Background', 'All'],
  },
  {
    src: 'yogurt.png',
    alt: 'Design 4',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'milkshake.png',
    alt: 'Design 5',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'milkshake1.png',
    alt: 'Design 6',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'orange.png',
    alt: 'Design 15',
    keywords: ['Product Design', 'All'],
  },
  { src: 'buy.png', alt: 'Design 8', keywords: ['Product Design', 'All'] },

  { src: 'layout.png', alt: 'Design 7', keywords: ['Mockup', 'All'] },
  {
    src: 'poster.png',
    alt: 'Design 10',
    keywords: ['Poster', 'Birthday Poster', 'All'],
  },
  {
    src: 'brown.png',
    alt: 'Design 12',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'happy.png',
    alt: 'Design 9',
    keywords: ['Poster', 'Birthday Poster', 'All'],
  },
  {
    src: 'poster3.png',
    alt: 'Design 13',
    keywords: ['Poster', 'Animated', 'Motivational', 'All'],
  },
  {
    src: 'poster1.png',
    alt: 'Design 14',
    keywords: ['Poster', 'Book Cover', 'Dark Background', 'All'],
  },
  {
    src: 'at.png',
    alt: 'Design 17',
    keywords: ['Product Design', ' Poster', 'Dark Background', 'All'],
  },
  {
    src: 'book.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Dark Background', 'Fantasy', 'All'],
  },
  {
    src: 'fantasy.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Fantasy', 'All'],
  },
  {
    src: 'novel.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Dark Background', 'Fantasy', 'All'],
  },
  {
    src: 'swan.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Fantasy', 'Dark Background', 'All'],
  },
  {
    src: 'woods.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Fantasy', 'All'],
  },
  {
    src: 'anime.png',
    alt: 'Design 17',
    keywords: ['Animated', 'Movie Poster', 'All'],
  },
  {
    src: 'wizard.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Fantasy', 'All'],
  },
  {
    src: 'mirror.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Fantasy', 'All'],
  },
  {
    src: 'lust.png',
    alt: 'Design 17',
    keywords: ['Movie Poster', 'Dark Background', 'All'],
  },
  {
    src: 'screen.png',
    alt: 'Design 14',
    keywords: [' Poster', 'Book Cover', 'All'],
  },

  {
    src: 'tomorrow.png',
    alt: 'Design 14',
    keywords: ['T-Shirt Design', 'Dark Background', 'All'],
  },

  {
    src: 'green.png',
    alt: 'Design 14',
    keywords: ['T-shirt Design', 'All'],
  },

  {
    src: 'open.png',
    alt: 'Design 14',
    keywords: ['T-shirt Design', 'All'],
  },

  {
    src: 'coke.png',
    alt: 'Design 14',
    keywords: ['Product Design', 'All'],
  },
  {
    src: 'instagram.png',
    alt: 'Design 14',
    keywords: ['Product Design', 'Social Media Post', 'All'],
  },
  {
    src: 'black.png',
    alt: 'Design 14',
    keywords: ['Poster', 'Social Media Post', 'All'],
  },
  {
    src: 'simple.png',
    alt: 'Design 14',
    keywords: ['Poster', 'Social Media Post', 'All'],
  },
  {
    src: 'post.png',
    alt: 'Design 14',
    keywords: ['Social Media Post', 'All'],
  },

  {
    src: 'compare.png',
    alt: 'Design 19',
    keywords: ['Poster', 'Motivational', 'All'],
  },
  {
    src: 'stylish.png',
    alt: 'Design 20',
    keywords: ['Poster', 'Motivational', 'All'],
  },
  {
    src: 'style.png',
    alt: 'Design 16',
    keywords: ['Poster', 'Motivational', 'All'],
  },
  {
    src: 'unique.png',
    alt: 'Design 17',
    keywords: ['Poster', 'Motivational', 'All'],
    style: { borderRadius: '20px' },
  },
  { src: 'Edit.png', alt: 'Design 17', keywords: ['Photoshop'] },
  { src: 'be.png', alt: 'Design 17', keywords: ['Photoshop', 'All'] },
  {
    src: 'groovy.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
  {
    src: 'lion1.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
  {
    src: 'lion2.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background'],
  },
  {
    src: 'lion3.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
  {
    src: 'lion4.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
  {
    src: 'lion5.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
  {
    src: 'lion6.png',
    alt: 'Design 17',
    keywords: ['Logo', 'Dark Background', 'All'],
  },
];

const App = () => {
  const [selectedKeyword, setSelectedKeyword] = useState('');

  const filteredImages = selectedKeyword
    ? images.filter((image) => image.keywords.includes(selectedKeyword))
    : images;

  const keywords = [
    'All',
    'Product Design',
    'Animated',
    'Birthday Poster',
    'Dark Background',
    'Poster',
    'Movie Poster',
    'Book Cover',
    'Logo',
    'Photoshop',
    'Mockup',
    'T-Shirt Design',
    'Social Media Post',
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="header">
        <h1 className="text-4xl font-bold text-center mb-2 ">Archive</h1>
        <h2 className="mb-4 s-text px-7">
          An array of my designs done out of fun for designing all in{' '}
          <span>ONE PLACE</span>{' '}
        </h2>
      </div>
      <FilterBar keywords={keywords} setSelectedKeyword={setSelectedKeyword} />
      <Archive images={filteredImages} />
    </div>
  );
};

export default App;
