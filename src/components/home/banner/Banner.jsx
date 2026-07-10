import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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

const extractImages = (data, phylum) => {
  let images = [];
  if (Array.isArray(data)) {
    data.forEach(cls => {
      if (cls.species && Array.isArray(cls.species)) {
        cls.species.forEach(sp => {
          if (sp.image && sp.slug) {
            images.push({
              image: sp.image,
              link: `/zoohub/${phylum}/${sp.slug}`
            });
          }
        });
      }
    });
  }
  return images;
};

const phylumData = {
  Porifera: extractImages(poriferaData, 'porifera'),
  Coelenterata: extractImages(coelenterataData, 'coelenterata'),
  Ctenophora: extractImages(ctenophoraData, 'ctenophora'),
  Platyhelminthes: extractImages(platyhelminthesData, 'platyhelminthes'),
  Aschelminthes: extractImages(aschelminthesData, 'aschelminthes'),
  Annelida: extractImages(annelidaData, 'annelida'),
  Arthropoda: extractImages(arthropodaData, 'arthropoda'),
  Mollusca: extractImages(molluscaData, 'mollusca'),
  Echinodermata: extractImages(echinodermataData, 'echinodermata'),
  Hemichordata: extractImages(hemichordataData, 'hemichordata'),
  Chordata: extractImages(chordataData, 'chordata')
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
  const navigate = useNavigate();
  const images = useMemo(() => generatePhylumPlaylist(), []);

  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Typewriter effect state
  const typeWords = useMemo(() => ["visual learning.", "interactive 3D models.", "exam-focused content."], []);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const i = loopNum % typeWords.length;
    const fullText = typeWords[i];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentWord(fullText.substring(0, currentWord.length - 1));
        if (currentWord === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentWord(fullText.substring(0, currentWord.length + 1));
        if (currentWord === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typeWords]);

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
    if (images[nextIndex]?.image) {
      img.src = images[nextIndex].image;
    }
  }, [index, images]);

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
              draggable={false}
              style={{ userSelect: 'none' }}
            />
            <img 
              src="https://res.cloudinary.com/dstunh4mx/image/upload/v1781102458/name_alone-removebg-preview_o8wt5i.png" 
              alt="ZooLearn Brand Name" 
              className="banner-logo-text-img"
              draggable={false}
              style={{ userSelect: 'none' }}
            />
          </div>

          <div className="banner-spacer" style={{ height: '3rem' }}></div>

          <div className="banner-desc-container">
            <span className="desc-badge">Learn Visually</span>
            <h2 className="banner-typing-heading">
              Build strong <span>zoology concepts</span>
              <br />
              through <span className="typing-text">{currentWord}<span className="cursor">|</span></span>
            </h2>
            <p className="banner-desc-subtext">Designed exclusively for students and researchers.</p>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER & STATS */}
        <div className="banner-right">
          <div className="banner-slider carousel-container">
            {images.map((item, i) => {
              let position = 'hidden';
              if (i === index) position = 'active';
              else if (i === (index + 1) % images.length) position = 'next';
              else if (i === (index - 1 + images.length) % images.length) position = 'prev';

              const handleClick = () => {
                if (position === 'active') {
                  navigate(item.link);
                } else if (position === 'next' || position === 'prev') {
                  setIndex(i);
                  setImageLoaded(false);
                }
              };

              return (
                <img
                  key={i}
                  src={item.image}
                  alt={`Species ${i + 1}`}
                  className={`banner-image carousel-img ${position}`}
                  onClick={handleClick}
                  draggable={false}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                />
              );
            })}
          </div>

          {/* STATS SECTION MOVED BELOW IMAGES */}
          <div className="banner-stats">
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