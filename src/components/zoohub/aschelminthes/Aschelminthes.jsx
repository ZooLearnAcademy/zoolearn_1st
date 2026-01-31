import React from "react";
import { Link } from "react-router-dom";
import "./Aschelminthes.css";
import AschelminthesData from "./AschelminthesData.json";

const Aschelminthes = () => {
  return (
    <div className="container">
      <header>
        <h1>Phylum Aschelminthes</h1>
        <p className="subtitle">Exploring the Ancient Sponges</p>
      </header>

      {AschelminthesData.map((category) => (
        <section key={category.id} className="class-section">

          <h2 className="class-heading">
            <div className="bord"></div>
            <span className="class-badge">Class</span>
            {category.className}
          </h2>

          <div className="species-grid">
            {category.species.map((animal) => (
              <Link
                key={animal.id}
                to={animal.path}
                className="species-card"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="species-image"
                />

                <div className="species-info">
                  <div>
                    <div className="species-name">{animal.name}</div>
                    <div className="species-name-scientific">
                      {animal.scientificName}
                    </div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Aschelminthes;
