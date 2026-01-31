import React from 'react';
import './Pyrosoma.css';

const Pyrosoma = () => {
  return (
    <div className="genus-sycon-container">
      {/* HEADER */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Pyrosoma</h1>
            <p>
              <b>Pyrosoma</b>is a colonial pelagic tunicate.Colony is tubular and luminous.Shows bioluminescence.
            </p>
          </div>
          <div className="hero-image">
            <img src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767895306/Pyrosoma_xupmt9.png" alt="Pyrosoma" />
          </div>
        </div>
      </div>

      <section className="content-section">
        {/* INTRO */}
        <div className="card">
          <h2>📌 Introduction</h2>
          <ul>
            <li>Pyrosoma inhabits warm open oceans.</li>
            <li>Pelagic and filter-feeding.</li>
            <li>Known for glowing colonies.</li>
          </ul>
        </div>

        <div className="card">
          <h2>General features</h2>
          <ul>
            <li>Level of Organisation: Organ system level</li>
            <li>Germ layer: Triploblastic</li>
            <li>Body symmetry: Bilateral</li>
            <li>Coelom: Coelomate</li>
            <li>Body plan: Tube within a tube body plan (Deuterostomous)</li>
            <li>Digestion type: Complete</li>
            <li>Respiratory type: Pharyngeal respiration through gill slits</li>
            <li>Circulatory type: Open circulation</li>
            <li>Circulation system: Open</li>
            <li>Regulation of Osmosis: Osmoregulator</li>
            <li>Excretory organ: Renal vesicles</li>
            <li>Mode of excretion: Ammonotelism</li>
            <li>Skeleton structure: Absent</li>
            <li>Nervous system: Reduced nerve ganglion</li>
            <li>Metamerism: Absent</li>
            <li>Fertilization: External</li>
            <li>Development type: Indirect</li>
            <li>Body temperature: Poikilothermic, stenohaline</li>
          </ul>
        </div>

        {/* SIZE + STRUCTURE WITH 3D */}
        <div className="card">
          <h2>📏 Size & Structure (with 3D View)</h2>
          <div className="side-by-side">
            <div>
              <ul>
                <li>Hollow tubular colony</li>
                <li>Numerous zooids embedded</li>
                <li>Transparent body</li>
                <li>Transparent body</li>
              </ul>
            </div>
            <div className="sketchfab-embed-wrapper">
              <iframe 
                width="100%"
                height="500"
                frameborder="0"
                allowfullscreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/73b8c10c24444f0d9176edb4aeafde60/embed?autospin=1&autostart=1">
              </iframe>
            </div>
          </div>
        </div>

        {/* SKELETON */}
        {/* <div className="card">
          <h2>🦴 Skeleton</h2>
          <ul>
            <li>Skeleton composed of calcareous spicules</li>
            <li>Spicules made of calcium carbonate (CaCO₃)</li>
          </ul>
        </div> */}

        {/* CLASSIFICATION */}
        <div className="card">
          <h2>🧾 Classification</h2>
          {/* <ul>
            <li>Kingdom: Animalia</li>
            <li>Phylum: Porifera</li>
            <li>Class: Calcarea</li>
            <li>Order: Leucosolenida</li>
            <li>Family: Sycettidae</li>
            <li>Genus: Sycon</li>
          </ul> */}
          <div className="tree">
            <ul>
                <li><a data-level="Kingdom">Animalia</a>
                <ul>
                    <li><a data-level="Phylum"> Chordata</a>
                    <ul>
                        <li><a data-level="Class">Thaliacea</a>
                        <ul>
                            <li><a data-level="Order">Pyrosomida</a>
                            <ul>
                                <li><a data-level="Family">Pyrosomatidae</a>
                                <ul><li><a data-level="Genus">Pyrosoma</a></li></ul>
                                </li>
                            </ul>
                            </li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        

        {/* ECOLOGICAL IMPORTANCE */}
        <div className="card">
          <h2>🌍 Ecological Importance</h2>
          <ul>
            <li>Large-scale plankton filtration</li>
            <li>Carbon transport to deep sea</li>
            <li>Pelagic ecosystem role</li>
          </ul>
        </div>

        {/* ECONOMIC IMPORTANCE */}
        <div className="card">
          <h2>💰 Economic Importance</h2>
          <ul>
            <li>Bioluminescence research</li>
            <li>Marine ecological importance</li>
            <li>Oceanographic studies</li>
          </ul>
        </div>
      </section>

    
    </div>
  );
};

export default Pyrosoma;