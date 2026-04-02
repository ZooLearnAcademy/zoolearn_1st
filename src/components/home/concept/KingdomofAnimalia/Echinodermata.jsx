import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Star
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Echinodermata.css';

const majorClasses = [
  { 
    name: 'Asteroidea', 
    description: 'Star-shaped body with tube feet for locomotion and food capture. Powerful regeneration abilities.',
    examples: ['Asterias (Starfish)']
  },
  { 
    name: 'Echinoidea', 
    description: 'Globular or disk-shaped body with movable spines. Includes sea urchins and sand dollars.',
    examples: ['Echinus (Sea urchin)', 'Echinocardium']
  },
  { 
    name: 'Ophiuroidea', 
    description: 'Brittle stars with long, slender, flexible arms clearly demarcated from the central disk.',
    examples: ['Ophiura', 'Antedon (Sea lily)']
  }
];

const Echinodermata = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 09</span>
              <span className="hero-badge eucoelomate">Spiny Skinned</span>
            </div>
            
            <h1 className="hero-title">Echinodermata</h1>
            <p className="hero-tagline">The Spiny-Skinned Wonders (Echinos – spiny; derma – skin)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Echinodermata</strong> are exclusively marine animals characterized by an 
                endoskeleton of calcareous ossicles. They are arguably the most unique group in 
                the animal kingdom, featuring a body plan based on <strong>radial symmetry</strong> 
                and a complex hydraulic system.
              </p>
              <p>
                Their most distinctive feature is the <strong>water vascular system</strong>, 
                a network of fluid-filled canals that powers their locomotion, food capture, 
                and respiration. From the iconic starfish to the globular sea urchin, they 
                are masters of the ocean floor.
              </p>
            </div>

            <div className="hero-academic-note">
              While adults show <strong>Radial Symmetry</strong>, their larvae are 
              <strong> Bilaterally Symmetrical</strong>—a key evolutionary link to higher animals.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1544525881-897db9268f86?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed Starfish View" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE ECHINODERM (STARFISH)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Water Vascular System
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/FMIB_52615_Diagram_of_water-vascular_system_of_a_starfish_;.jpeg/800px-FMIB_52615_Diagram_of_water-vascular_system_of_a_starfish_;.jpeg" 
                alt="Detailed Water Vascular System Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">HYDRAULIC LOCOMOTION SYSTEM</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Hydraulic Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Madreporite:</strong> A perforated plate that acts as an intake valve for the system.</li>
                <li><strong>Radial Canals:</strong> Extend into each arm, carrying water to the tube feet.</li>
                <li><strong>Tube Feet (Podia):</strong> Flexible, suction-cup-like structures used for walking and gripping prey.</li>
                <li><strong>Ampulla:</strong> Bulbs that contract to force water into the tube feet, causing them to extend.</li>
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
              <li><strong>Exclusively Marine:</strong> No freshwater or terrestrial echinoderms exist.</li>
              <li><strong>Symmetry:</strong> Adults are <strong>Pentamerous Radial</strong>; Larvae are <strong>Bilateral</strong>.</li>
              <li><strong>Unique System:</strong> Possession of a <strong>Water Vascular System</strong>.</li>
              <li><strong>Excretion:</strong> A dedicated excretory system is <strong>Absent</strong>.</li>
              <li><strong>Digestive System:</strong> Complete; mouth on ventral (lower) side and anus on dorsal (upper) side.</li>
              <li><strong>Reproduction:</strong> Sexes are separate; fertilization is external. High power of regeneration.</li>
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
              <span className="feature-value">Radial (Adult)</span>
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
            phylumName="Echinodermata" 
            phylumDescription="Echinoderms demonstrate the power of hydraulic engineering in biology, using sea water to power a complex sensory and locomotory system."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Star className="section-icon" /></div>
            <div className="banner-text">
              Echinoderms demonstrate the power of hydraulic engineering in biology, 
              using sea water to power a complex and highly effective locomotory system.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Echinodermata;
