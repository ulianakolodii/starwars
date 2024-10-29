import { Ship } from "../types";

const fetchShip = async (id: string) => {
  const request = await fetch(`https://sw-api.starnavi.io/starships/${id}`);
  const response: Ship = await request.json();
  return response;
};

export default fetchShip;
