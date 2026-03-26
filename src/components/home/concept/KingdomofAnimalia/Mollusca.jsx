import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Shell
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Mollusca.css';

const majorClasses = [
  { 
    name: 'Gastropoda', 
    description: 'The largest class. Usually have a single, spirally coiled shell and exhibit torsion.',
    examples: ['Pila (Apple snail)', 'Aplysia (Sea hare)']
  },
  { 
    name: 'Pelecypoda (Bivalvia)', 
    description: 'Molluscs with two shells (valves) hinged together. No distinct head or radula.',
    examples: ['Pinctada (Pearl oyster)', 'Unio (Freshwater mussel)']
  },
  { 
    name: 'Cephalopoda', 
    description: 'Highly intelligent, marine molluscs with a modified foot around the head as tentacles.',
    examples: ['Sepia (Cuttlefish)', 'Loligo (Squid)', 'Octopus (Devil fish)']
  }
];

const Mollusca = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 08</span>
              <span className="hero-badge eucoelomate">Soft Bodied</span>
            </div>
            
            <h1 className="hero-title">Mollusca</h1>
            <p className="hero-tagline">The Architects of Shells (Mollis – soft)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Mollusca</strong> is the <strong>second largest animal phylum</strong>. They are 
                primarily aquatic (marine or freshwater), though many reside on land. They are 
                defined by their unsegmented, soft bodies usually covered by a calcareous shell.
              </p>
              <p>
                A typical mollusc features a distinct head, a muscular foot for locomotion, 
                and a visceral hump containing the internal organs. The space between the hump 
                and the mantle (the skin covering) holds the gills, used for both respiration 
                and excretion.
              </p>
            </div>

            <div className="hero-academic-note">
              Their unique rasping organ for feeding, the <strong>Radula</strong>, is a hallmark of this phylum.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed Octopus Visual" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE MOLLUSC (OCTOPUS)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Snail Anatomy & The Radula
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Scheme_snail_anatomy-numbers.svg" 
                alt="Detailed Snail Anatomy Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">INTERNAL MORPHOLOGY OF A GASTROPOD</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Biological Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Radula:</strong> A file-like rasping organ used for scraping or cutting food.</li>
                <li><strong>Mantle:</strong> A soft layer of skin that covers the visceral hump and secretes the shell.</li>
                <li><strong>Ctenidia:</strong> Feather-like gills located in the mantle cavity for breathing.</li>
                <li><strong>Sensory Organs:</strong> Tentacles and eyes are usually present on the head.</li>
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
              <li><strong>Second Largest Phylum:</strong> After Arthropoda.</li>
              <li><strong>Body Plan:</strong> Head, Muscular Foot, and Visceral Hump.</li>
              <li><strong>Body Cavity:</strong> <strong>Coelomate</strong>, but coelom is greatly reduced.</li>
              <li><strong>Symmetry:</strong> Bilateral (but some, like snails, become asymmetrical due to <strong>Torsion</strong>).</li>
              <li><strong>Shell:</strong> Usually external and calcareous (calcium carbonate). (Internal in Squid, Absent in Octopus).</li>
              <li><strong>Circulation:</strong> <strong>Open type</strong> (except in Cephalopods like Octopus/Squid which have <strong>Closed</strong> circulation).</li>
              <li><strong>Excretion:</strong> Feather-like gills (Ctenidia) have excretory functions.</li>
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
              <span className="feature-value">Organ System</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Symmetry</span>
              <span className="feature-value">Bilateral</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layers</span>
              <span className="feature-value">Triploblastic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Cavity</span>
              <span className="feature-value">Eucoelomate</span>
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
            phylumName="Mollusca" 
            phylumDescription="Molluscs represent a masters of survival, combining soft-bodied flexibility with extraordinary structural engineering in their shells."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Shell className="section-icon" /></div>
            <div className="banner-text">
              Molluscs represent a masters of survival, combining soft-bodied flexibility with 
              extraordinary structural engineering in their shells.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Mollusca;
