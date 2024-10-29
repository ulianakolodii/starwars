import { Node } from "@xyflow/react";
import fetchGraph from "@/app/api/fetchGraph";
import createFilmNode from "./createFilmNode";
import createShipNodes from "./createShipNodes";

const createNodes = ({
  hero,
  films,
  ships,
}: Awaited<ReturnType<typeof fetchGraph>>) => {
  const nodes = hero.films.reduce<Array<Node>>(
    (acc, filmId, index) => {
      const film = films[filmId];
      const res = [
        ...acc,
        createFilmNode(hero.films.length, film, index),
        ...createShipNodes(film, ships),
      ];
      return res;
    },
    [
      {
        id: `hero-${hero.id}`,
        type: "heroNode",
        data: hero,
        position: { x: 50, y: 50 },
      },
    ]
  );
  return nodes;
};

export default createNodes;
