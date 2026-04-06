import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Zap,
  Bird
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Chordata.css';

const majorClasses = [
  { 
    name: 'Pisces (Fishes)', 
    description: 'Aquatic chordates with gills and fins. Includes Chondrichthyes (Cartilaginous) and Osteichthyes (Bony).',
    examples: ['Scoliodon (Shark)', 'Labeo (Rohu)']
  },
  { 
    name: 'Amphibia & Reptilia', 
    description: 'The bridge to land. Amphibians need water for larvae; Reptiles are the first true land dwellers with amniotic eggs.',
    examples: ['Rana (Frog)', 'Chelone (Turtle)']
  },
  { 
    name: 'Aves & Mammalia', 
    description: 'Homeothermic (warm-blooded) animals. Birds fly with feathers; Mammals nurture young with milk.',
    examples: ['Columba (Pigeon)', 'Panthera leo (Lion)']
  }
];

const Chordata = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 11</span>
              <span className="hero-badge chordate">The Vertices</span>
            </div>
            
            <h1 className="hero-title">Chordata</h1>
            <p className="hero-tagline">The Pinnacles of Animal Evolution</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Chordata</strong> is the most advanced animal phylum, characterized by the 
                presence of a <strong>notochord</strong> at some stage in their lifecycle. This group 
                ranges from the primitive lancelets to complex vertebrates like humans.
              </p>
              <p>
                All chordates share four fundamental structural signatures: a dorsal hollow nerve 
                cord, pharyngeal gill slits, a post-anal tail, and of course, the notochord. 
                They represent the height of neurological and physiological complexity.
              </p>
            </div>

            <div className="hero-academic-note">
              <strong>Crucial Distinction:</strong> "All vertebrates are chordates, but all 
              chordates are NOT vertebrates." (e.g., Protochordates).
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=2000" 
                alt="Representative Chordate (Bird)" 
                className="hero-main-img" 
              />
              <p className="visual-caption">REPRESENTATIVE CHORDATE (AVES)</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Fundamental Chordate Features
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chordate_features.png/800px-Chordate_features.png" 
                alt="Fundamental Chordate Features Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">THE FOUR HALLMARKS OF CHORDATA</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">The Big Four:</h3>
              <ul className="premium-list">
                <li><strong>Notochord:</strong> A flexible, rod-like structure for support.</li>
                <li><strong>Dorsal Hollow Nerve Cord:</strong> Located above the notochord; becomes the CNS.</li>
                <li><strong>Pharyngeal Gill Slits:</strong> Openings in the pharynx for respiration/feeding.</li>
                <li><strong>Post-Anal Tail:</strong> Extension of the body beyond the anus.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <div className="exam-card comparison-card">
            <h2 className="exam-card-title">
              <Zap className="section-icon" style={{color: '#eab308'}} />
              Chordates vs Non-Chordates
            </h2>
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Chordates</th>
                    <th>Non-Chordates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Notochord</td>
                    <td>Present</td>
                    <td>Absent</td>
                  </tr>
                  <tr>
                    <td>C.N.S.</td>
                    <td>Dorsal, Hollow, Single</td>
                    <td>Ventral, Solid, Double</td>
                  </tr>
                  <tr>
                    <td>Pharynx</td>
                    <td>Perforated by Gill Slits</td>
                    <td>Gill slits absent</td>
                  </tr>
                  <tr>
                    <td>Heart</td>
                    <td>Ventral</td>
                    <td>Dorsal (if present)</td>
                  </tr>
                  <tr>
                    <td>Tail</td>
                    <td>Post-anal tail present</td>
                    <td>Post-anal tail absent</td>
                  </tr>
                </tbody>
              </table>
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
              <li><strong>Subphylum Vertebrata:</strong> Notochord is replaced by a <strong>Vertebral Column</strong> in adults.</li>
              <li><strong>Protochordates:</strong> (Urochordata & Cephalochordata) are exclusively marine.</li>
              <li><strong>Gnathostomata:</strong> Jaw-bearing vertebrates (Chondrichthyes to Mammalia).</li>
              <li><strong>Agnatha:</strong> Jawless vertebrates (Cyclostomata).</li>
              <li><strong>Tetrapoda:</strong> Terrestrial vertebrates with 4 limbs (Amphibia, Reptilia, Aves, Mammalia).</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CLASSIFICATION GRID --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Layers className="section-icon" /></div>
            Interactive Hierarchy
          </h2>
          
          <PhylumTaxonomyTree 
            phylumName="Chordata" 
            phylumDescription="Chordates represent the ultimate expression of symmetry, cephalization, and neurological refinement in the animal kingdom."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Bird className="section-icon" /></div>
            <div className="banner-text">
              Chordates represent the ultimate expression of symmetry, cephalization, and 
              neurological refinement in the animal kingdom.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Chordata;
