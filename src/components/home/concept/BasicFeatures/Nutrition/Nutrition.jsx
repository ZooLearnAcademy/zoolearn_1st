import React, { useState } from "react";
import "./Nutrition.css";
import NutritionImage from "./Nutrition.png"; // Ensure this path matches your folder

const Nutrition = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="nutrition-section">
        <div className="nutrition-content">

          {/* Text Group 1 */}
          <div className="nutrition-text-group">
            <h2 className="nutrition-heading">Heterotrophic Nutrition</h2>
            <p className="nutrition-text">
              All animals are <strong>heterotrophs</strong>, meaning they cannot produce their own food and depend directly or indirectly on plants for nourishment. Based on their feeding habits, animals are classified as:
            </p>
            <ul className="nutrition-text" style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
              <li><strong>Herbivores:</strong> Animals that feed only on plant materials such as leaves, fruits, seeds, and grasses.</li>
              <li><strong>Carnivores:</strong> Animals that obtain their nutrition by feeding on other animals.</li>
              <li><strong>Omnivores:</strong> Animals that consume both plant and animal matter.</li>
            </ul>
          </div>

          {/* Text Group 2 */}
          <div className="nutrition-text-group">
            <h2 className="nutrition-heading">Holozoic Mode of Nutrition</h2>
            <p className="nutrition-text">
              Most animals exhibit <strong>holozoic nutrition</strong>, an animal-like mode of nutrition in which food is ingested in solid or liquid form, digested internally, absorbed, and assimilated by the body.
            </p>
          </div>

          {/* Image Container */}
          <div className="nutrition-image-container">
            <img
              src="https://res.cloudinary.com/duibfmcw1/image/upload/v1767627322/Nutrition_imjqgn.png"
              alt="Holozoic nutrition in Amoeba"
              onClick={() => setOpen(true)}
              title="Click to zoom"
            />
          </div>

        </div>
      </section>

      {/* Modal / Lightbox */}
      {open && (
        <div
          className="nutrition-modal-overlay"
          onClick={() => setOpen(false)}
        >
          <div
            className="nutrition-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="nutrition-close-btn"
              onClick={() => setOpen(false)}
            >
              &times;
            </span>

            <img
              src={NutritionImage}
              alt="Expanded nutrition diagram"
              className="nutrition-full-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Nutrition;