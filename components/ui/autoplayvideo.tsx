"use client"
import React from 'react';

interface AutoplayVideoProps {
  src: string;
}

const AutoplayVideo: React.FC<AutoplayVideoProps> = ({ src }) => {
  return (
    <video autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;

