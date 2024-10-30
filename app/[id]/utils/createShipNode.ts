import { Ship } from "@/app/types";
import { Node } from "@xyflow/react";

const createShipNode = (data: Ship, idx: number): Node<Ship> => ({
  id: `ship-${data.id}`,
  type: "shipNode",
  data,
  position: { x: idx * 420, y: 800 + idx * 50 },
});

export default createShipNode;
