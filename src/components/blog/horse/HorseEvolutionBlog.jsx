import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './horse.css';
import EvolutionTimeline from './sections/EvolutionTimeline';
import { SEO } from '../../shared';

export default function HorseEvolutionBlog() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hor-zoopage">
      <SEO 
        title="Evolution of the Horse: 55-Million-Year Journey | ZooLearn"
        description="Explore how climate shifts transformed Eohippus from a small forest dweller to the modern, single-toed Equus in our interactive horse evolution blog."
        keywords="Horse Evolution, Eohippus, Equidae, Equus, Hoof Evolution, Tooth Adaptation"
        canonicalUrl="/blog/horse-evolution"
      />

      <div className="hor-zoo-app-container" style={{ display: 'block', minHeight: 'auto', margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
        <main style={{ flex: 1, padding: '20px 0', minWidth: 0 }}>
          <div className="hor-content-card" style={{ width: '100%' }}>
            <section id="timeline" className="hor-blog-section" style={{ padding: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontSize: '2.5rem' }}>⏳</span>
                <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#111827', margin: 0 }}>Evolution Timeline</h1>
              </div>
              <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.75' }}>
                Trace the 55-million-year journey of the horse lineage. Scroll down and click any fossil card to open detailed descriptions, fossil reconstructions, and skeletal changes.
              </p>
              <EvolutionTimeline />
            </section>
          </div>
        </main>
      </div>

      {/* BACK TO TOP */}
      <button
        className={`hor-back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp size={22} />
      </button>
    </div>
  );
}
