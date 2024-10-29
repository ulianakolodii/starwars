import { Edge } from "@xyflow/react";

const createShipEdge = (filmNodeId: string, shipId: string): Edge => ({
  id: `edge-${filmNodeId}-ship-${shipId}`,
  source: filmNodeId,
  target: `ship-${shipId}`,
  type: "smoothstep",
  animated: true,
  style: { stroke: "#000" },
});

export default createShipEdge;
