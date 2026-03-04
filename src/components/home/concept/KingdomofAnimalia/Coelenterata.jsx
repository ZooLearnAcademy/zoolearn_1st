import React from 'react';
import './Coelenterata.css';
import GlossaryTooltip from './GlossaryTooltip';
import QuickQuiz from './QuickQuiz';

// --- QUIZ DATA ---
const coelenterataQuestions = [
  {
    questionText: 'What are members of Phylum Coelenterata commonly called due to their specialized cells?',
    answerOptions: [
      { answerText: 'Pore bearers', isCorrect: false },
      { answerText: 'Stinging animals', isCorrect: true },
      { answerText: 'Flatworms', isCorrect: false },
      { answerText: 'Comb jellies', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following describes the digestive system of a Coelenterate?',
    answerOptions: [
      { answerText: 'Complete digestive system (mouth and anus)', isCorrect: false },
      { answerText: 'Strictly intracellular digestion', isCorrect: false },
      { answerText: 'Incomplete; digestion is first extracellular and then intracellular', isCorrect: true },
      { answerText: 'Strictly extracellular digestion', isCorrect: false },
    ],
  },
  {
    questionText: 'The skeletal structure of corals is medically significant because it is used as:',
    answerOptions: [
      { answerText: 'A source of antibiotics', isCorrect: false },
      { answerText: 'A bone graft substitute', isCorrect: true },
      { answerText: 'A blood clotting agent', isCorrect: false },
      { answerText: 'A source of biogenic silica', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the primary function of cnidoblasts (or cnidocytes)?',
    answerOptions: [
      { answerText: 'Digestion of complex carbohydrates', isCorrect: false },
      { answerText: 'Anchorage, defense, and capture of prey', isCorrect: true },
      { answerText: 'Production of gametes', isCorrect: false },
      { answerText: 'Sensing light and dark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the central cavity in Coelenterates called?',
    answerOptions: [
      { answerText: 'Spongocoel', isCorrect: false },
      { answerText: 'Pseudocoelom', isCorrect: false },
      { answerText: 'Coelenteron (Gastrovascular cavity)', isCorrect: true },
      { answerText: 'Blastocoel', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the phenomenon called when a single species exists in more than one distinct morphological form?',
    answerOptions: [
      { answerText: 'Metamerism', isCorrect: false },
      { answerText: 'Metagenesis', isCorrect: false },
      { answerText: 'Polymorphism', isCorrect: true },
      { answerText: 'Hermaphroditism', isCorrect: false },
    ],
  },
  {
    questionText: 'In the alternation of generations (metagenesis), how does the polyp produce the medusa?',
    answerOptions: [
      { answerText: 'Asexually (by budding)', isCorrect: true },
      { answerText: 'Sexually (by gametes)', isCorrect: false },
      { answerText: 'Through fragmentation', isCorrect: false },
      { answerText: 'Through regeneration', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the free-swimming larval stage of a Cnidarian called?',
    answerOptions: [
      { answerText: 'Amphiblastula', isCorrect: false },
      { answerText: 'Planula', isCorrect: true },
      { answerText: 'Miracidium', isCorrect: false },
      { answerText: 'Cydippid', isCorrect: false },
    ],
  },
  {
    questionText: 'Which class of Coelenterata is commonly known as "true jellyfish"?',
    answerOptions: [
      { answerText: 'Hydrozoa', isCorrect: false },
      { answerText: 'Anthozoa', isCorrect: false },
      { answerText: 'Scyphozoa', isCorrect: true },
      { answerText: 'Calcarea', isCorrect: false },
    ],
  },
  {
    questionText: 'Corals and sea anemones belong to which class (where the medusa stage is completely absent)?',
    answerOptions: [
      { answerText: 'Hydrozoa', isCorrect: false },
      { answerText: 'Scyphozoa', isCorrect: false },
      { answerText: 'Demospongiae', isCorrect: false },
      { answerText: 'Anthozoa', isCorrect: true },
    ],
  },
  {
    questionText: 'How does the Portuguese Man of War (Physalia) stay afloat?',
    answerOptions: [
      { answerText: 'By rapidly beating its tentacles', isCorrect: false },
      { answerText: 'A gas gland inside the pneumatophore secretes gas', isCorrect: true },
      { answerText: 'By filling its coelenteron with low-density oil', isCorrect: false },
      { answerText: 'It attaches itself to floating seaweed', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the body form of a Hydra?',
    answerOptions: [
      { answerText: 'Exclusively medusa', isCorrect: false },
      { answerText: 'Elongated and cylindrical polyp', isCorrect: true },
      { answerText: 'Alternating between polyp and medusa', isCorrect: false },
      { answerText: 'A flat, bilaterally symmetrical form', isCorrect: false },
    ],
  },
  {
    questionText: 'Which of the following is NOT a method of locomotion for Hydra?',
    answerOptions: [
      { answerText: 'Somersaulting', isCorrect: false },
      { answerText: 'Gliding', isCorrect: false },
      { answerText: 'Jet propulsion using a siphon', isCorrect: true },
      { answerText: 'Looping', isCorrect: false },
    ],
  },
  {
    questionText: 'Where is the mouth located on a Hydra?',
    answerOptions: [
      { answerText: 'At the tip of the hypostome, surrounded by tentacles', isCorrect: true },
      { answerText: 'At the basal disc', isCorrect: false },
      { answerText: 'Inside the gastrovascular cavity', isCorrect: false },
      { answerText: 'On the aboral end', isCorrect: false },
    ],
  },
  {
    questionText: 'What level of organization are Coelenterates the FIRST animals to exhibit?',
    answerOptions: [
      { answerText: 'Cellular level', isCorrect: false },
      { answerText: 'Tissue level', isCorrect: true },
      { answerText: 'Organ level', isCorrect: false },
      { answerText: 'Organ-system level', isCorrect: false },
    ],
  }
];

const Coelenterata = () => {
  return (
    <div className="phylum-container coelenterata-theme">
      {/* Decorative background glow mimicking ocean water */}
      <div className="hero-glow"></div>

      <header className="phylum-header animate-fade-up" style={{ animationDelay: '0s' }}>
        <div className="badge-group">
          <div className="badge">Phylum 2</div>
          <div className="badge habitat">🌊 Exclusively Aquatic</div>
        </div>
        <h1 className="phylum-title">Coelenterata <span className="title-alt">(Cnidaria)</span></h1>
        <p className="phylum-subtitle">(Cnidos – needle/sting; Koilos – hollow; Enteron – intestine)</p>
        <p className="phylum-intro">
          Members of <strong>Coelenterata</strong>, commonly known as <strong>Cnidaria</strong>, are exclusively aquatic animals. About <strong>9,000 species</strong> of coelenterates are known worldwide. They are the first animals to show <strong>true tissue-level organization</strong> and are commonly called <strong>stinging animals</strong>.
        </p>
        <p className="phylum-intro-secondary">
          Most coelenterates are <strong>marine</strong>, though a few occur in <strong>freshwater</strong> habitats. They may be <strong>free-swimming or sessile</strong>, and can occur as <strong>solitary or colonial</strong> forms. Some corals provide habitat for a variety of marine organisms. The structure of the coral skeleton is similar to that of human bone; therefore, it is used as a <strong>bone graft substitute</strong>.
        </p>
        <p className="phylum-intro-tertiary">
          The scientific study of coelenterates is known as <strong>Cnidariology</strong>.
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
            <span className="feature-value">Tissue level of organisation</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Germ Layer</span>
            <span className="feature-value">
              <GlossaryTooltip term="Diploblastic" definition="Having a body derived from only two embryonic cell layers (ectoderm and endoderm).">
                Diploblastic
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Symmetry</span>
            <span className="feature-value">Radial symmetry</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Coelom</span>
            <span className="feature-value">Not present</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Plan</span>
            <span className="feature-value">Blind sac body plan</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Digestive System</span>
            <span className="feature-value">Incomplete digestive system; digestion is first extracellular and then intracellular</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Respiration</span>
            <span className="feature-value">Through body surface by simple diffusion</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Circulatory System</span>
            <span className="feature-value">Absent</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Circulation</span>
            <span className="feature-value">Gastrovascular cavity helps in distribution of food</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Osmoregulation</span>
            <span className="feature-value">Osmoconformers</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Excretion</span>
            <span className="feature-value">Metabolic wastes are expelled by simple diffusion through the body surface</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Mode of Excretion</span>
            <span className="feature-value">
              <GlossaryTooltip term="Ammonotelic" definition="Excreting nitrogenous waste primarily as ammonia.">
                Ammonotelic
              </GlossaryTooltip>
            </span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Skeleton</span>
            <span className="feature-value">Endoskeleton absent; corals possess calcareous exoskeleton</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Nervous System</span>
            <span className="feature-value">Diffuse nerve net formed by nerve cells</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Metamerism</span>
            <span className="feature-value">Absent</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Fertilization</span>
            <span className="feature-value">External fertilization</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Development</span>
            <span className="feature-value">Indirect development</span>
          </div>
          <div className="feature-card">
            <span className="feature-label">Body Temperature</span>
            <span className="feature-value">Poikilothermic</span>
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
              The name <strong>Cnidaria</strong> is derived from the Greek word <em>Cnidos</em>, meaning sting. They possess specialized stinging cells called 
              <GlossaryTooltip term="Cnidocytes" definition="Explosive cells containing a giant secretory organelle called a nematocyst, used for prey capture.">
                cnidocytes (or cnidoblasts)
              </GlossaryTooltip> containing <strong>nematocysts</strong>, present on the tentacles and body.
            </li>
            <li><strong>Cnidoblasts</strong> are used for <strong>anchorage, defense, and capture of prey</strong>.</li>
            <li><strong>Interstitial cells</strong> in cnidarians are <strong>undifferentiated and unspecialized</strong>.</li>
            <li>Many polypoid coelenterates secrete a <strong>calcareous (CaCO₃) skeleton</strong> that covers the body. These forms are called <strong>corals</strong>.</li>
          </ul>
        </div>
        <div className="image-content premium-image-wrapper">
           <div className="image-backdrop"></div>
           {/* Image placeholder */}
        </div>
      </section>

      <section className="phylum-section animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="section-title">
          <div className="title-icon-wrapper">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </div>
          Gastrovascular System & Body Forms
        </h2>
        <div className="info-banner mb-30">
          <div className="banner-icon">🌊</div>
          <div className="banner-text">
            The body encloses a cavity called the <strong>coelenteron (or gastrovascular cavity)</strong>, which opens to the outside through the <strong>mouth present on the hypostome</strong>. The prey captured with the help of cnidoblasts on the tentacles is directed into the gastrovascular cavity. Digestive juices released inside the cavity act on the ingested food, and enzymes help in its breakdown.
          </div>
        </div>

        <div className="forms-grid">
          <div className="form-card">
            <h3 className="form-title">The Two Zooids</h3>
            <p>Many coelenterates exhibit different morphological forms called <strong>zooids</strong>.</p>
            <p>Generally, two distinct types of zooids are seen: <strong>polyp</strong> and <strong>medusa</strong>.</p>
            <p>They differ structurally and functionally.</p>
          </div>
          <div className="form-card">
            <h3 className="form-title">Polymorphism & Metagenesis</h3>
            <p>In some coelenterates, a single species exists in more than one distinct morphological form. This phenomenon is called <strong>polymorphism</strong>.</p>
            <p>Some exist only in the <strong>polyp form</strong>. Some have the <strong>medusa as the dominant form</strong> in their life cycle (polyp may be absent or reduced). Some cnidarians exist in both forms (polyp and medusa).</p>
            <p>These animals show <strong>alternation of generations (metagenesis)</strong> in their life cycle.</p>
            <ul className="mini-list">
              <li>The polyp produces medusae <strong>asexually</strong> (by budding).</li>
              <li>The medusa produces polyps <strong>sexually</strong>.</li>
              <li>The life cycle includes a free-swimming larva such as the <strong>ciliated planula</strong> and <strong>ephyra</strong>.</li>
            </ul>
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
        <p className="classification-intro">Classification is based on the <strong>dominant morphological form (zooid)</strong> in the life cycle.</p>
        
        <div className="classification-cards">
          <div className="class-card theme-hydro">
            <div className="card-header">
              <div className="icon-wrapper">🌿</div>
              <h3>Class Hydrozoa</h3>
            </div>
            <ul className="card-list">
              <li>Hydrozoa include simple cnidarians in which the <strong>polyp form is usually dominant</strong>.</li>
              <li>Approximately <strong>3,000--3,500 species</strong> are known.</li>
              <li>Mostly <strong>marine</strong>, but a few are <strong>freshwater</strong>.</li>
              <li><strong>Metagenesis is present</strong>, and the <strong>polyp stage is dominant</strong>.</li>
              <li>Medusa stage may be small or absent in some forms.</li>
              <li>Many species are <strong>colonial</strong>.</li>
            </ul>
          </div>

          <div className="class-card theme-scypho">
            <div className="card-header">
              <div className="icon-wrapper">🪼</div>
              <h3>Class Scyphozoa</h3>
            </div>
            <ul className="card-list">
              <li>Scyphozoa are commonly known as <strong>true jellyfish</strong>, in which the <strong>medusa form is dominant</strong>.</li>
              <li>Approximately <strong>200--250 species</strong> are known.</li>
              <li>Exclusively <strong>marine</strong>.</li>
              <li><strong>Metagenesis is present</strong>, and the <strong>medusa stage is dominant</strong>.</li>
              <li>Polyp stage is reduced and temporary.</li>
            </ul>
          </div>

          <div className="class-card theme-antho">
            <div className="card-header">
              <div className="icon-wrapper">🪸</div>
              <h3>Class Anthozoa</h3>
            </div>
            <ul className="card-list">
              <li>Anthozoa include corals and sea anemones, in which <strong>only the polyp form is present</strong>.</li>
              <li>Approximately <strong>6,000--6,500 species</strong> are known.</li>
              <li>Exclusively <strong>marine</strong>.</li>
              <li><strong>Metagenesis is absent</strong>.</li>
              <li>Medusa stage is completely absent.</li>
              <li>Corals possess a <strong>hard calcareous skeleton composed of calcium carbonate (CaCO₃)</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- THINK FURTHER SECTION --- */}
      <section className="phylum-section think-further-section animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <h2 className="section-title">
          <div className="title-icon-wrapper highlight-icon">
             <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </div>
          Think Further: Unique Specimens
        </h2>
        
        <div className="think-further-grid">
          <div className="tf-card">
            <h3>Portuguese Man of War <span>(Physalia)</span></h3>
            <p>The <strong>Portuguese man of war</strong> exhibits a remarkable example of <strong>polymorphism and division of labour</strong>.</p>
            <p>It is a colonial hydrozoan in which different zooids perform different functions.</p>
            <div className="tf-fact">
              <strong>Floating Mechanism:</strong> A gas gland present inside the <strong>pneumatophore</strong> secretes gas, which helps the colony float on the water surface.
            </div>
          </div>

          <div className="tf-card">
            <h3>Hydra</h3>
            <p>The body of <strong>Hydra</strong> is represented by the <strong>polyp form</strong>, which is elongated and cylindrical.</p>
            <p>Locomotion in Hydra occurs by <strong>looping, somersaulting, gliding, walking, and floating</strong>.</p>
            <p>A piece of Hydra can regenerate into a complete individual if it contains parts of the <strong>epidermis, gastrodermis, and interstitial cells</strong>. The regenerated parts develop according to polarity; the region closer to the hypostome forms the oral end.</p>
            <p>The mouth is situated at the tip of the <strong>hypostome</strong>, surrounded by <strong>6--10 long, slender, contractile tentacles</strong>. This end is called the <strong>oral end</strong>.</p>
            <p>The opposite end is known as the <strong>aboral end</strong>. It is flat and helps the animal attach to the substratum; this region is called the <strong>basal disc</strong>.</p>
            <p>During asexual reproduction (budding), bud-like outgrowths arise from the body and eventually separate as young Hydra.</p>
            <p>During sexual reproduction, <strong>gonads form as small bulges</strong> on the body surface.</p>
          </div>
        </div>
      </section>

      {/* --- QUICK QUIZ COMPONENT --- */}
      <section className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
        {/* Using the Ocean Blue theme to match Coelenterata */}
        <QuickQuiz questions={coelenterataQuestions} themeColor="#3b82f6" /> 
      </section>

    </div>
  );
};

export default Coelenterata;