import React, { useState, useEffect, useRef } from 'react';
import './KingdomofAnimalia.css';

// Import sub-components for Kingdom Animalia
import ClassificationHistory from './ClassificationHistory';
import Porifera from './Porifera';
import Coelenterata from './Coelenterata';
import Ctenophora from './Ctenophora';
import Platyhelminthes from './Platyhelminthes'; 
import Aschelminthes from './Aschelminthes';
import Annelida from './Annelida';
import Arthropoda from './Arthropoda';
import Mollusca from './Mollusca';
import Echinodermata from './Echinodermata';
import Hemichordata from './Hemichordata';
import Chordata from './Chordata';
import { ScrollReveal } from '../../../shared/ScrollReveal';

// Import newly generated images
import platyImg from '../../../../assets/images/KingdomAnimalia/platyhelminthes.png';
import aschImg from '../../../../assets/images/KingdomAnimalia/aschelminthes.png';
import anneImg from '../../../../assets/images/KingdomAnimalia/annelida.png';
import arthImg from '../../../../assets/images/KingdomAnimalia/arthropoda.png';
import mollImg from '../../../../assets/images/KingdomAnimalia/mollusca.png';
import echiImg from '../../../../assets/images/KingdomAnimalia/echinodermata.png';

const animaliaPhylaList = [
  { id: 0, title: "Classification History", name: "Classification History", des: "Aristotle (Ancient Greece): The Beginning. Aristotle was the earliest to attempt a more scientific basis for classification. He used simple morphological characters to classify plants into trees, shrubs and herbs. He also divided animals into two groups, those which had red blood and those that did not.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/512px-Aristotle_Altemps_Inv8575.jpg", theme: "#04AA6D" },
  { id: 1, title: "PHYLUM 1", name: "Porifera", des: "Commonly known as sponges. These are primitive, multicellular, marine animals with a porous body that filters water to obtain food and oxygen.", img: "https://images.unsplash.com/photo-1544078739-8fcbd3ec4e72?auto=format&fit=crop&q=80&w=2000", theme: "#fbbf24" },
  { id: 2, title: "PHYLUM 2", name: "Coelenterata", des: "Also known as Cnidaria (like Jellyfish and Corals). They are aquatic, mostly marine, with tentacles equipped with stinging cells called cnidoblasts.", img: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&q=80&w=2000", theme: "#3b82f6" },
  { id: 3, title: "PHYLUM 3", name: "Ctenophora", des: "Commonly known as sea walnuts or comb jellies. They are exclusively marine and move using eight external rows of ciliated comb plates.", img: "https://images.unsplash.com/photo-1615822396116-2de99d91ae61?auto=format&fit=crop&q=80&w=2000", theme: "#c084fc" },
  { id: 4, title: "PHYLUM 4", name: "Platyhelminthes", des: "The flatworms. They have a dorso-ventrally flattened body and are mostly endoparasites found in animals, including humans.", img: platyImg, theme: "#ef4444" },
  { id: 5, title: "PHYLUM 5", name: "Aschelminthes", des: "The roundworms (Nematoda). Their body is circular in cross-section. They can be free-living, aquatic, terrestrial, or parasitic.", img: aschImg, theme: "#84cc16" },
  { id: 6, title: "PHYLUM 6", name: "Annelida", des: "Segmented worms like earthworms and leeches. Their body surface is distinctly marked out into segments or metameres.", img: anneImg, theme: "#d97706" },
  { id: 7, title: "PHYLUM 7", name: "Arthropoda", des: "The largest phylum, including insects, spiders, and crustaceans. They have jointed appendages and a hard chitinous exoskeleton.", img: arthImg, theme: "#f97316" },
  { id: 8, title: "PHYLUM 8", name: "Mollusca", des: "The second largest animal phylum (snails, octopuses). They are soft-bodied animals usually covered by a calcareous shell.", img: mollImg, theme: "#0ea5e9" },
  { id: 9, title: "PHYLUM 9", name: "Echinodermata", des: "Spiny-bodied animals like starfish and sea urchins. They have an endoskeleton of calcareous ossicles and a unique water vascular system.", img: echiImg, theme: "#ec4899" },
  { id: 10, title: "PHYLUM 10", name: "Hemichordata", des: "A small group of worm-like marine animals, such as acorn worms. They have a cylindrical body composed of an anterior proboscis, a collar, and a trunk.", img: "https://images.unsplash.com/photo-1582967788600-aff3a5591031?q=80&w=2070&auto=format&fit=crop", theme: "#14b8a6" },
  { id: 11, title: "PHYLUM 11", name: "Chordata", des: "Animals with a notochord, a dorsal hollow nerve cord, and paired pharyngeal gill slits. This includes all vertebrates (fish, amphibians, reptiles, birds, mammals).", img: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=2069&auto=format&fit=crop", theme: "#8b5cf6" }
];

const AnimalKingdom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null); // Ref for timeline container
  const [lineHeight, setLineHeight] = useState(0); // Scrolled percentage for timeline

  // Scroll to the top of the window when a new tab is clicked
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentIndex === 0) setLineHeight(0); // Reset timeline progress on tab switch
  }, [currentIndex]);

  // Timeline Progress Scroll Handler
  useEffect(() => {
    if (currentIndex !== 0) return; // Only track for classification history

    const handleTimelineScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the timeline is scrolled past the top
      // 0% when top of container is at viewport middle, 100% when bottom is at viewport middle
      const scrollStart = viewportHeight / 2;
      const progress = ((scrollStart - top) / height) * 100;
      setLineHeight(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleTimelineScroll, { passive: true });
    handleTimelineScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleTimelineScroll);
  }, [currentIndex]);

  // Keep sidebar above the footer at all times
  useEffect(() => {
    const updateSidebarBottom = () => {
      const footer = document.querySelector('.foo-zl-footer');
      if (!footer || !sidebarRef.current) return;
      const footerTop = footer.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (footerTop < viewportHeight) {
        // Footer is visible — shrink sidebar so it ends at footer top
        sidebarRef.current.style.bottom = `${viewportHeight - footerTop}px`;
      } else {
        // Footer not visible yet — sidebar goes to viewport bottom
        sidebarRef.current.style.bottom = '0px';
      }
    };

    window.addEventListener('scroll', updateSidebarBottom, { passive: true });
    window.addEventListener('resize', updateSidebarBottom, { passive: true });
    updateSidebarBottom();
    return () => {
      window.removeEventListener('scroll', updateSidebarBottom);
      window.removeEventListener('resize', updateSidebarBottom);
    };
  }, []);

  const currentData = animaliaPhylaList[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < animaliaPhylaList.length - 1;

  const handleNext = () => setCurrentIndex(currentIndex < animaliaPhylaList.length - 1 ? currentIndex + 1 : currentIndex);
  const handlePrev = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);

  // Helper to render phylum-specific components or default content
  const renderPhylumContent = () => {
    switch(currentIndex) {
      case 0:
        return <ClassificationHistory lineHeight={lineHeight} containerRef={containerRef} />;
      case 1:
        return <Porifera />;
      case 2:
        return <Coelenterata />;
      case 3:
        return <Ctenophora />;
      case 4:
        return <Platyhelminthes />;
      case 5:
        return <Aschelminthes />;
      case 6:
        return <Annelida />;
      case 7:
        return <Arthropoda />;
      case 8:
        return <Mollusca />;
      case 9:
        return <Echinodermata />;
      case 10:
        return <Hemichordata />;
      case 11:
        return <Chordata />;
      default:
        return null;
    }
  };

  return (
    <div className="w3-layout-wrapper">
      <div className="w3-main-container">
        
        {/* LEFT SIDEBAR - Permanently Fixed Menu */}
        <aside className="w3-sidebar" ref={sidebarRef}>
          {/* Header Removed as per "menu bar no need that" */}

          {/* Progress */}
          <div className="w3-sidebar-progress">
            <div className="w3-progress-label">Exploration Progress</div>
            <div className="w3-progress-track">
              <div
                className="w3-progress-fill"
                style={{ width: `${((currentIndex + 1) / animaliaPhylaList.length) * 100}%` }}
              />
            </div>
            <div className="w3-progress-text">Topic {currentIndex + 1} of {animaliaPhylaList.length}</div>
          </div>
          <ul className="w3-sidebar-list">
            {animaliaPhylaList.slice(1).map((phylum, index) => (
              <li key={phylum.id}>
                <button
                  className={`w3-sidebar-btn ${currentIndex === (index + 1) ? 'w3-active-side' : ''}`}
                  onClick={() => setCurrentIndex(index + 1)}
                >
                  <span
                    className="w3-sidebar-dot"
                    style={{ background: phylum.theme }}
                  />
                  {phylum.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="w3-content">
          {currentIndex === 0 ? (
            <div className="timeline-header-section">
              <ScrollReveal animation="fade-down" delay={100} duration={800}>
                <span className="timeline-site-tag">ZOOLERN.IN</span>
                <h1 className="timeline-main-title">Kingdom Animalia</h1>
                <p className="timeline-subtitle">Classification of Animal Kingdom</p>
              </ScrollReveal>
            </div>
          ) : null}
          
          {/* Render Component-based or Default Content */}
          {renderPhylumContent()}

        </main>
      </div>
    </div>
  );
};

export default AnimalKingdom;