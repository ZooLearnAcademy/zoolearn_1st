import React from 'react';
import './Octopus.css';

const Octopus = () => {
  return (
    <div className="organism-detail">
      <h3>Octopus</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Octopus</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Mollusca</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Cephalopoda</p>
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

export default Octopus;
