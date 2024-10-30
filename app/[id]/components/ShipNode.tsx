import React, { FC } from "react";
import { Handle, Position } from "@xyflow/react";
import { Ship } from "@/app/types";
import { Badge } from "@/components/ui/badge";

const ShipNode: FC<{ data: Ship }> = ({
  data: { name, model, manufacturer, passengers, max_atmosphering_speed, crew },
}) => {
  const labels = [
    `passengers: ${passengers}`,
    `crew: ${crew}`,
    `max speed: ${max_atmosphering_speed}`,
  ];
  return (
    <>
      <div
        className={
          "flex flex-col items-start gap-2 rounded-lg border p-3 max-w-[400px] bg-white text-left text-sm transition-all hover:bg-accent"
        }
      >
        <div className="flex w-full flex-col gap-1 min-w-80">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{name}</div>
            </div>
            <div className="ml-auto text-xs">{model}</div>
          </div>
          <div className="text-xs font-medium">{manufacturer}</div>
        </div>
        <div className="flex items-center gap-2">
          {labels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
      </div>
      <Handle type="target" position={Position.Top} />
    </>
  );
};

export default ShipNode;
