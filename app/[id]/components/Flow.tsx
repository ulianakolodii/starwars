"use client";
import React, { useCallback, DragEventHandler, FC } from "react";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  Controls,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/base.css";
import "../../../tailwind.config";
import HeroNode from "./HeroNode";
import FilmNode from "./FilmNode";
import ShipNode from "./ShipNode";
import Link from "next/link";

const nodeTypes = {
  heroNode: HeroNode,
  filmNode: FilmNode,
  shipNode: ShipNode,
};

const Flow: FC<{
  initialNodes: Array<Node>;
  initialEdges: Array<Edge>;
}> = ({ initialNodes, initialEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleDragOver: DragEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  return (
    <div className="w-screen h-screen">
      <Link href="/" className="text-sm mt-3 ml-3">
        ← back to list
      </Link>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onDragOver={handleDragOver}
        nodeTypes={nodeTypes}
        fitView
        className="bg-teal-50"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
