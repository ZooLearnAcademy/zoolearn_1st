import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Arthropoda.css';

const majorClasses = [
  { 
    name: 'Beneficial Insects', 
    description: 'Insects that provide direct economic benefit through products like honey, silk, and lac.',
    examples: ['Apis (Honey bee)', 'Bombyx (Silkworm)', 'Laccifer (Lac insect)']
  },
  { 
    name: 'Vectors of Disease', 
    description: 'Insects that transmit pathogens from one host to another, causing diseases like Malaria and Dengue.',
    examples: ['Anopheles', 'Culex', 'Aedes (Mosquitoes)']
  },
  { 
    name: 'Living Fossils & Pests', 
    description: 'Unique species like Limulus that have remained unchanged for eons, and destructive pests like Locusts.',
    examples: ['Limulus (King crab)', 'Locusta (Gregarious pest)']
  }
];

const Arthropoda = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 07</span>
              <span className="hero-badge eucoelomate">Jointed Feet</span>
            </div>
            
            <h1 className="hero-title">Arthropoda</h1>
            <p className="hero-tagline">The Conquerors of Earth (Arthros – joint; podos – foot)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Arthropoda</strong> is the <strong>largest phylum</strong> of Animalia, 
                accounting for over two-thirds of all named species on Earth. They are the 
                ultimate biological success story, having conquered the land, sea, and air.
              </p>
              <p>
                Their defining characteristic is the possession of <strong>jointed appendages</strong> 
                and a tough <strong>chitinous exoskeleton</strong> that provides both protection 
                and a framework for muscle attachment. From microscopic mites to giant spider 
                crabs and soaring dragonflies, their diversity is unparalleled.
              </p>
            </div>

            <div className="hero-academic-note">
              Over <strong>80% of all animal species</strong> belong to this phylum, making it the most dominant group in biological history.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1551009175-15bdf9dcb580?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed Butterfly Anatomy" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE ARTHROPOD (INSECTA)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Insect Anatomy & Respirators
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Insect_anatomy_diagram.svg" 
                alt="Detailed Insect Anatomy Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">GENERAL MORPHOLOGY OF AN INSECT</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Structural Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Division of Body:</strong> Head, Thorax, and Abdomen.</li>
                <li><strong>Exoskeleton:</strong> Chitinous cuticle that must be shed (moulting/ecdysis) to allow growth.</li>
                <li><strong>Open Circulatory System:</strong> Blood (hemolymph) flows into large body spaces called sinus/hemocoel.</li>
                <li><strong>Tracheal System:</strong> A network of tubes for direct gas exchange in insects.</li>
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
              <li><strong>Largest Phylum:</strong> Kingdom Animalia (Insects alone comprise 70%).</li>
              <li><strong>Respiratory Organs:</strong> Varies by group: <strong>Gills</strong> (Prawns), <strong>Book gills</strong> (Limulus), <strong>Book lungs</strong> (Scorpions), <strong>Trachea</strong> (Insects).</li>
              <li><strong>Excretion:</strong> via <strong>Malpighian tubules</strong> (in terrestrial forms) or <strong>Green glands</strong> (Prawns).</li>
              <li><strong>Sensory Organs:</strong> Antennae, Compound eyes, Simple eyes, and <strong>Statocysts</strong> (balancing organs).</li>
              <li><strong>Circulation:</strong> Always <strong>Open Type</strong>. Heart is dorsal.</li>
              <li><strong>Heredity:</strong> Mostly Dioecious. Fertilization is usually Internal. Oviparous development.</li>
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
            phylumName="Arthropoda" 
            phylumDescription="Arthropoda is the largest phylum of Animalia, accounting for over two-thirds of all named species on Earth."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- ECONOMIC IMPORTANCE --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Economic/Medical Significance
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-label">Beneficial</span>
              <span className="feature-value">Apis (Honey), Bombyx (Silk)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Vectors</span>
              <span className="feature-value">Mosquitoes, Tsetse fly</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Pests</span>
              <span className="feature-value">Locusta (Gregarious pest)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Living Fossil</span>
              <span className="feature-value">Limulus (King crab)</span>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Arthropoda;
