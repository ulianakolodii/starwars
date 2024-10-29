import React, { FC } from "react";
import { Handle, Position } from "@xyflow/react";
import { Film } from "@/app/types";

const FilmNode: FC<{
  data: Film;
}> = ({ data: { title, director, producer, opening_crawl, release_date } }) => {
  return (
    <>
      <div
        className={
          "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent w-80"
        }
      >
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{title}</div>
            </div>
            <div className="ml-auto text-xs">
              {new Date(release_date).toLocaleString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="text-xs font-medium">
            {director} - {producer}
          </div>
        </div>
        <div className="line-clamp-2 text-xs text-muted-foreground">
          {opening_crawl.substring(0, 300)}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </>
  );
};

export default FilmNode;
