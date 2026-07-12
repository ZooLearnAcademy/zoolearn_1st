import React, { useState, useRef, useCallback } from 'react';
import {
  Layers,
  ShieldCheck,
  Microscope,
  Activity,
  BookOpen,
  TreePine,
  Lightbulb
} from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import PhylumTaxonomyTree from './PhylumTaxonomyTree';
import './Coelenterata.css';

const majorClasses = [
  {
    name: 'Class Hydrozoa',
    description: 'Hydrozoa include simple cnidarians in which the polyp form is usually dominant. Approximately 3,000–3,500 species are known. Mostly marine, but a few are freshwater. Metagenesis is present, and the polyp stage is dominant. Medusa stage may be small or absent in some forms. Many species are colonial.',
    examples: []
  },
  {
    name: 'Class Scyphozoa',
    description: 'Scyphozoa are commonly known as true jellyfish, in which the medusa form is dominant. Approximately 200–250 species are known. Exclusively marine. Metagenesis is present, and the medusa stage is dominant. Polyp stage is reduced and temporary.',
    examples: []
  },
  {
    name: 'Class Anthozoa',
    description: 'Anthozoa include corals and sea anemones, in which only the polyp form is present. Approximately 6,000–6,500 species are known. Exclusively marine. Metagenesis is absent. Medusa stage is completely absent. Corals possess a hard calcareous skeleton composed of calcium carbonate (CaCO₃).',
    examples: []
  }
];

const generalFeatures = [
  { label: 'Level of Organisation', value: 'Tissue level of organisation' },
  { label: 'Germ Layer', value: 'Diploblastic' },
  { label: 'Body Symmetry', value: 'Radial symmetry' },
  { label: 'Coelom', value: 'Not present' },
  { label: 'Body Plan', value: 'Blind sac body plan' },
  { label: 'Digestive System', value: 'Incomplete digestive system; digestion is first extracellular and then intracellular' },
  { label: 'Respiration', value: 'Through body surface by simple diffusion' },
  { label: 'Circulatory System', value: 'Absent' },
  { label: 'Circulation', value: 'Gastrovascular cavity helps in distribution of food' },
  { label: 'Osmoregulation', value: 'Osmoconformers' },
  { label: 'Excretion', value: 'Metabolic wastes are expelled by simple diffusion through the body surface' },
  { label: 'Mode of Excretion', value: 'Ammonotelic' },
  { label: 'Skeleton', value: 'Endoskeleton absent; corals possess calcareous exoskeleton' },
  { label: 'Nervous System', value: 'Diffuse nerve net formed by nerve cells' },
  { label: 'Metamerism', value: 'Absent' },
  { label: 'Fertilization', value: 'External fertilization' },
  { label: 'Development', value: 'Indirect development' },
  { label: 'Body Temperature', value: 'Poikilothermic' },
];

