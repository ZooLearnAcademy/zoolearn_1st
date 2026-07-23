import React from "react";
import "./LivingWorldIntro.css";


const LivingWorldIntro = () => {

  // Function to handle Smooth Scrolling
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="lwi-hero">
      <div className="lwi-hero-bg lwi-hero-bg-green"></div>
      <div className="lwi-hero-bg lwi-hero-bg-blue"></div>

      <div className="lwi-hero-container">
        {/* LEFT CONTENT */}
        <div className="lwi-hero-content">
          
          <h1 className="lwi-hero-title">The Living World</h1>

          <p className="lwi-hero-text">
            The living world consists of an enormous variety of organisms that inhabit diverse environments such as cold mountains, deciduous forests, oceans, deserts, and hot springs. Each distinct type of plant, animal, or microorganism is known as a species.
          </p>

          <p className="lwi-hero-text">
            Scientists have identified and described approximately 1.7–1.8 million species, representing the rich biodiversity of our planet. Biodiversity refers to the variety of living organisms present on Earth.
          </p>

           
        </div>

        {/* RIGHT IMAGE */}
        <div className="lwi-hero-image-wrapper">
          
          <img src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767809047/image_pwt5qp.png" alt="The Living World Illustration" />
          <div className="lwi-image-decoration"></div>
        </div>
      </div>
    </section>
  );
};

export default LivingWorldIntro;