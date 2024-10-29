import { Edge } from "@xyflow/react";
import fetchGraph from "@/app/api/fetchGraph";
import createFilmEdge from "./createFilmEdge";
import createShipEdges from "./createShipEdges";

const createEdges = ({
  hero,
  films,
  ships,
}: Awaited<ReturnType<typeof fetchGraph>>) => {
  const { filmEdges, shipEdges } = hero.films.reduce<{
    filmEdges: Array<Edge>;
    shipEdges: Array<Edge>;
  }>(
    (acc, filmID) => {
      const filmEdge = createFilmEdge(`hero-${hero.id}`, filmID);
      const film = films[filmID];
      const shipEdges = createShipEdges(film, ships);
      return {
        filmEdges: [...acc.filmEdges, filmEdge],
        shipEdges: [...acc.shipEdges, ...shipEdges],
      };
    },
    { filmEdges: [], shipEdges: [] }
  );
  return [...filmEdges, ...shipEdges];
};

export default createEdges;
