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
      if (parent && openChild !== node.id) return;

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
    <div style={{ height: "100vh", width: "100%", background: "#121212" }}>
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
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => { setOpenNodes({}); setActiveNode(null); }}
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
