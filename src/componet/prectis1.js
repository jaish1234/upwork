import React, { useState } from 'react';

const HoverArrow = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{ cursor: 'pointer' }}
    >
      <span>{isHovered ? '↓' : '↑'}</span>
    </div>
  );
};

export default HoverArrow
