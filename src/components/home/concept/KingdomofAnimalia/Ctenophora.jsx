import React, { useState, useRef, useCallback } from 'react';
import {
  Activity,
  Layers,
  ShieldCheck,
  Microscope,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Ctenophora.css';

const majorClasses = [
  {
    name: 'Class Tentaculata',
    description: 'Possess two tentacles (usually retractile). Mostly found in coastal waters, but also occur in deeper oceanic zones. Contains approximately 100 species. Traditionally divided into subclasses based on morphology and life cycle differences.',
    examples: []
  },
  {
    name: 'Class Nuda',
    description: 'Absence of tentacles. Approximately 100–150 known species. Found in all oceans — from polar to tropical waters, surface to deep sea. Monotypic class. Contains one order: Beroida. One family: Beroidae.',
    examples: []
  }
];

const generalFeatures = [
  { label: 'Level of Organisation', value: 'Tissue level of organisation' },
  { label: 'Germ Layer', value: 'Diploblastic' },
  { label: 'Body Symmetry', value: 'Biradial symmetry' },
  { label: 'Coelom', value: 'Not present' },
  { label: 'Body Plan', value: 'Functionally complete digestive system' },
  { label: 'Digestive System', value: 'Digestion occurs first extracellularly and then intracellularly' },
  { label: 'Respiration', value: 'Through body surface by simple diffusion' },
  { label: 'Circulatory System', value: 'Absent' },
  { label: 'Circulation', value: 'Gastrovascular canals help in distribution of food' },
  { label: 'Osmoregulation', value: 'Osmoconformers' },
  { label: 'Excretion', value: 'Metabolic wastes are expelled by simple diffusion through the body surface' },
  { label: 'Mode of Excretion', value: 'Ammonotelic' },
  { label: 'Skeleton', value: 'Lack a traditional skeleton' },
  { label: 'Nervous System', value: 'Diffuse nerve network present in the mesoglea' },
  { label: 'Metamerism', value: 'Absent' },
  { label: 'Fertilization', value: 'External fertilisation' },
  { label: 'Development', value: 'Indirect development' },
];

const Ctenophora = () => {
  const [highlightedClass, setHighlightedClass] = useState(null);
  const cardRefs = useRef([]);

  const handleClassSelect = useCallback((classIndex) => {
    setHighlightedClass(classIndex);
    if (cardRefs.current[classIndex]) {
      cardRefs.current[classIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => setHighlightedClass(null), 3000);
  }, []);

  return (
    <div className="phylum-ctenophora">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION (CONTENT LEFT, BANNER RIGHT) --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-up">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 03</span>
              <span className="hero-badge marine">Comb Jellies</span>
            </div>

            <h1 className="hero-title">Phylum Ctenophora</h1>
            <p className="hero-tagline">(Ktenos – comb; Phoros – bearing)</p>

            <div className="hero-intro-text">
              <p>
                Members of <strong>Ctenophora</strong> are commonly known as <strong>comb bearers</strong>,
                <strong> comb jellies</strong>, or <strong>sea walnuts</strong>.
              </p>
              <p>
                There are approximately <strong>100 to 150 known species</strong>. They are exclusively <strong>marine</strong>, and are free-floating and solitary in nature.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775026085/banner_image_btqofc.png"
                alt="Ctenophora Banner"
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
            General Features
          </h2>

          <div className="features-grid">
            {generalFeatures.map((f, i) => (
              <div className="feature-card" key={i}>
                <span className="feature-label">{f.label}</span>
                <span className="feature-value">{f.value}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* --- CHARACTERISTIC FEATURES (CONTENT ONLY, NO IMAGE FOR THIS SECTION) --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Characteristic Features
          </h2>
          <ul className="premium-list">
            <li>The <strong>mesoglea</strong> is different from that of Cnidaria; it contains <strong>amoebocytes and smooth muscle cells</strong>.</li>
            <li>The mesoglea gives a <strong>jelly-like appearance</strong> to these animals.</li>
            <li>They have a <strong>transparent body</strong>, and the body shape varies from flat to oval.</li>
            <li>The external surface of the body bears <strong>eight rows of ciliated comb plates</strong>, which help in locomotion.</li>
            <li><strong>Cnidoblasts</strong> and <strong>nematocysts</strong> are absent.</li>
            <li>Tentacles may be present or absent. When present, the number of tentacles is <strong>two</strong>; they are solid and possess adhesive cells called <strong>colloblasts (lasso cells)</strong>.</li>
            <li>They exhibit <strong>bioluminescence</strong>, the property of emitting light from the body, which is well marked in ctenophores.</li>
            <li>The presence of a special sense organ called the <strong>statocyst</strong> at the opposite end of the mouth (aboral end) is a characteristic feature of this phylum.</li>
            <li>The larval stage is called <strong>cydippid</strong>.</li>
          </ul>
        </ScrollReveal>
      </section>

      {/* --- GASTROVASCULAR SYSTEM (CONTENT LEFT, IMAGE RIGHT) --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Activity className="section-icon" /></div>
            Gastrovascular System
          </h2>
          <div className="split-section">
            <div className="text-content">
              <ul className="premium-list">
                <li>This is a characteristic feature of both <strong>Coelenterata and Ctenophora</strong>.</li>
                <li>The gastrovascular system is similar to that of Coelenterata; however, unlike cnidarians, most ctenophores have a <strong>functionally complete digestive system</strong>.</li>
                <li>The prey captured with the help of tentacles or the large, expandable mouth is directed into the <strong>gastrovascular cavity</strong>.</li>
                <li>Digestive juices released inside the cavity act on the ingested food, and enzymes help in its breakdown.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775026083/gastrovascular_system_im8rkn.png"
                alt="Gastrovascular System Diagram"
                className="anatomy-img hero-main-img anatomy-img-clickable"
                onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
              />
            </div>
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
            <div className="banner-icon"><Sparkles className="section-icon" /></div>
            <div className="banner-text">
              <strong>Ctenophora</strong> is divided into two main classes:
              <ol style={{margin: '12px 0 0 20px', padding: 0}}>
                <li style={{color: 'inherit', marginBottom: '4px'}}>Class Tentaculata</li>
                <li style={{color: 'inherit', marginBottom: '4px'}}>Class Nuda</li>
              </ol>
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Ctenophora"
            phylumDescription="Ctenophora classification is based primarily on the presence or absence of tentacles."
            majorClasses={majorClasses}
            onClassSelect={handleClassSelect}
          />

          <div className="class-cards-grid" style={{marginTop: '30px'}}>
            {/* Class Tentaculata */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className={`class-detail-card ${highlightedClass === 0 ? 'highlighted' : ''}`}
            >
              <h3>Class Tentaculata</h3>
              <p>Possess two tentacles (usually retractile).</p>
              <ul className="plain-list">
                <li>Mostly found in coastal waters, but also occur in deeper oceanic zones</li>
                <li>Contains approximately 100 species</li>
                <li>Traditionally divided into subclasses based on morphology and life cycle differences</li>
              </ul>
            </div>

            {/* Class Nuda */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className={`class-detail-card ${highlightedClass === 1 ? 'highlighted' : ''}`}
            >
              <h3>Class Nuda</h3>
              <p>Absence of tentacles.</p>
              <ul className="plain-list">
                <li>Approximately 100–150 known species</li>
                <li>Found in all oceans — from polar to tropical waters, surface to deep sea</li>
                <li>Monotypic class</li>
                <li>Contains one order: Beroida</li>
                <li>One family: Beroidae</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Ctenophora;