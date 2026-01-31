import React from 'react';
import './Echinocardium.css';

const Echinocardium = () => {
  return (
    <div className="organism-detail">
      <h3>Echinocardium</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Echinocardium</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Echinodermata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Echinoidea</p>
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

export default Echinocardium;
