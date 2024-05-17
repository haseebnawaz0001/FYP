import { useState,useEffect, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import "./Canvas.css";

import {StartNode, EndNode , InputNode, OutputNode, ProcessNode, DecisionNode} from '@/components/custom/CustomNodes/CustomNodes'


const nodeTypes = {
  StartNode: StartNode,
  EndNode: EndNode,
  ProcessNode: ProcessNode,
  InputNode: InputNode,
  OutputNode: OutputNode,
  DecisionNode: DecisionNode,
};

// let NodeID = 0;

const Canvas = ({ nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange }) => {

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

//  useEffect(() => {
//     NodeID = nodes.length;
//   }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: (nodes.length).toString(),
        type,
        position,
        data: { label: `${type} node`,code:"test" },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="canvas-container">
      <ReactFlow
        connectionLineType="smoothstep"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background
          id="1"
          gap={100}
          color="#333333"
          variant={BackgroundVariant.Cross}
        />
        <Controls position="bottom-left" />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
