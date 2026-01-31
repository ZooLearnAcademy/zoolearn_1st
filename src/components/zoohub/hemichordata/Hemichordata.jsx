import React, { useState } from 'react';
import './Hemichordata.css';
import Balanoglossus from './enteropneusta/balanoglossus/Balanoglossus';
import Saccoglossus from './enteropneusta/saccoglossus/Saccoglossus';
import PtychoderaFlava from './enteropneusta/ptychodera-flava/PtychoderaFlava';

const Hemichordata = () => {
  const [selectedOrganism, setSelectedOrganism] = useState(null);

  const organisms = [
    { key: 'balanoglossus', label: 'Balanoglossus', component: Balanoglossus },
    { key: 'saccoglossus', label: 'Saccoglossus', component: Saccoglossus },
    { key: 'ptychodera-flava', label: 'PtychoderaFlava', component: PtychoderaFlava },
  ];

  const SelectedComponent = selectedOrganism
    ? organisms.find(o => o.key === selectedOrganism)?.component
    : null;

  return (
    <div className="phylum-container">
      <header className="phylum-header">
        <h2>Hemichordata</h2>
        <p>Hemichordates</p>
      </header>

      <div className="organism-nav">
        <h3>Select an Organism (3 classes)</h3>
        <div className="organism-buttons">
          {organisms.map(organism => (
            <button
              key={organism.key}
              className={'organism-btn ' + (selectedOrganism === organism.key ? 'active' : '')}
              onClick={() => setSelectedOrganism(organism.key)}
            >
              {organism.label}
            </button>
          ))}
        </div>
      </div>

      <div className="organism-content">
        {SelectedComponent ? (
          <SelectedComponent />
        ) : (
          <div className="organism-placeholder">
            <h3>Select an organism to view details</h3>
            <p>Click on any organism above to learn more about its characteristics and taxonomy.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hemichordata;
