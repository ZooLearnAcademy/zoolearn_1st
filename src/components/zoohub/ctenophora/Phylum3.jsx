import React from "react";
import { useParams } from "react-router-dom";
import Phylum3Data from "./Phylum3Data.json";
import "./Phylum3.css";

const Phylum3 = () => {
  const { slug } = useParams();
  const data = Phylum3Data[slug];

  if (!data) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Species not found</h2>;
  }

  return (
    <div className="genus-sycon-container">

      {/* HEADER / HERO */}
      <div className="hero">
        <div className="hero-content">

          <div className="hero-text">
            <h1>
              {data.scientificName} <i>({data.name})</i>
            </h1>
            <p>
              <b>{data.description}</b>
            </p>
            
          </div>

          <div className="hero-image">
            {data.image && <img src={data.image} alt={data.name} />}
          </div>

        </div>
      </div>

      <section className="content-section">

        {/* INTRO */}
        <div className="card">
          <h2> Introduction</h2>
          <ul>
            {data.introduction.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* GENERAL FEATURES */}
        <div className="card">
          <h2>General features</h2>
          <ul>
            {data.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* SIZE + STRUCTURE WITH 3D */}
        <div className="card">
          <h2>📏 Size & Structure (with 3D View)</h2>

          <div className="side-by-side">

            <div>
              <ul>
                {data.sizeStructure.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="sketchfab-embed-wrapper">
              {data["3d"] && (
                <iframe
                  width="100%"
                  height="500"
                  frameborder="0"
                  allowfullscreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src={data["3d"]}
                  title={`${data.name} 3D Model`}
                ></iframe>
              )}
            </div>

          </div>
        </div>

        {/* CLASSIFICATION */}
        <div className="card">
          <h2>🧾 Classification</h2>
          <ul>
            {data.classification.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ECOLOGICAL IMPORTANCE */}
        <div className="card">
          <h2>🌍 Ecological Importance</h2>
          <ul>
            {data.ecology.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ECONOMICAL IMPORTANCE */}
        <div className="card">
          <h2>💰 Economic Importance</h2>
          <ul>
            {data.economy.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

      </section>

    </div>
  );
};

export default Phylum3;
