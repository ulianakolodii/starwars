import { Ship } from "../types";

const fetchShips = async (ids: Array<number>) => {
  if (ids.length === 0) {
    return {};
  }
  const request = await fetch(
    `https://sw-api.starnavi.io/starships?${new URLSearchParams({
      id__in: ids.join(","),
    })}`
  );
  const response: { results: Array<Ship> } = await request.json();
  return response.results.reduce<Record<number, Ship>>((acc, ship) => {
    return {
      ...acc,
      [ship.id]: ship,
    };
  }, {});
};

export default fetchShips;
