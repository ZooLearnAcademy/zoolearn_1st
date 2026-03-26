import React from 'react';
import {
  Activity,
  Dna,
  Box,
  Layers,
  Orbit,
  ShieldCheck,
  Microscope,
  Droplets,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Porifera.css';

const majorClasses = [
  {
    name: 'Calcarea',
    description: 'Sponges with spicules made of calcium carbonate. Primarily marine and shallow water.',
    examples: ['Sycon (Scypha)', 'Leucosolenia']
  },
  {
    name: 'Hexactinellida',
    description: 'Glass sponges with six-rayed siliceous spicules. Found in deep marine waters.',
    examples: ['Euplectella (Venus flower basket)']
  },
  {
    name: 'Demospongiae',
    description: 'The largest class. Spicules are siliceous or spongin fibers, or both. Includes freshwater forms.',
    examples: ['Spongilla (Fresh water sponge)', 'Euspongia (Bath sponge)']
  }
];

const Porifera = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 01</span>
              <span className="hero-badge cellular">Multicellular</span>
            </div>

            <h1 className="hero-title">Porifera</h1>
            <p className="hero-tagline">The Pore Bearers (Porus – pore; ferre – to bear)</p>

            <div className="hero-intro-text">
              <p>
                <strong>Poriferans</strong>, commonly known as <strong>Sponges</strong>, are primitive
                multicellular animals. They are generally marine and mostly asymmetrical. They
                represent the <strong>Cellular level of organization</strong>.
              </p>
              <p>
                Sponges are masters of water filtration. They possess a unique
                <strong> Water Transport (Canal) System</strong>. Water enters through
                minute pores (ostia) into a central cavity (spongocoel), from where
                it goes out through the osculum.
              </p>
            </div>

            <div className="hero-academic-note">
              This pathway of water transport is helpful in food gathering, respiratory
              exchange, and removal of waste.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=2000"
                alt="Detailed Sponge Visual"
                className="hero-main-img"
              />
              <p className="visual-caption">REPRESENTATIVE PORIFERAN (SYCON)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            The Canal System & Choanocytes
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Sponge_Anatomy.svg"
                alt="Detailed Sponge Anatomy Diagram"
                className="anatomy-img"
              />
              <p className="visual-caption">VERTICAL SECTION OF A TYPICAL SPONGE</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Biological Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Choanocytes:</strong> Also called Collar cells, lining the spongocoel and canals.</li>
                <li><strong>Ostia:</strong> Tiny pores for water entry.</li>
                <li><strong>Osculum:</strong> Large opening for water exit.</li>
                <li><strong>Spicules:</strong> Calcareous or Siliceous skeletal elements.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- EXAM FOCUS SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <div className="exam-card">
            <h2 className="exam-card-title">
              <CheckCircle2 className="section-icon" style={{color: '#ef4444'}} />
              Exam High-Yield Points
            </h2>
            <ul className="exam-list">
              <li><strong>Level of Org:</strong> Cellular level (Aggregation of cells).</li>
              <li><strong>Symmetry:</strong> Mostly asymmetrical.</li>
              <li><strong>Unique Feature:</strong> Water Canal System.</li>
              <li><strong>Collar Cells:</strong> Presence of <strong>Choanocytes</strong>.</li>
              <li><strong>Digestion:</strong> Intracellular.</li>
              <li><strong>Fertilization:</strong> Internal and development is indirect (larval stage present).</li>
            </ul>
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
              <span className="feature-label">Level of Org.</span>
              <span className="feature-value">Cellular</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Symmetry</span>
              <span className="feature-value">Asymmetrical</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layers</span>
              <span className="feature-value">None (Pre-diploblastic)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Cavity</span>
              <span className="feature-value">Acoelomate</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CLASSIFICATION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><ShieldCheck className="section-icon" /></div>
            Interactive Classification
          </h2>

          <PhylumTaxonomyTree
            phylumName="Porifera"
            phylumDescription="The simplest multicellular animals, sponges are biological filters that have mastered the art of water processing for millions of years."
            majorClasses={majorClasses}
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Filter className="section-icon" /></div>
            <div className="banner-text">
              Sponges are the biological filters of the sea. By mastering the movement of water through their bodies, they have survived unchanged for over half a billion years.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Porifera;