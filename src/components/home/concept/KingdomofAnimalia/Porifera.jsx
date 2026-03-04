import React from 'react';
import './Ctenophora.css';
import GlossaryTooltip from './GlossaryTooltip';
import QuickQuiz from './QuickQuiz';

// --- QUIZ DATA ---
const poriferaQuestions = [
  {
    questionText: 'What are members of Phylum Porifera commonly known as?',
    answerOptions: [
      { answerText: 'Comb jellies', isCorrect: false },
      { answerText: 'Sponges', isCorrect: true },
      { answerText: 'Jellyfish', isCorrect: false },
      { answerText: 'Sea anemones', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the level of body organization in Porifera?',
    answerOptions: [
      { answerText: 'Tissue level', isCorrect: false },
      { answerText: 'Cellular level', isCorrect: true },
      { answerText: 'Organ level', isCorrect: false },
      { answerText: 'Organ-system level', isCorrect: false },
    ],
  },
  {
    questionText: 'Which cells are characteristic of Porifera and create water currents?',
    answerOptions: [
      { answerText: 'Cnidocytes', isCorrect: false },
      { answerText: 'Choanocytes (collar cells)', isCorrect: true },
      { answerText: 'Pinacocytes', isCorrect: false },
      { answerText: 'Amoebocytes', isCorrect: false },
    ],
  },
  {
    questionText: 'The central cavity of a sponge is called:',
    answerOptions: [
      { answerText: 'Spongocoel', isCorrect: true },
      { answerText: 'Gastrovascular cavity', isCorrect: false },
      { answerText: 'Coelom', isCorrect: false },
      { answerText: 'Osculum', isCorrect: false },
    ],
  },
  {
    questionText: 'Through which openings does water enter the sponge body?',
    answerOptions: [
      { answerText: 'Oscula', isCorrect: false },
      { answerText: 'Ostia', isCorrect: true },
      { answerText: 'Nephridia', isCorrect: false },
      { answerText: 'Spiracles', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the skeleton of sponges made of?',
    answerOptions: [
      { answerText: 'Chitin', isCorrect: false },
      { answerText: 'Spicules or spongin fibres', isCorrect: true },
      { answerText: 'Bony plates', isCorrect: false },
      { answerText: 'Cartilage', isCorrect: false },
    ],
  },
  {
    questionText: 'Sponges are mainly:',
    answerOptions: [
      { answerText: 'Free-swimming predators', isCorrect: false },
      { answerText: 'Sessile filter feeders', isCorrect: true },
      { answerText: 'Parasitic worms', isCorrect: false },
      { answerText: 'Burrowing molluscs', isCorrect: false },
    ],
  },
  {
    questionText: 'How do sponges reproduce asexually during unfavourable conditions?',
    answerOptions: [
      { answerText: 'By forming gemmules', isCorrect: true },
      { answerText: 'By binary fission', isCorrect: false },
      { answerText: 'By regeneration only', isCorrect: false },
      { answerText: 'By producing spores', isCorrect: false },
    ],
  },
  {
    questionText: 'Which class of Porifera has a skeleton of six‑rayed siliceous spicules?',
    answerOptions: [
      { answerText: 'Calcarea', isCorrect: false },
      { answerText: 'Hexactinellida', isCorrect: true },
      { answerText: 'Demospongiae', isCorrect: false },
      { answerText: 'Scyphozoa', isCorrect: false },
    ],
  },
  {
    questionText: 'The study of sponges is known as:',
    answerOptions: [
      { answerText: 'Parazoology', isCorrect: true },
      { answerText: 'Cnidology', isCorrect: false },
      { answerText: 'Malacology', isCorrect: false },
      { answerText: 'Helminthology', isCorrect: false },
    ],
  },
  {
    questionText: 'Sponges are:',
    answerOptions: [
      { answerText: 'Diploblastic and acoelomate', isCorrect: true },
      { answerText: 'Triploblastic and coelomate', isCorrect: false },
      { answerText: 'Diploblastic and pseudocoelomate', isCorrect: false },
      { answerText: 'Triploblastic and acoelomate', isCorrect: false },
    ],
  },
  {
    questionText: 'What type of digestion occurs in sponges?',
    answerOptions: [
      { answerText: 'Extracellular only', isCorrect: false },
      { answerText: 'Intracellular only', isCorrect: true },
      { answerText: 'Both extracellular and intracellular', isCorrect: false },
      { answerText: 'No digestion', isCorrect: false },
    ],
  },
  {
    questionText: 'The outer layer of the sponge body wall is called:',
    answerOptions: [
      { answerText: 'Choanoderm', isCorrect: false },
      { answerText: 'Mesohyl', isCorrect: false },
      { answerText: 'Pinacoderm', isCorrect: true },
      { answerText: 'Epidermis', isCorrect: false },
    ],
  },
  {
    questionText: 'Which larval stage is typical in sponges?',
    answerOptions: [
      { answerText: 'Planula', isCorrect: false },
      { answerText: 'Cydippid', isCorrect: false },
      { answerText: 'Amphiblastula or parenchymula', isCorrect: true },
      { answerText: 'Trochophore', isCorrect: false },
    ],
  },
  {
    questionText: 'Sponges are ecologically important because they:',
    answerOptions: [
      { answerText: 'Form coral reefs', isCorrect: false },
      { answerText: 'Contribute to reef formation and silica deposits', isCorrect: true },
      { answerText: 'Fix nitrogen', isCorrect: false },
      { answerText: 'Produce oxygen', isCorrect: false },
    ],
  }
];

const Porifera = () => {
  return (
    <div className="phylum-container porifera-theme"> {/* class name can stay or be adapted */}
      {/* Decorative background glow */}
      <div className="hero-glow"></div>

      <header className="phylum-header animate-fade-up" style={{ animationDelay: '0s' }}>
        <div className="badge">Phylum 1</div>
        <h1 className="phylum-title">Porifera</h1>
        <p className="phylum-subtitle">(Porous – pore; ferre – to bear)</p>
        <p className="phylum-intro">
          Commonly known as <strong>sponges</strong>, they are among the <strong>oldest living multicellular animals</strong>.
          Originating in the Precambrian era, about <strong>8,550 species</strong> are known worldwide.
          Sponges reached their greatest diversity during the Cretaceous period and play an important ecological role
          in <strong>reef formation</strong> and as a source of <strong>biogenic silica</strong>.
          They are ubiquitous in oceans across all latitudes. The scientific study of sponges is called <strong>Parazoology</strong>.
        </p>
      </header>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          General Features
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-label">Level of Organisation</span>
            <span className="feature-value">Cellular level</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Germ Layer</span>
            <span className="feature-value">
              <GlossaryTooltip term="Diploblastic" definition="Having a body derived from only two embryonic cell layers (ectoderm and endoderm), lacking a mesoderm.">
                Diploblastic (functionally)
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Symmetry</span>
            <span className="feature-value">Mostly asymmetrical</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Coelom</span>
            <span className="feature-value">
              <GlossaryTooltip term="Acoelomate" definition="An animal that lacks a fluid-filled body cavity (coelom) between the body wall and digestive tract.">
                Absent (acoelomate)
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Plan</span>
            <span className="feature-value">Cell aggregate</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Respiration</span>
            <span className="feature-value">Body surface diffusion</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Circulatory System</span>
            <span className="feature-value">Water canal system</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Excretion</span>
            <span className="feature-value">
              <GlossaryTooltip term="Ammonotelic" definition="Animals that excrete nitrogenous waste primarily in the form of ammonia.">
                Diffusion (Ammonotelic)
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Nervous System</span>
            <span className="feature-value">Absent</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Reproduction</span>
            <span className="feature-value">Internal fertilisation</span>
          </div>
        </div>
      </section>

      <section className="phylum-section split-section animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-content">
          <h2 className="section-title">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            Characteristic Features
          </h2>
          <ul className="feature-list premium-list">
            <li>
              <strong>Sessile Habit:</strong> Adult sponges are sessile and attached to a substratum.
            </li>
            <li>
              <strong>Body Wall Structure:</strong> Composed of outer <strong>pinacoderm</strong> (with pinacocytes and porocytes), inner <strong>choanoderm</strong> (with choanocytes), and a gelatinous <strong>mesohyl</strong> containing spicules, spongin fibres, and amoebocytes.
            </li>
            <li>
              <strong>Water Canal System:</strong> Water enters through numerous <strong>ostia</strong>, passes into the <strong>spongocoel</strong> (or canal system), and exits via one or more <strong>oscula</strong>. This system supports feeding, respiration, excretion, and gamete transfer.
            </li>
            <li>
              <strong>Choanocytes (Collar Cells):</strong> Flagellated cells lining the inner cavities that create water currents and capture food particles (intracellular digestion).
            </li>
            <li>
              <strong>Skeleton:</strong> Internal framework of <strong>calcareous spicules</strong> (calcium carbonate), <strong>siliceous spicules</strong> (silica), and/or <strong>spongin fibres</strong>.
            </li>
            <li>
              <strong>Reproduction:</strong> Both asexual (fragmentation, budding, and internal buds called <strong>gemmules</strong>) and sexual (hermaphroditic, internal fertilisation, indirect development with larval stages like <strong>amphiblastula</strong> and <strong>parenchymula</strong>).
            </li>
          </ul>
        </div>
        <div className="image-content premium-image-wrapper">
          <div className="image-backdrop"></div>
          {/* [Image of Porifera anatomy diagram – e.g., sponge structure with ostia, spongocoel, osculum] */}
        </div>
      </section>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/></svg>
          Canal System (Water Canal System)
        </h2>
        <div className="info-banner">
          <div className="banner-icon">💧</div>
          <div className="banner-text">
            The water canal system is a hallmark of Porifera. Water flows through the sponge body in a volume that may reach <strong>up to 20,000 times its body volume per day</strong>. This system is vital for food gathering, respiration, excretion (mainly ammonia), and the transfer of gametes by choanocytes.
          </div>
        </div>
      </section>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          Classification
        </h2>
        <p className="classification-intro">Phylum Porifera is divided into three main classes based on the nature of the skeleton:</p>

        <div className="classification-cards">
          <div className="class-card theme-purple">
            <div className="card-header">
              <div className="icon-wrapper">🟣</div>
              <h3>Class Calcarea</h3>
            </div>
            <ul className="card-list">
              <li>Skeleton of <strong>calcium carbonate spicules</strong>.</li>
              <li>Exclusively marine, mostly shallow coastal waters.</li>
              <li>About <strong>400 species</strong> described.</li>
            </ul>
          </div>

          <div className="class-card theme-blue">
            <div className="card-header">
              <div className="icon-wrapper">🔵</div>
              <h3>Class Hexactinellida</h3>
            </div>
            <ul className="card-list">
              <li>Skeleton of <strong>six‑rayed siliceous spicules</strong> (glass sponges).</li>
              <li>Exclusively marine, mainly deep‑sea (200 m or more).</li>
              <li>Approximately <strong>680 species</strong> known.</li>
            </ul>
          </div>

          <div className="class-card theme-green">
            <div className="card-header">
              <div className="icon-wrapper">🟢</div>
              <h3>Class Demospongiae</h3>
            </div>
            <ul className="card-list">
              <li>Skeleton of <strong>spongin fibres, siliceous spicules (not six‑rayed), or both</strong>.</li>
              <li>Contains <strong>&gt;90% of all sponge species</strong>; marine and freshwater.</li>
              <li>Divided into several subclasses based on skeletal and canal system features.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
        {/* Passes a theme colour that matches Porifera (e.g., a soft blue/green) */}
        <QuickQuiz questions={poriferaQuestions} themeColor="#4db8ac" />
      </section>

    </div>
  );
};

export default Porifera;