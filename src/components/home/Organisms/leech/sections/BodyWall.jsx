import React, { useState, useRef, useEffect } from 'react';
import './BodyWall.css'; 

const anatomyParts = [
  { id: 'bw-cuticle', name: 'Cuticle', description: 'A thin, non-cellular, protective outer covering that is periodically shed. It acts as the first line of defense against physical injury and pathogens.', y: 20, height: 15, patternId: 'bw-pattern-cuticle', color: '#475569' },
  { id: 'bw-epidermis', name: 'Epidermis', description: 'A single layer of living columnar cells that secretes the cuticle. It contains numerous gland cells that produce mucus to keep the skin moist.', y: 35, height: 40, patternId: 'bw-pattern-epidermis', color: '#ef4444' },
  { id: 'bw-dermis', name: 'Dermis', description: 'A thick layer of fibrous connective tissue. It houses blood capillaries, pigment cells (chromatophores), and sensory nerve endings.', y: 75, height: 45, patternId: 'bw-pattern-dermis', color: '#f97316' },
  { id: 'bw-muscular', name: 'Muscular Layer', description: 'Comprises powerful circular and longitudinal muscles. Their coordinated contractions enable the leech to perform its characteristic looping movement.', y: 120, height: 60, patternId: 'bw-pattern-muscular', color: '#b91c1c' },
  { id: 'bw-botryoidal', name: 'Botryoidal Tissue', description: 'A unique connective tissue filling the reduced coelom. It is highly vascularized and plays a vital role in excretion and iron storage.', y: 180, height: 70, patternId: 'bw-pattern-botryoidal', color: '#9333ea' }
];

function BodyWall() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [hoveredPart, setHoveredPart] = useState(null);
  const [showAllLabels, setShowAllLabels] = useState(false);
  
  const sidebarRef = useRef(null);

  const activePartId = selectedPart || hoveredPart;
  const displayPart = anatomyParts.find(p => p.id === activePartId);
  
  const visibleParts = showAllLabels 
    ? anatomyParts 
    : (activePartId ? [anatomyParts.find(p => p.id === activePartId)] : []);

  useEffect(() => {
    if (selectedPart && window.innerWidth < 1024 && sidebarRef.current) {
      sidebarRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedPart]);

  // Unified Toggle Logic: Clicking a selected part deselects it (Mobile & Desktop)
  const handlePartClick = (partId) => {
    if (selectedPart === partId) {
      setSelectedPart(null);
    } else {
      setSelectedPart(partId);
    }
  };

  return (
    <div className="bw-app-container">
      <div className="bw-container">
        {/* --- MAIN DIAGRAM AREA --- */}
        <div className="bw-main-content">
          <header>
            <div className="bw-header-tag">
              <div className="bw-pulse-dot"></div>
              <span className="bw-tag-text">Microscopic Analysis</span>
            </div>
            <h1>Integumentary System</h1>
            <p className="bw-description">Interactive histological cross-section of a Leech (Hirudinea) body wall structure.</p>
          </header>

          <div className="bw-diagram-wrapper">
            <div className="bw-control-bar">
              <span className="bw-tag-text">Cross-section View</span>
              <button 
                className={`bw-btn-toggle ${showAllLabels ? 'bw-active' : ''}`}
                onClick={() => setShowAllLabels(!showAllLabels)}
              >
                {showAllLabels ? 'Hide Labels' : 'View All Labels'}
              </button>
            </div>

            <div className="bw-svg-container">
              <svg viewBox="0 0 480 280">
                <defs>
                  <marker id="bw-arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#000000" /> 
                  </marker>
                   
                  <pattern id="bw-pattern-cuticle" x="0" y="0" width="100" height="10" patternUnits="userSpaceOnUse">
                    <rect width="100" height="10" fill="#cbd5e1" />
                    <line x1="0" y1="5" x2="100" y2="5" stroke="#475569" strokeWidth="1.5" />
                  </pattern>

                  <pattern id="bw-pattern-epidermis" x="0" y="0" width="20" height="40" patternUnits="userSpaceOnUse">
                    <rect width="20" height="40" fill="#fecaca" stroke="#ef4444" strokeWidth="0.5" />
                    <circle cx="10" cy="20" r="4" fill="#b91c1c" fillOpacity="0.6" />
                  </pattern>

                  <pattern id="bw-pattern-dermis" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <rect width="30" height="30" fill="#fed7aa" />
                    <path d="M0 10 Q 15 0, 30 10 M0 20 Q 15 30, 30 20" fill="none" stroke="#ea580c" strokeWidth="1" />
                  </pattern>

                  <pattern id="bw-pattern-muscular" x="0" y="0" width="100" height="12" patternUnits="userSpaceOnUse">
                    <rect width="100" height="12" fill="#fca5a5" />
                    <line x1="0" y1="4" x2="100" y2="4" stroke="#991b1b" strokeWidth="1.5" strokeOpacity="0.4" />
                  </pattern>

                  <pattern id="bw-pattern-botryoidal" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="#d8b4fe" />
                    <circle cx="10" cy="10" r="6" fill="#6b21a8" fillOpacity="0.3" />
                  </pattern>
                </defs>

                {anatomyParts.map((part) => (
                  <rect
                    key={part.id}
                    x="20"
                    y={part.y}
                    width="300"
                    height={part.height}
                    rx="2"
                    fill={`url(#${part.patternId})`}
                    className={`bw-tissue-layer ${selectedPart === part.id ? 'bw-selected' : ''} ${selectedPart && selectedPart !== part.id ? 'bw-dimmed' : ''}`}
                    onClick={() => handlePartClick(part.id)}
                    onMouseEnter={() => setHoveredPart(part.id)}
                    onMouseLeave={() => setHoveredPart(null)}
                  />
                ))}

                {visibleParts.map(part => (
                  <g key={part.id}>
                    <line x1="325" y1={part.y + part.height / 2} x2="365" y2={part.y + part.height / 2} stroke="#000000" strokeWidth="1.5" markerEnd="url(#bw-arrowhead)" />
                    <text x="375" y={part.y + part.height / 2} className="bw-svg-label">{part.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        <div className={`bw-sidebar ${selectedPart ? 'bw-active' : ''}`} ref={sidebarRef}>
          <div className="bw-sidebar-content">
            <h2 className="bw-sidebar-title">Structural Data</h2>
             
            {displayPart ? (
              <div className="bw-info-card">
                 <div className="bw-info-header-row">
                   <div className="bw-color-indicator" style={{backgroundColor: displayPart.color}}></div>
                </div>
                 
                <h3 className="bw-info-name">{displayPart.name}</h3>
                <p className="bw-info-desc">{displayPart.description}</p>
              </div>
            ) : (
              <div className="bw-empty-state">
                <p>Tap a layer above to view details.</p>
              </div>
            )}
          </div>

          <div className="bw-footer-info">
            <div className="bw-footer-row">
              <span>Specimen</span>
              <span className="bw-footer-val bw-specimen-name">H. medicinalis</span>
            </div>
            <div className="bw-footer-row">
              <span>Magnification</span>
              <span className="bw-footer-val">100x Nominal</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BodyWall;