
import React, { useMemo, useState } from 'react';
import ReactFlow, { Background, Handle, Position, BezierEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { X, Info, FileText, Timer, Target, Calendar, Trophy, Layers } from 'lucide-react';
import { courseDetails } from '../../data/scopesData';

/* ─── Level Config ─────────────────────────────────────────────────────────── */
const LEVEL_CONFIG = {
    root:    { label: 'HUB',        color: '#60a5fa', glow: 'rgba(96,165,250,0.55)',  text: '#0f172a' },
    bsc:     { label: 'BACHELOR',   color: '#34d399', glow: 'rgba(52,211,153,0.45)',  text: '#052e16' },
    msc:     { label: 'MASTER',     color: '#a78bfa', glow: 'rgba(167,139,250,0.45)', text: '#1e1b4b' },
    phd:     { label: 'DOCTORAL',   color: '#fb923c', glow: 'rgba(251,146,60,0.45)',  text: '#431407' },
};

/* ─── Custom Node ───────────────────────────────────────────────────────────── */
const CustomNode = ({ data }) => {
    const cfg = LEVEL_CONFIG[data.levelKey] || LEVEL_CONFIG.bsc;
    return (
        <div
            className={`tnode tnode--${data.levelKey}`}
            style={{ '--node-color': cfg.color, '--node-glow': cfg.glow, '--node-text': cfg.text }}
            onClick={() => data.onClick?.(data.label)}
        >
            <Handle type="target"  position={Position.Top}    className="tnode-handle" />
            <span className="tnode-badge">{cfg.label}</span>
            <span className="tnode-title">{data.label}</span>
            <Handle type="source"  position={Position.Bottom} className="tnode-handle" />
        </div>
    );
};

const nodeTypes = { custom: CustomNode };

/* ─── Edge builder — clean fan, NOT all-to-all ─────────────────────────────── */
function buildGraph(career, category, handleCourseClick) {
    const nodes = [];
    const edges = [];
    
    // Scale structural canvas tightly for mobile screens
    const isMobile = window.innerWidth <= 768;
    const CW = isMobile ? 550 : 1300; 
    const yStep = isMobile ? 140 : 230;
    const startY = isMobile ? 20 : 0;

    const spreadX = (i, total) => {
        if (total === 1) return CW / 2;
        const margin = isMobile ? 80 : 160;
        const step = (CW - margin * 2) / (total - 1);
        return margin + i * step;
    };

    /* Root */
    nodes.push({
        id: 'root',
        type: 'custom',
        position: { x: CW / 2 - 90, y: startY },
        data: { label: `${category.name} Hub`.toUpperCase(), levelKey: 'root' }
    });

    const bscIds = [];
    /* BSc layer */
    career.bsc.forEach((course, i) => {
        const id = `bsc-${i}`;
        bscIds.push(id);
        nodes.push({
            id, type: 'custom',
            position: { x: spreadX(i, career.bsc.length) - 90, y: startY + yStep },
            data: { label: course.toUpperCase(), levelKey: 'bsc', onClick: handleCourseClick }
        });
        /* root → each BSc */
        edges.push({
            id: `e-root-${id}`,
            source: 'root', target: id,
            type: 'default',
            style: { stroke: '#60a5fa', strokeWidth: 1.5, strokeDasharray: '6 4', opacity: 0.6 }
        });
    });

    const mscIds = [];
    /* MSc layer */
    career.msc.forEach((course, i) => {
        const id = `msc-${i}`;
        mscIds.push(id);
        nodes.push({
            id, type: 'custom',
            position: { x: spreadX(i, career.msc.length) - 90, y: startY + yStep * 2 },
            data: { label: course.toUpperCase(), levelKey: 'msc', onClick: handleCourseClick }
        });

        /* Smart fan: connect each MSc to the 1–2 closest BSc nodes, not all */
        const ratio   = career.bsc.length / career.msc.length;
        const srcIdx  = Math.round(i * ratio);
        const sources = new Set([
            Math.max(0, srcIdx - 1),
            srcIdx,
            Math.min(career.bsc.length - 1, srcIdx + 1)
        ]);
        // Only keep neighbors (max 2 nearest)
        const sorted = [...sources].sort((a, b) =>
            Math.abs(a - srcIdx) - Math.abs(b - srcIdx)
        ).slice(0, 2);

        sorted.forEach(bIdx => {
            edges.push({
                id: `e-bsc${bIdx}-${id}`,
                source: `bsc-${bIdx}`, target: id,
                type: 'default',
                style: { stroke: '#a78bfa', strokeWidth: 1.5, strokeDasharray: '6 4', opacity: 0.5 }
            });
        });
    });

    /* PhD layer */
    career.phd.forEach((course, i) => {
        const id = `phd-${i}`;
        nodes.push({
            id, type: 'custom',
            position: { x: spreadX(i, career.phd.length) - 90, y: startY + yStep * 3 },
            data: { label: course.toUpperCase(), levelKey: 'phd', onClick: handleCourseClick }
        });

        const ratio  = career.msc.length / career.phd.length;
        const srcIdx = Math.round(i * ratio);
        const sources = new Set([
            Math.max(0, srcIdx - 1),
            srcIdx,
            Math.min(career.msc.length - 1, srcIdx + 1)
        ]);
        const sorted = [...sources].sort((a, b) =>
            Math.abs(a - srcIdx) - Math.abs(b - srcIdx)
        ).slice(0, 2);

        sorted.forEach(mIdx => {
            edges.push({
                id: `e-msc${mIdx}-${id}`,
                source: `msc-${mIdx}`, target: id,
                type: 'default',
                style: { stroke: '#fb923c', strokeWidth: 1.5, strokeDasharray: '6 4', opacity: 0.5 }
            });
        });
    });

    return { nodes, edges };
}

/* ─── PathwayExplorer ───────────────────────────────────────────────────────── */
const PathwayExplorer = ({ career, category, onClose }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (name) => {
        const details = courseDetails[name] || {
            exp: `Advanced specialized study in ${name} involving research and professional practice.`,
            dur: '2–3 Years',
            imp: 'Critical for professional specialization and significant career advancement.'
        };
        setSelectedCourse({ name, ...details });
    };

    const { nodes, edges } = useMemo(
        () => buildGraph(career, category, handleCourseClick),
        [career, category]
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content modal-content--dark" onClick={e => e.stopPropagation()}>
                <button className="modal-close modal-close--white" onClick={onClose}><X size={20} /></button>

                {/* Header */}
                <div className="modal-header">
                    <div className="modal-header-subtitle" style={{ color: category.theme.primary }}>
                        Career Pathway Explorer
                    </div>
                    <h2 className="modal-header-title">
                        {career.title}
                    </h2>
                    <p className="modal-header-desc">
                        {career.desc}
                    </p>
                </div>

                {/* Legend */}
                <div className="pathway-legend">
                    {Object.entries(LEVEL_CONFIG).filter(([k]) => k !== 'root').map(([key, cfg]) => (
                        <div key={key} className="legend-item">
                            <span className="legend-dot" style={{ background: cfg.color }} />
                            <span>{cfg.label}</span>
                        </div>
                    ))}
                </div>

                <div className="pathway-explorer-wrapper dark-theme">
                    <div className="taxonomy-instruction">
                        CLICK A NODE TO VIEW COURSE DETAILS
                    </div>

                    <div className="pathway-flow-container" style={{ width: '100%', height: '100%', flex: 1, position: 'relative' }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            nodeTypes={nodeTypes}
                            style={{ width: '100%', height: '100%' }}
                            fitView
                            fitViewOptions={{ padding: 0.05 }}
                            minZoom={0.05}
                            maxZoom={1.6}
                            attributionPosition="bottom-right"
                        >
                            <Background color="#1e293b" gap={28} size={1} variant="dots" />
                        </ReactFlow>
                    </div>
                </div>

                {/* Info Sidebar (Bottom Sheet on Mobile) */}
                {selectedCourse && (
                    <div className="info-sidebar">
                        <div className="info-sidebar-handle" />
                        <div className="info-sidebar-header">
                            <div>
                                <h4 className="info-course-name">{selectedCourse.name}</h4>
                                <div className="info-course-label" style={{ color: category.theme.primary }}>
                                    Course Insights
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="info-close-btn"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="info-sidebar-body">
                            {/* Overview */}
                            <div className="info-section">
                                <div className="info-section-label">
                                    <FileText size={13} /> Overview
                                </div>
                                <p className="info-section-text">{selectedCourse.exp}</p>
                            </div>

                            {/* Stats grid */}
                            <div className="info-stats-grid">
                                <div className="info-stat-card">
                                    <div className="info-stat-label"><Timer size={12} /> Duration</div>
                                    <div className="info-stat-value">{selectedCourse.dur}</div>
                                </div>
                                <div className="info-stat-card">
                                    <div className="info-stat-label"><Target size={12} /> Outcome</div>
                                    <div className="info-stat-desc">{selectedCourse.imp}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Salary Footer */}
                <div className="salary-footer" style={{ background: category.theme.gradient || category.theme.primary }}>
                    <div className="salary-footer-content">
                        <div className="salary-footer-main">
                            <div className="salary-icon">₹</div>
                            <span>
                                Academic Outcome Value:
                                <strong>{career.salary}</strong>
                            </span>
                        </div>
                        <div className="salary-footer-note">
                            * Indicative salary ranges based on industry averages
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PathwayExplorer;
