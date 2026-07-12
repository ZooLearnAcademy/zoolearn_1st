import React from "react";
import "./Intro.css";

const BasicFeaturesIndex = () => {

  // Function to handle Smooth Scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Offset matches height of sticky headers if you have them, 
      // otherwise 'start' aligns it to the top.
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="intro-hero">
      {/* Background glows */}
      <div className="intro-hero-bg intro-hero-bg-green"></div>
      <div className="intro-hero-bg intro-hero-bg-blue"></div>

      <div className="intro-hero-container">
        {/* LEFT CONTENT */}
        <div className="intro-hero-content">
          <h1 className="intro-hero-title">
            Kingdom Animalia
          </h1>

          <p className="intro-hero-text">
            <strong>Kingdom Animalia</strong> includes a vast and diverse group of <strong>multicellular</strong>, <strong>eukaryotic</strong>, and <strong>heterotrophic</strong> organisms. Unlike plants, animal cells <strong>lack a cell wall</strong>.
          </p>

          <p className="intro-hero-text">
            Most animals exhibit <strong>holozoic nutrition</strong>, in which food is ingested, digested, and absorbed inside the body.
          </p>

          <p className="intro-hero-text">
            Higher animals possess well-developed <strong>sense organs</strong> and <strong>neuromuscular systems</strong>, enabling them to respond to environmental stimuli and interact with their surroundings.
          </p>

          <p className="intro-hero-text">
            Most animals are capable of <strong>locomotion</strong>, while some simple forms, such as sponges, remain permanently attached to a surface (<strong>sessile</strong>).
          </p>

          <div className="intro-hero-actions">

            {/* Navigation Buttons */}
            {/* <div className="intro-hero-sub-actions intro-secondary-row">

              <button
                className="intro-btn-secondary"
                onClick={() => scrollToSection("levels-section")}
              >
                Level of Organization
              </button>

              <button
                className="intro-btn-secondary"
                onClick={() => scrollToSection("symmetry-section")}
              >
                Body Symmetry
              </button>

              <button
                className="intro-btn-secondary"
                onClick={() => scrollToSection("germ-section")}
              >
                Germ Layer
              </button>

              <button
                className="intro-btn-secondary"
                onClick={() => scrollToSection("coelom-section")}
              >
                Coelom
              </button>

              <button
                className="intro-btn-secondary"
                onClick={() => scrollToSection("taxonomy-section")}
              >
                Classification of Tree
              </button>

            </div> */}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-hero-image">
          <img
            alt="Basic Features of Classification"
            src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767810735/1000083461-removebg-preview_pmodrn.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BasicFeaturesIndex;