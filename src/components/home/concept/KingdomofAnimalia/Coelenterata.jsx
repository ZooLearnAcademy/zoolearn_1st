import React from 'react';
import {
  Activity,
  Layers,
  ShieldCheck,
  Microscope,
  Zap,
  CheckCircle2,
  Droplets
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Coelenterata.css';

const majorClasses = [
  {
    name: 'Class Hydrozoa',
    description: 'Exhibit both polyp and medusa stages, or only polyp. Typically marine, but includes freshwater Hydra.',
    examples: ['Hydra', 'Obelia (Sea Fur)', 'Physalia (Portuguese man-of-war)']
  },
  {
    name: 'Class Scyphozoa',
    description: 'True jellyfish. The medusa stage is dominant and large; polyp stage is reduced or absent.',
    examples: ['Aurelia (Jellyfish)']
  },
  {
    name: 'Class Anthozoa',
    description: 'Sea anemones and corals. Exclusively marine and exist only in the polyp stage.',
    examples: ['Adamsia (Sea anemone)', 'Pennatula (Sea pen)', 'Gorgonia (Sea fan)', 'Meandrina (Brain coral)']
  }
];

const Coelenterata = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-up">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 04</span>
              <span className="hero-badge marine">The Stinging Animals</span>
            </div>

            <h1 className="hero-title">Phylum Coelenterata</h1>
            <p className="hero-tagline">(Also known as Cnidaria)</p>

            <div className="hero-intro-text">
              <p>
                The name <strong>Cnidaria</strong> is derived from the specialized stinging cells 
                called <strong>cnidoblasts</strong> or <strong>cnidocytes</strong> present on their tentacles and body. 
              </p>
              <p>
                They are mostly marine (except Hydra, which is freshwater), sessile or free-swimming, and possess a central gastro-vascular cavity with a single opening called the <strong>hypostome</strong>.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775033775/banner_image_o8qljs.png"
                alt="Coelenterata Banner showing diverse marine life"
                className="hero-main-img"
              />
            </div>
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
              <span className="feature-label">Level of Organisation</span>
              <span className="feature-value">Tissue Level</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layer</span>
              <span className="feature-value">Diploblastic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Symmetry</span>
              <span className="feature-value">Radial Symmetry</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Coelom</span>
              <span className="feature-value">Acoelomate</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Digestive System</span>
              <span className="feature-value">Incomplete (Blind Sac Plan)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Digestion</span>
              <span className="feature-value">Extracellular & Intracellular</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Skeleton</span>
              <span className="feature-value">CaCO3 (in Corals)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Nervous System</span>
              <span className="feature-value">Primitive (Nerve Net)</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CNIDOCYTES & DIAGRAM --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Zap className="section-icon" /></div>
            The Stinging Cells: Cnidocytes
          </h2>
          <div className="split-section">
            <div className="text-content">
              <ul className="premium-list">
                <li><strong>Defining Feature:</strong> The presence of cnidoblasts/cnidocytes which contain stinging capsules called <strong>nematocysts</strong>.</li>
                <li><strong>Location:</strong> Primarily found on the tentacles and body surface.</li>
                <li><strong>Functions:</strong> Used for <strong>anchorage</strong>, <strong>defense</strong>, and the <strong>capture of prey</strong>.</li>
                <li><strong>Mechanism:</strong> Upon mechanical or chemical stimulation, the nematocyst fires a venomous thread-like tube to paralyze or capture prey.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775033776/Cnidocyte_e9cp3t.png"
                alt="Cnidocyte Anatomy"
                className="anatomy-img hero-main-img"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- POLYP VS MEDUSA & METAGENESIS --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Activity className="section-icon" /></div>
            Polyp, Medusa & Metagenesis
          </h2>
          <div className="split-section reverse">
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775033774/Jellyfish_Life_Cycle_caqsfs.png"
                alt="Jellyfish Life Cycle (Metagenesis)"
                className="anatomy-img hero-main-img"
              />
            </div>
            <div className="text-content">
              <p style={{marginBottom: '20px', fontSize: '1.1rem', color: '#334155'}}>
                Cnidarians exist in two basic body forms: <strong>Polyp</strong> and <strong>Medusa</strong>.
              </p>
              <ul className="premium-list">
                <li><strong>Polyp:</strong> A sessile and cylindrical form (e.g., Hydra, Adamsia).</li>
                <li><strong>Medusa:</strong> An umbrella-shaped and free-swimming form (e.g., Aurelia/Jellyfish).</li>
                <li><strong>Metagenesis (Alternation of Generation):</strong> Cnidarians that exist in both forms exhibit this phenomenon.</li>
                <li><strong>The Cycle:</strong> Polyps produce medusae <strong>asexually</strong>, and medusae form the polyps <strong>sexually</strong> (e.g., Obelia).</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- EXAM HIGH-YIELD POINTS --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <div className="exam-card">
            <h2 className="exam-card-title">
              <CheckCircle2 className="section-icon" style={{color: '#ef4444', width: '32px', height: '32px'}} />
              High-Yield Target Points
            </h2>
            <ul className="premium-list" style={{marginBottom: 0}}>
              <li><strong>Hypostome:</strong> The single opening of the central gastro-vascular cavity acts as both mouth and anus.</li>
              <li><strong>Corals:</strong> Distinctive for having a skeletal framework composed of calcium carbonate ($CaCO_3$).</li>
              <li><strong>Digestion Sequence:</strong> Digestion is first extracellular (in the gastro-vascular cavity) and then intracellular (inside food vacuoles).</li>
            </ul>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CLASSIFICATION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><ShieldCheck className="section-icon" /></div>
            Classification
          </h2>
          
          <div className="info-banner" style={{ marginBottom: '30px' }}>
            <div className="banner-icon"><Droplets className="section-icon" /></div>
            <div className="banner-text">
              The Phylum Cnidaria is primarily classified into three main classes based on the dominance of the polyp or medusa stage in their life cycle.
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Cnidaria"
            phylumDescription="Classified primarily based on body forms and life cycle variations."
            majorClasses={majorClasses}
          />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Coelenterata;