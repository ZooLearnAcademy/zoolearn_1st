import "./parasiticAdaptations.css";


const ParasiticAdaptations = () => {
  return (
    <section className="parasitic-section">
      <div className="parasitic-container">
        
        {/* HEADER */}
        <div className="parasitic-header">
          <h2 className="section-title">Parasitic Adaptations Of Leech</h2>
          {/* <div className="title-underline"></div> */}
        </div>

        <div className="parasitic-grid">
          
          {/* LEFT: TEXT & CARDS */}
          <div className="parasitic-content">
            
            {/* INTRO TEXT */}
            <div className="intro-card">
              <p className="intro-text">
                Leeches lead a parasitic mode of life by sucking the blood of vertebrates and show several important adaptations in their structure.
              </p>
            </div>

            {/* ADAPTATIONS GRID */}
            <div className="adaptations-list">
              
              {/* CARD 1 */}
              <div className="adaptation-card" style={{ animationDelay: "0.1s" }}>
                <div className="icon-box">🩸</div>
                <div className="card-info">
                  <h4 className="adaptation-title">Sucking blood;</h4>
                  <p>The pharynx is used to suck blood from the host.</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="adaptation-card" style={{ animationDelay: "0.2s" }}>
                <div className="icon-box">🧲</div>
                <div className="card-info">
                  <h4 className="adaptation-title">Firm Attachment;</h4>
                  <p>Suckers at both ends (anterior and posterior) help the leech stick to the host.</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="adaptation-card" style={{ animationDelay: "0.3s" }}>
                <div className="icon-box">🦷</div>
                <div className="card-info">
                  <h4 className="adaptation-title">Painless Bite;</h4>
                  <p>Three jaws create a Y-shaped wound that the host cannot feel.</p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="adaptation-card" style={{ animationDelay: "0.4s" }}>
                <div className="icon-box">🧪</div>
                <div className="card-info">
                  <h4 className="adaptation-title">No Clotting;</h4>
                  <p>Salivary glands produce hirudin, which keeps blood flowing by preventing it from clotting.</p>
                </div>
              </div>

              {/* CARD 5 */}
              <div className="adaptation-card" style={{ animationDelay: "0.5s" }}>
                <div className="icon-box">🚫</div>
                <div className="card-info">
                  <h4 className="adaptation-title">No Bristles;</h4>
                  <p>Locomotory structures like setae and parapodia are completely absent.</p>
                </div>
              </div>

              {/* CARD 6 */}
              <div className="adaptation-card" style={{ animationDelay: "0.6s" }}>
                <div className="icon-box">📦</div>
                <div className="card-info">
                  <h4 className="adaptation-title">Food Storage;</h4>
                  <p>Blood is stored in the crop, allowing the leech to survive for many months without a new meal.</p>
                </div>
              </div>

              {/* CARD 7 */}
              <div className="adaptation-card full-width-card" style={{ animationDelay: "0.7s" }}>
                <div className="icon-box">🥣</div>
                <div className="card-info">
                  <h4 className="adaptation-title">Simple Digestion;</h4>
                  <p>Because food is stored long-term, they do not need complex digestive juices or enzymes.</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: IMAGE */}
          <div className="parasitic-image-col">
            <div className="image-frame">
              <img 
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767810858/parasitic_cdkchf.png"
                alt="Parasitic Adaptations" 
                className="parasitic-img"
              />
              <span className="img-caption">Figure: Parasitic Mode</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParasiticAdaptations;