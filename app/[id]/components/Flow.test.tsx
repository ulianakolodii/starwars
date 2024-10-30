/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Flow from "./Flow";
import createEdges from "../utils/createEdges";
import createNodes from "../utils/createNodes";
import { mockedFilms, mockedShips, mockedHero } from "@/app/mockData";

afterEach(cleanup);

it("renders the Flow component with initial nodes and edges", () => {
  // Render the Flow component with mocked data
  render(
    <Flow
      initialEdges={createEdges({
        hero: mockedHero,
        films: mockedFilms,
        ships: mockedShips,
      })}
      initialNodes={createNodes({
        hero: mockedHero,
        films: mockedFilms,
        ships: mockedShips,
      })}
    />
  );

  // Check if the hero's name is rendered
  expect(screen.getByText(mockedHero.name)).toBeInTheDocument();

  // Check if film titles are rendered
  Object.values(mockedFilms).forEach((film) => {
    expect(screen.getByText(film.title)).toBeInTheDocument();
  });

  // Check if ship names are rendered
  Object.values(mockedShips).forEach((ship) => {
    expect(screen.getByText(ship.name)).toBeInTheDocument();
  });

  // Check if the back link is rendered
  expect(
    screen.getByRole("link", { name: /← back to list/i })
  ).toBeInTheDocument();
});
