import createShipEdge from "./createShipEdge"; // Adjust the path based on your file structure
import { Edge } from "@xyflow/react";

describe("createShipEdge", () => {
  it("should create a ship edge with correct properties", () => {
    const filmNodeId = "film-1";
    const shipId = "ship-48";

    const expectedEdge: Edge = {
      id: `edge-${filmNodeId}-ship-${shipId}`,
      source: filmNodeId,
      target: `ship-${shipId}`,
      type: "smoothstep",
      animated: true,
      style: { stroke: "#000" },
    };

    const result = createShipEdge(filmNodeId, shipId);

    expect(result).toEqual(expectedEdge);
  });
});
