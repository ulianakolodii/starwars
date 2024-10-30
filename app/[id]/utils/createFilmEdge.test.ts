import createFilmEdge from "./createFilmEdge";

describe("createFilmEdge", () => {
  it("should create a film edge with the correct properties", () => {
    const heroNodeId = "hero-10";
    const filmId = 1;

    const edge = createFilmEdge(heroNodeId, filmId);
    expect(edge).toEqual({
      id: `edge-${heroNodeId}-film-${filmId}`,
      source: heroNodeId,
      target: `film-${filmId}`,
      type: "smoothstep",
      animated: true,
      style: { stroke: "#000" },
    });
  });

  it("should create an edge with unique IDs for different inputs", () => {
    const heroNodeId1 = "hero-1";
    const filmId1 = 1;
    const heroNodeId2 = "hero-2";
    const filmId2 = 2;

    const edge1 = createFilmEdge(heroNodeId1, filmId1);
    const edge2 = createFilmEdge(heroNodeId2, filmId2);
    expect(edge1.id).not.toEqual(edge2.id);
  });
});
