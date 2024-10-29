import React, { FC } from "react";
import { Handle, Position } from "@xyflow/react";
import { Hero } from "@/app/types";
import { Badge } from "@/components/ui/badge";

const HeroNode: FC<{
  data: Hero;
}> = ({
  data: {
    name,
    gender,
    birth_year,
    mass,
    height,
    hair_color,
    eye_color,
    skin_color,
    created,
  },
}) => {
  const labels = [
    `gender: ${gender}`,
    `height: ${height}`,
    `mass: ${mass}`,
    `hair: ${hair_color}`,
    `eyes: ${eye_color}`,
    `skin: ${skin_color}`,
  ];

  return (
    <>
      <div
        className={
          "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
        }
      >
        <div className="flex w-full flex-col gap-1 min-w-80">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{name}</div>
            </div>
            <div className="ml-auto text-xs">{birth_year}</div>
          </div>
          <div className="text-xs font-medium">
            {new Date(created).toLocaleString("uk-UK", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {labels.map((label) => (
            <Badge key={label}>{label}</Badge>
          ))}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default HeroNode;
