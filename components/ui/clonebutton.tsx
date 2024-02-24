import React from 'react';

const CloneButton = () => {
  return (
    <a href="/login" className="btn-clone btn btn-news">
      <img src="/kep.gif" style={{ width: '34px' }} />
      <span className="ps-2 pe-3">
         <span className="fw-bold">Create Your Clone</span>
      </span>
    </a>
  );
};

export default CloneButton;
