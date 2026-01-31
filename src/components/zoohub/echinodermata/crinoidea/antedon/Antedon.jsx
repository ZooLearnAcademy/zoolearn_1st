import React from 'react';
import './Antedon.css';

const Antedon = () => {
  return (
    <div className="organism-detail">
      <h3>Antedon</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Antedon</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Echinodermata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Crinoidea</p>
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

export default Antedon;
