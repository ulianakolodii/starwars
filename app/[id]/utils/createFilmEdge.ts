import { Edge } from "@xyflow/react";

const createFilmEdge = (heroNodeId: string, filmId: number): Edge => ({
  id: `edge-${heroNodeId}-film-${filmId}`,
  source: heroNodeId,
  target: `film-${filmId}`,
  type: "smoothstep",
  animated: true,
  style: { stroke: "#000" },
});

export default createFilmEdge;
