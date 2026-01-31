import React from 'react';
import './Balanoglossus.css';

const Balanoglossus = () => {
  return (
    <div className="organism-detail">
      <h3>Balanoglossus</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Balanoglossus</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Hemichordata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Enteropneusta</p>
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

export default Balanoglossus;
