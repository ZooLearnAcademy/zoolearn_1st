import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ArrowUp, CalendarDays, Heart, Tag,
  GitBranch, Bone, Utensils, Clock, List, Info, HelpCircle
} from 'lucide-react';
import './horse.css';

// Import Sections
import Adaptations from './sections/Adaptations';
import Transformation from './sections/Transformation';
import Taxonomy from './sections/Taxonomy';
import LivingDiversity from './sections/LivingDiversity';
import EvolutionTimeline from './sections/EvolutionTimeline';
import { SEO } from '../../shared';

export default function HorseEvolutionBlog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState('calc(100vh - 80px)');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState('horse-intro');
  const sidebarRef = useRef(null);

  const sections = [
    { id: 'horse-intro', label: 'Evolution of the Horse', icon: <Info size={18} /> },
    { id: 'adaptations', label: 'Anatomical Adaptations', icon: <Bone size={18} /> },
    { id: 'transformation', label: 'Interactive Transformation', icon: <Clock size={18} /> },
    { id: 'taxonomy', label: 'Equidae Taxonomy', icon: <Tag size={18} /> },
    { id: 'diversity', label: 'Living Diversity', icon: <List size={18} /> },
    { id: 'timeline', label: 'Evolution Timeline', icon: <GitBranch size={18} /> },
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerHeight = 90;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - headerHeight, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Scroll spy + sidebar visibility
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.foo-zl-footer');
      const banner = document.querySelector('.hor-hero-banner');
      const scrollPosition = window.scrollY;

      // Show sidebar when scrolled past banner
      if (banner) {
        const bannerBottom = banner.offsetHeight;
        setShowSidebar(scrollPosition > bannerBottom * 0.7);
      }

      setShowBackToTop(scrollPosition > 400);

      // Scroll spy: detect which section is in view
      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const rect = sectionEls[i].getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }

      // Sidebar footer collision
      if (!footer || !sidebarRef.current) return;
      const headerHeight = 80;
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (footerRect.top < viewportHeight) {
        const newHeight = Math.max(footerRect.top - headerHeight, 100);
        setSidebarHeight(`${newHeight}px`);
      } else {
        setSidebarHeight(`calc(100vh - ${headerHeight}px)`);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Progress calculation
  const currentIndex = sections.findIndex(s => s.id === activeSection);
  const progress = ((currentIndex + 1) / sections.length) * 100;

  return (
    <div className="hor-zoopage">
      <SEO 
        title="Evolution of the Horse: 55-Million-Year Journey | ZooLearn"
        description="Explore how climate shifts transformed Eohippus from a small forest dweller to the modern, single-toed Equus in our interactive horse evolution blog."
        keywords="Horse Evolution, Eohippus, Equidae, Equus, Hoof Evolution, Tooth Adaptation"
        canonicalUrl="/blog/horse-evolution"
      />

      {/* ─── HERO BANNER ─── */}
      <section className="hor-hero-banner" id="horse-intro">
        <div className="hor-hero-container">

          {/* LEFT: Text */}
          <div className="hor-hero-content">
            <span className="hor-taxonomy-tag">55 Million Years · Equidae History</span>
            <h1 className="hor-hero-title">Evolution of the Horse</h1>
            <p className="hor-hero-subtitle">The epic journey from forest dweller to open plain runner</p>

            <div className="hor-taxonomy-grid">
              <div className="hor-tax-item">
                <span className="hor-tax-label">Toes</span>
                <span className="hor-tax-value">4 down to 1</span>
              </div>
              <div className="hor-tax-item">
                <span className="hor-tax-label">Height</span>
                <span className="hor-tax-value">~1.5 m</span>
              </div>
              <div className="hor-tax-item">
                <span className="hor-tax-label">Habitat</span>
                <span className="hor-tax-value">Open Plains</span>
              </div>
              <div className="hor-tax-item">
                <span className="hor-tax-label">Family</span>
                <span className="hor-tax-value">Equidae</span>
              </div>
            </div>

            <p className="hor-hero-description">
              One of the most complete and spectacular records of evolutionary change in paleontology. 
              Witness the transformation of digits, teeth, and stature driven by a cooling Earth.
            </p>
          </div>

          {/* RIGHT: Hero Image */}
          <div className="hor-hero-visual">
            <div className="hor-hero-image-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1774341098/Equus_ferus_vk3fio.png"
                alt="Equus ferus — Modern Horse"
                className="hor-hero-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="hor-hero-bottom-fade"></div>

        {/* Scroll Indicator */}
        <div
          className="hor-scroll-indicator"
          onClick={() => scrollToSection('adaptations')}
        >
          <div className="hor-mouse"><div className="hor-wheel"></div></div>
          <div className="hor-arrow-down"></div>
        </div>
      </section>

      {/* ─── APP CONTAINER ─── */}
      <div className="hor-zoo-app-container">

        {/* MOBILE OVERLAY */}
        <div
          className={`hor-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* SIDEBAR */}
        <aside
          ref={sidebarRef}
          className={`hor-zoo-sidebar ${isMobileMenuOpen ? 'open' : ''} ${!showSidebar ? 'hidden' : ''}`}
          style={{ height: sidebarHeight }}
        >
          <div className="hor-sidebar-header">
            <div className="hor-progress-label">Reading Progress</div>
            <div className="hor-progress-track">
              <div className="hor-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <nav className="hor-sidebar-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`hor-nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span className="hor-nav-icon">{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="hor-zoo-main-content">

          {/* MOBILE TOGGLE */}
          <button
            className="hor-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>

          <div className="hor-content-card">

            {/* ── SECTION: Why Study Horse Evolution ── */}
            <section className="hor-blog-section">
              <h2 className="hor-section-heading">🐎 Why Study Horse Evolution?</h2>
              <div className="hor-section-box">
                <h3 className="hor-section-title">The Textbook Standard of Natural Selection</h3>
                <p className="hor-section-text">
                  The evolutionary lineage of horses (<strong>Equidae</strong>) is a classic example of micro- and macroevolution. Spanning nearly 55 million years, it provides clear, fossils-documented transitions showing how changes in the Earth's climate and vegetation directly shaped animal biology.
                </p>
                <p className="hor-section-text">
                  As the warm, wet forests of the Eocene epoch gradually cooled and dried into the vast, open grasslands of the Miocene and Pliocene, horse ancestors faced new challenges: running over hard soils to escape predators, and grinding tough, silica-filled grasses for sustenance.
                </p>

                <div className="hor-callout">
                  <strong>ℹ️ Orthogenesis vs. Branching Evolution</strong>
                  Older textbooks often drew horse evolution as a straight line from the tiny Eohippus to the large modern Equus. Today, we know that horse evolution was a highly branching, complex bush filled with dozens of co-existing species, side-branches, and dead-ends, of which Equus is simply the last surviving branch.
                </div>
              </div>
            </section>

            <div className="hor-section-divider" />

            {/* ── SECTION: Biological Marvels ── */}
            <section id="adaptations" className="hor-blog-section">
              <h2 className="hor-section-heading">🌟 Anatomical Adaptations</h2>
              <Adaptations />
            </section>

            <div className="hor-section-divider" />

            {/* ── SECTION: Interactive Transformation ── */}
            <section id="transformation" className="hor-blog-section">
              <h2 className="hor-section-heading">🔄 Interactive Transformation</h2>
              <Transformation />
            </section>

            <div className="hor-section-divider" />

            {/* ── SECTION: Taxonomy ── */}
            <section id="taxonomy" className="hor-blog-section">
              <h2 className="hor-section-heading">🏷️ Taxonomy</h2>
              <Taxonomy />
            </section>

            <div className="hor-section-divider" />

            {/* ── SECTION: Living Diversity ── */}
            <section id="diversity" className="hor-blog-section">
              <h2 className="hor-section-heading">🌍 Living Diversity</h2>
              <LivingDiversity />
            </section>

            <div className="hor-section-divider" />

            {/* ── SECTION: Evolution Timeline ── */}
            <section id="timeline" className="hor-blog-section">
              <h2 className="hor-section-heading">⏳ Evolution Timeline</h2>
              <EvolutionTimeline />
            </section>

          </div>
        </main>
      </div>

      {/* BACK TO TOP */}
      <button
        className={`hor-back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={22} />
      </button>

    </div>
  );
}
