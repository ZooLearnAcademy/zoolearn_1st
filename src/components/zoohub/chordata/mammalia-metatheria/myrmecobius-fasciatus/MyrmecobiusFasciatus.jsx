import React from 'react';
import './MyrmecobiusFasciatus.css';

const MyrmecobiusFasciatus = () => {
  return (
    <div className="organism-detail">
      <h3>MyrmecobiusFasciatus</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>MyrmecobiusFasciatus</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Chordata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Mammalia Metatheria</p>
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

export default MyrmecobiusFasciatus;
