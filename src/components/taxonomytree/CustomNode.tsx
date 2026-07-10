import { Handle, Position } from "reactflow";

type CustomNodeData = {
  label: string;
  subtitle?: string;
  isLeaf: boolean;
  isActive: boolean;
  onClick: () => void;
};

export default function CustomNode({ data }: { data: CustomNodeData }) {
  return (
    <div
      onClick={data.onClick}
      style={{
        padding: "10px 16px",
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        minWidth: 120,
        textAlign: "center",
        cursor: "pointer",
        color: "#000",

        background: data.isActive
          ? "#00e676"   // ACTIVE
          : data.isLeaf
            ? "#ffd54f"   // LEAF NODE
            : "#64b5f6",  // NORMAL

        boxShadow: data.isActive
          ? "0 0 18px rgba(0,230,118,0.9)"
          : "0 4px 12px rgba(0,0,0,0.4)",

        transition: "all 0.3s ease",
        userSelect: "none",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {data.label}
      {data.subtitle && (
        <div style={{ fontSize: 9, opacity: 0.8, marginTop: 4 }}>
          {data.subtitle}
        </div>
      )}

      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={false}
        style={{ background: "transparent", border: "none" }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={false}
        style={{ background: "transparent", border: "none" }}
      />
    </div>
  );
}
