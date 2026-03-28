
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { careerCategories } from '../../data/scopesData';
import { ArrowLeft, MapPin, Briefcase, GraduationCap, IndianRupee, ChevronRight, Heart, Search, Filter } from 'lucide-react';
import PathwayExplorer from './PathwayExplorer';
import './Scopes.css';

const ScopeCategory = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);
    const [selectedCareer, setSelectedCareer] = useState(null);
    const [isPathwayOpen, setIsPathwayOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All');
    const [savedCareers, setSavedCareers] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const cat = careerCategories.find(c => c.id === categoryId);
        setCategory(cat);
    }, [categoryId]);

    if (!category) return <div className="loading-state">Loading...</div>;

    const handleOpenPathway = (career) => {
        setSelectedCareer(career);
        setIsPathwayOpen(true);
    };

    const toggleSave = (e, title) => {
        e.stopPropagation();
        setSavedCareers(prev => ({...prev, [title]: !prev[title]}));
    };

    const filteredCareers = category.careers.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) || career.desc.toLowerCase().includes(searchTerm.toLowerCase());
        const isResearch = career.title.toLowerCase().includes('research') || career.phd[0] !== 'Optional';
        const type = isResearch ? 'Research' : 'Industrial';
        const matchesFilter = filterType === 'All' || type === filterType;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="scope-detail-container" style={{ '--theme-primary': category.theme.primary }}>
            <Link to="/scopes" className="scope-back-btn">
                <ArrowLeft size={20} />
                <span>Back to All Scopes</span>
            </Link>

            <header className="scopes-header" style={{ textAlign: 'center', marginBottom: '24px', padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div className="scope-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px', background: category.theme.primary, color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 16px -4px ${category.theme.primary}4D` }}>
                        <category.icon size={20} strokeWidth={2} />
                    </div>
                    <h1 style={{ fontSize: '1.75rem', margin: 0, letterSpacing: '-0.03em', fontWeight: 900, color: '#0f172a', lineHeight: 1.15 }}>{category.name.replace(/[^\w\s&]/g, '').trim()}</h1>
                </div>
                <p style={{ maxWidth: '560px', fontSize: '0.9rem', color: '#334155', fontWeight: 500, lineHeight: 1.6, margin: '0 auto' }}>{category.description}</p>
            </header>

            <div className="category-filters" style={{ maxWidth: '760px', margin: '0 auto 28px', padding: '0 16px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ position: 'relative', flex: '1', minWidth: '240px', maxWidth: '360px' }}>
                    <Search style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} size={16} />
                    <input 
                        type="text" 
                        placeholder={`Search ${category.careers.length} careers...`} 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '11px 16px 11px 38px', borderRadius: '100px', border: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', fontSize: '0.88rem', outline: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', color: '#0f172a', fontWeight: 500 }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '4px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', padding: '5px', borderRadius: '100px', border: '1px solid #e2e8f0' }}>
                    {['All', 'Research', 'Industrial'].map(type => (
                        <button 
                            key={type}
                            onClick={() => setFilterType(type)}
                            style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 16px', borderRadius: '100px', border: 'none', background: filterType === type ? category.theme.primary : 'transparent', color: filterType === type ? 'white' : '#475569', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease', fontSize: '0.8rem' }}
                        >
                            {type === 'All' ? <Filter size={13} /> : null}
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="careers-grid">
                {filteredCareers.map((career, index) => (
                    <div 
                        key={index} 
                        className="career-modern-card"
                        style={{ animationDelay: `${index * 0.04}s` }}
                        onClick={() => handleOpenPathway(career)}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                <div className="career-badge" style={{ background: `${category.theme.primary}14`, color: category.theme.primary, padding: '3px 9px', borderRadius: '6px', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    Top Choice
                                </div>
                                <div className="career-badge" style={{ background: '#e2e8f0', color: '#334155', padding: '3px 9px', borderRadius: '6px', fontSize: '0.62rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {career.title.toLowerCase().includes('research') || career.phd[0] !== 'Optional' ? 'Research' : 'Industrial'}
                                </div>
                            </div>
                            <button 
                                onClick={(e) => toggleSave(e, career.title)}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: savedCareers[career.title] ? '#ef4444' : '#cbd5e1', transition: 'all 0.3s ease', padding: 0, marginTop: '1px' }}
                                title={savedCareers[career.title] ? "Saved" : "Save career"}
                            >
                                <Heart size={16} fill={savedCareers[career.title] ? '#ef4444' : 'none'} strokeWidth={2} />
                            </button>
                        </div>
                        
                        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 8px', lineHeight: 1.3, letterSpacing: '-0.015em' }}>{career.title}</h3>
                        
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: '#334155', fontSize: '0.85rem', fontWeight: 800, marginBottom: '12px', background: '#f8fafc', padding: '3px 9px', borderRadius: '6px' }}>
                            <IndianRupee size={13} />
                            <span>{career.salary}</span>
                        </div>

                        <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#334155', margin: '0 0 18px', flexGrow: 1, fontWeight: 500 }}>{career.desc}</p>
                        
                        <div style={{ 
                            marginTop: 'auto', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            width: '100%',
                            paddingTop: '14px',
                            borderTop: '1px solid #f1f5f9'
                         }} className="card-action-trigger-container">
                            <span style={{ color: '#334155', fontWeight: 700, fontSize: '0.8rem' }}>View Pathway</span>
                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${category.theme.primary}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: category.theme.primary, transition: 'all 0.3s ease' }} className="explore-arrow">
                                <ChevronRight size={14} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {isPathwayOpen && (
                <PathwayExplorer 
                    career={selectedCareer} 
                    category={category} 
                    onClose={() => setIsPathwayOpen(false)} 
                />
            )}
        </div>
    );
};

export default ScopeCategory;
