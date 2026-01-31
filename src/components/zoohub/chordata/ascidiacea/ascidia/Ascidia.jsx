import React from 'react';
import './Ascidia.css';

const Ascidia = () => {
  return (
    <div className="genus-sycon-container">
      {/* HEADER */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ascidia</h1>
            <p>
              <b>Ascidia</b>is a simple marine tunicate.Adult is sessile, larva is free-swimming.Shows chordate features in larval stage.
            </p>
          </div>
          <div className="hero-image">
            <img src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767894433/Ascidia_jhgqzv.png" alt="Ascidia" />
          </div>
        </div>
      </div>

      <section className="content-section">
        {/* INTRO */}
        <div className="card">
          <h2>📌 Introduction</h2>
          <ul>
            <li>Ascidia lives attached to rocks in shallow seas.</li>
            <li>It is filter-feeding and sac-like.</li>
            <li>Important for understanding chordate evolution.</li>
          </ul>
        </div>

        <div className="card">
          <h2>General features</h2>
          <ul>
            <li>Level of Organisation: Organ system level</li>
            <li>Germ layer: Triploblastic</li>
            <li>Body symmetry: Bilateral (larva), asymmetrical (adult)</li>
            <li>Coelom: Coelomate</li>
            <li>Body plan: Tube within a tube body plan, Deuterostomous</li>
            <li>Digestion type: Complete</li>
            <li>Respiratory type: Pharyngeal respiration</li>
            <li>Circulatory type: Open, single</li>
            <li>Circulation system: Open</li>
            <li>Regulation of Osmosis: Osmoregulator</li>
            <li>Excretory organ: Neural gland</li>
            <li>Mode of excretion: Ammonotelism</li>
            <li>Skeleton structure: Absent</li>
            <li>Nervous system: Dorsal nerve cord in larva, reduced in adult</li>
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
                <li>Sac-like unsegmented body</li>
                <li>Covered by tunic made of tunicin</li>
                <li>Two siphons: incurrent and excurrent</li>
                <li>Usually translucent or yellowish</li>
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
                    <li><a data-level="Phylum">Chordata</a>
                    <ul>
                        <li><a data-level="Class">Ascidiacea</a>
                        <ul>
                            <li><a data-level="Order">Phlebobranchia</a>
                            <ul>
                                <li><a data-level="Family">Ascidiidae</a>
                                <ul><li><a data-level="Genus">Ascidia</a></li></ul>
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
            <li>Efficient filter feeder</li>
            <li>Cleans marine water</li>
            <li>Part of benthic community</li>
          </ul>
        </div>

        {/* ECONOMIC IMPORTANCE */}
        <div className="card">
          <h2>💰 Economic Importance</h2>
          <ul>
            <li>Evolutionary biology studies</li>
            <li>Biofouling research relevance</li>
            <li>Educational specimen</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Ascidia;