import React, { useState, useRef, useCallback } from 'react';
import {
  Layers,
  ShieldCheck,
  Waves,
  RefreshCw,
  BookOpen,
  FlaskConical,
  TreePine
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Porifera.css';

const majorClasses = [
  {
    name: 'Class Calcarea',
    description: 'Calcarea, commonly known as calcareous sponges, are characterized by a skeleton made of calcium carbonate spicules.',
    examples: []
  },
  {
    name: 'Class Hexactinellida',
    description: 'Hexactinellida, commonly known as glass sponges, are known for their delicate and intricate skeletons made of silica (glass-like material).',
    examples: []
  },
  {
    name: 'Class Demospongiae',
    description: 'Demospongiae, commonly known as demosponges, form the largest class of sponges.',
    examples: []
  }
];

const generalFeatures = [
  { label: 'Level of organisation', value: 'Cellular level of organisation' },
  { label: 'Germ layers', value: 'Diploblastic (functionally)' },
  { label: 'Body symmetry', value: 'Mostly asymmetrical; some show radial symmetry' },
  { label: 'Coelom', value: 'Absent (acoelomate)' },
  { label: 'Body plan', value: 'Cell aggregate body plan' },
  { label: 'Digestion', value: 'Intracellular digestion' },
  { label: 'Respiration', value: 'Body surface respiration by diffusion' },
  { label: 'Circulation type', value: 'Type-I (without blood)' },
  { label: 'Circulatory system', value: 'Water canal system' },
  { label: 'Osmoregulation', value: 'Osmoconformers' },
  { label: 'Excretion', value: 'No excretory organs; wastes removed by diffusion' },
  { label: 'Mode of excretion', value: 'Aminotelism (ammonia)' },
  { label: 'Skeleton', value: 'Internal skeletal framework made of spicules or spongin' },
  { label: 'Nervous system', value: 'Absent' },
  { label: 'Metamerism', value: 'Absent' },
  { label: 'Fertilization', value: 'Internal fertilization' },
  { label: 'Development', value: 'Indirect development with larval stage' },
  { label: 'Body temperature', value: 'Poikilothermic (ectothermic)' },
];

const Porifera = () => {
  const [highlightedClass, setHighlightedClass] = useState(null);
  const cardRefs = useRef([]);

  const handleClassSelect = useCallback((classIndex) => {
    setHighlightedClass(classIndex);
    // Scroll to the corresponding card
    if (cardRefs.current[classIndex]) {
      cardRefs.current[classIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // Auto-clear highlight after 3 seconds
    setTimeout(() => setHighlightedClass(null), 3000);
  }, []);

  return (
    <div className="phylum-porifera">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION (CONTENT LEFT, BANNER RIGHT) --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-up">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 01</span>
              <span className="hero-badge marine">The Pore Bearers</span>
            </div>

            <h1 className="hero-title">Phylum Porifera</h1>
            <p className="hero-tagline">(Porous-pore; ferre-to bear)</p>

            <div className="hero-intro-text">
              <p>
                Members of Porifera, commonly known as sponges, are among the oldest living multicellular 
                animals. They originated in the Precambrian era and have survived successfully up to the 
                present day.
              </p>
              <p>
                About 8,550 species of poriferans are known worldwide. Sponges reached their greatest 
                diversity during the Cretaceous period. They play an important ecological role by contributing 
                to reef formation and are a major source of biogenic silica, which forms flint deposits.
              </p>
              <p>
                Sponges are ubiquitous, occurring in oceans across all latitudes of the world.
              </p>
              <p>
                The scientific study of sponges is known as Parazoology.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="hero-visual">
            <div className="visual-container">
              <div className="visual-mesh"></div>
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034268/banner_image_cti1k2.png"
                alt="Porifera Banner showing diverse sponges"
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

      {/* --- CHARACTERISTIC FEATURES --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><BookOpen className="section-icon" /></div>
            Characteristic Features
          </h2>
          <ul className="premium-list">
            <li>Adult sponges are sessile or sedentary organisms and remain attached to an underwater object called the substratum.</li>
            <li>The body wall contains numerous small inhalant openings called ostia.</li>
            <li>These ostia open into a single, central, and spacious cavity called the spongocoel or paragastric cavity.</li>
            <li>Water leaves the body through one or a few large exhalant openings called the osculum.</li>
          </ul>
        </ScrollReveal>
      </section>

      {/* --- BODY WALL --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><FlaskConical className="section-icon" /></div>
            Body Wall
          </h2>

          <div className="body-wall-grid">
            {/* Pinacoderm */}
            <div className="body-wall-card">
              <h3 className="body-wall-card-title">Pinacoderm (dermal layer):</h3>
              <p className="body-wall-desc">This is the outer cellular layer, made up of:</p>
              <ul className="plain-list">
                <li>Flattened pinacocytes</li>
                <li>Oval porocytes, which form the ostia</li>
              </ul>
            </div>

            {/* Choanoderm */}
            <div className="body-wall-card">
              <h3 className="body-wall-card-title">Choanoderm (gastral layer):</h3>
              <p className="body-wall-desc">This is the inner cellular layer, composed of choanocytes (collar cells).</p>
              <p className="body-wall-desc" style={{marginBottom: '8px'}}>Choanocytes are the characteristic cells of Porifera and are responsible for:</p>
              <ul className="plain-list">
                <li>Ingestion of food</li>
                <li>Movement of water</li>
                <li>Transfer of gametes</li>
                <li>Differentiation of sex cells</li>
              </ul>
            </div>

            {/* Mesohyl */}
            <div className="body-wall-card">
              <h3 className="body-wall-card-title">Mesohyl layer:</h3>
              <p className="body-wall-desc">This is a non-cellular, jelly-like matrix present between the pinacoderm and choanoderm.</p>
              <ul className="plain-list">
                <li>It contains spongin fibres and numerous spicules</li>
                <li>It also has many types of amoebocytes, derived from both pinacoderm and choanoderm</li>
              </ul>
            </div>

            {/* Skeleton */}
            <div className="body-wall-card">
              <h3 className="body-wall-card-title">Skeleton</h3>
              <p className="body-wall-desc">The body wall is supported by a skeleton made of:</p>
              <ul className="plain-list">
                <li>Calcareous spicules (calcium carbonate)</li>
                <li>Siliceous spicules (silica)</li>
                <li>Spongin fibres</li>
                <li>Or a combination of these</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- WATER CANAL SYSTEM (CONTENT LEFT, IMAGE RIGHT) --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Waves className="section-icon" /></div>
            Canal System (Water Canal System)
          </h2>
          <div className="split-section">
            <div className="text-content">
              <ul className="premium-list">
                <li>The canal system, also called the water canal system, is a characteristic feature of all Porifera.</li>
                <li>Water enters the sponge body through ostia, passes into the spongocoel, and leaves through the osculum.</li>
                <li>This system helps in:
                  <ul className="plain-list" style={{marginTop: '8px', marginBottom: '8px'}}>
                    <li>Food gathering</li>
                    <li>Respiration</li>
                    <li>Excretion (mainly ammonia)</li>
                    <li>Transfer of gametes by choanocytes</li>
                  </ul>
                </li>
                <li>The amount of water flowing through a sponge is very large and may reach up to 20,000 times its body volume per day.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034275/Water_canal_system_qcbj11.png"
                alt="Water Canal System Anatomy"
                className="anatomy-img hero-main-img anatomy-img-clickable"
                onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- REPRODUCTION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><RefreshCw className="section-icon" /></div>
            Reproduction in Porifera
          </h2>

          <p style={{fontSize: '1.05rem', lineHeight: '1.8', color: '#334155', marginBottom: '32px'}}>
            Sponges reproduce by both asexual and sexual methods, which helps them survive and spread in different environmental conditions.
          </p>

          <div className="repro-grid">
            {/* Asexual */}
            <div className="repro-card asexual">
              <h3 className="repro-card-title">Asexual Reproduction</h3>
              <ul className="premium-list">
                <li>Asexual reproduction occurs by fragmentation and budding, which may be external or internal.</li>
                <li>Internal buds, produced during unfavourable conditions, are called gemmules.</li>
                <li>Sponges show a high power of regeneration, where even small body fragments can grow into a complete sponge.</li>
              </ul>
            </div>

            {/* Sexual */}
            <div className="repro-card sexual">
              <h3 className="repro-card-title">Sexual Reproduction</h3>
              <ul className="premium-list">
                <li>All sponges are hermaphrodites, meaning the sexes are not separate.</li>
                <li>Therefore, they are described as monoecious or bisexual.</li>
                <li>Sexual reproduction takes place by the formation of haploid (n) male and female gametes.</li>
                <li>Sperms are released into the water from one sponge and are carried by water currents into another sponge.</li>
                <li>Fertilisation occurs inside the body of the sponge, where the sperm fertilises the ovum in situ.</li>
                <li>Development includes intermediate free-swimming larval stages, such as amphiblastula and parenchymula, which help in the dispersal of the species.</li>
              </ul>
            </div>
          </div>

          <div className="anatomy-diagram-wrapper" style={{marginTop: '36px', maxWidth: '680px', margin: '36px auto 0'}}>
            <img
              src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775034267/reproduction_mtc9ku.jpg"
              alt="Sponge Reproduction Cycle"
              className="anatomy-img hero-main-img anatomy-img-clickable"
              onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* --- CLASSIFICATION --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><TreePine className="section-icon" /></div>
            Classification of Phylum Porifera
          </h2>

          <div className="info-banner" style={{ marginBottom: '30px' }}>
            <div className="banner-icon"><ShieldCheck className="section-icon" /></div>
            <div className="banner-text">
              Based on the nature of the skeleton, phylum Porifera is divided into three main classes.
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Porifera"
            phylumDescription="Based on the nature of the skeleton, phylum Porifera is divided into three main classes."
            majorClasses={majorClasses}
            onClassSelect={handleClassSelect}
          />

          <div className="class-cards-grid" style={{marginTop: '30px'}}>
            {/* Class Calcarea */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className={`class-detail-card ${highlightedClass === 0 ? 'highlighted' : ''}`}
            >
              <h3>Class Calcarea</h3>
              <p>Calcarea, commonly known as calcareous sponges, are characterized by a skeleton made of calcium carbonate spicules.</p>
              <ul className="plain-list">
                <li>The spicules are composed of calcium carbonate.</li>
                <li>These sponges are exclusively marine.</li>
                <li>They are commonly found in shallow coastal waters, though some species occur at greater depths.</li>
                <li>About 400 species of calcareous sponges have been described.</li>
                <li>Class Calcarea is divided into three subclasses based on the structure of their skeleton and spicules.</li>
              </ul>
            </div>

            {/* Class Hexactinellida */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className={`class-detail-card ${highlightedClass === 1 ? 'highlighted' : ''}`}
            >
              <h3>Class Hexactinellida</h3>
              <p>Hexactinellida, commonly known as glass sponges, are known for their delicate and intricate skeletons made of silica (glass-like material).</p>
              <ul className="plain-list">
                <li>The skeleton consists of six-rayed siliceous spicules.</li>
                <li>These sponges are exclusively marine.</li>
                <li>They are mainly found in deep-sea environments, usually at depths of 200 metres or more.</li>
                <li>Approximately 600–700 species (around 680 documented species) are known.</li>
                <li>The class Hexactinellida is divided into two subclasses based on skeletal and spicule structure.</li>
              </ul>
            </div>

            {/* Class Demospongiae */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className={`class-detail-card ${highlightedClass === 2 ? 'highlighted' : ''}`}
            >
              <h3>Class Demospongiae</h3>
              <p>Demospongiae, commonly known as demosponges, form the largest class of sponges.</p>
              <ul className="plain-list">
                <li>The skeleton is made of spongin fibres, siliceous spicules (not six-rayed), or both.</li>
                <li>This class includes more than 90% of all sponge species.</li>
                <li>Demosponges are found in a wide range of habitats:
                  <ul className="plain-list" style={{marginTop: '4px', marginBottom: '4px'}}>
                    <li>Shallow marine waters</li>
                    <li>Deep-sea environments</li>
                    <li>Freshwater ecosystems</li>
                  </ul>
                </li>
                <li>The class is divided into several subclasses, based on skeletal structure, canal systems, and other morphological features.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Porifera;