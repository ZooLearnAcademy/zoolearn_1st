import React, { useState, useEffect, useRef, useCallback } from 'react';
import './KingdomofAnimalia.css';

// Import sub-components for Kingdom Animalia
import Patterns from '../Patterns/Patterns';
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
import BasicFeatures from '../BasicFeatures/BasicFeatures';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import { SEO } from "../../../shared";

// Import newly generated images as string constants
const platyImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699118/zoolearn/assets/rdposdenokuwown2pnty.jpg';
const aschImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699113/zoolearn/assets/z8v5zwi6er5avlacn6ef.jpg';
const anneImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699111/zoolearn/assets/o5k5coib4jrmg3upmdyb.jpg';
const arthImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699112/zoolearn/assets/koo5yzjnlalvyrtny2sw.jpg';
const mollImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699116/zoolearn/assets/zhjjyyutidm2ucrfme5f.jpg';
const echiImg = 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783699114/zoolearn/assets/bkazfsbvpm6ccvpc5rsm.jpg';

const animaliaPhylaList = [
  { id: 0, title: "Basic Features", name: "Basic Features of Classification", des: "Fundamentals of animal classification", img: "", theme: "#f43f5e" },
  { id: 1, title: "Patterns of Complexity", name: "Patterns of Complexity", des: "Detailed study of internal organ systems, structure, and physiological functions (digestive, circulatory, respiratory, and reproductive systems) across different animal groups.", img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1770023197/b9631c1c-505d-4c10-b692-551a10c83014_woswgt.png", theme: "#04AA6D" },
  { id: 2, title: "PHYLUM 1", name: "Porifera", des: "Commonly known as sponges. These are primitive, multicellular, marine animals with a porous body that filters water to obtain food and oxygen.", img: "https://images.unsplash.com/photo-1544078739-8fcbd3ec4e72?auto=format&fit=crop&q=80&w=2000", theme: "#fbbf24" },
  { id: 3, title: "PHYLUM 2", name: "Coelenterata", des: "Also known as Cnidaria (like Jellyfish and Corals). They are aquatic, mostly marine, with tentacles equipped with stinging cells called cnidoblasts.", img: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&q=80&w=2000", theme: "#3b82f6" },
  { id: 4, title: "PHYLUM 3", name: "Ctenophora", des: "Commonly known as sea walnuts or comb jellies. They are exclusively marine and move using eight external rows of ciliated comb plates.", img: "https://images.unsplash.com/photo-1615822396116-2de99d91ae61?auto=format&fit=crop&q=80&w=2000", theme: "#c084fc" },
  { id: 5, title: "PHYLUM 4", name: "Platyhelminthes", des: "The flatworms. They have a dorso-ventrally flattened body and are mostly endoparasites found in animals, including humans.", img: platyImg, theme: "#ef4444" },
  { id: 6, title: "PHYLUM 5", name: "Aschelminthes", des: "The roundworms (Nematoda). Their body is circular in cross-section. They can be free-living, aquatic, terrestrial, or parasitic.", img: aschImg, theme: "#84cc16" },
  { id: 7, title: "PHYLUM 6", name: "Annelida", des: "Segmented worms like earthworms and leeches. Their body surface is distinctly marked out into segments or metameres.", img: anneImg, theme: "#d97706" },
  { id: 8, title: "PHYLUM 7", name: "Arthropoda", des: "The largest phylum, including insects, spiders, and crustaceans. They have jointed appendages and a hard chitinous exoskeleton.", img: arthImg, theme: "#f97316" },
  { id: 9, title: "PHYLUM 8", name: "Mollusca", des: "The second largest animal phylum (snails, octopuses). They are soft-bodied animals usually covered by a calcareous shell.", img: mollImg, theme: "#0ea5e9" },
  { id: 10, title: "PHYLUM 9", name: "Echinodermata", des: "Spiny-bodied animals like starfish and sea urchins. They have an endoskeleton of calcareous ossicles and a unique water vascular system.", img: echiImg, theme: "#ec4899" },
  { id: 11, title: "PHYLUM 10", name: "Hemichordata", des: "A small group of worm-like marine animals, such as acorn worms. They have a cylindrical body composed of an anterior proboscis, a collar, and a trunk.", img: "https://images.unsplash.com/photo-1582967788600-aff3a5591031?q=80&w=2070&auto=format&fit=crop", theme: "#14b8a6" },
  { id: 12, title: "PHYLUM 11", name: "Chordata", des: "Animals with a notochord, a dorsal hollow nerve cord, and paired pharyngeal gill slits. This includes all vertebrates (fish, amphibians, reptiles, birds, mammals).", img: "https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=2069&auto=format&fit=crop", theme: "#8b5cf6" }
];

// Import lucide icons for menu
import { Menu, X } from 'lucide-react';

const patternsTopics = [
  { key: 'digestive', title: 'Digestive System' },
  { key: 'respiratory', title: 'Respiratory System' },
  { key: 'circulatory', title: 'Circulatory System' },
  { key: 'excretory', title: 'Excretory System' },
  { key: 'skeletal', title: 'Skeletal System' },
  { key: 'metamerism', title: 'Metamerism (Segmentation)' },
  { key: 'nervous', title: 'Nervous System' },
  { key: 'reproductive', title: 'Reproductive System' },
  { key: 'fertilization', title: 'Fertilization' },
  { key: 'development', title: 'Development in Animals' },
  { key: 'temperature', title: 'Body Temperature Regulation' }
];

const AnimalKingdom = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null); // Ref for timeline container
  const [lineHeight, setLineHeight] = useState(0); // Scrolled percentage for timeline
  const [lightboxSrc, setLightboxSrc] = useState(null); // Lightbox modal image src
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [patternsProgress, setPatternsProgress] = useState({ current: 1, total: 11 });
  const [activeTab, setActiveTab] = useState('digestive');

  // Close menu when tab changes on mobile
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentIndex]);

  // Scroll to the top of the window when a new tab is clicked
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentIndex === 0) setLineHeight(0); // Reset timeline progress on tab switch
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex !== 1) return; // Only track for classification history

    const handleTimelineScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
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

  // Global lightbox event listener — any child img can dispatch 'zl:lightbox' to open
  useEffect(() => {
    const handleLightboxEvent = (e) => {
      if (e.detail && e.detail.src) {
        setLightboxSrc(e.detail.src);
        setLightboxAlt(e.detail.alt || '');
        document.body.style.overflow = 'hidden';
      }
    };
    window.addEventListener('zl:lightbox', handleLightboxEvent);
    return () => window.removeEventListener('zl:lightbox', handleLightboxEvent);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt('');
    document.body.style.overflow = '';
  }, []);

  const currentData = animaliaPhylaList[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < animaliaPhylaList.length - 1;

  const handleNext = () => setCurrentIndex(currentIndex < animaliaPhylaList.length - 1 ? currentIndex + 1 : currentIndex);
  const handlePrev = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : currentIndex);

  const renderPhylumContent = () => {
    switch(currentIndex) {
      case 0:
        return <BasicFeatures />;
      case 1:
        return <Patterns activeTab={activeTab} setActiveTab={setActiveTab} setPatternsProgress={setPatternsProgress} />;
      case 2:
        return <Porifera />;
      case 3:
        return <Coelenterata />;
      case 4:
        return <Ctenophora />;
      case 5:
        return <Platyhelminthes />;
      case 6:
        return <Aschelminthes />;
      case 7:
        return <Annelida />;
      case 8:
        return <Arthropoda />;
      case 9:
        return <Mollusca />;
      case 10:
        return <Echinodermata />;
      case 11:
        return <Hemichordata />;
      case 12:
        return <Chordata />;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Kingdom Animalia"
        description="Comprehensive guide to Kingdom Animalia. Discover the classification history, characteristics of major phyla, and in-depth study materials for Zoology."
        keywords="Kingdom Animalia, Animal Kingdom, Classification, Phylum, Zoology, Biology, Porifera, Chordata"
        canonicalUrl="/kingdom-animalia"
      />
      <div className="w3-layout-wrapper">
        <div className="w3-main-container">
        
        {/* MOBILE SIDEBAR OVERLAY */}
        <div 
          className={`w3-sidebar-overlay ${isMobileMenuOpen ? 'show' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* LEFT SIDEBAR - Permanently Fixed Menu */}
        <aside className={`w3-sidebar ${isMobileMenuOpen ? 'open' : ''}`} ref={sidebarRef}>

          <ul className="w3-sidebar-list">
            {/* Basic Features of Classification — item #0 */}
            <li key="ch-basic">
              <button
                className={`w3-sidebar-btn w3-sidebar-btn--history ${currentIndex === 0 ? 'w3-active-side' : ''}`}
                onClick={() => setCurrentIndex(0)}
              >
                <span className="w3-sidebar-dot" style={{ background: '#f43f5e' }} />
                Basic Features
              </button>
            </li>

            {/* Patterns of Complexity — item #1 */}
            <li key="ch-1">
              <button
                className={`w3-sidebar-btn w3-sidebar-btn--history ${currentIndex === 1 ? 'w3-active-side' : ''}`}
                onClick={() => setCurrentIndex(1)}
              >
                <span className="w3-sidebar-dot" style={{ background: '#04AA6D' }} />
                Patterns of Complexity
              </button>
            </li>

            {/* Learning Progress bar directly below Patterns of Complexity menu item (visible only when active) */}
            {currentIndex === 1 && (
              <li className="w3-sidebar-progress-item">
                <div className="w3-sidebar-progress">
                  <div className="w3-progress-label">Learning Progress</div>
                  <div className="w3-progress-track">
                    <div
                      className="w3-progress-fill"
                      style={{ width: `${(patternsProgress.current / patternsProgress.total) * 100}%` }}
                    />
                  </div>
                  <div className="w3-progress-text">
                    Topic {patternsProgress.current} of {patternsProgress.total}
                  </div>
                </div>
              </li>
            )}

            {/* Nested Topics List for Patterns of Complexity (visible only when active) */}
            {currentIndex === 1 && (
              <li className="w3-sidebar-nested-topics">
                <ul className="w3-nested-topics-list">
                  {patternsTopics.map((topic) => (
                    <li key={topic.key}>
                      <button
                        className={`w3-nested-topic-btn ${activeTab === topic.key ? 'w3-active-nested-topic' : ''}`}
                        onClick={() => setActiveTab(topic.key)}
                      >
                        <span className="w3-nested-topic-bullet" />
                        {topic.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            )}

            {/* Divider */}
            <li className="w3-sidebar-divider" aria-hidden="true" />

            {/* All 11 Phyla */}
            {animaliaPhylaList.slice(2).map((phylum) => (
              <li key={phylum.id}>
                <button
                  className={`w3-sidebar-btn ${currentIndex === phylum.id ? 'w3-active-side' : ''}`}
                  onClick={() => setCurrentIndex(phylum.id)}
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
          {/* Timeline header section removed */}
          
          {/* Render Component-based or Default Content */}
          {renderPhylumContent()}

        </main>
      </div>

      {/* ===== GLOBAL LIGHTBOX MODAL ===== */}
      {lightboxSrc && (
        <div
          className="zl-lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >
          <button className="zl-lightbox-close" onClick={closeLightbox} aria-label="Close">
            ✕
          </button>
          <div className="zl-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt={lightboxAlt} className="zl-lightbox-img" />
            {lightboxAlt && <p className="zl-lightbox-caption">{lightboxAlt}</p>}
          </div>
        </div>
      )}

      {/* ===== MOBILE MENU FAB ===== */}
      <button 
        className={`zl-mobile-menu-fab ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      </div>
    </>
  );
};

export default AnimalKingdom;