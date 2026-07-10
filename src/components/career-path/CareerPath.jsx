
import React from 'react';
import { Link } from 'react-router-dom';
import { careerCategories } from '../../data/careersData';
import { SEO } from '../shared';
import './CareerPath.css';

const CareerPath = () => {
    return (
        <div className="career-path-container">
            <SEO 
                title="Zoology & Life Science Careers"
                description="Explore various career paths, educational requirements, and salary expectations in the field of Zoology and Life Sciences."
                keywords="Zoology Careers, Life Science Careers, Biology Jobs, Career Path, ZooLearn"
                canonicalUrl="/career-path"
            />
            <div className="career-path-header">
                <h1>Zoology & Life Science Career Categories</h1>
                <p>Select a category to explore specific career options, educational pathways, and salary expectations.</p>
            </div>

            <div className="category-grid">
                {careerCategories.map((category, index) => (
                    <Link
                        to={`/career-path/${category.id}`}
                        key={category.id}
                        className="category-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <h2 className="category-title">{category.name}</h2>
                        <p className="category-desc">{category.description}</p>
                        <div className="category-meta">
                            Explore Careers <span>→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CareerPath;
