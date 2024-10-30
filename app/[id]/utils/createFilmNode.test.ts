import createFilmNode from "./createFilmNode";
import { mockedFilm } from "@/app/mockData";

describe("createFilmNode", () => {
  it("should create a film node with the correct properties", () => {
    const filmsAmount = 6;
    const filmData = mockedFilm;
    const index = 2;

    const node = createFilmNode(filmsAmount, filmData, index);

    expect(node).toEqual({
      id: `film-${filmData.id}`,
      type: "filmNode",
      data: filmData,
      position: { x: (index - filmsAmount / 3) * 400, y: 400 },
    });
  });

  it("should calculate the position correctly based on index and filmsAmount", () => {
    const filmsAmount = 9;
    const filmData = mockedFilm;
    const index = 5;

    const node = createFilmNode(filmsAmount, filmData, index);

    const expectedX = (index - filmsAmount / 3) * 400;
    const expectedPosition = { x: expectedX, y: 400 };

    expect(node.position).toEqual(expectedPosition);
  });
});
