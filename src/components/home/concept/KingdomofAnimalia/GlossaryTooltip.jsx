import React, { useState } from 'react';
import './GlossaryTooltip.css';

const GlossaryTooltip = ({ term, definition, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span 
      className="glossary-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      // For mobile accessibility
      onClick={() => setIsVisible(!isVisible)} 
    >
      <span className="glossary-term">{children || term}</span>
      
      {isVisible && (
        <div className="tooltip-box animate-pop">
          <strong>{term}</strong>
          <p>{definition}</p>
        </div>
      )}
    </span>
  );
};

export default GlossaryTooltip;