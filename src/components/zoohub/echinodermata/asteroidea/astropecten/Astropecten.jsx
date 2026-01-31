import React from 'react';
import './Astropecten.css';

const Astropecten = () => {
  return (
    <div className="organism-detail">
      <h3>Astropecten</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Astropecten</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Echinodermata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Asteroidea</p>
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

export default Astropecten;
