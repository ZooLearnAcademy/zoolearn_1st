import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Waves
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Annelida.css';

const majorClasses = [
  { 
    name: 'Polychaeta', 
    description: 'Mostly marine annelids with numerous setae on lateral appendages called parapodia. Usually dioecious.',
    examples: ['Nereis (Sandworm)', 'Aphrodite (Sea mouse)']
  },
  { 
    name: 'Oligochaeta', 
    description: 'Terrestrial or freshwater worms with few setae and no parapodia. Monoecious with a clitellum.',
    examples: ['Pheretima (Earthworm)', 'Lumbricus']
  },
  { 
    name: 'Hirudinea', 
    description: 'Leeches. Mostly freshwater ectoparasites with suckers for attachment. They lack setae and parapodia.',
    examples: ['Hirudinaria (Blood-sucking leech)']
  }
];

const Annelida = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 06</span>
              <span className="hero-badge eucoelomate">Segmented Worms</span>
            </div>
            
            <h1 className="hero-title">Annelida</h1>
            <p className="hero-tagline">The Ornamented Worms (Annulus – little ring)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Annelida</strong> represent the pinnacle of worm-like evolution. They are 
                distinguished by their <strong>metamerically segmented</strong> bodies, where the 
                body is divided into many distinct rings or segments both externally and internally.
              </p>
              <p>
                From the industrious earthworm that aerates our soils to the predatory marine 
                sandworms (<em>Nereis</em>) and specialized leeches, annelids exhibit a complex 
                body plan featuring a true coelom and a sophisticated closed circulatory system.
              </p>
            </div>

            <div className="hero-academic-note">
              Annelids were the first group to evolve <strong>True Segments</strong> and a 
              <strong>Closed Circulatory System</strong>, where blood is pumped through a network of vessels.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1549419137-b9560f64be87?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed view of an annelid" 
                className="hero-main-img" 
              />
              <p className="visual-caption">SEGMENTED ANNELID (EARTHWORM)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Internal Anatomy & Metamerism
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Earthworm_anatomy_2_big_tags.png" 
                alt="Detailed Earthworm Anatomy Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">SYSTEMS OF THE EARTHWORM (PHERETIMA)</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Organ System Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Nephridia:</strong> Tubular structures that manage both osmoregulation and excretion.</li>
                <li><strong>Parapodia:</strong> Lateral appendages in aquatic forms (like <em>Nereis</em>) used for swimming.</li>
                <li><strong>Closed Circulatory System:</strong> Blood stays within vessels; features multiple 'hearts' (aortic arches).</li>
                <li><strong>Nervous System:</strong> A double ventral nerve cord with paired ganglia in every segment.</li>
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
              <li><strong>Metamerism:</strong> True external and internal segmentation. <em>(Very frequent exam question)</em>.</li>
              <li><strong>Coelom:</strong> First <strong>Eucoelomate</strong> (true coelom) phylum. Schizocoelic in origin.</li>
              <li><strong>Circulation:</strong> Closed type (except in some leeches). Hemoglobin is sometimes dissolved in plasma.</li>
              <li><strong>Locomotion:</strong> Longitudinal and circular muscles help in movement, aided by <strong>Setae</strong> or <strong>Parapodia</strong>.</li>
              <li><strong>Reproduction:</strong> Earthworms & Leeches are <strong>Monoecious</strong> (hermaphrodites). <em>Nereis</em> is <strong>Dioecious</strong>.</li>
              <li><strong>Excretion:</strong> Coiled tubes called <strong>Nephridia</strong>.</li>
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
            phylumName="Annelida" 
            phylumDescription="Annelids represent a masterclass in modular engineering, featuring true segments and a closed circulatory system."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Waves className="section-icon" /></div>
            <div className="banner-text">
              Annelids represent a masterclass in modular engineering. Their metameric design 
              allows for specialized regional growth and complex movement strategies.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Annelida;
