import { Edge } from "@xyflow/react";
import { Film, Ship } from "@/app/types";
import createShipEdge from "./createShipEdge";

const createShipEdges = (film: Film, ships: Record<number, Ship>) =>
  film.starships.reduce<Array<Edge>>((acc, shipID) => {
    const ship = ships[shipID];
    if (ship) {
      return [...acc, createShipEdge(`film-${film.id}`, String(shipID))];
    }
    return acc;
  }, []);

export default createShipEdges;
