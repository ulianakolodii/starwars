import { Film } from "../types";

const fetchFilm = async (id: string) => {
  const request = await fetch(`https://sw-api.starnavi.io/films/${id}`);
  const response: Film = await request.json();
  return response;
};

export default fetchFilm;
