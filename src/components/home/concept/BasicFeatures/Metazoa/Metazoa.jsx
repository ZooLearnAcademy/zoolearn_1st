import React, { useMemo } from "react";
import "./Metazoa.css";

// Data extracted for clean component logic
const METAZOA_CONTENT = {
  title: "Metazoa",
  description: "Metazoa are multicellular, eukaryotic animals that exhibit holozoic nutrition. All members of Kingdom Animalia belong to the sub-kingdom Metazoa. Based on the level of body organization, Metazoa are further divided into two sub-kingdoms: Parazoa and Eumetazoa.",
  subLabel: "Sub-kingdoms of Metazoa",
  subKingdoms: [
    {
      id: "parazoa",
      title: "Parazoa",
      description: "Includes sponges (Phylum Porifera), where cells are loosely arranged and do not form true tissues or organs. Exhibits cellular level of organization with a simple division of labour among cells."
    },
    {
      id: "eumetazoa",
      title: "Eumetazoa",
      description: "Includes all animals except sponges, with cells organized into true tissues, organs, and organ systems. Further divided into Radiata (radial symmetry, diploblastic) and Bilateria (bilateral symmetry, triploblastic)."
    }
  ]
};

const Metazoa = () => {
  const content = useMemo(() => METAZOA_CONTENT, []);

  return (
    <section className="metazoa-section" aria-labelledby="metazoa-heading">
      <div className="metazoa-container">
        
        {/* HEADER */}
        <header className="metazoa-header">
          <h2 id="metazoa-heading" className="metazoa-title">
            {content.title}
          </h2>
          <p className="metazoa-description">
            {content.description}
          </p>
        </header>

        {/* CONTENT BLOCK */}
        <div className="metazoa-content">
          <h3 className="metazoa-subkingdoms-label">{content.subLabel}</h3>
          
          <div className="metazoa-cards-grid">
            {content.subKingdoms.map((item) => (
              <article key={item.id} className="metazoa-info-card">
                <div className="metazoa-card-header">
                  {/* <span className="card-badge" aria-hidden="true" /> */}
                  <h4 className="metazoa-card-title">{item.title}</h4>
                </div>
                <p className="metazoa-card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Metazoa;