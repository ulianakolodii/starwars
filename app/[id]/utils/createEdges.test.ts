import createEdges from "./createEdges";
import createFilmEdge from "./createFilmEdge";
import createShipEdges from "./createShipEdges";
import { mockedHero } from "@/app/mockData";
import { mockedFilms } from "@/app/mockData";
import { mockedShips } from "@/app/mockData";

export interface Edge {
  id: string;
  source: string;
  target: string;
}

// Mock the modules
jest.mock("./createFilmEdge");
jest.mock("./createShipEdges");

// Type assertion for createFilmEdge mock
const createFilmEdgeMock = createFilmEdge as jest.MockedFunction<
  typeof createFilmEdge
>;
const createShipEdgesMock = createShipEdges as jest.MockedFunction<
  typeof createShipEdges
>;

describe("createEdges", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("creates edges for films and ships", () => {
    // Mock implementation of createFilmEdge
    createFilmEdgeMock.mockImplementation(
      (source: string, target: number): Edge => ({
        id: `${source}-${target}`,
        source,
        target: target.toString(),
      })
    );

    // Mock implementation of createShipEdges to return ship edges
    createShipEdgesMock.mockImplementation((film): Edge[] => [
      {
        id: `film-${film.id}-ship-48`,
        source: `film-${film.id}`,
        target: "ship-48",
      },
      {
        id: `film-${film.id}-ship-59`,
        source: `film-${film.id}`,
        target: "ship-59",
      },
    ]);

    // Call createEdges with mock data
    const edges: Edge[] = createEdges({
      hero: mockedHero,
      films: mockedFilms,
      ships: mockedShips,
    });

    // Assertions
    expect(edges).toHaveLength(6);
    expect(createFilmEdgeMock).toHaveBeenCalledTimes(2);
    expect(createShipEdgesMock).toHaveBeenCalledTimes(2);
    expect(createShipEdgesMock).toHaveBeenCalledWith(
      mockedFilms[1],
      mockedShips
    );
    expect(createShipEdgesMock).toHaveBeenCalledWith(
      mockedFilms[2],
      mockedShips
    );

    // Check film edges
    expect(edges).toEqual(
      expect.arrayContaining<Edge>([
        { id: "hero-10-1", source: "hero-10", target: "1" },
        { id: "hero-10-2", source: "hero-10", target: "2" },
        { id: "film-1-ship-48", source: "film-1", target: "ship-48" },
        { id: "film-1-ship-59", source: "film-1", target: "ship-59" },
        { id: "film-2-ship-48", source: "film-2", target: "ship-48" },
        { id: "film-2-ship-59", source: "film-2", target: "ship-59" },
      ])
    );
  });
});
