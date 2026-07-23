import React, { useState } from 'react';
import './BodyPlans.css';

const bodyPlans = [
  {
    id: "01",
    title: "Cell Aggregate Body Plan",
    complexity: "Low Complexity",
    complexityClass: "low",
    badgeBg: "#e0f2fe",
    badgeColor: "#0369a1",
    accentColor: "#0f766e",
    description: "Organism made up of loosely arranged cells with no proper coordination. Every cell functions independently to carry out basic biological activities.",
    features: [
      "Each cell works independently with minimal intercellular coordination",
      "No true tissues or organs formed",
      "Cellular level of organization",
      "Water channel system facilitates nutrient diffusion"
    ],
    examples: ["Sponges (Porifera)"],
    image: "https://res.cloudinary.com/dstunh4mx/image/upload/v1783940315/Cell_Aggregate_Body_Plan_buoolm.jpg"
  },
  {
    id: "02",
    title: "Blind Sac Body Plan",
    complexity: "Medium Complexity",
    complexityClass: "medium",
    badgeBg: "#dcfce7",
    badgeColor: "#15803d",
    accentColor: "#0284c7",
    description: "Incomplete digestive system featuring a single gastrovascular opening that functions as both mouth and anus.",
    features: [
      "One opening acts as both mouth (ingestion) and anus (egestion)",
      "Bidirectional movement of food and digestive waste",
      "Digestion takes place in a sac-like gastrovascular cavity",
      "Tissue or organ level of organization"
    ],
    examples: ["Coelenterata (Cnidaria)", "Ctenophora", "Platyhelminthes (Flatworms)"],
    image: "https://res.cloudinary.com/dstunh4mx/image/upload/v1783940315/Blind_Sac_Body_Plan_y625wp.jpg"
  },
  {
    id: "03",
    title: "Tube-Within-a-Tube Body Plan",
    complexity: "High Complexity",
    complexityClass: "high",
    badgeBg: "#f3e8ff",
    badgeColor: "#7e22ce",
    accentColor: "#6d28d9",
    description: "Advanced body plan with a complete digestive tract having two separate openings (Mouth and Anus).",
    features: [
      "Outer tube = Body wall; Inner tube = Digestive tract (alimentary canal)",
      "Separate openings for ingestion (mouth) and egestion (anus)",
      "Unidirectional flow maximizes digestive and absorption efficiency",
      "Found in all higher invertebrates and chordates"
    ],
    examples: ["Aschelminthes", "Annelida", "Arthropoda", "Mollusca", "Echinodermata", "Chordata"],
    image: "https://res.cloudinary.com/dstunh4mx/image/upload/v1783940315/Tube-Within-a-Tube_Body_Plan_r8jim1.jpg"
  }
];

const BodyPlansPage = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="horizontal-bp-section">
      <div className="horizontal-bp-header">
        <h2 className="horizontal-bp-title">Body Plans</h2>
        <p className="horizontal-bp-subtitle">Understanding the complexity of animal body organization</p>
      </div>

      <div className="horizontal-bp-list">
        {bodyPlans.map((plan) => (
          <div key={plan.id} className="horizontal-bp-card" style={{ '--accent-color': plan.accentColor }}>
            
            {/* LEFT: DIAGRAM IMAGE */}
            <div 
              className="horizontal-bp-img-wrapper"
              onClick={() => setLightboxImage({ src: plan.image, title: plan.title })}
              title="Click to expand image"
            >
              <img src={plan.image} alt={plan.title} className="horizontal-bp-img" />
              <span className="horizontal-bp-zoom">🔍 Expand</span>
            </div>

            {/* RIGHT: CONTENT DETAILS */}
            <div className="horizontal-bp-content">
              <div className="horizontal-bp-top-bar">
                <span className="horizontal-bp-num">{plan.id}</span>
                <span className={`horizontal-bp-badge ${plan.complexityClass}`}>
                  {plan.complexity}
                </span>
              </div>

              <h3 className="horizontal-bp-card-title">{plan.title}</h3>
              <p className="horizontal-bp-card-desc">{plan.description}</p>

              <div className="horizontal-bp-features-box">
                <h4 className="horizontal-bp-features-heading">Key Features:</h4>
                <ul className="horizontal-bp-features-list">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <span className="horizontal-bp-bullet" style={{ background: plan.accentColor }}></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="horizontal-bp-examples-box">
                <span className="horizontal-bp-examples-label">Examples:</span>
                <div className="horizontal-bp-chips">
                  {plan.examples.map((ex, i) => (
                    <span key={i} className="horizontal-bp-chip">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div className="horizontal-bp-lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="horizontal-bp-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="horizontal-bp-lightbox-close" onClick={() => setLightboxImage(null)}>✕</button>
            <img src={lightboxImage.src} alt={lightboxImage.title} className="horizontal-bp-lightbox-img" />
            <p className="horizontal-bp-lightbox-caption">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyPlansPage;