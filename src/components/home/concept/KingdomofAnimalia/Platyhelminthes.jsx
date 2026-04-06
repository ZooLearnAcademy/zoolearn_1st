import React from 'react';
import { 
  Microscope,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Scissors
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Platyhelminthes.css';

const majorClasses = [
  { 
    name: 'Turbellaria', 
    description: 'Mostly free-living, aquatic flatworms with a ciliated epidermis. They possess high regenerative powers.',
    examples: ['Planaria (Dugesia)']
  },
  { 
    name: 'Trematoda', 
    description: "Endoparasitic 'flukes' with suckers. They usually have complex life cycles involving multiple hosts.",
    examples: ['Fasciola (Liver fluke)', 'Schistosoma (Blood fluke)']
  },
  { 
    name: 'Cestoda', 
    description: 'Tapeworms. Strictly endoparasitic with a segmented body (proglottids) and no digestive system.',
    examples: ['Taenia solium (Pork tapeworm)', 'Taenia saginata (Beef tapeworm)']
  }
];

const Platyhelminthes = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 04</span>
              <span className="hero-badge eucoelomate">Flatworms</span>
            </div>
            
            <h1 className="hero-title">Platyhelminthes</h1>
            <p className="hero-tagline">The Dorsiventrally Flattened Worms (Platys – flat; helmin – worm)</p>
            
            <div className="hero-intro-text">
              <p>
                <strong>Platyhelminthes</strong> are the first group of animals to evolve a 
                <strong>bilaterally symmetrical</strong>, <strong>triploblastic</strong> body plan. 
                Commonly known as flatworms, their bodies are leaf-like or ribbon-like, 
                ideally suited for their role as either free-living scavengers or specialized endoparasites.
              </p>
              <p>
                They represent a major evolutionary milestone: the development of 
                <strong>cephalization</strong> (head formation) and a dedicated excretory system. 
                Whether it's the incredible regenerative powers of <em>Planaria</em> or the complex 
                life cycles of tapeworms, they are masters of adaptation.
              </p>
            </div>

            <div className="hero-academic-note">
              Most flatworms are <strong>Endoparasites</strong>, found in animals including humans, 
              where they possess hooks and suckers for attachment.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-left">
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img 
                src="https://images.unsplash.com/photo-1590005354167-6da97870c91d?auto=format&fit=crop&q=80&w=2000" 
                alt="Colorful marine flatworm" 
                className="hero-main-img" 
              />
              <p className="visual-caption">FREE-LIVING MARINE FLATWORM</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- ANATOMY & REGENERATION SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Internal Anatomy & Flame Cells
          </h2>
          <div className="split-section">
            <div className="anatomy-diagram-wrapper">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Dugesia_Anatomy_schematic%3B_with_labels_in_English.svg" 
                alt="Detailed Planaria Anatomy Diagram" 
                className="anatomy-img"
              />
              <p className="visual-caption">INTERNAL STRUCTURE OF PLANARIA</p>
            </div>
            <div className="text-content">
              <h3 className="hero-tagline">Biological Highlights:</h3>
              <ul className="premium-list">
                <li><strong>Flame Cells:</strong> Also known as <em>protonephridia</em>. Specialized cells for osmoregulation and excretion.</li>
                <li><strong>Cephalization:</strong> First animals to have a 'head' with concentrated nervous tissue (ganglia) and eyespots.</li>
                <li><strong>Incomplete Gut:</strong> Digestive system has a single opening; branched gastrovascular cavity distributes nutrients.</li>
                <li><strong>Regeneration:</strong> <em>Planaria</em> can regenerate an entire organism from a tiny fragment of its body.</li>
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
              <li><strong>Germ Layers:</strong> First <strong>Triploblastic</strong> phylum (Ecto, Meso, Endoderm).</li>
              <li><strong>Coelom:</strong> Exclusively <strong>Acoelomate</strong> (no body cavity). Space filled with Parenchyma tissue.</li>
              <li><strong>Symmetry:</strong> First <strong>Bilateral Symmetry</strong> in the animal kingdom.</li>
              <li><strong>Excretion:</strong> via <strong>Flame Cells</strong> (Protonephridia). <em>(Very common MCQ point)</em>.</li>
              <li><strong>Heredity:</strong> Mostly hermaphrodites (<strong>Monoecious</strong>). Fertilization is Internal.</li>
              <li><strong>Parasitic Adaptations:</strong> Thick tegument, hooks, and suckers for attachment. Direct absorption of nutrients.</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* --- GENERAL FEATURES GRID --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Layers className="section-icon" /></div>
            Architectural Features
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-label">Level of Org.</span>
              <span className="feature-value">Organ/Organ-System</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Symmetry</span>
              <span className="feature-value">Bilateral Symmetry</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layers</span>
              <span className="feature-value">Triploblastic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Plan</span>
              <span className="feature-value">Blind-sac Body Plan</span>
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
            phylumName="Platyhelminthes" 
            phylumDescription="The flatworms represent a major evolutionary milestone: the development of bilateral symmetry and triploblastic organization."
            majorClasses={majorClasses} 
          />
        </ScrollReveal>
      </section>

      {/* --- CONCLUSION --- */}
      <section className="phylum-section conclusion-flat">
        <ScrollReveal animation="fade-up">
          <div className="info-banner conclusion">
            <div className="banner-icon"><Scissors className="section-icon" /></div>
            <div className="banner-text">
              Platyhelminthes pioneered the bilateral triploblastic design, paving the way for 
              the complex organ systems seen in higher animals.
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Platyhelminthes;
