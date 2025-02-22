import React, { useState } from 'react';
import './InsaneButton.css';

function InsaneButton({ label, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => {
    setClicked(true);
    onClick && onClick(); 
    setTimeout(() => setClicked(false), 300); 
  };

  return (
    <button
      className={`insane-button ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default InsaneButton;
