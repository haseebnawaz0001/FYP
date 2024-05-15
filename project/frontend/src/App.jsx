import './App.css'

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Menu from '@/components/custom/Menu/menu'
import Canvas from './components/custom/Canvas/Canvas'
import MyEditor from './components/custom/Editor/Editor'
import { TestNodes, TestEdges } from "@/assets/TestData/NodeTest";

import { useState,useEffect } from 'react';

import { useNodesState, useEdgesState } from "reactflow";


const App = () => {

  const [value, setValue] = useState(JSON.stringify(TestNodes));
  const [nodes, setNodes, onNodesChange] = useNodesState(TestNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(TestEdges);

  useEffect(()=>{
    setValue(JSON.stringify(nodes));
  },[nodes,edges])


  return (
    <>
      <Menu />
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border"
      >
        <ResizablePanel defaultSize={30}>
          <div className="flex h-full">
            <MyEditor value={value} setValue={setValue} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="flex h-full">
            <Canvas
              nodes={nodes}
              setNodes={setNodes}
              onNodesChange={onNodesChange}
              edges={edges}
              setEdges={setEdges}
              onEdgesChange={onEdgesChange}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  )
}

export default App