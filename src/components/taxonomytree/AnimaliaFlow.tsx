import { useState, useCallback, useMemo, useEffect } from "react";
import ReactFlow, {
  Background,
  Node,
  Edge,
  ReactFlowProvider,
  useReactFlow,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import { useNavigate } from "react-router-dom";

import CustomNode from "./CustomNode";
import { animaliaTree, AnimaliaNode } from "./data/animaliaData";

/**
 * nodeTypes MUST be outside to avoid re-renders
 */
const nodeTypes = {
  custom: CustomNode,
};

function FlowContent() {
  const navigate = useNavigate();
  const { fitView } = useReactFlow();

  const [openNodes, setOpenNodes] = useState<Record<string, string>>({});
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }
    const query = searchQuery.trim().toLowerCase();
    const matches: string[] = [];
    const searchRecursive = (node: AnimaliaNode) => {
      if (matches.length >= 5) return;
      const isMatch = node.label.toLowerCase().includes(query) || (node.commonName && node.commonName.toLowerCase().includes(query));
      if (isMatch && node.label.toLowerCase() !== query) matches.push(node.label);
      if (node.children) {
        for (const child of node.children) {
          searchRecursive(child);
        }
      }
    };
    searchRecursive(animaliaTree);
    setSuggestions(matches);
  }, [searchQuery]);

  const spacingX = window.innerWidth < 768 ? 160 : 240;
  const spacingY = 120;

  const handleNodeClick = (parentId: string, node: AnimaliaNode) => {
    setActiveNode(node.id);

    if (!node.children || node.children.length === 0) {
      navigate(`/animal/${node.id}`);
      return;
    }

    setOpenNodes((prev) => ({
      ...prev,
      [parentId]: prev[parentId] === node.id ? "" : node.id,
    }));
  };

  const executeSearch = (q: string) => {
    setSearchError("");
    if (!q.trim()) return;

    const query = q.trim().toLowerCase();

    const findPath = (
      node: AnimaliaNode,
      path: string[] = []
    ): { found: AnimaliaNode | null; path: string[] } => {
      const isMatch =
        node.label.toLowerCase().includes(query) ||
        (node.commonName && node.commonName.toLowerCase().includes(query));

      if (isMatch) return { found: node, path };

      if (node.children) {
        for (const child of node.children) {
          const res = findPath(child, [...path, node.id]);
          if (res.found) return res;
        }
      }
      return { found: null, path: [] };
    };

    const result = findPath(animaliaTree);

    if (result.found) {
      const newOpenNodes = { ...openNodes };
      if (result.path.length > 0 && result.path[0] === "animalia") {
          newOpenNodes["root"] = "animalia";
      }
      result.path.forEach((id, index) => {
        const childIdToOpen = result.path[index + 1] || result.found!.id;
        newOpenNodes[id] = childIdToOpen;
      });
      setOpenNodes(newOpenNodes);
      setActiveNode(result.found.id);
      
      setTimeout(() => {
        const flowNode = useReactFlow().getNode(result.found!.id);
        if (flowNode) {
            useReactFlow().setCenter(flowNode.position.x, flowNode.position.y, { zoom: 1, duration: 800 });
        }
      }, 100);
      
    } else {
      setSearchError("No matching species/taxon found.");
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestions([]);
    executeSearch(searchQuery);
  };

  const handleSuggestionClick = (s: string) => {
    setSearchQuery(s);
    setSuggestions([]);
    executeSearch(s);
  };

  // Generate stable nodes and edges arrays
  const { nodes, edges } = useMemo(() => {
    const nodesList: Node[] = [];
    const edgesList: Edge[] = [];

    const buildTreeRecursive = (
      node: AnimaliaNode,
      x: number,
      y: number,
      parent?: string
    ) => {
      const isLeaf = !node.children || node.children.length === 0;

      const isRoot = !parent;
      const isRootOpen = openNodes["root"] === "animalia";

      nodesList.push({
        id: node.id,
        type: "custom",
        position: { x, y },
        data: {
          label: node.label,
          isLeaf,
          isActive: activeNode === node.id,
          onClick: () => handleNodeClick(parent ?? "root", node),
        },
      });

      if (parent) {
        const isActiveEdge = openNodes[parent] === node.id || activeNode === node.id;
        
        edgesList.push({
          id: `edge-${parent}-${node.id}`,
          source: parent,
          target: node.id,
          type: 'default',
          animated: true,
          style: {
            stroke: isActiveEdge ? "#ffd54f" : "#ffffff",
            strokeWidth: isActiveEdge ? 3 : 2,
            strokeDasharray: '5,5',
            opacity: isActiveEdge ? 1 : 0.3
          },
        });
      }

      if (!node.children) return;

      const openChild = openNodes[parent ?? "root"];
      
      if (isRoot) {
        if (!isRootOpen) return;
      } else {
        if (openChild !== node.id) return;
      }

      node.children.forEach((child, index) => {
        const offset = (index - (node.children!.length - 1) / 2) * spacingX;
        buildTreeRecursive(child, x + offset, y + spacingY, node.id);
      });
    };

    buildTreeRecursive(animaliaTree, 0, 0);
    return { nodes: nodesList, edges: edgesList };
  }, [openNodes, activeNode, spacingX]);

  // Removed automatic fitView so the zoom stays stable while interacting

  return (
    <div style={{ height: "100vh", width: "100%", background: "#121212", position: "relative" }}>
      {openNodes["root"] !== "animalia" && (
        <div 
          style={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'bounce-point 1.5s infinite',
          }}
        >
          <style>{`
            @keyframes bounce-point {
              0%, 100% { transform: translate(-50%, -50%) translateY(0); }
              50% { transform: translate(-50%, -50%) translateY(-20px); }
            }
          `}</style>
          <div style={{
            background: 'rgba(30, 41, 59, 0.95)',
            color: '#f8fafc',
            padding: '8px 16px',
            borderRadius: '8px',
            fontWeight: '500',
            fontSize: '14px',
            letterSpacing: '0.3px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '12px',
            position: 'relative'
          }}>
            Click to expand the Kingdom
            <div style={{
              position: 'absolute',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid rgba(30, 41, 59, 0.95)'
            }} />
          </div>
        </div>
      )}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#333" gap={20} />

        <Panel position="top-right" style={{ marginTop: "100px", marginRight: "20px" }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-end' }}>
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search taxon (e.g. Tiger)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #444",
                    background: "#222",
                    color: "white",
                    outline: "none"
                  }}
                />
                {suggestions.length > 0 && (
                  <ul style={{
                    position: 'absolute', top: '100%', left: 0, width: '100%',
                    background: '#222', listStyle: 'none', padding: 0, margin: '4px 0 0 0',
                    borderRadius: '6px', zIndex: 10, border: '1px solid #444', overflow: 'hidden'
                  }}>
                    {suggestions.map(s => (
                      <li
                        key={s}
                        onClick={() => handleSuggestionClick(s)}
                        style={{ padding: '8px 12px', cursor: 'pointer', borderBottom: '1px solid #333', color: '#fff', fontSize: '14px' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#333')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="submit"
                style={{
                  background: "#ffd54f", color: "#000", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "bold"
                }}
              >
                Search
              </button>
            </form>
            {searchError && <span style={{ color: "#ff6b6b", fontSize: "0.85rem", background: "#222", padding: "4px 8px", borderRadius: "4px" }}>{searchError}</span>}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => { setOpenNodes({}); setActiveNode(null); setSearchQuery(""); setSearchError(""); }}
                style={{
                  background: "#222", color: "white", padding: "8px 12px", borderRadius: "6px", border: "1px solid #444", cursor: "pointer"
                }}
              >
                Reset Tree
              </button>
              <button
                onClick={() => fitView({ duration: 800, padding: 0.2 })}
                style={{
                  background: "#222", color: "white", padding: "8px 12px", borderRadius: "6px", border: "1px solid #444", cursor: "pointer"
                }}
              >
                Reset View
              </button>
            </div>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default function AnimaliaFlow() {
  return (
    <ReactFlowProvider>
      <FlowContent />
    </ReactFlowProvider>
  );
}
