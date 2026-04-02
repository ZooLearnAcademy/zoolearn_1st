import React from 'react';
import {
  Layers,
  ShieldCheck,
  Microscope,
  Waves,
  CheckCircle2,
  Droplets,
  RefreshCw
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Porifera.css';

const majorClasses = [
  {
    name: 'Class Calcarea',
    description: 'Calcareous sponges. Skeleton consists of spicules made of calcium carbonate.',
    examples: ['Sycon (Scypha)', 'Grantia']
  },
  {
    name: 'Class Hexactinellida',
    description: 'Glass sponges. Skeleton composed of siliceous (glassy) six-rayed spicules.',
    examples: ['Euplectella (Venus flower basket)']
  },
  {
    name: 'Class Demospongiae',
    description: 'Horny sponges. Skeleton made of spongin fibres, siliceous spicules, or both. Includes the only freshwater sponges.',
    examples: ['Spongilla (Freshwater sponge)', 'Euspongia (Bath sponge)']
  }
];

const Porifera = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-up">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 01</span>
              <span className="hero-badge marine">The Pore Bearers</span>
            </div>

            <h1 className="hero-title">Phylum Porifera</h1>
            <p className="hero-tagline">(porus – pore; ferre – to bear)</p>

            <div className="hero-intro-text">
              <p>
                Members of this phylum are commonly known as <strong>sponges</strong>. They are primitive multicellular animals known for their unique porous body structure.
              </p>
              <p>
                Sponges are generally marine, though some exist in freshwater (e.g., <em>Spongilla</em>). They are primarily asymmetrical animals, spending their adult lives anchored to solid surfaces (sessile).
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034268/banner_image_cti1k2.png"
                alt="Porifera Banner showing diverse sponges"
                className="hero-main-img"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- GENERAL FEATURES GRID --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Layers className="section-icon" /></div>
            Core Biological Blueprint
          </h2>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-label">Level of Organisation</span>
              <span className="feature-value">Cellular Level</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layer</span>
              <span className="feature-value">Diploblastic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Symmetry</span>
              <span className="feature-value">Mostly Asymmetrical</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Coelom</span>
              <span className="feature-value">Acoelomate</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Digestive System</span>
              <span className="feature-value">Absent (Intracellular)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Physiology (Resp/Exc)</span>
              <span className="feature-value">Simple Diffusion</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Skeleton</span>
              <span className="feature-value">Spicules / Spongin fibres</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Nervous System</span>
              <span className="feature-value">Absent</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- WATER CANAL SYSTEM & DIAGRAM --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Waves className="section-icon" /></div>
            The Water Transport (Canal) System
          </h2>
          <div className="split-section">
            <div className="text-content">
              <p style={{marginBottom: '20px', fontSize: '1.1rem', color: '#334155'}}>
                Sponges lack complex organ systems, relying entirely on a unique water transport mechanism for their survival needs.
              </p>
              <ul className="premium-list">
                <li><strong>Pathway:</strong> Water enters through minute pores called <strong>Ostia</strong> in the body wall.</li>
                <li><strong>Central Cavity:</strong> It flows into a central cavity called the <strong>Spongocoel</strong>.</li>
                <li><strong>Exit Point:</strong> The water finally exits through a large opening called the <strong>Osculum</strong>.</li>
                <li><strong>Choanocytes:</strong> The spongocoel and canals are lined by specialized flagellated cells called <strong>choanocytes (collar cells)</strong> that maintain the water current.</li>
                <li><strong>Functions:</strong> This system is critical for food gathering, respiratory exchange, and removal of waste.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034275/Water_canal_system_qcbj11.png"
                alt="Water Canal System Anatomy"
                className="anatomy-img hero-main-img"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- REPRODUCTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><RefreshCw className="section-icon" /></div>
            Reproduction & Development
          </h2>
          <div className="split-section reverse">
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034267/reproduction_mtc9ku.jpg"
                alt="Sponge Reproduction Cycle"
                className="anatomy-img hero-main-img"
              />
            </div>
            <div className="text-content">
              <ul className="premium-list">
                <li><strong>Hermaphrodites:</strong> Sponges are monoecious; eggs and sperms are produced by the same individual.</li>
                <li><strong>Asexual Reproduction:</strong> Occurs primarily through <strong>fragmentation</strong>.</li>
                <li><strong>Sexual Reproduction:</strong> Occurs by the formation of gametes.</li>
                <li><strong>Fertilization:</strong> Fertilization is strictly <strong>internal</strong>.</li>
                <li><strong>Development:</strong> Development is <strong>indirect</strong>, passing through a distinct larval stage (e.g., Parenchymula or Amphiblastula) that is morphologically distinct from the adult.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- EXAM HIGH-YIELD POINTS --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <div className="exam-card">
            <h2 className="exam-card-title">
              <CheckCircle2 className="section-icon" style={{color: '#ef4444', width: '32px', height: '32px'}} />
              High-Yield Target Points
            </h2>
            <ul className="premium-list" style={{marginBottom: 0}}>
              <li><strong>Choanocytes (Collar Cells):</strong> The defining, unique cell type of Porifera lining the spongocoel and canals.</li>
              <li><strong>Cellular Level of Organisation:</strong> Sponges are the only animals in the kingdom that lack true tissues.</li>
              <li><strong>Spongocoel vs. Coelom:</strong> The spongocoel is simply a water cavity, <strong>not</strong> a true body cavity (coelom). Therefore, sponges are acoelomates.</li>
              <li><strong>Osmoregulation:</strong> Like many primitive aquatic organisms, sponges excrete waste primarily as ammonia (Ammonotelic).</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CLASSIFICATION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><ShieldCheck className="section-icon" /></div>
            Classification
          </h2>
          
          <div className="info-banner" style={{ marginBottom: '30px' }}>
            <div className="banner-icon"><Microscope className="section-icon" /></div>
            <div className="banner-text">
              The Phylum Porifera is broadly classified based on the chemical composition and structure of their internal skeleton (spicules or spongin fibres).
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Porifera"
            phylumDescription="Classified primarily based on skeletal structure (Calcarea, Hexactinellida, Demospongiae)."
            majorClasses={majorClasses}
          />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Porifera;