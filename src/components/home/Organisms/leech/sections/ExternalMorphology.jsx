import "./externalMorphology.css";

const ExternalMorphology = () => {
  return (
    <section className="em-morphology-section">
      <div className="em-morphology-container">
        
        {/* HEADER with Animation */}
        <div className="em-morphology-header">
          <h2 className="em-morphology-title">External Morphology</h2>
          <div className="em-morphology-underline"></div>
        </div>

        {/* TOP SECTION: Split Layout (Image vs Text Stack) */}
        <div className="em-top-section-grid">
          
          {/* LEFT: IMAGE CARD (Tall) */}
          <div className="em-morphology-card em-image-card">
            <div className="em-image-wrapper">
              
              <img 
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767810830/morphology_sf7xd1.png"
                alt="External Morphology of Leech" 
                className="em-morphology-img"
              />
              <span className="em-image-caption">Figure: External Morphology</span>
            </div>
          </div>

          {/* RIGHT: STACKED TEXT CARDS */}
          <div className="em-right-stack">
            
            {/* CARD 1: Shape & Colour */}
            <div className="em-morphology-card em-text-card">
              <h3 className="em-card-title">Shape and Size</h3>
              <p className="em-card-text">
                The body of the leech is soft, elongated, vermiform (worm-like), and segmented.
                It may appear ribbon-shaped or cylindrical and can grow up to 35 cm in length.
              </p>

              <h3 className="em-card-title em-mt-4">Colour</h3>
              <ul className="em-morphology-list">
                <li><strong>Dorsal surface:</strong> Olive green</li>
                <li><strong>Ventral surface:</strong> Orange-yellow to orange-red</li>
              </ul>
              <p className="em-card-text em-highlight-text">
                This colour difference helps in camouflage and orientation.
              </p>
            </div>

            {/* CARD 2: Segmentation & Senses */}
            <div className="em-morphology-card em-text-card">
              <h3 className="em-card-title">Segmentation</h3>
              <p className="em-card-text">
                The body shows true metamerism and is divided into 33 segments.
                Each segment is further subdivided into smaller rings called annuli.
              </p>

              <h3 className="em-card-title em-mt-4">Sense Receptors</h3>
              <p className="em-card-text">
                The leech has five pairs of eyes located on the first five body segments.
                In addition, sensory projections called receptors are present:
              </p>
              <ul className="em-morphology-list">
                <li><strong>Annular receptors:</strong> Found on each annulus</li>
                <li><strong>Segmental receptors:</strong> Present on the first annulus of each segment</li>
              </ul>
              <p className="em-card-text em-highlight-text">
                These receptors help the leech detect light, touch, vibration, and chemical changes.
              </p>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: SUCKERS (Full Width) */}
        <div className="em-morphology-card em-full-width em-mt-layout">
          <h3 className="em-card-title">Suckers</h3>
          <p className="em-card-text">
            The leech possesses two suckers that help in attachment and movement.
          </p>
          
          <div className="em-sucker-grid">
            {/* Anterior */}
            <div className="em-sucker-item">
              <div className="em-sucker-badge">1</div>
              <h4>Anterior (oral) sucker</h4>
              <ul>
                <li>Located at the front end</li>
                <li>Ventral in position</li>
                <li>Occupies the first five segments</li>
                <li>Used for feeding and attachment</li>
              </ul>
            </div>

            {/* Posterior */}
            <div className="em-sucker-item">
              <div className="em-sucker-badge">2</div>
              <h4>Posterior sucker</h4>
              <ul>
                <li>Formed by the fusion of the last seven segments</li>
                <li>Helps in firm attachment and locomotion</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: APERTURES (Full Width List) */}
        <div className="em-morphology-card em-full-width em-mt-layout">
          <h3 className="em-card-title">External Apertures</h3>
          
          <div className="em-aperture-list-container">
            
            <div className="em-aperture-row">
              <div className="em-aperture-icon">👄</div>
              <div className="em-aperture-content">
                <span className="em-aperture-name">Mouth</span>
                <span className="em-aperture-desc">Present at the center of the anterior sucker</span>
              </div>
            </div>

            <div className="em-aperture-row">
              <div className="em-aperture-icon">◎</div>
              <div className="em-aperture-content">
                <span className="em-aperture-name">Anus</span>
                <span className="em-aperture-desc">A small opening on the mid-dorsal side of the 26th segment</span>
              </div>
            </div>

            <div className="em-aperture-row">
              <div className="em-aperture-icon">💧</div>
              <div className="em-aperture-content">
                <span className="em-aperture-name">Nephridiopores</span>
                <ul className="em-sub-list">
                  <li>17 pairs, opening ventrally</li>
                  <li>Located on the last annulus of segments 6 to 22</li>
                </ul>
              </div>
            </div>

            <div className="em-aperture-row">
              <div className="em-aperture-icon">♂</div>
              <div className="em-aperture-content">
                <span className="em-aperture-name">Male genital pore</span>
                <ul className="em-sub-list">
                  <li>Mid-ventral opening</li>
                  <li>Between the 2nd and 3rd annuli of the 10th segment</li>
                </ul>
              </div>
            </div>

            <div className="em-aperture-row">
              <div className="em-aperture-icon">♀</div>
              <div className="em-aperture-content">
                <span className="em-aperture-name">Female genital pore</span>
                <ul className="em-sub-list">
                  <li>Mid-ventral</li>
                  <li>Between the 2nd and 3rd annuli of the 11th segment</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExternalMorphology;