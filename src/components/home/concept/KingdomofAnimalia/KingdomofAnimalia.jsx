import React, { useEffect, useRef, useState } from 'react';
import './KingdomofAnimalia.css';
import Slider from './Slider';
import Ctenophora from './Ctenophora';
// Import other phylum components here as you build them
import Porifera from './Porifera'; 
import Coelenterata from './Coelenterata'; 

const phylaData = [
  {
    year: "~350 BCE",
    name: "Aristotle (Ancient Greece): The Beginning",
    description: `The first major classifier was the philosopher Aristotle. He grouped animals based on how they looked and moved.
• He divided animals into two main groups: animals with blood (vertebrates) and animals without blood (invertebrates).
• He further subdivided them according to their mode of transportation, such as land, water, and air.
This system was used for centuries. However, it grouped bats with birds because both fly, and whales with fish because both swim. Today, we know these are not accurate biological relationships.`,
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/aristotle_e3sa7v.png"
  },
  {
    year: "1600s",
    name: "The Age of Exploration: The Expansion",
    description: `As Europeans traveled the world, they discovered thousands of new plants and animals.
The simple blood versus no blood system could not handle the growing volume of discoveries. Scientists needed a better way to organize and document biodiversity.
This period created the demand for a more structured and universal classification system.`,
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772184026/The-Age-of-Exploration_krfcmy.jpg"
  },
  {
    year: "1735",
    name: "Linnaeus: The Revolution",
    description: `Carl Linnaeus, a Swedish botanist, revolutionized biological classification. Although he believed species were fixed, he created the organizational system we still use today.
• Binomial Nomenclature: Every species was given a two-part Latin name (Genus and species), such as Homo sapiens.
• Hierarchical System: He introduced ranked categories including Kingdom, Class, Order, Genus, and Species.
Linnaeus grouped organisms based on overall similarity, not evolutionary history, but his structured system became the foundation of modern taxonomy.`,
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182705/carl_linnaeus_nyrcl6.png"
  },
  {
    year: "1859",
    name: "Darwin to Today: Shift to Evolution",
    description: `Everything changed after Charles Darwin proposed the theory of evolution by natural selection.
Scientists realized that similarities among organisms reflect shared ancestry.
• The focus shifted from simple organization to tracing evolutionary relationships (Phylogenetics).`,
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/darwin_wytd2o.png"
  },
  {
    year: "Present",
    name: "Modern Cladistics: DNA-Based Classification",
    description: `Modern cladistics represents the most advanced stage in biological classification.
Unlike earlier systems that grouped organisms based mainly on physical similarity, cladistics classifies organisms according to their evolutionary relationships and shared ancestry.
• It focuses on common derived characteristics (synapomorphies) that indicate shared evolutionary history.
• Organisms are arranged into clades, which include an ancestor and all of its descendants.
• Modern classification heavily relies on molecular data, especially DNA sequencing, to determine how closely species are related.
This approach has reshaped taxonomy. For example, birds are now recognized as a group within reptiles, and classification is based on evolutionary branching patterns rather than superficial traits like wings or fins.`,
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/dna_phylogeny.png"
  }
];

const AnimalKingdom = () => {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  
  // NEW STATE: Keeps track of which phylum is currently selected in the slider
  const [activePhylum, setActivePhylum] = useState("Porifera");

  // Handle Scroll Progress Line
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress based on middle of the screen
      let progress = ((windowHeight / 2) - containerTop) / containerHeight;
      progress = Math.max(0, Math.min(1, progress));
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Fade/Slide Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.timeline-item');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // NEW FUNCTION: Dynamically renders the correct component below the slider
  const renderPhylumContent = () => {
    switch (activePhylum) {
      case "Ctenophora":
        return <Ctenophora />;
      case "Porifera":
        return <Porifera />;
      case "Coelenterata":
        return <Coelenterata />;
      default:
        // A clean fallback for phyla that don't have components built yet
        return (
          <div style={{ padding: '100px 20px', textAlign: 'center', background: '#fdfdfd' }}>
            <h2 style={{ fontSize: '2rem', color: '#111' }}>{activePhylum} Anatomy</h2>
            <p style={{ color: '#666', marginTop: '10px' }}>Detailed content module coming soon.</p>
          </div>
        );
    }
  };

  return (
    <>
      <section className="zoolearn-section">
        <header className="zoolearn-header">
          <p className="zoolearn-domain">zoolearn.in</p>
          <h1 className="zoolearn-title">Kingdom Animalia</h1>
          <h2 className="zoolearn-subtitle">Classification of Animal Kingdom</h2>
        </header>

        <div className="timeline-container" ref={containerRef}>
          {/* Central Line Background */}
          <div className="timeline-line">
            {/* Central Line Progress Highlight */}
            <div 
              className="timeline-progress" 
              style={{ height: `${lineHeight}%` }}
            ></div>
          </div>

          {phylaData.map((phylum, index) => {
            const isEven = index % 2 === 0;

            return (
              <div className="timeline-item reveal-hidden" key={phylum.name}>
                
                {/* Left Pane */}
                <div className="timeline-pane pane-left">
                  {isEven ? (
                    <div className="content-group align-right">
                      <h3 className="phylum-name">{phylum.name}</h3>
                      <div className="phylum-image-wrapper">
                        <img src={phylum.img} alt={phylum.name} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="content-group text-only align-right">
                      <p className="phylum-desc">{phylum.description}</p>
                    </div>
                  )}
                </div>

                {/* Center Marker updated to use the year */}
                <div className="timeline-marker">
                  {phylum.year}
                </div>

                {/* Right Pane */}
                <div className="timeline-pane pane-right">
                  {!isEven ? (
                    <div className="content-group align-left">
                      <h3 className="phylum-name">{phylum.name}</h3>
                      <div className="phylum-image-wrapper">
                        <img src={phylum.img} alt={phylum.name} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="content-group text-only align-left">
                      <p className="phylum-desc">{phylum.description}</p>
                    </div>
                  )}
                </div>
                
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Pass the state updater function to the Slider */}
      <Slider onPhylumChange={setActivePhylum} />

      {/* Render the dynamically selected content directly below the slider */}
      {renderPhylumContent()}
    </>
  );
};

export default AnimalKingdom;