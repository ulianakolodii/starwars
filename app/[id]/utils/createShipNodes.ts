import { Node } from "@xyflow/react";
import createShipNode from "./createShipNode";
import { Film, Ship } from "@/app/types";

const createShipNodes = (film: Film, ships: Record<number, Ship>) =>
  film.starships.reduce<Array<Node>>((acc, id, shipIndex) => {
    const ship = ships[id];
    if (ship) {
      return [...acc, createShipNode(ship, shipIndex)];
    }
    return acc;
  }, []);

export default createShipNodes;
