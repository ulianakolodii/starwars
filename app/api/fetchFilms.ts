import { Film } from "../types";

const fetchFilms = async (ids: Array<number>) => {
  if (ids.length === 0) {
    return {};
  }
  const request = await fetch(
    `https://sw-api.starnavi.io/films?${new URLSearchParams({
      id__in: ids.join(","),
    })}`
  );
  const response: { results: Array<Film> } = await request.json();
  return response.results.reduce<Record<number, Film>>((acc, film) => {
    return {
      ...acc,
      [film.id]: film,
    };
  }, {});
};

export default fetchFilms;
