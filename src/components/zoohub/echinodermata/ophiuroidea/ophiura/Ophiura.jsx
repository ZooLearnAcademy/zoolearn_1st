import React from 'react';
import './Ophiura.css';

const Ophiura = () => {
  return (
    <div className="organism-detail">
      <h3>Ophiura</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Ophiura</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Echinodermata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Ophiuroidea</p>
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

export default Ophiura;
