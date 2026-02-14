import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Dna, Bug, Fish, Bird, Leaf } from 'lucide-react';
import './SearchBar.css';

// Searchable content index
const searchIndex = [
    // ===== PHYLA =====
    { type: 'phylum', name: 'Porifera', path: '/zoohub/porifera', icon: '🧽', description: 'Sponges - Simple aquatic animals' },
    { type: 'phylum', name: 'Coelenterata', path: '/zoohub/coelenterata', icon: '🪼', description: 'Jellyfish, corals, sea anemones' },
    { type: 'phylum', name: 'Ctenophora', path: '/zoohub/ctenophora', icon: '🌊', description: 'Comb jellies' },
    { type: 'phylum', name: 'Platyhelminthes', path: '/zoohub/platyhelminthes', icon: '🪱', description: 'Flatworms' },
    { type: 'phylum', name: 'Aschelminthes', path: '/zoohub/aschelminthes', icon: '🦠', description: 'Roundworms' },
    { type: 'phylum', name: 'Annelida', path: '/zoohub/annelida', icon: '🐛', description: 'Segmented worms' },
    { type: 'phylum', name: 'Arthropoda', path: '/zoohub/arthropoda', icon: '🦂', description: 'Insects, spiders, crustaceans' },
    { type: 'phylum', name: 'Mollusca', path: '/zoohub/mollusca', icon: '🐙', description: 'Snails, octopus, clams' },
    { type: 'phylum', name: 'Echinodermata', path: '/zoohub/echinodermata', icon: '⭐', description: 'Starfish, sea urchins' },
    { type: 'phylum', name: 'Hemichordata', path: '/zoohub/hemichordata', icon: '🌀', description: 'Acorn worms' },
    { type: 'phylum', name: 'Chordata', path: '/zoohub/chordata', icon: '🦴', description: 'Vertebrates' },

    // ===== POPULAR SPECIES =====
    { type: 'species', name: 'Sycon', scientificName: 'Sycon sp.', path: '/zoohub/porifera/sycon', phylum: 'Porifera', icon: '🧽' },
    { type: 'species', name: 'Jellyfish', scientificName: 'Aurelia aurita', path: '/zoohub/coelenterata/aurelia', phylum: 'Coelenterata', icon: '🪼' },
    { type: 'species', name: 'Hydra', scientificName: 'Hydra vulgaris', path: '/zoohub/coelenterata/hydra', phylum: 'Coelenterata', icon: '🌿' },
    { type: 'species', name: 'Earthworm', scientificName: 'Lumbricus terrestris', path: '/zoohub/annelida/earthworm', phylum: 'Annelida', icon: '🐛' },
    { type: 'species', name: 'Cockroach', scientificName: 'Periplaneta americana', path: '/zoohub/arthropoda/cockroach', phylum: 'Arthropoda', icon: '🪳' },
    { type: 'species', name: 'Butterfly', scientificName: 'Danaus plexippus', path: '/zoohub/arthropoda/butterfly', phylum: 'Arthropoda', icon: '🦋' },
    { type: 'species', name: 'Starfish', scientificName: 'Asterias rubens', path: '/zoohub/echinodermata/starfish', phylum: 'Echinodermata', icon: '⭐' },
    { type: 'species', name: 'Frog', scientificName: 'Rana tigrina', path: '/zoohub/chordata/amphibia/rana', phylum: 'Chordata', icon: '🐸' },
    { type: 'species', name: 'Great White Shark', scientificName: 'Carcharodon carcharias', path: '/zoohub/chordata/chondrichthyes/carcharodon-carcharias', phylum: 'Chordata', icon: '🦈' },
    { type: 'species', name: 'Blue Whale', scientificName: 'Balaenoptera musculus', path: '/zoohub/chordata/mammalia-eutheria/balaenoptera-musculus', phylum: 'Chordata', icon: '🐋' },
    { type: 'species', name: 'Tiger', scientificName: 'Panthera tigris', path: '/zoohub/chordata/mammalia-eutheria/panthera-tigris', phylum: 'Chordata', icon: '🐅' },
    { type: 'species', name: 'Elephant', scientificName: 'Elephas maximus', path: '/zoohub/chordata/mammalia-eutheria/elephas-maximus', phylum: 'Chordata', icon: '🐘' },
    { type: 'species', name: 'Peacock', scientificName: 'Pavo cristatus', path: '/zoohub/chordata/aves/pavo-cristatus', phylum: 'Chordata', icon: '🦚' },
    { type: 'species', name: 'Crow', scientificName: 'Corvus sp.', path: '/zoohub/chordata/aves/corvus', phylum: 'Chordata', icon: '🐦‍⬛' },
    { type: 'species', name: 'Octopus', scientificName: 'Octopus vulgaris', path: '/zoohub/mollusca/octopus', phylum: 'Mollusca', icon: '🐙' },

    // ===== CONCEPTS =====
    { type: 'concept', name: 'The Living World', path: '/living-world', icon: '🌍', description: 'Introduction to biodiversity' },
    { type: 'concept', name: 'Basic Features of Classification', path: '/basic-features-of-classification', icon: '📊', description: 'Taxonomy fundamentals' },
    { type: 'concept', name: 'Taxonomy Tree', path: '/taxonomy-tree', icon: '🌳', description: 'Interactive classification tree' },
    { type: 'concept', name: 'Patterns of Complexity', path: '/anatomy', icon: '🧬', description: 'Anatomical patterns' },

    // ===== PAGES =====
    { type: 'page', name: 'Home', path: '/', icon: '🏠', description: 'ZooLearn homepage' },
    { type: 'page', name: 'ZooHub', path: '/zoohub', icon: '🦎', description: 'Explore all species' },
    { type: 'page', name: 'About', path: '/about', icon: 'ℹ️', description: 'About ZooLearn' },
];

