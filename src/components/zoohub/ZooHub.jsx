import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import './ZooHub.css';

// Components
import Porifera from "./porifera/Porifera";
import Platyhelminthes from "./Plathyhelminthes/Platyhelminthes";
import Coelenterata from "./coelenterata/Coelenterata";
import Ctenophora from "./ctenophora/Ctenophora";
import Aschelminthes from "./aschelminthes/Aschelminthes";
import Annelida from "./annelida/Annelida";
import Arthropoda from "./arthropoda/Arthropoda";
import Mollusca from "./mollusca/Mollusca";
import Echinodermata from "./echinodermata/Echinodermata";
import Hemichordata from "./hemichordata/Hemichordata";
// import Chordata from "./chordata/Chordata";

function ZooHub() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔗 refs for all phyla
  const refs = {
    porifera: useRef(null),
    coelenterata: useRef(null),
    ctenophora: useRef(null),
    platyhelminthes: useRef(null),
    aschelminthes: useRef(null),
    annelida: useRef(null),
    arthropoda: useRef(null),
    mollusca: useRef(null),
    echinodermata: useRef(null),
    hemichordata: useRef(null),
    chordata: useRef(null),
  };

  // 🔍 search state
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 🔗 Auto-scroll based on URL route
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const phylumFromUrl = pathParts[pathParts.length - 1];

    if (phylumFromUrl && refs[phylumFromUrl]) {
      setTimeout(() => {
        refs[phylumFromUrl]?.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.pathname]);

  // 🧠 FULL SPECIES LIST (CLASS-WISE) - with species-specific routes
  const speciesMap = [
    // ========== PORIFERA (10 species) ==========
    // Calcarea
    { name: "sycon", classKey: "porifera", route: "/zoohub/porifera/sycon" },
    { name: "leucosolenia", classKey: "porifera", route: "/zoohub/porifera/leucosolenia" },
    { name: "grantia", classKey: "porifera", route: "/zoohub/porifera/grantia" },
    // Hexactinellida
    { name: "euplectella", classKey: "porifera", route: "/zoohub/porifera/euplectella" },
    { name: "hyalonema", classKey: "porifera", route: "/zoohub/porifera/hyalonema" },
    // Demospongiae
    { name: "spongilla", classKey: "porifera", route: "/zoohub/porifera/spongilla" },
    { name: "euspongia", classKey: "porifera", route: "/zoohub/porifera/euspongia" },
    { name: "cliona", classKey: "porifera", route: "/zoohub/porifera/cliona" },
    { name: "chalina", classKey: "porifera", route: "/zoohub/porifera/chalina" },
    { name: "xestospongia", classKey: "porifera", route: "/zoohub/porifera/xestospongia" },

    // ========== COELENTERATA (11 species) ==========
    // Hydrozoa
    { name: "hydra", classKey: "coelenterata", route: "/zoohub/coelenterata/hydra" },
    { name: "obelia", classKey: "coelenterata", route: "/zoohub/coelenterata/obelia" },
    { name: "physalia", classKey: "coelenterata", route: "/zoohub/coelenterata/physalia" },
    // Scyphozoa
    { name: "aurelia", classKey: "coelenterata", route: "/zoohub/coelenterata/aurelia" },
    // Anthozoa
    { name: "adamsia", classKey: "coelenterata", route: "/zoohub/coelenterata/adamsia" },
    { name: "pennatula", classKey: "coelenterata", route: "/zoohub/coelenterata/pennatula" },
    { name: "gorgonia", classKey: "coelenterata", route: "/zoohub/coelenterata/gorgonia" },
    { name: "meandrina", classKey: "coelenterata", route: "/zoohub/coelenterata/meandrina" },
    { name: "metridium", classKey: "coelenterata", route: "/zoohub/coelenterata/metridium" },
    { name: "corallium", classKey: "coelenterata", route: "/zoohub/coelenterata/corallium" },
    { name: "antipatharia", classKey: "coelenterata", route: "/zoohub/coelenterata/antipatharia" },

    // ========== CTENOPHORA (5 species) ==========
    // Tentaculata
    { name: "ctenoplana", classKey: "ctenophora", route: "/zoohub/ctenophora/ctenoplana" },
    { name: "pleurobrachia", classKey: "ctenophora", route: "/zoohub/ctenophora/pleurobrachia" },
    { name: "hormiphora", classKey: "ctenophora", route: "/zoohub/ctenophora/hormiphora" },
    { name: "cestum", classKey: "ctenophora", route: "/zoohub/ctenophora/cestum" },
    // Nuda
    { name: "beroe", classKey: "ctenophora", route: "/zoohub/ctenophora/beroe" },

    // ========== PLATYHELMINTHES (6 species) ==========
    // Turbellaria
    { name: "dugesia", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/dugesia" },
    // Trematoda
    { name: "fasciola", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/fasciola" },
    { name: "schistosoma", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/schistosoma" },
    // Cestoda
    { name: "taenia solium", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/taenia-solium" },
    { name: "taenia saginata", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/taenia-saginata" },
    { name: "echinococcus", classKey: "platyhelminthes", route: "/zoohub/platyhelminthes/echinococcus" },

    // ========== ASCHELMINTHES ==========
    { name: "ascaris", classKey: "aschelminthes", route: "/zoohub/aschelminthes/ascaris" },
    { name: "wuchereria", classKey: "aschelminthes", route: "/zoohub/aschelminthes/wuchereria" },

    // ========== ANNELIDA ==========
    { name: "lumbricus", classKey: "annelida", route: "/zoohub/annelida/lumbricus" },
    { name: "hirudinaria", classKey: "annelida", route: "/zoohub/annelida/hirudinaria" },

    // ========== ARTHROPODA ==========
    { name: "periplaneta", classKey: "arthropoda", route: "/zoohub/arthropoda/periplaneta" },
    { name: "musca", classKey: "arthropoda", route: "/zoohub/arthropoda/musca" },

    // ========== MOLLUSCA ==========
    { name: "pila", classKey: "mollusca", route: "/zoohub/mollusca/pila" },
    { name: "octopus", classKey: "mollusca", route: "/zoohub/mollusca/octopus" },

    // ========== ECHINODERMATA ==========
    { name: "asterias", classKey: "echinodermata", route: "/zoohub/echinodermata/asterias" },

    // ========== HEMICHORDATA ==========
    { name: "balanoglossus", classKey: "hemichordata", route: "/zoohub/hemichordata/balanoglossus" },

    // ========== CHORDATA ==========
    { name: "branchiostoma", classKey: "chordata", route: "/zoohub/chordata/branchiostoma" },
  ];

  // 🔝 scroll to class
  const scrollToClass = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔍 species search
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    setResults(
      speciesMap.filter((s) => s.name.includes(value))
    );
  };

  // 🔗 Navigate to species page
  const handleSpeciesClick = (item) => {
    navigate(item.route);
    setQuery("");
    setResults([]);
  };

  const handleSearch = () => {
    if (results.length > 0) {
      handleSpeciesClick(results[0]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="zooh-zoohub-page">
      {/* 📌 PAGE HEADER */}
      <div className="zooh-zoohub-header">
        <h1>🦎 ZooHub - Animal Kingdom Explorer</h1>
        <p>Discover and explore the fascinating world of animal classification. Search for species or browse by phylum.</p>
      </div>

      {/* 🔍 PROFESSIONAL SEARCH BAR */}
      <div className="zooh-search-section">
        <div className="zooh-search-container">
          <div className="zooh-search-input-wrapper">
            <span className="zooh-search-icon-text">🔍</span>
            <input
              type="text"
              placeholder="Search species (e.g., hydra, sycon, octopus...)"
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button className="zooh-search-btn" onClick={handleSearch}>
            Search
          </button>
          {results.length > 0 && (
            <ul className="zooh-search-results">
              {results.map((item, i) => (
                <li key={i} onClick={() => handleSpeciesClick(item)}>
                  <span>{item.name}</span>
                  <span className="zooh-species-class">{item.classKey}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 🔝 CLASS NAV */}
      <div className="zooh-class-navbar">
        <div className="zooh-class-scroll">
          {Object.keys(refs).map((key) => (
            <span key={key} onClick={() => scrollToClass(key)}>
              {key}
            </span>
          ))}
        </div>
      </div>

      {/* 📦 PHYLUM COMPONENTS */}
      <section ref={refs.porifera}>
        <Porifera />
      </section>

      <section ref={refs.coelenterata}>
        <Coelenterata />
      </section>

      <section ref={refs.ctenophora}>
        <Ctenophora />
      </section>

      <section ref={refs.platyhelminthes}>
        <Platyhelminthes />
      </section>

      <section ref={refs.aschelminthes}>
        <Aschelminthes />
      </section>

      <section ref={refs.annelida}>
        <Annelida />
      </section>

      <section ref={refs.arthropoda}>
        <Arthropoda />
      </section>
      <section ref={refs.mollusca}>
        <Mollusca />
      </section>
      <section ref={refs.echinodermata}>
        <Echinodermata />
      </section>

      <section ref={refs.hemichordata}>
        <Hemichordata />
      </section>

      {/* <section ref={refs.chordata}>
        <Chordata />
      </section> */}
      


      {/* 🔸 Remaining phyla - components to be added later */}
    </div>
  );
}

export default ZooHub;
