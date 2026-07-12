import React from 'react';
import './BodyPlans.css';

const BodyPlansPage = () => {
  const bodyPlans = [
    {
      id: 1,
      title: "Cell Aggregate Body Plan",
      description: "The simplest type of body organization, found in sponges (Phylum Porifera). The body is composed of loosely arranged cells with a basic division of labour. True tissues, organs, and organ systems are absent.",
      features: [
        "Each cell works independently",
        "No tissues or organs formed",
        "Basic division of labour among cells"
      ],
      example: "Sponges",
      icon: "",
      color: "#3498db",
      complexity: "Low",
      diagram: "cells"
    },
    {
      id: 2,
      title: "Blind Sac Body Plan",
      description: "Present in Cnidarians (Coelenterates), Ctenophores, and Platyhelminthes. These animals possess an incomplete digestive tract with a single opening that functions as both the mouth for food intake and the anus for the removal of undigested waste.",
      features: [
        "One opening acts as both mouth and anus",
        "Food enters and waste leaves through same opening",
        "Incomplete digestive tract"
      ],
      example: "Coelenterates, Platyhelminthes",
      icon: "",
      color: "#2ecc71",
      complexity: "Medium",
      diagram: "sac"
    },
    {
      id: 3,
      title: "Tube-Within-a-Tube Body Plan",
      description: "A more advanced body organization found in animals from Aschelminthes (Nematoda) to Chordates. The digestive tract forms a complete tube with two separate openings—a mouth for ingestion and an anus for egestion—allowing efficient digestion and continuous food movement.",
      features: [
        "Outer tube = body wall",
        "Inner tube = digestive tract",
        "Mouth and anus are separate"
      ],
      example: "Annelida, Arthropoda, Mollusca, Echinodermata, Chordata",
      icon: "",
      color: "#e74c3c",
      complexity: "High",
      diagram: "tube"
    }
  ];

  return (
    <div className="bodyplans-body-plans-page">
      {/* Body Plans Gallery */}
      <section className="bodyplans-bodyplans-section">
        <div className="bodyplans-section-header">
           <h2 className="bodyplans-section-title">Body Plans</h2>
           <p className="bodyplans-section-subtitle">Understanding the complexity of animal body organization</p>
        </div>

        <div className="bodyplans-bodyplans-gallery">
          {bodyPlans.map((plan) => (
            <div key={plan.id} className="bodyplans-bodyplan-card">
              <div className="bodyplans-card-glow" style={{ background: plan.color }}></div>
              
              <div className="bodyplans-card-header" style={{ background: plan.color }}>
                <div className="bodyplans-plan-icon">{plan.icon}</div>
                <h3 className="bodyplans-plan-title">{plan.title}</h3>
                <div className="bodyplans-complexity-tag">
                  <span className="bodyplans-complexity-dot"></span>
                  {plan.complexity} Complexity
                </div>
              </div>

              <div className="bodyplans-card-body">
                <p className="bodyplans-plan-description">{plan.description}</p>
                
                {/* Diagram Visualization */}
                <div className={`bodyplans-diagram bodyplans-diagram-${plan.diagram}`}>
                  {plan.diagram === 'cells' && (
                    <div className="bodyplans-cells-diagram">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bodyplans-cell" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  )}
                  {plan.diagram === 'sac' && (
                    <div className="bodyplans-sac-diagram">
                      <div className="bodyplans-sac-opening">⭕</div>
                      <div className="bodyplans-sac-cavity"></div>
                    </div>
                  )}
                  {plan.diagram === 'tube' && (
                    <div className="bodyplans-tube-diagram">
                      <div className="bodyplans-outer-tube"></div>
                      <div className="bodyplans-inner-tube"></div>
                      <div className="bodyplans-mouth-label">Mouth</div>
                      <div className="bodyplans-anus-label">Anus</div>
                    </div>
                  )}
                </div>

                <div className="bodyplans-features-list">
                  <h4 className="bodyplans-features-title">Key Features:</h4>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index} className="bodyplans-feature-item">
                        <span className="bodyplans-feature-marker">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bodyplans-example-box">
                  <span className="bodyplans-example-label">Examples:</span>
                  <span className="bodyplans-example-text">{plan.example}</span>
                </div>
              </div>

              <div className="bodyplans-card-footer">
                <span className="bodyplans-plan-number">0{plan.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BodyPlansPage;