import React from 'react'
import '@/components/custom/CustomNodes/CustomNodes.css'

import { Handle, Position } from "reactflow";

export const StartNode = (isConnectable) => {
    return (
      <div className="StartNode">
        Start
        <Handle
          type="source"
          position={Position.Bottom}
          id="sn"
          isConnectable={isConnectable}
        />
      </div>
    );
  };


  export const EndNode = (isConnectable) => {
    return (
      <div className="EndNode">
        <Handle
          type="target"
          id="en"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        End
      </div>
    );
  };


export const InputNode = (isConnectable) => {
    return (
      <div className="InputNode">
        <div className="InputNodeContent">
          <Handle
            type="target"
            id="ina"
            position={Position.Top}
            isConnectable={isConnectable}
          />
          <input className="InputInput" type="text" placeholder="Input" />
  
          <Handle
            type="source"
            position={Position.Bottom}
            id="inb"
            isConnectable={isConnectable}
          />
        </div>
      </div>
    );
  };


export const OutputNode = (isConnectable) => {
    return (
      <div className="OutputNode">
        <div className="OutputNodeContent">
          <Handle
            type="target"
            id="ona"
            position={Position.Top}
            isConnectable={isConnectable}
          />
          <input className="OutputInput" type="text" placeholder="Output" />
  
          <Handle
            type="source"
            position={Position.Bottom}
            id="onb"
            isConnectable={isConnectable}
          />
        </div>
      </div>
    );
  };


export const ProcessNode = (isConnectable) => {
    return (
      <div className="ProcessNode">
        <Handle
          type="target"
          id="pna"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        <input className="processInput" type="text" placeholder="Process" />
        <Handle
          type="source"
          position={Position.Bottom}
          id="pnb"
          isConnectable={isConnectable}
        />
      </div>
    );
  };

  
export const DecisionNode = (isConnectable) => {
    return (
      <div className="DecisionNodeContainer">
        <div className="DecisionNode">
          <div className="DecisionNodeContent">
            <input className="DecisionInput" type="text" placeholder="Decision" />
          </div>
        </div>
        <div className="DecisionNodeHandels">
          <Handle
            type="target"
            id="dna"
            position={Position.Top}
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            position={Position.Right}
            id="dnb1"
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            position={Position.Left}
            id="dnb0"
            isConnectable={isConnectable}
          />
        </div>
      </div>
    );
  };


