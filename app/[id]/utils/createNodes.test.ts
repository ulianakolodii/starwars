import createNodes from "./createNodes";
import createFilmNode from "./createFilmNode";
import createShipNodes from "./createShipNodes";
import { mockedHero } from "@/app/mockData";
import { mockedFilms } from "@/app/mockData";
import { mockedShips } from "@/app/mockData";

// Mocking dependencies
jest.mock("./createFilmNode");
jest.mock("./createShipNodes");

// Type assertions for the mocks
const createFilmNodeMock = createFilmNode as jest.MockedFunction<
  typeof createFilmNode
>;
const createShipNodesMock = createShipNodes as jest.MockedFunction<
  typeof createShipNodes
>;

describe("createNodes", () => {
  it("should create nodes for the hero, films, and ships", async () => {
    const hero = mockedHero;
    const films = mockedFilms;
    const ships = mockedShips;

    // Mock the return value for createFilmNode and createShipNodes
    createFilmNodeMock.mockImplementation((filmsAmount, filmData, index) => ({
      id: `film-${filmData.id}`,
      type: "filmNode",
      data: filmData,
      position: { x: (index - filmsAmount / 3) * 400, y: 400 },
    }));

    createShipNodesMock.mockImplementation(() => {
      // Return mock ship nodes for testing
      return [
        {
          id: `ship-48`,
          type: "shipNode",
          data: {
            MGLT: "unknown",
            cargo_capacity: "60",
            consumables: "7 days",
            cost_in_credits: "180000",
            created: "2014-12-20T17:35:23.906000Z",
            crew: "1",
            edited: "2014-12-20T21:23:49.930000Z",
            films: [5, 6],
            hyperdrive_rating: "1.0",
            id: 48,
            length: "8",
            manufacturer: "Kuat Systems Engineering",
            max_atmosphering_speed: "1150",
            model: "Delta-7 Aethersprite-class interceptor",
            name: "Jedi starfighter",
            passengers: "0",
            pilots: [10, 58],
            starship_class: "Starfighter",
            url: "https://sw-api.starnavi.io/starships/48/",
          },
          position: { x: 420, y: 850 },
        },
        {
          id: `ship-59`,
          type: "shipNode",
          data: {
            MGLT: "unknown",
            cargo_capacity: "50000000",
            consumables: "4 years",
            cost_in_credits: "125000000",
            created: "2014-12-20T19:40:21.902000Z",
            crew: "600",
            edited: "2014-12-20T21:23:49.941000Z",
            films: [6],
            hyperdrive_rating: "1.5",
            id: 59,
            length: "1088",
            manufacturer:
              "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
            max_atmosphering_speed: "1050",
            model: "Providence-class carrier/destroyer",
            name: "Trade Federation cruiser",
            passengers: "48247",
            pilots: [10, 11],
            starship_class: "capital ship",
            url: "https://sw-api.starnavi.io/starships/59/",
          },
          position: { x: 840, y: 900 },
        },
      ];
    });

    const nodes = await createNodes({ hero, films, ships });

    expect(nodes).toHaveLength(7);
    expect(nodes[0]).toEqual({
      id: `hero-${hero.id}`,
      type: "heroNode",
      data: hero,
      position: { x: 50, y: 50 },
    });

    // Check film nodes
    expect(nodes[1]).toEqual({
      id: `film-1`,
      type: "filmNode",
      data: films[1],
      position: { x: -266.66666666666663, y: 400 },
    });
    expect(nodes[4]).toEqual({
      id: `film-2`,
      type: "filmNode",
      data: films[2],
      position: { x: 133.33333333333334, y: 400 },
    });

    // Check ship nodes
    expect(nodes[2]).toEqual({
      id: `ship-48`,
      type: "shipNode",
      data: {
        MGLT: "unknown",
        cargo_capacity: "60",
        consumables: "7 days",
        cost_in_credits: "180000",
        created: "2014-12-20T17:35:23.906000Z",
        crew: "1",
        edited: "2014-12-20T21:23:49.930000Z",
        films: [5, 6],
        hyperdrive_rating: "1.0",
        id: 48,
        length: "8",
        manufacturer: "Kuat Systems Engineering",
        max_atmosphering_speed: "1150",
        model: "Delta-7 Aethersprite-class interceptor",
        name: "Jedi starfighter",
        passengers: "0",
        pilots: [10, 58],
        starship_class: "Starfighter",
        url: "https://sw-api.starnavi.io/starships/48/",
      },
      position: { x: 420, y: 850 },
    });
    expect(nodes[3]).toEqual({
      id: `ship-59`,
      type: "shipNode",
      data: {
        MGLT: "unknown",
        cargo_capacity: "50000000",
        consumables: "4 years",
        cost_in_credits: "125000000",
        created: "2014-12-20T19:40:21.902000Z",
        crew: "600",
        edited: "2014-12-20T21:23:49.941000Z",
        films: [6],
        hyperdrive_rating: "1.5",
        id: 59,
        length: "1088",
        manufacturer:
          "Rendili StarDrive, Free Dac Volunteers Engineering corps.",
        max_atmosphering_speed: "1050",
        model: "Providence-class carrier/destroyer",
        name: "Trade Federation cruiser",
        passengers: "48247",
        pilots: [10, 11],
        starship_class: "capital ship",
        url: "https://sw-api.starnavi.io/starships/59/",
      },
      position: { x: 840, y: 900 },
    });
  });
});
