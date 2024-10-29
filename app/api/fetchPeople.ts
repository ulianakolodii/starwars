import { HeroesResponse } from "../types";

const fetchPeople = async (url: string) => {
  const request = await fetch(url);
  const response: HeroesResponse = await request.json();
  return response;
};

export default fetchPeople;
