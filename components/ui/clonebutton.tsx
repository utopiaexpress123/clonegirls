import React from 'react';

const CloneButton = () => {
  return (
    <a href="/login" className="btn-clone inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      <img src="/kep.gif" style={{ width: '34px' }} />
      <span className="ps-2 pe-3">
         <span className="fw-bold">Create Your Clone</span>
      </span>
    </a>
  );
};

export default CloneButton;
