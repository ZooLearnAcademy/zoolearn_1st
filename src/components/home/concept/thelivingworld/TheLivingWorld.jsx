import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import { SEO } from "../../../shared";
import LivingWorldIntro from "./LivingWorldIntro/LivingWorldIntro";
import KingdomChart from "./circle/KingdomChart";
import LearnPage from "./Learnpage/LearnPage";
import Binomial from "./Binomial/Binomial";
import TaxonomyPage from "./pramid/TaxonomyPage";
import TaxonomySystematics from "./TaxonomySystematics/TaxonomySystematics";
import './TheLivingWorld.css';

const LearnTheLivingWorld = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState('calc(100vh - 13vh)');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const sidebarRef = useRef(null);

  // Scroll-based sidebar visibility and back to top button
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector('.lwi-hero');
      const scrollPosition = window.scrollY;

      if (banner) {
        const bannerBottom = banner.offsetHeight;
        setShowSidebar(scrollPosition > bannerBottom * 0.7);
      }

      setShowBackToTop(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const contentArea = document.querySelector('.tlw-zoo-main-content');
    if (contentArea) {
      const headerHeight = 80;
      const elementPosition = contentArea.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeTab]);

  // Track footer position and adjust sidebar height
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.foo-zl-footer');
      if (!footer || !sidebarRef.current) return;

      const footerRect = footer.getBoundingClientRect();

      const headerHeightVal = getComputedStyle(document.documentElement).getPropertyValue('--header-height').trim();
      let headerOffset = 0;
      if (headerHeightVal.endsWith('vh')) {
        headerOffset = window.innerHeight * (parseFloat(headerHeightVal) / 100);
      } else if (headerHeightVal.endsWith('px')) {
        headerOffset = parseFloat(headerHeightVal);
      } else {
        headerOffset = 100;
      }

      const viewportHeight = window.innerHeight;

      if (footerRect.top < viewportHeight) {
        const newHeight = Math.max(footerRect.top - headerOffset, 100);
        setSidebarHeight(`${newHeight}px`);
      } else {
        setSidebarHeight(`calc(100vh - ${headerHeightVal})`);
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

  // ─────────────────────────────────────────────────
  // CONTENT DATA
  // ─────────────────────────────────────────────────
  const contentData = {
    introduction: {
      title: "Introduction",
      sections: [
        {
          heading: "Need for Identification of Organisms",
          text: "Different regions and languages often use different local names for the same plant or animal, which can lead to confusion. To avoid this, every organism must be accurately identified and scientifically described so that it is recognized by the same identity worldwide. This process of recognizing and distinguishing an organism based on its characteristics is known as identification."
        },
        {
          heading: "Nomenclature",
          text: "Nomenclature is the system of assigning standardized scientific names to living organisms so that each organism is recognized by the same name worldwide. An organism can be given a scientific name only after it has been correctly identified."
        },
        {
          heading: "Scientific Names and International Codes",
          text: "To ensure uniformity in naming, biologists follow internationally accepted rules while assigning scientific names to organisms. These rules are established through the following international codes:",
          content: [
            "ICBN (International Code of Botanical Nomenclature): Provides the principles and rules for naming plants.",
            "ICZN (International Code of Zoological Nomenclature): Establishes the rules for naming animals.",
            "These international codes ensure that each organism has a unique scientific name and that the same name is not assigned to any other known organism, allowing scientists around the world to communicate accurately and consistently."
          ]
        },
        {
          heading: "Binomial Nomenclature",
          text: "Binomial nomenclature is the scientific system of naming organisms developed by Carolus Linnaeus. In this system, every organism is assigned a two-word scientific name consisting of the generic name (genus) and the specific epithet (species). This standardized naming system is followed by biologists worldwide.",
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1767809416/tiger_y9orpy.jpg",
          imageCaption: "Binomial Nomenclature: A two-part scientific naming system (Genus + Species) used for classifying organisms."
        },
        {
          heading: "Rules of Binomial Nomenclature",
          text: "The scientific naming of organisms follows a set of internationally accepted rules:",
          content: [
            "Latin Origin: Scientific names are generally Latin or Latinized and are written in italics, regardless of their original language.",
            "Two Components: A scientific name consists of two words — the first word represents the genus (generic name), and the second word represents the specific epithet.",
            "Format: When printed, scientific names are written in italics. When handwritten, each word is underlined separately.",
            "Capitalization: The genus name begins with a capital letter. The specific epithet begins with a small letter. Example: Mangifera indica.",
            "Author Citation: The abbreviated name of the scientist who first described the species is written after the scientific name. Example: Mangifera indica Linn."
          ]
        },
        {
          heading: "Classification",
          text: "Since it is impossible to study every living organism individually, scientists classify organisms into groups based on their observable similarities and differences. This process makes the study of the vast diversity of life more systematic, organized, and easier to understand."
        },
        {
          heading: "Taxa and Taxon",
          text: "The categories used in biological classification are called taxa (singular: taxon). A taxon represents a unit or rank of classification. Different taxa exist at different hierarchical levels. For example, Animalia, Mammalia, and Canis are all taxa, but each represents a different level in the classification hierarchy."
        },
        {
          heading: "Taxonomy & Systematics",
          text: "Taxonomy is the branch of biology concerned with the identification, characterization, nomenclature, and classification of living organisms. Organisms are classified into different taxa based on their characteristics.",
          content: [
            "Modern taxonomy uses information from: External morphology, Internal anatomy, Cell structure, Developmental (embryological) features, Ecological characteristics.",
            "The four basic processes of taxonomy are: Characterization, Identification, Classification, Nomenclature."
          ],
          image: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784797806/Taxonomy_ct9vhb.png",
          imageCaption: "Taxonomy & Systematics: Four basic processes and characteristics used in biological classification."
        },
        {
          heading: "History of Taxonomy",
          text: "The study of taxonomy has existed since ancient times. Early humans classified plants and animals mainly according to their uses, such as for food, clothing, shelter, and medicine. As biological knowledge expanded, these simple systems gradually evolved into the scientific classification methods used today."
        },
        {
          heading: "Systematics",
          text: "Systematics is the branch of biology that studies the diversity of organisms and their evolutionary relationships. The term is derived from the Latin word systema, meaning the systematic arrangement of organisms.",
          content: [
            "Carolus Linnaeus used the title Systema Naturae for his landmark publication on the classification of living organisms.",
            "Modern systematics includes: Identification, Nomenclature, Classification, Study of evolutionary relationships among organisms."
          ]
        }
      ]
    },

    taxonomicCategories: {
      title: "Taxonomic Categories",
      sections: [
        {
          heading: "Taxonomic Hierarchy",
          text: "Living organisms are classified into different groups based on their similarities and differences. These groups are arranged in a hierarchical order, known as the taxonomic hierarchy.",
          content: [
            "Each level in this hierarchy is called a taxon (plural: taxa), and every taxon represents a specific rank in biological classification.",
            "As we move from species to kingdom, organisms become more diverse and share fewer common characteristics.",
            "On the other hand, organisms in the lower categories share a greater number of similarities.",
            "The taxonomic hierarchy consists of the following seven categories: Species → Genus → Family → Order → Class → Phylum (Division in plants) → Kingdom"
          ],
          customContent: (
            <div style={{ marginTop: '1.5rem' }}>
              <TaxonomyPage />
            </div>
          )
        },
        {
          heading: "Comparison Table",
          table: {
            headers: ["Common Name", "Biological Name", "Genus", "Family", "Order", "Class", "Phylum / Division"],
            rows: [
              ["Man", "Homo sapiens", "Homo", "Hominidae", "Primata", "Mammalia", "Chordata"],
              ["Housefly", "Musca domestica", "Musca", "Muscidae", "Diptera", "Insecta", "Arthropoda"],
              ["Mango", "Mangifera indica", "Mangifera", "Anacardiaceae", "Sapindales", "Dicotyledonae", "Angiospermae"],
              ["Wheat", "Triticum aestivum", "Triticum", "Poaceae", "Poales", "Monocotyledonae", "Angiospermae"]
            ]
          }
        }
      ]
    },

    taxonomicalAids: {
      title: "Taxonomical Aids",
      sections: [
        {
          heading: "Overview",
          text: "Taxonomical aids are tools and resources that help scientists identify, classify, and study living organisms accurately. They provide reliable information about different species and support research, conservation, and education.",
          content: [
            "Some of the most commonly used taxonomical aids are herbaria, botanical gardens, museums, zoological parks, and taxonomic keys."
          ]
        },
        {
          heading: "1. Herbarium",
          text: "An herbarium is a collection of dried and preserved plant specimens used for plant identification and scientific study. It serves as a permanent record of plant diversity and is one of the most important resources for botanists.",
          iconImage: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784783822/photo_1_2026-07-23_10-36-47_l934bv.jpg",
          content: [
            "Preparation — Plant specimens are collected from their natural habitat. They are carefully pressed, dried, and mounted on herbarium sheets. The sheets are arranged according to a standard system of plant classification.",
            "Each herbarium sheet contains: Scientific name, Common or local name, Plant family, Place of collection, Date of collection, Name of the collector.",
            "Importance — Helps in the identification of plants. Provides a permanent record of plant species. Supports taxonomic research and biodiversity studies. Useful for comparing newly collected plants with previously preserved specimens."
          ]
        },
        {
          heading: "2. Botanical Gardens",
          text: "A botanical garden is a place where living plants are grown, maintained, and displayed for scientific study, conservation, and education. These gardens preserve a wide variety of plant species under carefully managed conditions.",
          iconImage: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784783822/photo_1_2026-07-23_10-36-47_l934bv.jpg",
          content: [
            "Features — Plants are grown in their natural or suitable environmental conditions. Each plant is labeled with its scientific name, common name, and family. They play an important role in the conservation of rare and endangered plant species.",
            "Importance — Helps in plant identification and research. Conserves plant biodiversity through ex-situ conservation. Provides educational opportunities for students and researchers. Supports the introduction and study of economically important plants."
          ],
          examples: [
            "Royal Botanic Gardens, Kew (England)",
            "Indian Botanic Garden, Howrah",
            "National Botanical Research Institute (Lucknow)"
          ]
        },
        {
          heading: "3. Museum",
          text: "A museum is a collection of preserved plant and animal specimens used for education, research, and reference. Museums are commonly found in schools, colleges, universities, and research institutions.",
          iconImage: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784783823/photo_3_2026-07-23_10-36-47_rvskxv.jpg",
          content: [
            "Preservation Methods — Plant and animal specimens are preserved in jars containing suitable preservatives. Insects are collected, pinned, and stored in insect boxes. Large animals such as birds and mammals are preserved by taxidermy (stuffing). Skeletons are also displayed for anatomical studies.",
            "Importance — Helps students understand the diversity of living organisms. Provides specimens for scientific observation and comparison. Preserves valuable biological collections for future research."
          ]
        },
        {
          heading: "4. Zoological Parks",
          text: "A zoological park, commonly known as a zoo, is a protected place where live wild animals are maintained under human care in conditions similar to their natural habitats.",
          iconImage: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784783823/photo_4_2026-07-23_10-36-47_ouxykm.jpg",
          content: [
            "Features — Animals are housed in spacious enclosures designed to resemble their natural environment. Proper food, healthcare, and protection are provided. Animals can be observed throughout their life cycle.",
            "Importance — Helps scientists study animal behaviour, feeding habits, and reproduction. Contributes to the conservation of endangered species. Creates awareness about wildlife conservation. Provides educational opportunities for students and visitors."
          ]
        },
        {
          heading: "5. Key",
          text: "A taxonomic key is a scientific tool used to identify unknown organisms based on their observable characteristics. A key consists of a series of paired statements called couplets. Each statement within a couplet is known as a lead.",
          iconImage: "https://res.cloudinary.com/duibfmcw1/image/upload/v1784783823/photo_5_2026-07-23_10-36-47_gyzalq.jpg",
          content: [
            "By selecting the statement that matches the specimen and rejecting the other, the correct identity of the organism can be determined.",
            "Features — Based on similarities and differences between organisms. Uses paired contrasting characters for identification. Separate keys are prepared for different taxonomic categories such as family, genus, and species.",
            "Importance — Enables accurate identification of organisms. Simplifies the classification process. Widely used by taxonomists, researchers, and students."
          ]
        }
      ]
    }
  };

  const tabKeys = Object.keys(contentData);
  const currentIndex = tabKeys.indexOf(activeTab);
  const prevTabKey = currentIndex > 0 ? tabKeys[currentIndex - 1] : null;
  const nextTabKey = currentIndex < tabKeys.length - 1 ? tabKeys[currentIndex + 1] : null;

  return (
    <>
      <SEO
        title="The Living World"
        description="Learn about the diversity of living organisms, taxonomy, systematics, binomial nomenclature, taxonomic categories, and taxonomical aids."
        keywords="Living World, Taxonomy, Binomial Nomenclature, Biology, Zoology, Systematics, Taxonomic Categories, Taxonomical Aids"
        canonicalUrl="/living-world"
      />
      <div className="tlw-zoo-page" id="tlw-living-world">

        {/* HERO BANNER */}
        <LivingWorldIntro />

        {/* SIDEBAR + CONTENT LAYOUT */}
        <div className="tlw-zoo-app-container">

          <div
            className={`tlw-sidebar-overlay ${isMobileOpen ? 'tlw-open' : ''}`}
            onClick={() => setIsMobileOpen(false)}
          ></div>

          <div
            ref={sidebarRef}
            className={`tlw-zoo-sidebar ${isMobileOpen ? 'tlw-open' : ''} ${!showSidebar ? 'tlw-sidebar-hidden' : ''}`}
            style={{ height: sidebarHeight }}
          >
            <div className="tlw-sidebar-header">
              <button
                className="tlw-mobile-close-btn"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="tlw-progress-bar">
              <div className="tlw-progress-label">Learning Progress</div>
              <div className="tlw-progress-track">
                <div
                  className="tlw-progress-fill"
                  style={{ width: `${((currentIndex + 1) / tabKeys.length) * 100}%` }}
                />
              </div>
              <div className="tlw-progress-text">
                Topic {currentIndex + 1} of {tabKeys.length}
              </div>
            </div>

            <nav className="tlw-sidebar-nav" aria-label="Topic navigation">
              {Object.keys(contentData).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setIsMobileOpen(false);
                  }}
                  className={`tlw-nav-btn ${activeTab === key ? 'tlw-active' : ''}`}
                  aria-label={`Navigate to ${contentData[key].title}`}
                  aria-current={activeTab === key ? 'page' : undefined}
                >
                  <span>{contentData[key].title}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="tlw-zoo-main-content">

            {/* Floating Menu Button for Mobile */}
            <button
              className="tlw-mobile-fab"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>

            <div className="tlw-content-card">

              <div className="tlw-content-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <h2 className="tlw-header-title">{contentData[activeTab].title}</h2>
                </div>

                <div className="tlw-header-nav-buttons" style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem' }}>
                  {prevTabKey && (
                    <button
                      className="tlw-nav-action-btn tlw-prev-btn"
                      onClick={() => setActiveTab(prevTabKey)}
                      title="Previous Topic"
                      aria-label={`Previous: ${contentData[prevTabKey].title}`}
                      style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                    >
                      &larr; Prev
                    </button>
                  )}
                  {nextTabKey && (
                    <button
                      className="tlw-nav-action-btn tlw-next-btn"
                      onClick={() => setActiveTab(nextTabKey)}
                      title="Next Topic"
                      aria-label={`Next: ${contentData[nextTabKey].title}`}
                      style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                    >
                      Next &rarr;
                    </button>
                  )}
                </div>
              </div>

              {/* SECTIONS FOR ALL TABS WITH INTEGRATED INTERACTIVE VISUALS */}
              <div className="tlw-sections-wrapper">
                {contentData[activeTab].sections.map((section, index) => (
                  <ScrollReveal
                    key={index}
                    animation="fade-up"
                    delay={index * 50}
                    duration={500}
                  >
                    <div
                      className="tlw-content-section"
                      style={{
                        marginLeft: section.isSubSubtopic ? '2.5rem' : section.isSubtopic ? '1.25rem' : '0',
                        borderLeft: (section.isSubtopic || section.isSubSubtopic) ? '3px solid #e5e7eb' : 'none',
                        paddingLeft: (section.isSubtopic || section.isSubSubtopic) ? '1.25rem' : '1.75rem'
                      }}
                    >
                      {/* Icon image for taxonomical aids */}
                      {section.iconImage ? (
                        <div className="tlw-aid-icon-wrapper">
                          <img
                            src={section.iconImage}
                            alt={section.heading}
                            className="tlw-aid-icon"
                            loading="lazy"
                          />
                          <div className="tlw-aid-title-text">
                            <span className="tlw-section-marker" />
                            {section.heading}
                          </div>
                        </div>
                      ) : (
                        <h3
                          className="tlw-section-title"
                          style={(section.isSubtopic || section.isSubSubtopic) ? { fontSize: '1.05rem', color: '#4b5563' } : {}}
                        >
                          <span
                            className="tlw-section-marker"
                            style={(section.isSubtopic || section.isSubSubtopic) ? { height: '0.875rem', background: '#9ca3af' } : {}}
                          ></span>
                          {section.heading}
                        </h3>
                      )}

                      {/* Render imageRight images BEFORE content so float works */}
                      {section.image && section.imageRight && (
                        <figure className="tlw-section-image-wrapper tlw-image-right">
                          <img
                            src={section.image}
                            alt={section.heading}
                            className="tlw-section-image tlw-clickable-image"
                            loading="lazy"
                            onClick={() => setLightboxImage({ src: section.image, alt: section.heading, caption: section.imageCaption || section.heading })}
                          />
                          <figcaption className="tlw-image-caption">
                            {section.imageCaption || (section.heading && <><span className="tlw-figure-label">Figure:</span> {section.heading}</>)}
                          </figcaption>
                        </figure>
                      )}

                      {section.text && (
                        <p className="tlw-section-text">{section.text}</p>
                      )}

                      {section.content && (
                        <ul className="tlw-section-list">
                          {section.content.map((item, i) => (
                            <li key={i} className="tlw-list-item">
                              <span className="tlw-bullet-dot"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.customContent && (
                        <div className="tlw-section-custom">
                          {section.customContent}
                        </div>
                      )}

                      {/* Render non-imageRight images after content (default) */}
                      {section.image && !section.imageRight && (
                        <figure className="tlw-section-image-wrapper">
                          <img
                            src={section.image}
                            alt={section.heading}
                            className="tlw-section-image tlw-clickable-image"
                            loading="lazy"
                            onClick={() => setLightboxImage({ src: section.image, alt: section.heading, caption: section.imageCaption || section.heading })}
                          />
                          <figcaption className="tlw-image-caption">
                            {section.imageCaption || (section.heading && <><span className="tlw-figure-label">Figure:</span> {section.heading}</>)}
                          </figcaption>
                        </figure>
                      )}

                      {/* Clear float for imageRight sections */}
                      {section.imageRight && <div style={{ clear: 'both' }} />}

                      {section.table && (
                        <div className="tlw-table-container">
                          <div className="tlw-table-swipe-hint">
                            <span>← Swipe to see more →</span>
                          </div>
                          <table className="tlw-zoo-table">
                            <thead>
                              <tr>
                                {section.table.headers.map((header, hIndex) => (
                                  <th key={hIndex}>{header}</th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {section.table.rows.map((row, rIndex) => (
                                <tr key={rIndex}>
                                  {row.map((cell, cIndex) => (
                                    <td key={cIndex}>{cell}</td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {section.examples && (
                        <div className="tlw-example-block">
                          <span className="tlw-example-label">Examples</span>
                          <ul className="tlw-example-list">
                            {section.examples.map((ex, i) => (
                              <li key={i}>{ex}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="tlw-navigation-footer">
                {prevTabKey ? (
                  <button
                    className="tlw-nav-action-btn tlw-prev-btn"
                    onClick={() => setActiveTab(prevTabKey)}
                  >
                    &larr; Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {nextTabKey && (
                  <button
                    className="tlw-nav-action-btn tlw-next-btn"
                    onClick={() => setActiveTab(nextTabKey)}
                  >
                    Next &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BACK TO TOP BUTTON */}
        <button
          className={`tlw-back-to-top ${showBackToTop ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to Top"
        >
          <ArrowUp size={24} />
        </button>

        {/* IMAGE LIGHTBOX MODAL */}
        {lightboxImage && (
          <div className="tlw-lightbox-overlay" onClick={() => setLightboxImage(null)}>
            <button
              className="tlw-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <div className="tlw-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                className="tlw-lightbox-image"
              />
              {lightboxImage.caption && (
                <p className="tlw-lightbox-caption">{lightboxImage.caption}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LearnTheLivingWorld;