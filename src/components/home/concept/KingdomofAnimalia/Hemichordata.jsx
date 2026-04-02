import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  GitBranch
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Hemichordata.css';

const majorClasses = [
  { 
    name: 'Balanoglossus', 
    description: 'The classic ‘acorn worm’. A marine hemichordate utilized for studying evolutionary transitions.',
    examples: ['Common Acorn Worm']
  },
  { 
    name: 'Saccoglossus', 
    description: 'Another common genus found in coastal intertidal zones, identifiable by its long proboscis.',
    examples: ['Shield Acorn Worm']
  }
];

const Hemichordata = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 10</span>
              <span className="hero-badge eucoelomate">Connecting Link</span>
            </div>
            
            <h1 className="hero-title">Hemichordata</h1>
            <p className="hero-tagline">The Acorn Worms (Hemi – half; chorda – cord)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Hemichordata</strong> was earlier considered a sub-phylum under Chordata 
                but is now placed as a separate phylum under Non-chordates. They consist of a 
                small group of worm-like, <strong>exclusively marine</strong> animals.
              </p>
              <p>
                They are the evolutionary "handshake" between invertebrates and vertebrates. 
                They possess <strong>pharyngeal gill slits</strong> (a chordate feature) but 
                lack a true notochord, having instead a <strong>stomochord</strong>—a 
                rudimentary structure in the collar region.
              </p>
            </div>

            <div className="hero-academic-note">
              A key exam point: The <strong>Stomochord</strong> is structurally similar to a 
              notochord but is actually an outgrowth of the roof of the buccal cavity.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&q=80&w=2000" 
                alt="Balanoglossus and Marine Life" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE HEMICHORDATE (BALANOGLOSSUS)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Balanoglossus Anatomy
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/Balanoglossus_2.png" 
                alt="Detailed Balanoglossus Anatomy Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">STRUCTURE OF AN ACORN WORM</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Body Regions:</h3>
              <ul className="premium-list">
                <li><strong>Proboscis:</strong> An anterior, club-shaped organ used for burrowing and food collection.</li>
                <li><strong>Collar:</strong> The short middle section where the mouth is located ventrally.</li>
                <li><strong>Trunk:</strong> The long posterior part containing the gills, intestine, and gonads.</li>
                <li><strong>Proboscis Gland:</strong> The primary organ for excretion.</li>
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
              <li><strong>Habitat:</strong> Strictly marine and mostly tubicolous (living in U-shaped burrows).</li>
              <li><strong>Body Division:</strong> Exclusively tripartite body: <strong>Proboscis, Collar, and Trunk</strong>.</li>
              <li><strong>Chordate Link:</strong> Presence of <strong>Pharyngeal Gill Slits</strong>.</li>
              <li><strong>Excretion:</strong> via the <strong>Proboscis gland</strong> (Glomerulus). <em>(Very common MCQ)</em>.</li>
              <li><strong>Circulation:</strong> Simple, open type with a dorsal heart.</li>
              <li><strong>Reproduction:</strong> Dioecious; fertilization is external. Features a <strong>Tornaria larva</strong>.</li>
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
            phylumName="Hemichordata" 
            phylumDescription="Hemichordates are the ‘silent witnesses’ of our evolutionary past, bridging the structural divide between invertebrates and vertebrates."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><GitBranch className="section-icon" /></div>
            <div className="banner-text">
              Hemichordates are the "silent witnesses" of our evolutionary past, bridging the 
              structural divide between the simpler invertebrates and the complex vertebrates.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Hemichordata;
