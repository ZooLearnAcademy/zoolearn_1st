import React from 'react';
import './PilaGlobosa.css';

const PilaGlobosa = () => {
  return (
    <div className="organism-detail">
      <h3>PilaGlobosa</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>PilaGlobosa</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Mollusca</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Gastropoda</p>
        </div>
        <div className="info-item">
          <label>Key Characteristics:</label>
          <ul>
            <li>Specialized anatomical features</li>
            <li>Unique ecological adaptation</li>
            <li>Specific behavioral patterns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PilaGlobosa;
