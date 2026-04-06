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
  Syringe,
  GitMerge
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Aschelminthes.css';

const majorClasses = [
  { 
    name: 'Ascaris', 
    description: 'The common roundworm. A parasitic nematode found in the human intestine.',
    examples: ['Roundworm']
  },
  { 
    name: 'Wuchereria', 
    description: 'The filarial worm causing Elephantiasis. Transmitted through mosquito bites.',
    examples: ['Filarial worm']
  },
  { 
    name: 'Ancylostoma', 
    description: 'The hookworm. Attaches to the intestinal wall and feeds on host blood.',
    examples: ['Hookworm']
  }
];

const Aschelminthes = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 05</span>
              <span className="hero-badge pseudocoelomate">Roundworms</span>
            </div>
            
            <h1 className="hero-title">Aschelminthes</h1>
            <p className="hero-tagline">The Non-Segmented Roundworms (Nematoda)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Aschelminthes</strong> are characterized by a circular body in cross-section, 
                earning them the name <strong>Roundworms</strong>. They may be free-living 
                (aquatic or terrestrial) or parasitic in plants and animals.
              </p>
              <p>
                They represent a landmark in evolution: the first animals to possess a 
                <strong> Pseudocoelom</strong> (a body cavity not fully lined by mesoderm) 
                and a <strong>complete digestive system</strong> with a muscular pharynx.
              </p>
            </div>

            <div className="hero-academic-note">
              Sexual dimorphism is often distinct—females are frequently longer than males.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
                alt="Detailed Roundworm Visual" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE ROUNDWORM (ASCARIS)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Organ Systems & Dimorphism
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Ascaris_Lumbricoides_Life_Cycle.png" 
                alt="Ascaris Dimorphism and Life Cycle" 
                className="anatomy-img"
              />
              <p className="visual-caption">MALE (SMALLER, RECURVED) VS FEMALE (LARGER)</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Biological Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Pseudocoelom:</strong> Fluid-filled body cavity acting as a hydrostatic skeleton.</li>
                <li><strong>Complete Gut:</strong> Features a mouth, a highly muscular pharynx, and an anus.</li>
                <li><strong>Excretory Tube:</strong> Removes body wastes from the body cavity through the excretory pore.</li>
                <li><strong>Sexual Dimorphism:</strong> Sexes are separate (dioecious).</li>
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
              <li><strong>Cavity Type:</strong> Only phylum with a <strong>Pseudocoelom</strong>.</li>
              <li><strong>Org. Level:</strong> Organ-system level of organization.</li>
              <li><strong>Symmetry:</strong> Bilaterally symmetrical.</li>
              <li><strong>Germ Layers:</strong> Triploblastic.</li>
              <li><strong>Digestive System:</strong> Complete with a <strong>Muscular Pharynx</strong>.</li>
              <li><strong>Reproduction:</strong> Dioecious; internal fertilization; mostly oviparous.</li>
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
              <span className="feature-value">Pseudocoelomate</span>
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
            phylumName="Aschelminthes" 
            phylumDescription="The masters of parasitic success, roundworms have evolved a tough cuticle and pseudocoelom to thrive in nearly every environment on Earth."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Syringe className="section-icon" /></div>
            <div className="banner-text">
              Aschelminthes represent a significant evolutionary step with their pseudocoelom and complete digestive system. They are highly adaptive, thriving as both free-living organisms and specialized parasites.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Aschelminthes;
