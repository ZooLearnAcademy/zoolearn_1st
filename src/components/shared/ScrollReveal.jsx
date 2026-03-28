import { useRef } from 'react';

/**
 * Custom hook for scroll reveal — animations DISABLED.
 * Elements are immediately visible.
 */
export function useScrollReveal() {
    const ref = useRef(null);
    return [ref, true]; // always visible
}

/**
 * ScrollReveal wrapper — renders children instantly, no animation delay.
 */
export function ScrollReveal({ children, className = '', ...props }) {
    const ref = useRef(null);
    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}

/**
 * StaggerReveal — renders children instantly, no animation delay.
 */
export function StaggerReveal({ children, className = '', ...props }) {
    const ref = useRef(null);
    return (
        <div ref={ref} className={`stagger-reveal ${className}`}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <div key={index} className="stagger-item">
                        {child}
                    </div>
                ))
                : children}
        </div>
    );
}

export default ScrollReveal;
