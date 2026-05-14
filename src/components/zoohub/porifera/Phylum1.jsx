import React from "react";
import { ScrollReveal, StaggerReveal } from "../../shared/ScrollReveal";
import { BookOpen, Microscope, Ruler, Network, Globe, Landmark } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import Phylum1Data from "./Phylum1Data.json";
import "./Phylum1.css";

const Phylum1 = () => {
  const { slug } = useParams();
  const species = Phylum1Data[slug];

  const speciesKeys = Object.keys(Phylum1Data);
  const currentIndex = speciesKeys.indexOf(slug);
  
  const prevSpeciesKey = currentIndex > 0 ? speciesKeys[currentIndex - 1] : speciesKeys[speciesKeys.length - 1];
  const nextSpeciesKey = currentIndex >= 0 && currentIndex < speciesKeys.length - 1 ? speciesKeys[currentIndex + 1] : speciesKeys[0];
  
  const prevSpecies = Phylum1Data[prevSpeciesKey];
  const nextSpecies = Phylum1Data[nextSpeciesKey];

  if (!species) {
    return <h2>Species not found</h2>;
  }

  // Convert classification array → object
  const classificationMap = {};
  species.classification.forEach(item => {
    const [key, value] = item.split(":").map(str => str.trim());
    classificationMap[key] = value;
  });

  return (
    <div className="phyl-genus-sycon-container">

      {/* ========== HERO SECTION ========== */}
      <div className="phyl-hero">
        {/* Top-Left / Top-Right ABSOLUTE Navigation Buttons */}
        <div className="phyl-hero-nav">
          <div className="phyl-hero-nav">
          <Link to={`/zoohub/porifera/${prevSpecies.slug}`} className="phyl-nav-btn prev">
            <span className="nav-arrow">←</span>
            <div className="nav-text">
              <span className="nav-label">Previous</span>
              <span className="nav-name">{prevSpecies.name}</span>
            </div>
          </Link>
          
          <Link to={`/zoohub/porifera/${nextSpecies.slug}`} className="phyl-nav-btn next">
            <div className="nav-text">
              <span className="nav-label">Next</span>
              <span className="nav-name">{nextSpecies.name}</span>
            </div>
            <span className="nav-arrow">→</span>
          </Link>
        </div>
        </div>
        <div className="phyl-hero-content">
          <div className="phyl-hero-text">
            <h1>
              <span className="phyl-scientific-name">{species.name}</span>
              <br />
              <span className="phyl-common-name">{species.name === species.scientificName ? "" : species.scientificName}</span>
            </h1>
            <p>{species.description}</p>
          </div>

          {species.image && (
            <div className="phyl-hero-image">
              <img src={species.image} alt={species.name} />
            </div>
          )}
        </div>
      
        </div>

            {/* ========== CONTENT SECTION (PREMIUM GRID OVERHAUL) ========== */}
      <div className="phyl-content-section">

        {/* Introduction */}
        <ScrollReveal><div className="phyl-card">
          <div className="phyl-card-header">
            <BookOpen className="phyl-card-icon" />
            <h2>Introduction</h2>
          </div>
          <div className="phyl-grid-items">
            {species.introduction.map((item, index) => (
              <div key={index} className="phyl-grid-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div></ScrollReveal>

        {/* General Features */}
        <ScrollReveal><div className="phyl-card">
          <div className="phyl-card-header">
            <Microscope className="phyl-card-icon" />
            <h2>General Features</h2>
          </div>
          <ul className="phyl-features-list">
            {species.features.map((item, index) => {
              const [label, ...rest] = item.split(":");
              const value = rest.join(":");
              return (
                <li key={index}>
                  <strong>{label.trim()}:</strong>
                  <span>{value.trim()}</span>
                </li>
              );
            })}
          </ul>
        </div></ScrollReveal>

        {/* Size & Structure & 3D */}
        <ScrollReveal><div className="phyl-card">
          <div className="phyl-card-header">
            <Ruler className="phyl-card-icon" />
            <h2>Size &amp; Structure</h2>
          </div>
          <div className="phyl-side-by-side">
            <div className="phyl-grid-items" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {species.sizeStructure.map((item, index) => (
                <div key={index} className="phyl-grid-item" style={{ padding: '15px 20px' }}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            {species["3d"] && (
              <div className="phyl-sketchfab-embed-wrapper" style={{ boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
                <iframe
                  title={`${species.name} 3D`}
                  src={species["3d"]}
                  frameBorder="0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div></ScrollReveal>

        {/* Classification */}
        <ScrollReveal><div className="phyl-card phyl-tree-container">
          <div className="phyl-card-header" style={{ justifyContent: 'center' }}>
            <Network className="phyl-card-icon" style={{ color: 'var(--phyl-accent-yellow)' }} />
            <h2 style={{ color: 'var(--phyl-accent-yellow)' }}>Classification</h2>
          </div>
          <div className="phyl-tree">
            {Object.entries(classificationMap).map(([level, value], index) => (
              <div key={index} className="phyl-tree-item">
                <span data-level={level} style={{ borderRadius: '50px', border: 'none', background: 'white', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>{value}</span>
              </div>
            ))}
          </div>
        </div></ScrollReveal>

        {/* Ecology */}
        <ScrollReveal><div className="phyl-card">
          <div className="phyl-card-header">
            <Globe className="phyl-card-icon" />
            <h2>Ecology</h2>
          </div>
          <div className="phyl-grid-items">
            {species.ecology.map((item, index) => (
              <div key={index} className="phyl-grid-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div></ScrollReveal>

        {/* Economic Importance */}
        <ScrollReveal><div className="phyl-card">
          <div className="phyl-card-header">
            <Landmark className="phyl-card-icon" />
            <h2>Economic Importance</h2>
          </div>
          <div className="phyl-grid-items">
            {species.economy.map((item, index) => (
              <div key={index} className="phyl-grid-item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div></ScrollReveal>

      </div>
    </div>
  );
};

export default Phylum1;
