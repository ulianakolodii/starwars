import createShipNode from "./createShipNode"; // Import the function to test
import { Ship } from "@/app/types"; // Import the Ship type if needed
import { Node } from "@xyflow/react";
import { mockedShip } from "@/app/mockData";

describe("createShipNode", () => {
  it("should create a ship node with the correct properties", () => {
    const index = 2;
    const expectedNode: Node<Ship> = {
      id: "ship-48",
      type: "shipNode",
      data: mockedShip,
      position: { x: index * 420, y: 800 + index * 50 },
    };

    const result = createShipNode(mockedShip, index);
    expect(result).toEqual(expectedNode);
  });

  it("should calculate the correct position based on the index", () => {
    const index = 5;
    const result = createShipNode(mockedShip, index);
    expect(result.position).toEqual({ x: 5 * 420, y: 800 + 5 * 50 });
  });
});
