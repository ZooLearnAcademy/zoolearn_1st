import React, { useState } from "react";
import "./ProtostomeComparison.css";

const protostomeImg = "https://res.cloudinary.com/dstunh4mx/image/upload/v1783938934/photo_2026-07-13_16-05-21_breq5x.jpg";
const deuterostomeImg = "https://res.cloudinary.com/dstunh4mx/image/upload/v1783939081/deuterstomes_nzbetg.jpg";

const ProtostomeComparison = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const handleImageClick = (src, title) => {
    setLightboxImg({ src, title });
  };

  return (
    <div className="simple-proto-container">
      {/* HEADER */}
      <div className="simple-proto-header">
        <h2 className="simple-proto-title">Protostomes vs. Deuterostomes</h2>
        <p className="simple-proto-subtitle">
          Key differences in embryonic cleavage, coelom formation, and fate of the blastopore
        </p>
      </div>

      {/* 2-COLUMN COMPARISON DECK */}
      <div className="simple-proto-grid">

        {/* PROTOSTOMES COLUMN */}
        <div className="simple-proto-card protostome">
          <div className="simple-proto-card-header">
            <h3>Protostomous Animals</h3>
            <span className="simple-proto-tag">Blastopore → Mouth First</span>
            <p className="simple-proto-etymology">(proto: first; stoma: mouth)</p>
          </div>

          <div className="simple-proto-card-body">
            <p className="simple-proto-desc">
              The first opening formed in the embryo (blastopore) develops into the <strong>mouth</strong>. 
              The anus forms later at a secondary site.
            </p>

            {/* CLICKABLE DIAGRAM */}
            <div 
              className="simple-proto-img-box clickable"
              onClick={() => handleImageClick(protostomeImg, "Development of Protostome")}
              title="Click to view full image"
            >
              <img
                src={protostomeImg}
                alt="Development of Protostome"
                className="simple-proto-img"
              />
              <span className="simple-proto-zoom-badge">🔍 Click to Expand</span>
            </div>
            <p className="simple-proto-img-caption">Development of Protostome</p>

            <div className="simple-proto-features">
              <div className="simple-proto-feature-row">
                <strong>Cleavage:</strong>
                <span>Spiral and Determinate</span>
              </div>
              <div className="simple-proto-feature-row">
                <strong>Coelom Formation:</strong>
                <span>Schizocoelous (splitting of solid mesoderm masses)</span>
              </div>
              <div className="simple-proto-feature-row">
                <strong>Fate of Blastopore:</strong>
                <span>Becomes the Mouth</span>
              </div>
            </div>

            <div className="simple-proto-examples">
              <strong>Examples:</strong> Flatworms, Roundworms, Annelids, Arthropods, Molluscs
            </div>
          </div>
        </div>

        {/* DEUTEROSTOMES COLUMN */}
        <div className="simple-proto-card deuterostome">
          <div className="simple-proto-card-header">
            <h3>Deuterostomous Animals</h3>
            <span className="simple-proto-tag">Blastopore → Anus First</span>
            <p className="simple-proto-etymology">(deuteron: second; stoma: mouth)</p>
          </div>

          <div className="simple-proto-card-body">
            <p className="simple-proto-desc">
              The blastopore develops into the <strong>anus</strong>. 
              The mouth forms later on the opposite side of the developing digestive tube.
            </p>

            {/* CLICKABLE DIAGRAM */}
            <div 
              className="simple-proto-img-box clickable"
              onClick={() => handleImageClick(deuterostomeImg, "Development of Deuterostome")}
              title="Click to view full image"
            >
              <img
                src={deuterostomeImg}
                alt="Development of Deuterostome"
                className="simple-proto-img"
              />
              <span className="simple-proto-zoom-badge">🔍 Click to Expand</span>
            </div>
            <p className="simple-proto-img-caption">Development of Deuterostome</p>

            <div className="simple-proto-features">
              <div className="simple-proto-feature-row">
                <strong>Cleavage:</strong>
                <span>Radial and Indeterminate</span>
              </div>
              <div className="simple-proto-feature-row">
                <strong>Coelom Formation:</strong>
                <span>Enterocoelous (folds of archenteron gut)</span>
              </div>
              <div className="simple-proto-feature-row">
                <strong>Fate of Blastopore:</strong>
                <span>Becomes the Anus</span>
              </div>
            </div>

            <div className="simple-proto-examples">
              <strong>Examples:</strong> Echinoderms, Hemichordates, Chordates (including Vertebrates)
            </div>
          </div>
        </div>

      </div>

      {/* LOCAL LIGHTBOX MODAL OVERLAY */}
      {lightboxImg && (
        <div className="proto-lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="proto-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="proto-lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
            <img src={lightboxImg.src} alt={lightboxImg.title} className="proto-lightbox-img" />
            <p className="proto-lightbox-caption">{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProtostomeComparison;