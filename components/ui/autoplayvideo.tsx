"use client"
import React, { useRef, useEffect } from 'react';

const AutoplayVideo = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay loop>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoplayVideo;
