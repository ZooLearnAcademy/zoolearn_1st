import React, { useMemo, useState } from 'react';
import ReactFlow, { Background, Handle, Position, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';
import './PhylumTaxonomyTree.css';

const CustomPhylumNode = ({ data }) => {
  return (
    <div
      className={`phylum-tree-node ${data.isRoot ? 'root-node' : 'leaf-node'} ${data.isSelected ? 'selected-node' : ''}`}
      onClick={() => data.onClick && data.onClick()}
      style={{
        background: data.isRoot ? '#64b5f6' : '#ffd54f',
        boxShadow: data.isSelected 
          ? `0 0 20px ${data.isRoot ? 'rgba(100, 181, 246, 0.8)' : 'rgba(255, 213, 79, 0.8)'}` 
          : '0 4px 12px rgba(0,0,0,0.3)',
        transform: data.isSelected ? 'scale(1.1)' : 'scale(1)',
        cursor: 'pointer'
      }}
    >
      <div className="node-label">{data.label}</div>
      
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: '#fff', width: 4, height: 4, opacity: 0.6 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#fff', width: 4, height: 4, opacity: 0.6 }}
      />
    </div>
  );
};

const nodeTypes = {
  custom: CustomPhylumNode,
};

const PhylumTreeContent = ({ phylumName, majorClasses, selectedId, onSelect }) => {
  const { nodes, edges } = useMemo(() => {
    const nodesList = [];
    const edgesList = [];

    // Root Node
    nodesList.push({
      id: 'root',
      type: 'custom',
      data: { 
        label: phylumName, 
        isRoot: true, 
        isSelected: selectedId === 'root',
        onClick: () => onSelect('root')
      },
      position: { x: 250, y: 0 },
    });

    // Class Nodes
    const spacingX = 180;
    const startX = 250 - ((majorClasses.length - 1) * spacingX) / 2;

    majorClasses.forEach((cls, index) => {
      const nodeId = `class-${index}`;
      nodesList.push({
        id: nodeId,
        type: 'custom',
        data: { 
          label: cls.name, 
          isSelected: selectedId === nodeId,
          onClick: () => onSelect(nodeId)
        },
        position: { x: startX + index * spacingX, y: 120 },
      });

      edgesList.push({
        id: `edge-${nodeId}`,
        source: 'root',
        target: nodeId,
        animated: selectedId === nodeId,
        style: { 
          stroke: selectedId === nodeId ? '#00e676' : '#ffffff', 
          strokeWidth: 2, 
          strokeDasharray: '5,5',
          opacity: selectedId === nodeId ? 1 : 0.6 
        },
      });
    });

    return { nodes: nodesList, edges: edgesList };
  }, [phylumName, majorClasses, selectedId, onSelect]);

  return (
    <div className="phylum-tree-wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        draggable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnDoubleClick={false}
        nodesConnectable={false}
        elementsSelectable={true}
      >
        <Background color="#333" gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};

const PhylumTaxonomyTree = ({ phylumName, phylumDescription, majorClasses }) => {
  const [selectedId, setSelectedId] = useState('root');

  if (!majorClasses || majorClasses.length === 0) return null;

  const selectedData = selectedId === 'root' 
    ? { name: phylumName, description: phylumDescription }
    : majorClasses[parseInt(selectedId.split('-')[1])];

  return (
    <div className="phylum-taxonomy-container">
      <ReactFlowProvider>
        <PhylumTreeContent 
          phylumName={phylumName} 
          majorClasses={majorClasses} 
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </ReactFlowProvider>
      
      <div className="tree-details-panel">
        <h3 className="details-title">{selectedData.name}</h3>
        <p className="details-description">{selectedData.description}</p>
        {selectedData.examples && (
          <div className="details-examples">
            <strong>Examples:</strong> {selectedData.examples.join(', ')}
          </div>
        )}
      </div>

      <div className="tree-hint">
        Click on nodes to explore {phylumName} classification
      </div>
    </div>
  );
};

export default PhylumTaxonomyTree;
