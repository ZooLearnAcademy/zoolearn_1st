import React from 'react';
import './Architeuthes.css';

const Architeuthes = () => {
  return (
    <div className="organism-detail">
      <h3>Architeuthes</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Architeuthes</p>
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

export default Architeuthes;
