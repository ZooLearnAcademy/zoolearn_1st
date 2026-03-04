import React from 'react';
import './Ctenophora.css';
import GlossaryTooltip from './GlossaryTooltip';
import QuickQuiz from './QuickQuiz';

// --- QUIZ DATA ---
const ctenophoraQuestions = [
  {
    questionText: 'What are members of Phylum Ctenophora commonly known as?',
    answerOptions: [
      { answerText: 'Sponges and flatworms', isCorrect: false },
      { answerText: 'Comb jellies or sea walnuts', isCorrect: true },
      { answerText: 'Roundworms and flukes', isCorrect: false },
      { answerText: 'Corals and anemones', isCorrect: false },
    ],
  },
  {
    questionText: 'What type of body symmetry is characteristic of Ctenophores?',
    answerOptions: [
      { answerText: 'Bilateral symmetry', isCorrect: false },
      { answerText: 'Radial symmetry', isCorrect: false },
      { answerText: 'Biradial symmetry', isCorrect: true },
      { answerText: 'Asymmetrical', isCorrect: false },
    ],
  },
  {
    questionText: 'Which structure is responsible for locomotion in Ctenophores?',
    answerOptions: [
      { answerText: 'Pseudopodia', isCorrect: false },
      { answerText: 'Eight rows of ciliated comb plates', isCorrect: true },
      { answerText: 'Jointed appendages', isCorrect: false },
      { answerText: 'Water vascular system', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following cells are completely ABSENT in Ctenophores?',
    answerOptions: [
      { answerText: 'Amoebocytes', isCorrect: false },
      { answerText: 'Colloblasts', isCorrect: false },
      { answerText: 'Smooth muscle cells', isCorrect: false },
      { answerText: 'Cnidoblasts (stinging cells)', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the specialized adhesive cell used by Ctenophores to capture prey?',
    answerOptions: [
      { answerText: 'Nematocysts', isCorrect: false },
      { answerText: 'Flame cells', isCorrect: false },
      { answerText: 'Colloblasts (lasso cells)', isCorrect: true },
      { answerText: 'Choanocytes', isCorrect: false },
    ],
  },
  {
    questionText: 'Ctenophores are highly noted for bioluminescence. What does this term mean?',
    answerOptions: [
      { answerText: 'The ability to change color to match the environment', isCorrect: false },
      { answerText: 'The property of emitting light from a living body', isCorrect: true },
      { answerText: 'The ability to regenerate lost body parts', isCorrect: false },
      { answerText: 'The process of digesting food outside the body', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the function of the statocyst located at the aboral end of a Ctenophore?',
    answerOptions: [
      { answerText: 'Digestion of complex proteins', isCorrect: false },
      { answerText: 'Detection of light and dark', isCorrect: false },
      { answerText: 'Sense organ for balance and orientation', isCorrect: true },
      { answerText: 'Reproduction and sperm storage', isCorrect: false },
    ],
  },
  {
    questionText: 'Ctenophores have indirect development. What is the name of their larval stage?',
    answerOptions: [
      { answerText: 'Cydippid', isCorrect: true },
      { answerText: 'Planula', isCorrect: false },
      { answerText: 'Trochophore', isCorrect: false },
      { answerText: 'Miracidium', isCorrect: false },
    ],
  },
  {
    questionText: 'Unlike most Cnidarians, Ctenophores possess which of the following digestive features?',
    answerOptions: [
      { answerText: 'An incomplete digestive tract (blind sac)', isCorrect: false },
      { answerText: 'A functionally complete digestive system', isCorrect: true },
      { answerText: 'Strictly intracellular digestion', isCorrect: false },
      { answerText: 'A highly developed stomach and intestines', isCorrect: false },
    ],
  },
  {
    questionText: 'Which class of Ctenophora completely lacks tentacles?',
    answerOptions: [
      { answerText: 'Tentaculata', isCorrect: false },
      { answerText: 'Nuda', isCorrect: true },
      { answerText: 'Hydrozoa', isCorrect: false },
      { answerText: 'Scyphozoa', isCorrect: false },
    ],
  },
  {
    questionText: 'How do Ctenophores handle respiration and excretion?',
    answerOptions: [
      { answerText: 'Through simple diffusion across the body surface', isCorrect: true },
      { answerText: 'Using specialized gills and nephridia', isCorrect: false },
      { answerText: 'Through a primitive tracheal system', isCorrect: false },
      { answerText: 'Using flame cells', isCorrect: false },
    ],
  },
  {
    questionText: 'What level of body organization do Ctenophores exhibit?',
    answerOptions: [
      { answerText: 'Cellular level', isCorrect: false },
      { answerText: 'Tissue level', isCorrect: true },
      { answerText: 'Organ level', isCorrect: false },
      { answerText: 'Organ-system level', isCorrect: false },
    ],
  },
  {
    questionText: 'Regarding their germ layers, Ctenophores are classified as:',
    answerOptions: [
      { answerText: 'Monoblastic', isCorrect: false },
      { answerText: 'Triploblastic', isCorrect: false },
      { answerText: 'Diploblastic', isCorrect: true },
      { answerText: 'Acoelomate', isCorrect: false },
    ],
  },
  {
    questionText: 'What is unique about the mesoglea in Ctenophores compared to Cnidarians?',
    answerOptions: [
      { answerText: 'It is completely solid and made of cartilage', isCorrect: false },
      { answerText: 'It contains amoebocytes and smooth muscle cells', isCorrect: true },
      { answerText: 'It is filled with stinging nematocysts', isCorrect: false },
      { answerText: 'It is highly vascularized with blood vessels', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the primary nitrogenous waste excreted by Ctenophores?',
    answerOptions: [
      { answerText: 'Urea', isCorrect: false },
      { answerText: 'Uric Acid', isCorrect: false },
      { answerText: 'Ammonia (Ammonotelic)', isCorrect: true },
      { answerText: 'Guanine', isCorrect: false },
    ],
  }
];

const Ctenophora = () => {
  return (
    <div className="phylum-container ctenophora-theme">
      {/* Decorative background glow mimicking bioluminescence */}
      <div className="hero-glow"></div>

      <header className="phylum-header animate-fade-up" style={{ animationDelay: '0s' }}>
        <div className="badge-group">
          <div className="badge">Phylum 3</div>
          <div className="badge habitat">🌊 Marine</div>
        </div>
        <h1 className="phylum-title">Ctenophora</h1>
        <p className="phylum-subtitle">(Ktenos – comb; Phoros – bearing)</p>
        <p className="phylum-intro">
          Commonly known as <strong>comb bearers</strong>, <strong>comb jellies</strong>, or <strong>sea walnuts</strong>. 
          With approximately 100 to 150 known species, they are exclusively marine, 
          free-floating, and solitary in nature.
        </p>
      </header>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title">
          <div className="title-icon-wrapper">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          General Features
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-label">Level of Organisation</span>
            <span className="feature-value">Tissue level</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Germ Layer</span>
            <span className="feature-value">
              <GlossaryTooltip term="Diploblastic" definition="Having a body derived from only two embryonic cell layers (ectoderm and endoderm), lacking a mesoderm.">
                Diploblastic
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Symmetry</span>
            <span className="feature-value">Biradial symmetry</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Coelom</span>
            <span className="feature-value">
              <GlossaryTooltip term="Acoelomate" definition="An animal that lacks a fluid-filled body cavity (coelom) between the body wall and digestive tract.">
                Acoelomate
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Plan</span>
            <span className="feature-value">Complete digestive system</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Respiration</span>
            <span className="feature-value">Simple diffusion</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Circulatory System</span>
            <span className="feature-value">Absent</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Excretion</span>
            <span className="feature-value">
              <GlossaryTooltip term="Ammonotelic" definition="Animals that excrete nitrogenous waste primarily in the form of ammonia.">
                Ammonotelic
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Nervous System</span>
            <span className="feature-value">Diffuse network</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Reproduction</span>
            <span className="feature-value">External fertilisation</span>
          </div>
        </div>
      </section>

      <section className="phylum-section split-section animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-content">
          <h2 className="section-title">
            <div className="title-icon-wrapper">
              <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            Characteristic Features
          </h2>
          <ul className="feature-list premium-list">
            <li>
              <strong>Unique Mesoglea:</strong> Contains amoebocytes and smooth muscle cells, giving a distinct jelly-like appearance.
            </li>
            <li><strong>Comb Plates:</strong> The external surface bears <strong>eight rows of ciliated comb plates</strong> used for locomotion.</li>
            <li><strong>Tentacles:</strong> Cnidoblasts are absent. When present, tentacles are solid and possess adhesive cells called <strong>colloblasts (lasso cells)</strong>.</li>
            <li><strong>Bioluminescence:</strong> A well-marked property of emitting light from the body.</li>
            <li><strong>Statocyst:</strong> Presence of a special sense organ at the opposite end of the mouth (aboral end) for balance.</li>
            <li><strong>Development:</strong> Indirect development through a larval stage called <strong>cydippid</strong>.</li>
          </ul>
        </div>
        <div className="image-content premium-image-wrapper">
           <div className="image-backdrop"></div>
                   </div>
      </section>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="section-title">
          <div className="title-icon-wrapper">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>
          </div>
          Gastrovascular System
        </h2>
        <div className="info-banner">
          <div className="banner-icon">💡</div>
          <div className="banner-text">
            While similar to Coelenterata, most ctenophores possess a <strong>functionally complete digestive system</strong>. Prey captured by tentacles or the large expandable mouth is directed into the gastrovascular cavity, where enzymes break it down extracellularly, followed by intracellular digestion.
          </div>
        </div>
      </section>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">
          <div className="title-icon-wrapper">
             <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          </div>
          Classification
        </h2>
        <p className="classification-intro">Ctenophora is divided into two main classes based on the presence of tentacles:</p>
        
        <div className="classification-cards">
          <div className="class-card theme-purple">
            <div className="card-header">
              <div className="icon-wrapper">🟣</div>
              <h3>Class Tentaculata</h3>
            </div>
            <ul className="card-list">
              <li>Possess two tentacles (usually retractile).</li>
              <li>Found mostly in coastal waters, some in deep ocean zones.</li>
              <li>Contains approximately 100 species.</li>
            </ul>
          </div>

          <div className="class-card theme-blue">
            <div className="card-header">
              <div className="icon-wrapper">🔵</div>
              <h3>Class Nuda</h3>
            </div>
            <ul className="card-list">
              <li>Complete absence of tentacles.</li>
              <li>Found in all oceans (polar to tropical, surface to deep sea).</li>
              <li>Monotypic class: Contains one order (<em>Beroida</em>) and one family (<em>Beroidae</em>).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- QUICK QUIZ COMPONENT --- */}
      <section className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <QuickQuiz questions={ctenophoraQuestions} themeColor="#c084fc" /> 
      </section>

    </div>
  );
};

export default Ctenophora;