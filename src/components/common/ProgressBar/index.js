import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="relative h-2 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-[#0086ca]"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;