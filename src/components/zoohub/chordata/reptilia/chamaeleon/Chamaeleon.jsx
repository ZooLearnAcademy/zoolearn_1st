import React from 'react';
import './Chamaeleon.css';

const Chamaeleon = () => {
  return (
    <div className="organism-detail">
      <h3>Chamaeleon</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Chamaeleon</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Chordata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Reptilia</p>
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

export default Chamaeleon;
