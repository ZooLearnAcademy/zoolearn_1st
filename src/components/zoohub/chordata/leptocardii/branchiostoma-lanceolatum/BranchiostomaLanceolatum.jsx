import React from 'react';
import './BranchiostomaLanceolatum.css';

const BranchiostomaLanceolatum = () => {
  return (
    <div className="genus-sycon-container">
      {/* HEADER */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Branchiostoma <i>lanceolatum</i></h1>
            <p>
              <b>Branchiostoma lanceolatum</b>is a primitive chordate.It retains chordate characters throughout life.Widely used to study chordate evolution.
            </p>
          </div>
          <div className="hero-image">
            <img src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767895339/Branchiostoma_lanceolatum_lnmage.png" alt="Branchiostoma lanceolatum" />
          </div>
        </div>
      </div>

      <section className="content-section">
        {/* INTRO */}
        <div className="card">
          <h2>📌 Introduction</h2>
          <ul>
            <li>Branchiostoma lanceolatum lives buried in sandy marine bottoms.</li>
            <li>It is free-living and filter-feeding.</li>
            <li>Acts as a connecting link between invertebrates and vertebrates.</li>
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
            <li>Circulatory type: Closed circulation, single</li>
            <li>Circulation system: Closed</li>
            <li>Regulation of Osmosis: Osmoregulator</li>
            <li>Excretory organ: Solenocytes</li>
            <li>Mode of excretion: Ammonotelism</li>
            <li>Skeleton structure: Endoskeleton absent (notochord present throughout life)</li>
            <li>Nervous system: Dorsal hollow nerve cord without brain</li>
            <li>Metamerism: Present</li>
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
                <li>Small, fish-like body</li>
                <li>Pointed ends at both sides</li>
                <li>Transparent and laterally compressed</li>
                <li>Myotomes clearly visible</li>
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
                        <li><a data-level="Class">Leptocardii</a>
                        <ul>
                            <li><a data-level="Order">Amphioxiformes</a>
                            <ul>
                                <li><a data-level="Family">Branchiostomatidae</a>
                                <ul><li><a data-level="Genus">BranchiostomaLanceolatum</a></li></ul>
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
            <li>Filter feeder of plankton</li>
            <li>Part of marine benthic food web</li>
            <li>Maintains nutrient cycling</li>
          </ul>
        </div>

        {/* ECONOMIC IMPORTANCE */}
        <div className="card">
          <h2>💰 Economic Importance</h2>
          <ul>
            <li>Key organism in evolutionary biology</li>
            <li>Used in comparative anatomy studies</li>
            <li>Important zoology teaching specimen</li>
          </ul>
        </div>
      </section>

      
    </div>
  );
};

export default BranchiostomaLanceolatum;