import React from 'react';

function WaveDivider({ flip }) {
  return (
    <svg
      className="wave-divider"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      style={flip ? { transform: 'rotate(180deg)', marginTop: '-1px' } : {}}
    >
      <path
        d="M0 0h1440v50c-120 30-240 30-360 0s-240-30-360 0-240 30-360 0S120 0 0 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default WaveDivider;
