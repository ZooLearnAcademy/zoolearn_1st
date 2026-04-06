import React from 'react';
import {
  Activity,
  Layers,
  ShieldCheck,
  Microscope,
  Sparkles,
  CheckCircle2
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

const Ctenophora = () => {
  return (
    <div className="phylum-container">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-right">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum</span>
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

        <ScrollReveal animation="fade-left">
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
            <div className="feature-card">
              <span className="feature-label">Level of Organisation</span>
              <span className="feature-value">Tissue level</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Germ Layer</span>
              <span className="feature-value">Diploblastic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Symmetry</span>
              <span className="feature-value">Biradial symmetry</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Coelom</span>
              <span className="feature-value">Not present</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Body Plan</span>
              <span className="feature-value">Functionally complete digestive system</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Digestive System</span>
              <span className="feature-value">Extracellular, then intracellular</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Respiration</span>
              <span className="feature-value">Simple diffusion (body surface)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Circulatory System</span>
              <span className="feature-value">Absent</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Circulation</span>
              <span className="feature-value">Gastrovascular canals</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Osmoregulation</span>
              <span className="feature-value">Osmoconformers</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Excretion</span>
              <span className="feature-value">Simple diffusion (body surface)</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Mode of Excretion</span>
              <span className="feature-value">Ammonotelic</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Skeleton</span>
              <span className="feature-value">Lack a traditional skeleton</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Nervous System</span>
              <span className="feature-value">Diffuse nerve network in mesoglea</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Metamerism</span>
              <span className="feature-value">Absent</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Fertilization</span>
              <span className="feature-value">External fertilisation</span>
            </div>
            <div className="feature-card">
              <span className="feature-label">Development</span>
              <span className="feature-value">Indirect development</span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- CHARACTERISTIC FEATURES SECTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Characteristic Features
          </h2>
          <div className="text-content">
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
          </div>
        </ScrollReveal>
      </section>

      {/* --- GASTROVASCULAR SYSTEM SECTION --- */}
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
                className="anatomy-img hero-main-img"
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
          
          <div className="info-banner conclusion" style={{ marginBottom: '30px' }}>
            <div className="banner-icon"><Sparkles className="section-icon" /></div>
            <div className="banner-text">
              <strong>Ctenophora</strong> is divided into two main classes: <strong>Class Tentaculata</strong> and <strong>Class Nuda</strong>.
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Ctenophora"
            phylumDescription="Ctenophora classification is based primarily on the presence or absence of tentacles."
            majorClasses={majorClasses}
          />
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Ctenophora;