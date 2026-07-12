import React, { memo, useState } from "react";
import "./LevelsOfOrganisation.css";

/* =======================
   DATA
======================= */
const LEVELS_DATA = [
  {
    id: "cellular",
    cardTitle: "CELLULAR LEVEL",
    cardLabel: "Loose cell aggregates",
    imageUrl:
      "https://res.cloudinary.com/duibfmcw1/image/upload/v1767811726/cellular_level_of_organiszation_dceufr.png",
    alt: "Diagram of loose cell aggregates",
    description:
      "Seen in sponges (Phylum Porifera), where cells are loosely arranged without forming true tissues. Different cells perform specific functions such as digestion and respiration.",
    examples: ["Porifera"]
  },
  {
    id: "tissue",
    cardTitle: "TISSUE LEVEL",
    cardLabel: "Cells form Tissue",
    imageUrl:
      "https://res.cloudinary.com/duibfmcw1/image/upload/v1767811726/tissue_level_of_organiszation_gikdnz.png",
    alt: "Microscopic view of epithelial tissue",
    description:
      "Found in coelenterates (cnidarians) and ctenophores, where similar cells are grouped together to form distinct tissues that carry out specific functions.",
    examples: ["Coelenterates", "Ctenophores"]
  },
  {
    id: "organ",
    cardTitle: "ORGAN LEVEL",
    cardLabel: "Tissues form Organs",
    imageUrl:
      "https://res.cloudinary.com/duibfmcw1/image/upload/v1767811725/organ_level_of_organiszation_qg95xt.png",
    alt: "Diagram of the heart organ",
    description:
      "First observed in Phylum Platyhelminthes, where different tissues combine to form organs that perform specialized physiological functions.",
    examples: ["Platyhelminthes"]
  },
  {
    id: "system",
    cardTitle: "ORGAN-SYSTEM LEVEL",
    cardLabel: "Organs form Systems",
    imageUrl:
      "https://res.cloudinary.com/duibfmcw1/image/upload/v1767811726/organ_system_level_of_organiszation_znh9a3.png",
    alt: "Diagram of the digestive system",
    description:
      "Present in animals from Annelida to Chordata, where multiple organs work together as organ systems, such as the digestive, circulatory, and respiratory systems.",
    examples: ["Aschelminthes to Chordates"]
  }
];

/* =======================
   HOVER CARD COMPONENT
======================= */
const HoverCard = memo(
  ({ label, title, imageUrl, alt, description, examples }) => {
    // 1. STATE: Keeps track if the card is open
    const [isFlipped, setIsFlipped] = useState(false);

    // 2. HANDLER: Toggle state on click
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <article 
        className={`loo-hover-card ${isFlipped ? "is-flipped" : ""}`}
        onClick={handleCardClick}
      >
        <div className="loo-card-inner">

          {/* FRONT (Image) */}
          <div className="loo-card-front">
            <div className="loo-visual-header">
              <p>{label}</p>
            </div>

            <figure className="loo-visual-figure">
              <img src={imageUrl} alt={alt} className="loo-visual-img" />
            </figure>

            <footer className="loo-visual-footer">{title}</footer>
          </div>

          {/* BACK (Details) */}
          <div className="loo-card-back">
            <h3>{title}</h3>
            <p>{description}</p>
            <span>
              <strong>Ex:</strong> {examples.join(", ")}
            </span>
          </div>

        </div>
      </article>
    );
  }
);

HoverCard.displayName = "HoverCard";

const ArrowIcon = () => (
  <div className="loo-arrow">
    <svg viewBox="0 0 24 24">
      <path
        d="M4 12H18M18 12L13 7M18 12L13 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/* =======================
   MAIN COMPONENT
======================= */
export default function LevelsOfOrganisation() {
  return (
    <section className="loo-section">
      <div className="loo-container">
        <h2 className="loo-heading">Level of Organization</h2>

        <div className="loo-diagram-row">
          {LEVELS_DATA.map((level, index) => (
            <React.Fragment key={level.id}>
              <HoverCard
                label={level.cardLabel}
                title={level.cardTitle}
                imageUrl={level.imageUrl}
                alt={level.alt}
                description={level.description}
                examples={level.examples}
              />
              {index < LEVELS_DATA.length - 1 && <ArrowIcon />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}