// Type icons mapping
const typeIcons = {
    phylum: <Dna size={14} />,
    species: <Bug size={14} />,
    concept: <Leaf size={14} />,
    page: <ArrowRight size={14} />,
};

const typeLabels = {
    phylum: 'Phylum',
    species: 'Species',
    concept: 'Concept',
    page: 'Page',
};

const SearchBar = ({ onClose, isOpen }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const resultsRef = useRef(null);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Search logic
    const performSearch = useCallback((searchQuery) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);
        const lowerQuery = searchQuery.toLowerCase();

        const filtered = searchIndex.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(lowerQuery);
            const descMatch = item.description?.toLowerCase().includes(lowerQuery);
            const scientificMatch = item.scientificName?.toLowerCase().includes(lowerQuery);
            const phylumMatch = item.phylum?.toLowerCase().includes(lowerQuery);
            return nameMatch || descMatch || scientificMatch || phylumMatch;
        });

        // Sort: exact matches first, then by type priority
        const typePriority = { phylum: 1, species: 2, concept: 3, page: 4 };
        filtered.sort((a, b) => {
            const aExact = a.name.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
            const bExact = b.name.toLowerCase().startsWith(lowerQuery) ? 0 : 1;
            if (aExact !== bExact) return aExact - bExact;
            return typePriority[a.type] - typePriority[b.type];
        });

        setResults(filtered.slice(0, 8)); // Limit to 8 results
        setSelectedIndex(0);
        setIsLoading(false);
    }, []);

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            performSearch(query);
        }, 150);
        return () => clearTimeout(timer);
    }, [query, performSearch]);

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && results[selectedIndex]) {
            e.preventDefault();
            handleSelect(results[selectedIndex]);
        } else if (e.key === 'Escape') {
            onClose?.();
        }
    };

    // Handle selection
    const handleSelect = (item) => {
        navigate(item.path);
        setQuery('');
        setResults([]);
        onClose?.();
    };

    // Scroll selected item into view
    useEffect(() => {
        if (resultsRef.current && results.length > 0) {
            const selectedEl = resultsRef.current.children[selectedIndex];
            if (selectedEl) {
                selectedEl.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [selectedIndex, results.length]);

    if (!isOpen) return null;

    return (
        <div className="sb-overlay" onClick={onClose}>
            <div className="sb-container" onClick={e => e.stopPropagation()}>
                {/* Search Input */}
                <div className="sb-input-wrapper">
                    <Search size={20} className="sb-search-icon" />
                    <input
                        ref={inputRef}
                        type="text"
                        className="sb-input"
                        placeholder="Search species, phyla, concepts..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                    {query && (
                        <button className="sb-clear-btn" onClick={() => setQuery('')}>
                            <X size={18} />
                        </button>
                    )}
                    <kbd className="sb-kbd">ESC</kbd>
                </div>

                {/* Results */}
                {results.length > 0 && (
                    <div className="sb-results" ref={resultsRef}>
                        {results.map((item, index) => (
                            <div
                                key={`${item.type}-${item.path}`}
                                className={`sb-result-item ${index === selectedIndex ? 'sb-selected' : ''}`}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className="sb-result-icon">{item.icon}</span>
                                <div className="sb-result-content">
                                    <span className="sb-result-name">{item.name}</span>
                                    {item.scientificName && (
                                        <span className="sb-result-scientific">{item.scientificName}</span>
                                    )}
                                    {item.description && (
                                        <span className="sb-result-desc">{item.description}</span>
                                    )}
                                </div>
                                <span className={`sb-result-type sb-type-${item.type}`}>
                                    {typeIcons[item.type]}
                                    {typeLabels[item.type]}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* No results */}
                {query && results.length === 0 && !isLoading && (
                    <div className="sb-no-results">
                        <span className="sb-no-results-icon">🔍</span>
                        <p>No results found for "<strong>{query}</strong>"</p>
                        <span className="sb-no-results-hint">Try searching for a species, phylum, or concept</span>
                    </div>
                )}

                {/* Quick suggestions when empty */}
                {!query && (
                    <div className="sb-suggestions">
                        <div className="sb-suggestions-header">Quick Links</div>
                        <div className="sb-suggestions-grid">
                            <button className="sb-suggestion" onClick={() => navigate('/zoohub')}>
                                🦎 ZooHub
                            </button>
                            <button className="sb-suggestion" onClick={() => navigate('/zoohub/chordata')}>
                                🦴 Chordata
                            </button>
                            <button className="sb-suggestion" onClick={() => navigate('/zoohub/arthropoda')}>
                                🦂 Arthropoda
                            </button>
                            <button className="sb-suggestion" onClick={() => navigate('/living-world')}>
                                🌍 Living World
                            </button>
                        </div>
                        <div className="sb-keyboard-hints">
                            <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
                            <span><kbd>Enter</kbd> Select</span>
                            <span><kbd>Esc</kbd> Close</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
