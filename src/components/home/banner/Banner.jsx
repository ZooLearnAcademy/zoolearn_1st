import { useEffect, useState, useMemo } from "react";
import "./Banner.css";
import CountUp from "../../shared/CountUp";

import poriferaData from "../../zoohub/porifera/poriferaData.json";
import coelenterataData from "../../zoohub/coelenterata/CoelenterataData.json";
import ctenophoraData from "../../zoohub/ctenophora/ctenophoradata.json";
import platyhelminthesData from "../../zoohub/platyhelminthes/Platyhelminthesdata.json";
import aschelminthesData from "../../zoohub/aschelminthes/AschelminthesData.json";
import annelidaData from "../../zoohub/annelida/AnnelidaData.json";
import arthropodaData from "../../zoohub/arthropoda/ArthropodaData.json";
import molluscaData from "../../zoohub/mollusca/MolluscaData.json";
import echinodermataData from "../../zoohub/echinodermata/EchinodermataData.json";
import hemichordataData from "../../zoohub/hemichordata/HemichordataData.json";
import chordataData from "../../zoohub/chordata/ChordataData.json";

const extractImages = (data) => {
  let images = [];
  if (Array.isArray(data)) {
    data.forEach(cls => {
      if (cls.species && Array.isArray(cls.species)) {
        cls.species.forEach(sp => {
          if (sp.image) {
            images.push(sp.image);
          }
        });
      }
    });
  }
  return images;
};

const phylumData = {
  Porifera: extractImages(poriferaData),
  Coelenterata: extractImages(coelenterataData),
  Ctenophora: extractImages(ctenophoraData),
  Platyhelminthes: extractImages(platyhelminthesData),
  Aschelminthes: extractImages(aschelminthesData),
  Annelida: extractImages(annelidaData),
  Arthropoda: extractImages(arthropodaData),
  Mollusca: extractImages(molluscaData),
  Echinodermata: extractImages(echinodermataData),
  Hemichordata: extractImages(hemichordataData),
  Chordata: extractImages(chordataData)
};

function generatePhylumPlaylist() {
  const phylums = Object.keys(phylumData);
  const pools = {};
  let maxLen = 0;
  
  phylums.forEach(phylum => {
    pools[phylum] = [...phylumData[phylum]].sort(() => Math.random() - 0.5);
    if (pools[phylum].length > maxLen) {
      maxLen = pools[phylum].length;
    }
  });

  const playlist = [];
  
  for (let i = 0; i < maxLen; i++) {
    const roundPhylums = [...phylums].sort(() => Math.random() - 0.5);
    roundPhylums.forEach(phylum => {
      if (pools[phylum].length > 0) {
        playlist.push(pools[phylum].shift());
      }
    });
  }
  
  return playlist;
}

export default function ZoologyHero() {
  const images = useMemo(() => generatePhylumPlaylist(), []);

  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setImageLoaded(false);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (index + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
  }, [index]);

  return (
    <section className="banner-hero" aria-label="Zoology Learning Platform Hero Banner">
      <div className="banner-container">
        {/* LEFT CONTENT */}
        <div className="banner-left">

          <div className="banner-logo-wrapper">
            <img 
              src="https://res.cloudinary.com/duibfmcw1/image/upload/v1765947727/logopng_2_webaac.png" 
              alt="ZooLearn Logo Symbol" 
              className="banner-logo-img"
            />
            <img 
              src="https://res.cloudinary.com/dstunh4mx/image/upload/v1781102458/name_alone-removebg-preview_o8wt5i.png" 
              alt="ZooLearn Brand Name" 
              className="banner-logo-text-img"
            />
          </div>

          <div style={{ height: '3rem' }}></div>

          <p className="banner-desc" style={{ fontSize: '1.125rem', marginTop: '1.25rem', marginBottom: '2rem' }}>
            Build strong zoology concepts through visual learning, interactive models, and exam-focused content — designed for students and researchers.
          </p>
        </div>

        {/* RIGHT IMAGE SLIDER & STATS */}
        <div className="banner-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div className="banner-slider carousel-container">
            {images.map((src, i) => {
              let position = 'hidden';
              if (i === index) position = 'active';
              else if (i === (index + 1) % images.length) position = 'next';
              else if (i === (index + 2) % images.length) position = 'next2';
              else if (i === (index - 1 + images.length) % images.length) position = 'prev';
              else if (i === (index - 2 + images.length) % images.length) position = 'prev2';

              return (
                <img
                  key={i}
                  src={src}
                  alt={`Species ${i + 1}`}
                  className={`banner-image carousel-img ${position}`}
                />
              );
            })}
          </div>

          {/* STATS SECTION MOVED BELOW IMAGES */}
          <div className="banner-stats" style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '3rem' }}>
            <div className="banner-stat-item" style={{ alignItems: 'center' }}>
              <span className="banner-stat-number">
                <CountUp end={100} duration={2000} />+
              </span>
              <span className="banner-stat-label">3D Models</span>
            </div>

            <div className="banner-stat-divider"></div>

            <div className="banner-stat-item">
              <span className="banner-stat-number">
                <CountUp end={200} duration={2000} />+
              </span>
              <span className="banner-stat-label">Species</span>
            </div>

            <div className="banner-stat-divider"></div>

            <div className="banner-stat-item">
              <span className="banner-stat-number">
                <CountUp end={300} duration={2000} />+
              </span>
              <span className="banner-stat-label">Images</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}