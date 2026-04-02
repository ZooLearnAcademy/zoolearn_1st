import React, { useRef } from 'react';
import { ScrollReveal } from '../../../shared/ScrollReveal';
import './ClassificationHistory.css';

const phylaData = [
  {
    year: "~350 BCE",
    name: "Aristotle (Ancient Greece): The Beginning",
    description: "The first major classifier was the philosopher Aristotle. He grouped animals based on how they looked and moved.\n• He divided animals into two main groups: animals with blood (vertebrates) and animals without blood (invertebrates).\n• He further subdivided them according to their mode of transportation, such as land, water, and air.\nThis system was used for centuries. However, it grouped bats with birds because both fly, and whales with fish because both swim. Today, we know these are not accurate biological relationships.",
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/aristotle_e3sa7v.png"
  },
  {
    year: "1600s",
    name: "The Age of Exploration: The Expansion",
    description: "As Europeans traveled the world, they discovered thousands of new plants and animals.\nThe simple blood versus no blood system could not handle the growing volume of discoveries. Scientists needed a better way to organize and document biodiversity.\nThis period created the demand for a more structured and universal classification system.",
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772184026/The-Age-of-Exploration_krfcmy.jpg"
  },
  {
    year: "1735",
    name: "Linnaeus: The Revolution",
    description: "Carl Linnaeus, a Swedish botanist, revolutionized biological classification. Although he believed species were fixed, he created the organizational system we still use today.\n• Binomial Nomenclature: Every species was given a two-part Latin name (Genus and species), such as Homo sapiens.\n• Hierarchical System: He introduced ranked categories including Kingdom, Class, Order, Genus, and Species.\nLinnaeus grouped organisms based on overall similarity, not evolutionary history, but his structured system became the foundation of modern taxonomy.",
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182705/carl_linnaeus_nyrcl6.png"
  },
  {
    year: "1859",
    name: "Darwin to Today: Shift to Evolution",
    description: "Everything changed after Charles Darwin proposed the theory of evolution by natural selection.\nScientists realized that similarities among organisms reflect shared ancestry.\n• The focus shifted from simple organization to tracing evolutionary relationships (Phylogenetics).",
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/darwin_wytd2o.png"
  },
  {
    year: "Present",
    name: "Modern Cladistics: DNA-Based Classification",
    description: "Modern cladistics represents the most advanced stage in biological classification.\nUnlike earlier systems that grouped organisms based mainly on physical similarity, cladistics classifies organisms according to their evolutionary relationships and shared ancestry.\n• It focuses on common derived characteristics (synapomorphies) that indicate shared evolutionary history.\n• Organisms are arranged into clades, which include an ancestor and all of its descendants.\n• Modern classification heavily relies on molecular data, especially DNA sequencing, to determine how closely species are related.\nThis approach has reshaped taxonomy. For example, birds are now recognized as a group within reptiles, and classification is based on evolutionary branching patterns rather than superficial traits like wings or fins.",
    img: "https://res.cloudinary.com/duibfmcw1/image/upload/v1772182700/dna_phylogeny.png"
  }
];

const ClassificationHistory = ({ lineHeight, containerRef }) => {
  return (
    <div className="timeline-container-wrapper">
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
            <ScrollReveal key={phylum.name} animation="fade-up" delay={50} duration={800}>
              <div className="timeline-item">
                {/* Left Pane */}
                <div className="timeline-pane pane-left">
                  {isEven ? (
                    <div className="content-group align-right">
                      <h3 className="phylum-name">{phylum.name}</h3>
                      <div className="phylum-image-wrapper">
                        <div className="image-glow"></div>
                        <img src={phylum.img} alt={phylum.name} loading="lazy" />
                      </div>
                    </div>
                  ) : (
                    <div className="content-group text-only align-right">
                      <p className="phylum-desc">{phylum.description}</p>
                    </div>
                  )}
                </div>

                {/* Center Marker */}
                <div className="timeline-marker">
                  {phylum.year}
                </div>

                {/* Right Pane */}
                <div className="timeline-pane pane-right">
                  {!isEven ? (
                    <div className="content-group align-left">
                      <h3 className="phylum-name">{phylum.name}</h3>
                      <div className="phylum-image-wrapper">
                        <div className="image-glow"></div>
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
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
};

export default ClassificationHistory;
