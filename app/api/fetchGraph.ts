import fetchFilms from "./fetchFilms";
import fetchShips from "./fetchShips";
import fetchHero from "./fetchHero";

const fetchGraph = async (id: string) => {
  const hero = await fetchHero(id);
  const films = await fetchFilms(hero.films);
  const ships = await fetchShips(hero.starships);

  return { hero, films, ships };
};

export default fetchGraph;
