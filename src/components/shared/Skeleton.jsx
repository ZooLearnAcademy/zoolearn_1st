import React from 'react';
import './shared.css';

const Skeleton = ({ type = 'text', count = 1, className = '' }) => {
    const skeletons = Array.from({ length: count }, (_, i) => (
        <div
            key={i}
            className={`skeleton skeleton-${type} ${className}`}
        />
    ));

    return <>{skeletons}</>;
};

// Pre-built skeleton layouts for common use cases
export const SkeletonCard = () => (
    <div className="skeleton-card-wrapper" style={{ padding: '1.5rem' }}>
        <Skeleton type="avatar" />
        <div style={{ marginTop: '1rem' }}>
            <Skeleton type="text" />
            <Skeleton type="text-sm" />
        </div>
        <Skeleton type="image" className="mt-4" />
    </div>
);

export default Skeleton;
