import { Film } from "@/app/types";
import { Node } from "@xyflow/react";

const createFilmNode = (
  filmsAmount: number,
  data: Film,
  index: number
): Node<Film> => ({
  id: `film-${data.id}`,
  type: "filmNode",
  data,
  position: { x: (index - filmsAmount / 3) * 400, y: 400 }, // Adjusted for dynamic position
});

export default createFilmNode;
