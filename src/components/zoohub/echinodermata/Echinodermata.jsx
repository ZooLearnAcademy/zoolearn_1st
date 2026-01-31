import React, { useState } from 'react';
import './Echinodermata.css';
import Asterias from './asteroidea/asterias/Asterias';
import Astropecten from './asteroidea/astropecten/Astropecten';
import Pentaceros from './asteroidea/pentaceros/Pentaceros';
import Ophiothrix from './ophiuroidea/ophiothrix/Ophiothrix';
import Ophiura from './ophiuroidea/ophiura/Ophiura';
import Echinus from './echinoidea/echinus/Echinus';
import Echinocardium from './echinoidea/echinocardium/Echinocardium';
import Cucumaria from './holothuroidea/cucumaria/Cucumaria';
import Holothuria from './holothuroidea/holothuria/Holothuria';
import Antedon from './crinoidea/antedon/Antedon';

const Echinodermata = () => {
  const [selectedOrganism, setSelectedOrganism] = useState(null);

  const organisms = [
    { key: 'asterias', label: 'Asterias', component: Asterias },
    { key: 'astropecten', label: 'Astropecten', component: Astropecten },
    { key: 'pentaceros', label: 'Pentaceros', component: Pentaceros },
    { key: 'ophiothrix', label: 'Ophiothrix', component: Ophiothrix },
    { key: 'ophiura', label: 'Ophiura', component: Ophiura },
    { key: 'echinus', label: 'Echinus', component: Echinus },
    { key: 'echinocardium', label: 'Echinocardium', component: Echinocardium },
    { key: 'cucumaria', label: 'Cucumaria', component: Cucumaria },
    { key: 'holothuria', label: 'Holothuria', component: Holothuria },
    { key: 'antedon', label: 'Antedon', component: Antedon },
  ];

  const SelectedComponent = selectedOrganism
    ? organisms.find(o => o.key === selectedOrganism)?.component
    : null;

  return (
    <div className="phylum-container">
      <header className="phylum-header">
        <h2>Echinodermata</h2>
        <p>Echinoderms</p>
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

export default Echinodermata;
