import { Hero } from "../types";

const fetchHero = async (id: string) => {
  const request = await fetch(`${process.env.BASE_URL}/people/${id}`);
  const response: Hero = await request.json();
  return response;
};

export default fetchHero;
