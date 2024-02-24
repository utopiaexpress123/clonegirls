"use client"
import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import CSS for styling

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={index === currentIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default Slideshow;
