import { Node } from "@xyflow/react";
import createShipNode from "./createShipNode";
import { Film, Ship } from "@/app/types";

const createShipNodes = (film: Film, ships: Record<number, Ship>) =>
  film.starships.reduce<Array<Node>>((acc, id) => {
    const ship = ships[id];
    if (ship) {
      const shipIndex = Object.keys(ships).indexOf(String(ship.id));
      return [...acc, createShipNode(ship, shipIndex)];
    }
    return acc;
  }, []);

export default createShipNodes;
