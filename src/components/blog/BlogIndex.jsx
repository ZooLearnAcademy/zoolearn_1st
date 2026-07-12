import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Sparkles, ArrowRight, Dna, Globe, Microscope, Lock } from 'lucide-react';
import { SEO } from '../shared';
import './blog.css';

const blogPosts = [
  {
    id: 'giraffe',
    slug: '/blog/giraffe',
    category: 'World Giraffe Day',
    title: 'World Giraffe Day',
    subtitle: 'The Tallest Story Ever Told',
    description:
      'Celebrate the longest day of the year with the tallest animal on Earth. Explore 24 million years of evolutionary history, the science behind the iconic neck, four distinct species, and the silent extinction threatening these gentle giants.',
    image: 'https://res.cloudinary.com/duibfmcw1/image/upload/v1783697468/zoolearn/lciu7nfitbacw92deppl.png',
    tags: ['Evolution', 'Conservation', 'Taxonomy', 'Africa'],
    stats: [
      { label: 'Neck', value: '2.4 m' },
      { label: 'Heart', value: '11 kg' },
      { label: 'Evolution', value: '24 Mya' },
    ],
    accentColor: '#2f7432',
    accentLight: '#dcfce7',
    featured: true,
  },
  {
    id: 'horse-evolution',
    slug: '/blog/horse-evolution',
    category: 'Horse Evolution',
    title: 'Evolution of the Horse',
    subtitle: 'From Eohippus to Equus',
    description:
      'Trace the remarkable 55-million-year transformation of the horse from a small, four-toed forest dweller to the majestic, single-toed grassland runner of today. Explore key fossil discoveries, limb specialization, and tooth adaptations.',
    image: 'https://res.cloudinary.com/duibfmcw1/image/upload/v1774341098/Equus_ferus_vk3fio.png',
    tags: ['Evolution', 'Anatomy', 'Fossils', 'Equidae'],
    stats: [
      { label: 'Toes', value: '4 to 1' },
      { label: 'Height', value: '1.5 m' },
      { label: 'Evolution', value: '55 Mya' },
    ],
    accentColor: '#8b4513',
    accentLight: '#fdf6f0',
    featured: false,
    imgContain: true,
  },
];

const comingSoonPosts = [
  {
    id: 'elephant',
    icon: <Lock size={20} />,
    title: 'The Memory Keepers',
    desc: 'Inside the extraordinary minds of African elephants.',
    tag: 'Elephants',
    color: '#475569',
  },
  {
    id: 'cheetah',
    icon: <Lock size={20} />,
    title: 'Built for Speed',
    desc: 'How natural selection forged the fastest land animal.',
    tag: 'Cheetahs',
    color: '#b45309',
  },
  {
    id: 'octopus',
    icon: <Lock size={20} />,
    title: 'Nine Brains, Three Hearts',
    desc: 'The alien intelligence of cephalopods.',
    tag: 'Marine Life',
    color: '#0e7490',
  },
];

export default function BlogIndex() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bl-page">
      <SEO 
        title="ZooLearn Blog: Biology & Zoology Articles"
        description="Read the latest articles on Biology, Zoology, Animal behavior, Evolutionary history, and Conservation on the ZooLearn Blog."
        keywords="Biology Blog, Zoology Articles, Evolution, Animal Facts, Science Blog"
        canonicalUrl="/blog"
      />
      {/* ── HERO ── */}
      <section className="bl-hero">
        <div className="bl-hero-bg-pattern" />
        <div className="bl-hero-container">
          <span className="bl-hero-eyebrow">ZooLearn Academy</span>
          <h1 className="bl-hero-title">
            The <em>Living World</em> Blog
          </h1>
          <p className="bl-hero-subtitle">
            Deep-dive science stories about evolution, behaviour, and the
            incredible biology of animals — told with detail that textbooks
            leave out.
          </p>
          <div className="bl-hero-badges">
            <span className="bl-badge"><Dna size={14} style={{ marginRight: '6px' }} /> Evolution</span>
            <span className="bl-badge"><Globe size={14} style={{ marginRight: '6px' }} /> Conservation</span>
            <span className="bl-badge"><Microscope size={14} style={{ marginRight: '6px' }} /> Biology</span>
            <span className="bl-badge"><Sparkles size={14} style={{ marginRight: '6px' }} /> Wildlife</span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="bl-content-area">

        {/* ── FEATURED / PUBLISHED BLOGS ── */}
        <section className="bl-section">
          <div className="bl-section-header">
            <h2 className="bl-section-title">
              <span className="bl-section-dot" />
              Published Articles
            </h2>
            <p className="bl-section-meta">{blogPosts.length} article{blogPosts.length !== 1 ? 's' : ''} available</p>
          </div>

          <div className="bl-posts-grid">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bl-card-compact"
                onClick={() => navigate(post.slug)}
              >
                <div className="bl-card-details">
                  <div className="bl-organism-head">
                    <div className="bl-org-icon" style={{ background: post.accentLight, borderColor: post.accentColor + '30' }}>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="bl-org-title-group">
                      <h3>{post.title}</h3>
                      <span className="bl-scientific-name">
                        {post.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="bl-classification-badge" style={{ color: post.accentColor, background: post.accentLight, borderColor: post.accentColor + '30' }}>
                    <BookOpen size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} /> {post.category}
                  </div>

                  {post.featured && (
                    <span className="bl-coming-pill" style={{ position: 'static', display: 'inline-block', color: 'var(--bl-primary-dark)', background: 'var(--bl-primary-light)', border: '1px solid var(--bl-border)', marginBottom: '14px', marginLeft: '8px' }}>
                      Featured
                    </span>
                  )}

                  <p className="bl-card-desc-compact">
                    {post.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="bl-card-stats-compact">
                    {post.stats.map((s, i) => (
                      <div key={i} className="bl-card-stat-compact">
                        <span className="bl-card-stat-val-compact" style={{ color: post.accentColor }}>{s.value}</span>
                        <span className="bl-card-stat-lbl-compact">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bl-btn-text" style={{ color: post.accentColor }}>
                  Read Article <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ── COMING SOON ── */}
        <section className="bl-section bl-coming-soon-section">
          <div className="bl-section-header">
            <h2 className="bl-section-title">
              <span className="bl-section-dot bl-section-dot--muted" />
              Coming Soon
            </h2>
            <p className="bl-section-meta">More stories in the pipeline</p>
          </div>

          <div className="bl-coming-grid">
            {comingSoonPosts.map((post) => (
              <div key={post.id} className="bl-coming-card">
                <div className="bl-coming-icon-wrap" style={{ background: post.color + '18' }}>
                  <span className="bl-coming-icon">{post.icon}</span>
                </div>
                <div className="bl-coming-body">
                  <span className="bl-coming-tag" style={{ color: post.color }}>{post.tag}</span>
                  <h4 className="bl-coming-title">{post.title}</h4>
                  <p className="bl-coming-desc">{post.desc}</p>
                </div>
                <div className="bl-coming-pill">Soon</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
