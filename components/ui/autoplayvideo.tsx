"use client"
import React from 'react';

const AutoplayVideo = ({ src }) => {
  return (
    <video autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;
