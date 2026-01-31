import React from "react";
import { Link } from "react-router-dom";
import "./Platyhelminthes.css";
import PlatyhelminthesData from "./PlatyhelminthesData.json";

const Platyhelminthes = () => {
  return (
    <div className="container">
      <header>
        <h1>Phylum Platyhelminthes</h1>
        <p className="subtitle">Exploring the Ancient Sponges</p>
      </header>

      {PlatyhelminthesData.map((category) => (
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

export default Platyhelminthes;
