import React, { useState } from 'react';
import './Mollusca.css';
import Chaetopleura from './polyplacophora/chaetopleura/Chaetopleura';
import Chiton from './polyplacophora/chiton/Chiton';
import Dentalium from './scaphopoda/dentalium/Dentalium';
import PilaGlobosa from './gastropoda/pila-globosa/PilaGlobosa';
import Aplysia from './gastropoda/aplysia/Aplysia';
import ConusMarmoreus from './gastropoda/conus-marmoreus/ConusMarmoreus';
import Unio from './bivalvia/unio/Unio';
import Mytilus from './bivalvia/mytilus/Mytilus';
import Lamellidens from './bivalvia/lamellidens/Lamellidens';
import Pinctada from './bivalvia/pinctada/Pinctada';
import Spondylus from './bivalvia/spondylus/Spondylus';
import Ostrea from './bivalvia/ostrea/Ostrea';
import Loligo from './cephalopoda/loligo/Loligo';
import Nautilus from './cephalopoda/nautilus/Nautilus';
import Octopus from './cephalopoda/octopus/Octopus';
import Sepia from './cephalopoda/sepia/Sepia';
import Architeuthes from './cephalopoda/architeuthes/Architeuthes';
import NeopilinaGalathea from './monoplacophora/neopilina-galathea/NeopilinaGalathea';

const Mollusca = () => {
  const [selectedOrganism, setSelectedOrganism] = useState(null);

  const organisms = [
    { key: 'chaetopleura', label: 'Chaetopleura', component: Chaetopleura },
    { key: 'chiton', label: 'Chiton', component: Chiton },
    { key: 'dentalium', label: 'Dentalium', component: Dentalium },
    { key: 'pila-globosa', label: 'PilaGlobosa', component: PilaGlobosa },
    { key: 'aplysia', label: 'Aplysia', component: Aplysia },
    { key: 'conus-marmoreus', label: 'ConusMarmoreus', component: ConusMarmoreus },
    { key: 'unio', label: 'Unio', component: Unio },
    { key: 'mytilus', label: 'Mytilus', component: Mytilus },
    { key: 'lamellidens', label: 'Lamellidens', component: Lamellidens },
    { key: 'pinctada', label: 'Pinctada', component: Pinctada },
    { key: 'spondylus', label: 'Spondylus', component: Spondylus },
    { key: 'ostrea', label: 'Ostrea', component: Ostrea },
    { key: 'loligo', label: 'Loligo', component: Loligo },
    { key: 'nautilus', label: 'Nautilus', component: Nautilus },
    { key: 'octopus', label: 'Octopus', component: Octopus },
    { key: 'sepia', label: 'Sepia', component: Sepia },
    { key: 'architeuthes', label: 'Architeuthes', component: Architeuthes },
    { key: 'neopilina-galathea', label: 'NeopilinaGalathea', component: NeopilinaGalathea },
  ];

  const SelectedComponent = selectedOrganism
    ? organisms.find(o => o.key === selectedOrganism)?.component
    : null;

  return (
    <div className="phylum-container">
      <header className="phylum-header">
        <h2>Mollusca</h2>
        <p>Mollusks</p>
      </header>

      <div className="organism-nav">
        <h3>Select an Organism (2 classes)</h3>
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

export default Mollusca;