const Coelenterata = () => {
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
    <div className="phylum-coelenterata">
      <div className="hero-glow"></div>

      {/* --- HERO SECTION (CONTENT LEFT, BANNER RIGHT) --- */}
      <section className="phylum-hero">
        <ScrollReveal animation="fade-up">
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="hero-badge">Phylum 02</span>
              <span className="hero-badge marine">Stinging Animals</span>
            </div>

            <h1 className="hero-title">Phylum Coelenterata (Cnidaria)</h1>
            <p className="hero-tagline">(Cnidos – needle/sting; Koilos – hollow; Enteron – intestine)</p>

            <div className="hero-intro-text">
              <p>
                Members of <strong>Coelenterata</strong>, commonly known as <strong>Cnidaria</strong>, are exclusively aquatic animals.
              </p>
              <p>
                About <strong>9,000 species</strong> of coelenterates are known worldwide. They are the first animals to
                show true tissue-level organization and are commonly called stinging animals. Most coelenterates are marine, though a few occur in freshwater habitats. They may be
                free-swimming or sessile, and can occur as solitary or colonial forms. Some corals provide
                habitat for a variety of marine organisms. The structure of the coral skeleton is similar to that
                of human bone; therefore, it is used as a bone graft substitute.
              </p>
              <p>
                The scientific study of coelenterates is known as <strong>Cnidariology</strong>.
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
                alt="Coelenterata Banner showing diverse cnidarians"
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

      {/* --- CHARACTERISTIC FEATURES (CONTENT LEFT, IMAGE RIGHT) --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><BookOpen className="section-icon" /></div>
            Characteristic Features
          </h2>
          <div className="split-section">
            <div className="text-content">
              <ul className="premium-list">
                <li>The name Cnidaria is derived from the Greek word Cnidos, meaning sting. They
possess specialized stinging cells called <strong>cnidocytes (or cnidoblasts)</strong> containing
<strong>nematocysts</strong>, present on the tentacles and body.</li>
                <li><strong>Cnidoblasts</strong> are used for anchorage, defense, and capture of prey.</li>
                <li><strong>Interstitial cells</strong> in cnidarians are undifferentiated and unspecialized.</li>
                <li>Many polypoid coelenterates secrete a calcareous (CaCO₃) skeleton that covers the
body. These forms are called <strong>corals</strong>.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775033776/Cnidocyte_e9cp3t.png"
                alt="Cnidocyte Structure"
                className="anatomy-img hero-main-img anatomy-img-clickable"
                onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
              />
            </div>
          </div>
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
                <li>The body encloses a cavity called the <strong>coelenteron (or gastrovascular cavity)</strong>, which
opens to the outside through the mouth present on the hypostome.</li>
                <li>The prey captured with the help of cnidoblasts on the tentacles is directed into the
gastrovascular cavity.</li>
                <li>Digestive juices released inside the cavity act on the ingested food, and enzymes help
in its breakdown.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1778745162/Gastrovascular_System_pinxwh.png"
                alt="Gastrovascular System Diagram"
                className="anatomy-img hero-main-img anatomy-img-clickable"
                onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- BODY FORMS (CONTENT LEFT, IMAGE RIGHT) --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Microscope className="section-icon" /></div>
            Body Forms
          </h2>

          <div className="split-section">
            <div className="text-content">
              <ul className="premium-list">
                <li>Many coelenterates exhibit different morphological forms called <strong>zooids</strong>.</li>
                <li>Generally, two distinct types of zooids are seen: <strong>polyp</strong> and <strong>medusa</strong>.</li>
                <li>They differ structurally and functionally.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1778745143/Body_Forms_fc0fsc.png"
                alt="Body Forms - Polyp and Medusa"
                className="anatomy-img hero-main-img anatomy-img-clickable"
                onClick={(e) => window.dispatchEvent(new CustomEvent('zl:lightbox', { detail: { src: e.target.src, alt: e.target.alt } }))}
              />
            </div>
          </div>

          <div className="split-section" style={{marginTop: '40px'}}>
            <div className="text-content">
              <ul className="premium-list">
                <li>In some coelenterates, a single species exists in more than one distinct morphological
form. This phenomenon is called <strong>polymorphism</strong>.</li>
                <li>Some exist only in the polyp form.</li>
                <li>Some have the medusa as the dominant form in their life cycle (polyp may be
absent or reduced).</li>
                <li>Some cnidarians exist in both forms (polyp and medusa).</li>
              </ul>

              <div className="callout-box">
                These animals show <strong>alternation of generations (metagenesis)</strong> in their life cycle.
              </div>

              <ul className="premium-list" style={{marginTop: '28px'}}>
                <li>The polyp produces medusae asexually (by budding).</li>
                <li>The medusa produces polyps sexually.</li>
                <li>The life cycle includes a free-swimming larva such as the ciliated <strong>planula</strong> and <strong>ephyra</strong>.</li>
              </ul>
            </div>
            <div className="anatomy-diagram-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1775033774/Jellyfish_Life_Cycle_caqsfs.png"
                alt="Jellyfish Life Cycle"
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
            <div className="title-icon-wrapper"><TreePine className="section-icon" /></div>
            Classification of Phylum Coelenterata
          </h2>

          <div className="info-banner" style={{ marginBottom: '30px' }}>
            <div className="banner-icon"><ShieldCheck className="section-icon" /></div>
            <div className="banner-text">
              Classification is based on the <strong>dominant morphological form (zooid)</strong> in the life cycle.
            </div>
          </div>

          <PhylumTaxonomyTree
            phylumName="Coelenterata"
            phylumDescription="Classification is based on the dominant morphological form (zooid) in the life cycle."
            majorClasses={majorClasses}
            onClassSelect={handleClassSelect}
          />

          <div className="class-cards-grid" style={{marginTop: '30px'}}>
            {/* Class Hydrozoa */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className={`class-detail-card ${highlightedClass === 0 ? 'highlighted' : ''}`}
            >
              <h3>Class Hydrozoa</h3>
              <p>Hydrozoa include simple cnidarians in which the polyp form is usually dominant.</p>
              <ul className="plain-list">
                <li>Approximately 3,000–3,500 species are known.</li>
                <li>Mostly marine, but a few are freshwater</li>
                <li>Metagenesis is present, and the polyp stage is dominant.</li>
                <li>Medusa stage may be small or absent in some forms.</li>
                <li>Many species are colonial</li>
              </ul>
            </div>

            {/* Class Scyphozoa */}
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className={`class-detail-card ${highlightedClass === 1 ? 'highlighted' : ''}`}
            >
              <h3>Class Scyphozoa</h3>
              <p>Scyphozoa are commonly known as true jellyfish, in which the medusa form is dominant.</p>
              <ul className="plain-list">
                <li>Approximately 200–250 species are known.</li>
                <li>Exclusively marine.</li>
                <li>Metagenesis is present, and the medusa stage is dominant.</li>
                <li>Polyp stage is reduced and temporary.</li>
              </ul>
            </div>

            {/* Class Anthozoa */}
            <div
              ref={(el) => (cardRefs.current[2] = el)}
              className={`class-detail-card ${highlightedClass === 2 ? 'highlighted' : ''}`}
            >
              <h3>Class Anthozoa</h3>
              <p>Anthozoa include corals and sea anemones, in which only the polyp form is present.</p>
              <ul className="plain-list">
                <li>Approximately 6,000–6,500 species are known.</li>
                <li>Exclusively marine.</li>
                <li>Metagenesis is absent.</li>
                <li>Medusa stage is completely absent.</li>
                <li>Corals possess a hard calcareous skeleton composed of calcium carbonate
(CaCO₃).</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- THINK FURTHER --- */}
      <section className="phylum-section">
        <ScrollReveal animation="fade-up">
          <h2 className="section-title">
            <div className="title-icon-wrapper"><Lightbulb className="section-icon" /></div>
            Think Further
          </h2>

          <div className="think-further-grid">
            {/* Portuguese Man of War */}
            <div className="think-card">
              <h3 className="think-card-title">Portuguese Man of War (Physalia)</h3>
              <ul className="premium-list">
                <li>The Portuguese man of war exhibits a remarkable example of <strong>polymorphism</strong> and
<strong>division of labour</strong>.</li>
                <li>It is a colonial hydrozoan in which different zooids perform different functions.</li>
                <li>A gas gland present inside the pneumatophore secretes gas, which helps the colony
float on the water surface.</li>
              </ul>
            </div>

            {/* Hydra */}
            <div className="think-card">
              <h3 className="think-card-title">Hydra</h3>
              <ul className="premium-list">
                <li>The body of Hydra is represented by the polyp form, which is elongated and
cylindrical.</li>
                <li>Locomotion in Hydra occurs by looping, somersaulting, gliding, walking, and
floating.</li>
                <li>A piece of Hydra can regenerate into a complete individual if it contains parts of the
epidermis, gastrodermis, and interstitial cells.</li>
                <li>The regenerated parts develop according to polarity; the region closer to the
hypostome forms the oral end.</li>
                <li>The mouth is situated at the tip of the hypostome, surrounded by 6–10 long,
slender, contractile tentacles. This end is called the <strong>oral end</strong>.</li>
                <li>The opposite end is known as the <strong>aboral end</strong>. It is flat and helps the animal attach to
the substratum; this region is called the <strong>basal disc</strong>.</li>
                <li>During asexual reproduction (budding), bud-like outgrowths arise from the body and
eventually separate as young Hydra.</li>
                <li>During sexual reproduction, gonads form as small bulges on the body surface.</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Coelenterata;
