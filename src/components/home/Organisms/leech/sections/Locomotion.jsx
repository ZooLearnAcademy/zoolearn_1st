import "./locomotion.css";


const Locomotion = () => {
  return (
    <section className="locomotion-section">
      <div className="locomotion-container">
        
        {/* HEADER */}
        <div className="locomotion-header">
          <h2 className="locomotion-title">Locomotion</h2>
          <div className="locomotion-underline"></div>
        </div>

        <div className="locomotion-grid">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="locomotion-text-col">
            <p className="locomotion-intro">
              Leeches move in two ways:
            </p>

            <div className="movement-cards">
              
              {/* MOVEMENT 1: LOOPING */}
              <div className="movement-card" style={{ animationDelay: "0.2s" }}>
                <div className="icon-box">🪱</div>
                <div className="movement-info">
                  <h3 className="movement-name">Looping / crawling</h3>
                  <div className="arrow-separator">→</div>
                  <p className="movement-desc">
                    by alternate attachment of anterior and posterior suckers
                  </p>
                </div>
              </div>

              {/* MOVEMENT 2: SWIMMING */}
              <div className="movement-card" style={{ animationDelay: "0.4s" }}>
                <div className="icon-box">🌊</div>
                <div className="movement-info">
                  <h3 className="movement-name">Swimming</h3>
                  <div className="arrow-separator">→</div>
                  <p className="movement-desc">
                    by wave-like (undulating) movements of the body in water
                  </p>
                </div>
              </div>

            </div>

            <div className="locomotion-footer">
              <p className="footer-note">
                Movement is controlled by muscle contraction and relaxation.
              </p>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="locomotion-image-col">
            <div className="image-frame">
              <img 
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767810794/leech_imk2bj.jpg"
                alt="Leech Locomotion" 
                className="locomotion-img"
              />
              <span className="img-label">Figure: Leech Movement</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locomotion;