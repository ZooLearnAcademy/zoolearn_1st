import React from 'react';
import './Ichthyophis.css';

const Ichthyophis = () => {
  return (
    <div className="organism-detail">
      <h3>Ichthyophis</h3>
      <div className="info-grid">
        <div className="info-item">
          <label>Scientific Name:</label>
          <p>Ichthyophis</p>
        </div>
        <div className="info-item">
          <label>Phylum:</label>
          <p>Chordata</p>
        </div>
        <div className="info-item">
          <label>Class:</label>
          <p>Amphibia</p>
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

export default Ichthyophis;
