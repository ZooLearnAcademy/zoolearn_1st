import React from 'react';
import {
  Activity,
  Dna,
  Box,
  Layers,
  Orbit,
  ShieldCheck,
  Microscope,
  Sparkles,
  CheckCircle2,
  GitBranch
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Ctenophora.css';

const majorClasses = [
  {
    name: 'Tentaculata',
    description: 'Ctenophores that possess tentacles, usually with colloblasts for prey capture.',
    examples: ['Pleurobrachia (Sea gooseberry)', 'Cestum (Venus girdle)', 'Ctenoplana']
  },
  {
    name: 'Nuda',
    description: 'Ctenophores that lack tentacles altogether. They usually ingest prey directly.',
    examples: ['Beroe']
  }
];

const Ctenophora = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 03</span>
              <span className="hero-badge marine">Sea Walnuts</span>
            </div>

            <h1 className="hero-title">Ctenophora</h1>
            <p className="hero-tagline">The Comb Jellies (Ktene – comb; phors – bearing)</p>

            <div className="hero-intro-text">
              <p>
                <strong>Ctenophora</strong> are exclusively marine, radially symmetrical, diploblastic
                organisms. They are commonly known as <strong>sea walnuts</strong> or
                <strong> comb jellies</strong>. They are the largest animals to swim using cilia.
              </p>
              <p>
                Their most striking feature is <strong>Bioluminescence</strong>—the ability
                of a living organism to emit light. They shimmer with iridescent colors
                not from pigments, but from the scattering of light by their moving cilia.
              </p>
            </div>

            <div className="hero-academic-note">
              Unlike Cnidarians, Ctenophores lack stinging cells. Instead, they use
              specialized sticky cells called <strong>Colloblasts</strong> to catch prey.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://images.unsplash.com/photo-1544473426-2679dc6e84ce?auto=format&fit=crop&q=80&w=2000"
                alt="Bioluminescent Ctenophore"
                className="hero-main-img"
              />
              <p className="visual-caption">REPRESENTATIVE CTENOPHORE (PLEUROBRACHIA)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Comb Plates & Colloblasts
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Pleurobrachia_pileus.jpg"
                alt="Comb Plates Detail"
                className="anatomy-img"
              />
              <p className="visual-caption">EIGHT ROWS OF COMB PLATES</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Diagnostic Features:</h3>
              <ul className="premium-list">
                <li><strong>Comb Plates:</strong> Eight external rows of ciliated plates used for locomotion.</li>
                <li><strong>Bioluminescence:</strong> Remarkable property of emitting light from within.</li>
                <li><strong>Colloblasts:</strong> Lasso cells that are sticky, helping in capturing prey.</li>
                <li><strong>Statocyst:</strong> A unique sensory organ for balance located at the aboral pole.</li>
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
              <li><strong>Environment:</strong> Exclusively marine (strictly saltwater).</li>
              <li><strong>Symmetry:</strong> Radial symmetry.</li>
              <li><strong>Germ Layers:</strong> Diploblastic.</li>
              <li><strong>Digestion:</strong> Both extracellular and intracellular.</li>
              <li><strong>Reproduction:</strong> Only sexual; hermaphrodites (monoecious).</li>
              <li><strong>Development:</strong> Indirect, featuring a <strong>Cydippid larva</strong>.</li>
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
            phylumName="Ctenophora"
            phylumDescription="The bioluminescent stars of the ocean, ctenophores represent a unique branch of life powered by cilia and sticky capture cells."
            majorClasses={majorClasses}
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Sparkles className="section-icon" /></div>
            <div className="banner-text">
              Ctenophores are the architects of iridescence. From their rows of comb plates to their internal light, they represent one of nature's most visually stunning evolutionary experiments.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Ctenophora;