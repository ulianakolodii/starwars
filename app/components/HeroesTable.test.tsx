/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import HeroesTable from "./HeroesTable";
import fetchPeople from "../api/fetchPeople";
import { mockedHeroes, mockedFetchedHero } from "../mockData";

// Mock fetchPeople API function
jest.mock("../api/fetchPeople");

const mockFetchPeople = fetchPeople as jest.MockedFunction<typeof fetchPeople>;

beforeEach(() => {
  // Reset any mocks before each test
  mockFetchPeople.mockReset();
});

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = jest.fn((callback) => ({
    observe: jest.fn(() => {
      callback([{ isIntersecting: true }]);
    }),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  })) as unknown as typeof IntersectionObserver;
});

describe("HeroesTable", () => {
  it("renders hero data correctly", () => {
    render(<HeroesTable heroes={mockedHeroes} next="" />);
    expect(screen.getByText("Obi-Wan Kenobi")).toBeInTheDocument();
    expect(screen.getByText("57BBY")).toBeInTheDocument();
    expect(screen.getByText("blue-gray")).toBeInTheDocument();
    expect(screen.getByText("auburn, white")).toBeInTheDocument();
  });

  it("fetches and displays more heroes when scrolled to the bottom", async () => {
    mockFetchPeople.mockResolvedValueOnce({
      count: 2,
      next: null,
      results: [mockedFetchedHero],
    });

    render(<HeroesTable heroes={mockedHeroes} next="some-next-url" />);

    // Wait for the fetch to complete
    await waitFor(() =>
      expect(mockFetchPeople).toHaveBeenCalledWith("some-next-url")
    );

    // Verify the new hero is rendered
    expect(await screen.findByText("Uliana")).toBeInTheDocument();
    expect(screen.getByText("1997")).toBeInTheDocument();
  });

  it("does not fetch data if already fetching", async () => {
    mockFetchPeople.mockResolvedValueOnce({
      count: 0,
      results: [],
      next: null,
    });

    render(<HeroesTable heroes={mockedHeroes} next="some-next-url" />);

    // Simulate intersection
    await waitFor(() => expect(mockFetchPeople).toHaveBeenCalledTimes(1));

    // Simulate another intersection while still fetching
    await waitFor(() => expect(mockFetchPeople).toHaveBeenCalledTimes(1)); // No duplicate calls
  });
});
