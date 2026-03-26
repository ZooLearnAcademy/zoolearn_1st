
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { careerCategories } from '../../data/scopesData';
import { ChevronRight, Compass, Sparkles } from 'lucide-react';
import './Scopes.css';

const Scopes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="scopes-container">
            <div className="scopes-bg-blob blob-1"></div>
            <div className="scopes-bg-blob blob-2"></div>

            <header className="scopes-header">
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: 'rgba(31, 170, 89, 0.1)', borderRadius: '100px', color: '#065f46', fontWeight: 800, marginBottom: '18px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <Sparkles size={14} />
                    <span>Future-Proof Careers</span>
                </div>
                <h1>Zoology & Life Science Scopes</h1>
                <p>
                    Explore specialized career pathways, global opportunities, and educational requirements tailored for the modern scientist.
                </p>
            </header>

            <div className="scopes-grid">
                {careerCategories.map((category, index) => (
                    <Link 
                        to={`/scopes/${category.id}`} 
                        key={category.id} 
                        className="scope-card group"
                        style={{ 
                            '--card-primary': category.theme.primary,
                            animationDelay: `${index * 0.05}s`
                        }}
                    >
                        <div className="scope-icon-wrapper" style={{ color: category.theme.primary, background: `${category.theme.primary}14` }}>
                            <category.icon size={24} strokeWidth={2} />
                        </div>
                        <h2>{category.name.replace(/[^\w\s&]/g, '').trim()}</h2>
                        
                        <div className="scope-footer" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                            <span style={{ color: '#334155', fontSize: '0.8rem', fontWeight: 700 }}>{category.careers.length} Paths</span>
                            <div className="card-action-arrow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: '#f8fafc', color: category.theme.primary, transition: 'all 0.3s ease' }}>
                                <ChevronRight size={15} strokeWidth={2.5} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Scopes;
