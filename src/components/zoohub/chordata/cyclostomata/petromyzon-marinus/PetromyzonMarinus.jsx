import React from 'react';
import './PetromyzonMarinus.css';

const PetromyzonMarinus = () => {
  return (
    <div className="genus-sycon-container">
      {/* HEADER */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Petromyzon <i>marinus</i></h1>
            <p>
              <b>Petromyzon marinus</b>is a jawless vertebrate.It is ectoparasitic in adult stage.Belongs to primitive cyclostomes.
            </p>
          </div>
          <div className="hero-image">
            <img src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767895415/Petromyzon_marinus_smue6p.png" alt="Petromyzon marinus" />
          </div>
        </div>
      </div>

      <section className="content-section">
        {/* INTRO */}
        <div className="card">
          <h2>📌 Introduction</h2>
          <ul>
            <li>Petromyzon marinus lives in marine and freshwater.</li>
            <li>Adult is parasitic on fishes.</li>
            <li>Larva (ammocoetes) is free-living.</li>
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
            <li>Respiratory type: Branchial respiration through gill pouches</li>
            <li>Circulatory type: Closed circulation, single</li>
            <li>Circulation system: Closed</li>
            <li>Regulation of Osmosis: Osmoregulator</li>
            <li>Excretory organ: Kidneys</li>
            <li>Mode of excretion: Ammonotelism</li>
            <li>Skeleton structure: Endoskeleton (cartilaginous)</li>
            <li>Nervous system: Well developed brain and spinal cord</li>
            <li>Metamerism: Absent</li>
            <li>Fertilization: External</li>
            <li>Development type: Indirect</li>
            <li>Body temperature: Poikilothermic, euryhaline</li>
          </ul>
        </div>

        {/* SIZE + STRUCTURE WITH 3D */}
        <div className="card">
          <h2>📏 Size & Structure (with 3D View)</h2>
          <div className="side-by-side">
            <div>
              <ul>
                <li>Eel-like elongated body</li>
                <li>Circular suctorial mouth</li>
                <li>No jaws or paired fins</li>
                <li>Smooth scaleless skin</li>
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
                        <li><a data-level="Class">Cyclostomata</a>
                        <ul>
                            <li><a data-level="Order">Petromyzontiformes</a>
                            <ul>
                                <li><a data-level="Family">Petromyzontidae</a>
                                <ul><li><a data-level="Genus">PetromyzonMarinus</a></li></ul>
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
            <li>Regulates fish populations</li>
            <li>Part of aquatic food web</li>
            <li>Indicator of ecosystem balance</li>
          </ul>
        </div>

        {/* ECONOMIC IMPORTANCE */}
        <div className="card">
          <h2>💰 Economic Importance</h2>
          <ul>
            <li>Fishery impact species</li>
            <li>Research on vertebrate evolution</li>
            <li>Ecological management importance</li>
          </ul>
        </div>
      </section>

      
    </div>
  );
};

export default PetromyzonMarinus;