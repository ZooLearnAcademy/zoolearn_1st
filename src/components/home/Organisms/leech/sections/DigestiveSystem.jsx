import "./digestiveSystem.css";


const DigestiveSystem = () => {
  return (
    <section className="ds-digestive-section">
      <div className="ds-digestive-container">
        
        {/* MAIN HEADER */}
        <div className="ds-digestive-header">
          <h2 className="ds-section-title">Digestive System</h2>
          {/* <div className="ds-title-underline"></div> */}
        </div>

        {/* --- PART 1: ALIMENTARY CANAL (Text + Image) --- */}
        <div className="ds-alimentary-grid">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="ds-alimentary-content">
            <h3 className="ds-sub-heading">Alimentary Canal</h3>
            <p className="ds-intro-text">
              It is a straight tube running from the mouth to the anus.
            </p>

            <div className="ds-canal-steps">
              <div className="ds-step-card">
                <span className="ds-step-marker">Mouth</span>
                <p>
                  Triradiate aperture situated in the middle of the anterior sucker that leads into the small buccal cavity.
                </p>
              </div>

              <div className="ds-step-card">
                <span className="ds-step-marker">Buccal Cavity</span>
                <p>
                  The wall of the buccal cavity bears three jaws with single row of minute teeth.
                  The jaws are provided with papillae which bear the openings of salivary glands. Mouth and buccal cavity occupy the first five segments.
                  The buccal cavity leads into muscular pharynx.
                </p>
              </div>

              <div className="ds-step-card">
                <span className="ds-step-marker">Pharynx</span>
                <p>
                  It is surrounded by salivary glands. The secretion of saliva contains hirudin which prevents the coagulation of blood. Pharynx leads into crop through a short and narrow oesophagus.
                </p>
              </div>

              <div className="ds-step-card">
                <span className="ds-step-marker">Crop</span>
                <p>
                  Crop is the largest portion of the alimentary canal. It is divided into a series of 10 chambers.
                  The chambers communicate with one another through circular apertures surrounded by sphincters.
                  A pair of lateral, backwardly directed caecae arises as blind outgrowth from each chamber known as caeca or diverticula.
                  Crop and its diverticula can store large amount of blood which can be slowly digested.
                </p>
              </div>

              <div className="ds-step-card">
                <span className="ds-step-marker">Stomach & Intestine</span>
                <p>
                  The last chamber of crop opens into stomach. The stomach leads into intestine which is a small straight tube that opens into rectum. The rectum opens to the exterior by anus.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="ds-alimentary-image-col">
            <div className="ds-digestive-img-card">
              <img 
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767810737/digestivesystem_osipqw.png"
                alt="Digestive System of Leech" 
                className="ds-digestive-img"
              />
              <span className="ds-img-caption">Figure: Digestive System</span>
            </div>
            <div className="ds-facts-container ds-mt-section">
              <h3 className="ds-facts-title">Facts</h3>
              <div className="ds-facts-grid">
                <div className="ds-fact-card">
                  <div className="ds-fact-bullet">#</div>
                  <p>Leeches do not have ear, hence can sense vibrations through their skin.</p>
                </div>
                <div className="ds-fact-card">
                  <div className="ds-fact-bullet">#</div>
                  <p>Leeches have 2 to 10 tiny eyes, which helps them to locate their food.</p>
                </div>
                <div className="ds-fact-card">
                  <div className="ds-fact-bullet">#</div>
                  <p>Leeches can suck blood five times more than their body weight.</p>
                </div>
                <div className="ds-fact-card">
                  <div className="ds-fact-bullet">#</div>
                  <p>It may take more than a year for the complete digestion and absorption of a full meal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: FOOD, FEEDING & DIGESTION --- */}
        <div className="ds-feeding-section ds-mt-section">
          <h3 className="ds-sub-heading ds-center-text">Food, Feeding and Digestion</h3>
          
          <div className="ds-process-grid">
            <div className="ds-process-card">
              <div className="ds-process-icon">🩸</div>
              <p>It feeds by sucking the blood of cattle and other domestic animals.</p>
            </div>

            <div className="ds-process-card">
              <div className="ds-process-icon">🦷</div>
              <p>The leech makes a triradiate or in the skin of the host by the jaws protruded through the mouth.</p>
            </div>

            <div className="ds-process-card">
              <div className="ds-process-icon">💉</div>
              <p>The blood is sucked by muscular pharynx and the salivary secretion is poured.</p>
            </div>

            <div className="ds-process-card">
              <div className="ds-process-icon">📦</div>
              <p>The ingested blood is stored in crop chambers and its diverticulum.</p>
            </div>

            <div className="ds-process-card">
              <div className="ds-process-icon">⚗️</div>
              <p>The blood passes from the crop into the stomach. Digestion takes place in stomach by the action of proteolytic enzyme.</p>
            </div>

            <div className="ds-process-card">
              <div className="ds-process-icon">📉</div>
              <p>The digested blood is then absorbed slowly by the intestine. Undigested food is stored in rectum and egested through anus.</p>
            </div>

            <div className="ds-process-card ds-full-span">
              <div className="ds-process-icon">🛡️</div>
              <p>
                Leeches prevent blood clotting by secreting a protein called hirudin. 
                They also inject an anaesthetic substance that prevents the host from feeling their bite.
              </p>
            </div>
          </div>
        </div>

        {/* --- PART 3: SEGMENTATION DATA ---
        <div className="ds-segmentation-section ds-mt-section">
          <h3 className="ds-sub-heading ds-center-text">Segmentation of Leech</h3>
          <p className="ds-intro-text ds-center-text">
            The data given below shows the segments in which the external and internal structures are present.
          </p>

          <div className="ds-data-grid">
            <div className="ds-data-item">
              <span className="ds-data-label">Anterior Sucker, Mouth, Eyes</span>
              <span className="ds-data-value">1st – 5th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Pharynx</span>
              <span className="ds-data-value">5th – 8th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Crop</span>
              <span className="ds-data-value">9th – 18th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Stomach</span>
              <span className="ds-data-value">19th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Posterior sucker</span>
              <span className="ds-data-value">27th – 33rd segment</span>
            </div>
             <div className="ds-data-item">
              <span className="ds-data-label">Body segments</span>
              <span className="ds-data-value">33 segments</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Intestine</span>
              <span className="ds-data-value">10th – 22nd segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Rectum</span>
              <span className="ds-data-value">23rd – 26th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Anus</span>
              <span className="ds-data-value">26th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Nephridiopores</span>
              <span className="ds-data-value">6th – 22nd segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Male genital aperture</span>
              <span className="ds-data-value">10th segment</span>
            </div>
            <div className="ds-data-item">
              <span className="ds-data-label">Female genital aperture</span>
              <span className="ds-data-value">11th segment</span>
            </div>
          </div>
        </div> */}

        {/* --- PART 4: FACTS (HIGHLIGHTED) ---
        <div className="ds-facts-container ds-mt-section">
          <h3 className="ds-facts-title">Facts</h3>
          <div className="ds-facts-grid">
            <div className="ds-fact-card">
              <div className="ds-fact-bullet">#</div>
              <p>Leeches do not have ear, hence can sense vibrations through their skin.</p>
            </div>
            <div className="ds-fact-card">
              <div className="ds-fact-bullet">#</div>
              <p>Leeches have 2 to 10 tiny eyes, which helps them to locate their food.</p>
            </div>
            <div className="ds-fact-card">
              <div className="ds-fact-bullet">#</div>
              <p>Leeches can suck blood five times more than their body weight.</p>
            </div>
            <div className="ds-fact-card">
              <div className="ds-fact-bullet">#</div>
              <p>It may take more than a year for the complete digestion and absorption of a full meal.</p>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default DigestiveSystem;