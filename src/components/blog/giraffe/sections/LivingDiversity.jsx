import React from 'react';

const species = [
  {
    name: 'Masai Giraffe',
    scientific: 'Giraffa tippelskirchi',
    status: 'Vulnerable',
    statusColor: '#eab308',
    image: '/div_masai.png'
  },
  {
    name: 'Northern Giraffe',
    scientific: 'Giraffa camelopardalis',
    status: 'Critically Endangered',
    statusColor: '#dc2626',
    image: '/div_northern.png'
  },
  {
    name: 'Reticulated Giraffe',
    scientific: 'Giraffa reticulata',
    status: 'Endangered',
    statusColor: '#ea580c',
    image: '/div_reticulated.png'
  },
  {
    name: 'Southern Giraffe',
    scientific: 'Giraffa giraffa',
    status: 'Least Concern',
    statusColor: '#16a34a',
    image: '/div_southern.png'
  }
];

export default function LivingDiversity() {
  return (
    <div className="gir-living-diversity-section">
      <div className="gir-section-box">
        <h3 className="gir-section-title">Living Diversity: The Four Living Species</h3>
        <p className="gir-section-text">
          Genomic science revealed what the eye long suspected — these are not one species, 
          but four distinct lineages with unique identities.
        </p>
      </div>

      <div className="gir-diversity-grid">
        {species.map((sp, i) => (
          <div key={i} className="gir-div-card">
            <div className="gir-div-image-container">
              <img
                src={sp.image}
                alt={`${sp.name} — ${sp.scientific}`}
                className="gir-div-img"
                loading="lazy"
              />
            </div>
            <div className="gir-div-overlay">
              <span className="gir-div-status" style={{ backgroundColor: sp.statusColor }}>
                {sp.status}
              </span>
              <div className="gir-div-content">
                <h4>{sp.name}</h4>
                <em>{sp.scientific}</em>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
