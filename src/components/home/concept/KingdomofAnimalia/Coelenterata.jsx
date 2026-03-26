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
  Zap
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Coelenterata.css';

const majorClasses = [
  { 
    name: 'Hydrozoa', 
    description: 'Mostly marine, some freshwater (Hydra). Polyp and medusa stages often alternate.',
    examples: ['Hydra', 'Obelia', 'Physalia (Portuguese man-of-war)']
  },
  { 
    name: 'Scyphozoa', 
    description: 'True jellyfishes. Medusa stage is dominant; polyp stage is reduced or absent.',
    examples: ['Aurelia (Jelly fish)']
  },
  { 
    name: 'Anthozoa', 
    description: 'Exclusively polypoid. Medusa stage totally absent. Includes corals and sea anemones.',
    examples: ['Adamsia (Sea anemone)', 'Meandrina (Brain coral)', 'Gorgonia (Sea fan)']
  }
];

const Coelenterata = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 02</span>
              <span className="hero-badge diploblastic">The Cnidarians</span>
            </div>
            
            <h1 className="hero-title">Coelenterata</h1>
            <p className="hero-tagline">The Masters of Stinging Cells (Cnidaria)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Coelenterates</strong> (also known as Cnidaria) are aquatic, mostly marine, 
                sessile or free-swimming, radially symmetrical animals. The name Cnidaria is 
                derived from the <strong>cnidoblasts</strong> or <strong>cnidocytes</strong> 
                which contain the stinging capsules or nematocytes.
              </p>
              <p>
                They represent a significant evolutionary step: the <strong>Tissue Level 
                of Organization</strong>. They exhibit two basic body forms: the sessile, 
                cylindrical <strong>Polyp</strong> and the free-swimming, umbrella-shaped 
                <strong> Medusa</strong>.
              </p>
            </div>

            <div className="hero-academic-note">
              Many cnidarians exhibit <strong>Metagenesis</strong> (Alternation of Generation) 
              where polyps produce medusae asexually and medusae form polyps sexually.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1544525881-897db9268f86?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed Jellyfish Visual" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE CNIDARIAN (AURELIA)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            The Cnidoblast & Body Forms
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Hydropolyps.svg" 
                alt="Polyp vs Medusa Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">POLYP (LEFT) VS MEDUSA (RIGHT)</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Biological Signature:</h3>
              <ul className="premium-list">
                <li><strong>Cnidocytes:</strong> Specialized cells on tentacles and body used for anchorage, defense, and prey capture.</li>
                <li><strong>Gastro-vascular Cavity:</strong> A central body cavity with a single opening (mouth) on the hypostome.</li>
                <li><strong>Polyp:</strong> Sessile form (e.g., Hydra, Adamsia).</li>
                <li><strong>Medusa:</strong> Umbrella-shaped, free-swimming form (e.g., Aurelia).</li>
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
              <li><strong>Level of Org:</strong> First phylum to show Tissue level.</li>
              <li><strong>Symmetry:</strong> Exclusively Radially symmetrical.</li>
              <li><strong>Germ Layers:</strong> Diploblastic (Ectoderm and Endoderm with mesoglea in between).</li>
              <li><strong>Digestion:</strong> Both extracellular and intracellular.</li>
              <li><strong>Skeletal System:</strong> Corals have a skeleton composed of <strong>Calcium Carbonate (CaCO3)</strong>.</li>
              <li><strong>Metagenesis:</strong> Observed in <em>Obelia</em>.</li>
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
              <span className="feature-value">Tissue Level</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Symmetry</span>
              <span className="feature-value">Radial</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layers</span>
              <span className="feature-value">Diploblastic</span>
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
            phylumName="Coelenterata" 
            phylumDescription="From simple polyps to complex colonial corals, coelenterates exhibit a brilliant array of radial symmetry and specialized stinging technology."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Droplets className="section-icon" /></div>
            <div className="banner-text">
              Coelenterates are nature's early neurological achievement. As the first predators with true tissues, they pioneered the hunting mechanisms that govern our oceans.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Coelenterata;