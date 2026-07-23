import React, { useState } from 'react';
import './TaxonomyPage.css';

const TaxonomyPage = () => {
  const [selectedLevel, setSelectedLevel] = useState('domain');

  const taxonomicLevels = [
    {
      id: 'domain',
      name: 'Domain',
      shortDescription: 'Broadest category of life',
      longDescription: 'The highest taxonomic rank of organisms in the three-domain system. There are three domains: Archaea, Bacteria, and Eukarya.',
      examples: ['Eukarya', 'Bacteria', 'Archaea'],
      keyPoint: 'Broadest classification level grouping organisms based on fundamental cellular differences.',
      mnemonic: 'D - Dear',
      color: '#8b5cf6' // Violet
    },
    {
      id: 'kingdom',
      name: 'Kingdom',
      shortDescription: 'Highest traditional category',
      longDescription: 'The kingdom is the highest taxonomic category. It includes several related phyla (or divisions in plants).',
      examples: ['Kingdom Animalia (All Animals)', 'Kingdom Plantae (All Plants)'],
      keyPoint: 'Kingdom Animalia includes all animals; Kingdom Plantae includes all plants.',
      mnemonic: 'K - King',
      color: '#ec4899' // Pink
    },
    {
      id: 'phylum',
      name: 'Phylum ',
      shortDescription: 'Group of related classes',
      longDescription: 'A phylum consists of related classes that share fundamental characteristics. In animals, the term phylum is used; in plants, the equivalent category is called a division.',
      examples: ['Chordata (Fishes, Amphibia, Reptilia, Aves, Mammalia)'],
      keyPoint: 'All members of Chordata possess a notochord at least during some stage of their life cycle.',
      mnemonic: 'P - Philip',
      color: '#3b82f6' // Blue
    },
    {
      id: 'class',
      name: 'Class',
      shortDescription: 'Group of related orders',
      longDescription: 'A class is a group of related orders that share common features.',
      examples: ['Mammalia (Primata, Carnivora)'],
      keyPoint: 'All members of Mammalia possess common mammalian characteristics such as mammary glands and hair.',
      mnemonic: 'C - Came',
      color: '#06b6d4' // Cyan
    },
    {
      id: 'order',
      name: 'Order',
      shortDescription: 'Group of related families',
      longDescription: 'An order is formed by grouping together related families that share certain common characteristics. The similarities among families in an order are fewer than those within a family.',
      examples: ['Carnivora (Felidae, Canidae)', 'Polymoniales (Solanaceae)'],
      keyPoint: 'Order Carnivora includes Felidae (Cats) and Canidae (Dogs). Solanaceae is placed under order Polymoniales.',
      mnemonic: 'O - Over',
      color: '#4ade80' // Green
    },
    {
      id: 'family',
      name: 'Family',
      shortDescription: 'Group of related genera',
      longDescription: 'A family consists of one or more related genera. Organisms in the same family share common characteristics, but similarities are fewer than within a genus. In plants, families are identified using both vegetative and reproductive features.',
      examples: ['Solanaceae (Solanum, Petunia, Datura)', 'Felidae (Panthera, Felis)'],
      keyPoint: 'Plants: Solanum, Petunia, Datura → Solanaceae. Animals: Panthera, Felis → Felidae.',
      mnemonic: 'F - For',
      color: '#fbbf24' // Amber
    },
    {
      id: 'genus',
      name: 'Genus',
      shortDescription: 'Group of closely related species',
      longDescription: 'A genus is a group of closely related species that share many common characteristics. Species belonging to the same genus are more closely related to one another than to species of other genera.',
      examples: ['Panthera (leo, tigris, pardus)', 'Solanum (tuberosum, melongena)'],
      keyPoint: 'Panthera includes Lion, Tiger, Leopard. Solanum includes Potato & Brinjal.',
      mnemonic: 'G - Good',
      color: '#f97316' // Orange
    },
    {
      id: 'species',
      name: 'Species',
      shortDescription: 'Basic & lowest unit of classification',
      longDescription: 'The species is the basic and lowest unit of classification. It consists of a group of organisms that are very similar in appearance, structure, and other characteristics. Members of the same species can naturally breed with one another and produce fertile offspring. Each species is distinguished from closely related species by its unique characteristics.',
      examples: ['Mangifera indica (Mango)', 'Solanum tuberosum (Potato)', 'Panthera leo (Lion)', 'Homo sapiens (Human)'],
      keyPoint: 'Remember: A species name is always written together with its genus name.',
      mnemonic: 'S - Soup',
      color: '#ef4444' // Red
    }
  ];

  const selectedLevelData = taxonomicLevels.find(level => level.id === selectedLevel);

  return (
    <div className="tp-taxonomy-page">
      <div className="tp-container">

        {/* Header */}
        <header className="tp-page-header">
          <h1 className="tp-page-title">Taxonomic Hierarchy</h1>
          <p className="tp-page-subtitle">Interactive Classification Pyramid</p>
        </header>

        <div className="tp-content-wrapper">

          {/* LEFT SIDE: PYRAMID & MNEMONIC */}
          <div className="tp-pyramid-section">
            <div className="tp-pyramid-wrapper">

              {/* The Pyramid Visual */}
              <div className="tp-pyramid-visual">
                {taxonomicLevels.map((level, index) => (
                  <div
                    key={level.id}
                    className={`tp-pyramid-tier ${selectedLevel === level.id ? 'tp-tier-active' : ''}`}
                    onClick={() => setSelectedLevel(level.id)}
                    style={{
                      '--tier-color': level.color,
                      /* Decreasing width to create the V shape */
                      '--width-percent': `${100 - (index * 9)}%`,
                      '--z-index': 10 - index
                    }}
                  >
                    <div className="tp-tier-glass">
                      <span className="tp-tier-name">{level.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Integrated Mnemonic (Below Pyramid) */}
              <div className="tp-mnemonic-card">
                <div className="tp-mnemonic-header">
                  <span className="tp-mnemonic-icon">💡</span> Remember with Mnemonic
                </div>
                <div className="tp-mnemonic-sentence">
                  <span className="tp-m-word"><b style={{ color: '#8b5cf6' }}>D</b>ear</span>
                  <span className="tp-m-word"><b style={{ color: '#ec4899' }}>K</b>ing</span>
                  <span className="tp-m-word"><b style={{ color: '#3b82f6' }}>P</b>hilip</span>
                  <span className="tp-m-word"><b style={{ color: '#06b6d4' }}>C</b>ame</span>
                  <span className="tp-m-word"><b style={{ color: '#4ade80' }}>O</b>ver</span>
                  <span className="tp-m-word"><b style={{ color: '#fbbf24' }}>F</b>or</span>
                  <span className="tp-m-word"><b style={{ color: '#f97316' }}>G</b>ood</span>
                  <span className="tp-m-word"><b style={{ color: '#ef4444' }}>S</b>oup</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: DETAIL CARD */}
          <div className="tp-detail-section">
            <div className="tp-level-detail-card" style={{ '--accent-color': selectedLevelData.color }}>

              <div className="tp-detail-header">
                <div className="tp-header-content">
                  <span className="tp-level-badge">Level {taxonomicLevels.indexOf(selectedLevelData) + 1}</span>
                  <h2 className="tp-level-title">{selectedLevelData.name}</h2>
                  <p className="tp-level-short">{selectedLevelData.shortDescription}</p>
                </div>
                {/* Large semi-transparent background letter */}
                <div className="tp-header-bg-letter">{selectedLevelData.name.charAt(0)}</div>
              </div>

              <div className="tp-detail-body">
                <div className="tp-info-block">
                  <h4 className="tp-info-label">Definition</h4>
                  <p className="tp-info-text">{selectedLevelData.longDescription}</p>
                </div>

                <div className="tp-info-block">
                  <h4 className="tp-info-label">Key Point</h4>
                  <div className="tp-key-point-box">
                    {selectedLevelData.keyPoint}
                  </div>
                </div>

                <div className="tp-info-block">
                  <h4 className="tp-info-label">Common Examples</h4>
                  <div className="tp-tags-container">
                    {selectedLevelData.examples.map((ex, i) => (
                      <span key={i} className="tp-example-pill">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TaxonomyPage;