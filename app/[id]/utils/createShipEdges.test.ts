import createShipEdges from "./createShipEdges";
import createShipEdge from "./createShipEdge";
import { Edge } from "@xyflow/react";
import { mockedFilm, mockedShips } from "@/app/mockData";

describe("createShipEdges", () => {
  it("should create ship edges for each starship in the film", () => {
    const expectedEdges: Edge[] = [
      createShipEdge(`film-${mockedFilm.id}`, "48"),
      createShipEdge(`film-${mockedFilm.id}`, "59"),
    ];

    const result = createShipEdges(mockedFilm, mockedShips);

    expect(result).toEqual(expectedEdges);
  });

  it("should return an empty array if no ships are found", () => {
    const result = createShipEdges(mockedFilm, {});

    expect(result).toEqual([]);
  });
});
