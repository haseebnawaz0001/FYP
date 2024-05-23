
export function updateNodesSequentially(nodes, edges){
 
 
  function ReturnNode(NODES, ID){

    for (let nd of NODES) {
      if (nd.id === ID) {
        return nd
      }
  
  }
}
  let updatedNodes = []
  let id = ""

  for (let node of nodes) {
    if (node.type === "StartNode") {
      id= node.id;
      updatedNodes.push(node);
    }
  }

  for (let i=0;i<10;i++) {
    for (let edge of edges) {
      if (edge.source === id) {
        updatedNodes.push(ReturnNode(nodes,edge.target))
        id=edge.target
      }
    } 
  }

  console.log("Updated Nodes : ",updatedNodes)
  console.log("ID is : ", id)
}



