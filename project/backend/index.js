
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const updateNodesSequentially = require('./updateNodesSequentially')
// const getCode = require('./AI');

const generateCode  = require('./AI');

function cleanNodes(node) {
  if (Array.isArray(node)) {
    return node.map(n => {
      if (typeof n === 'object' && n !== null && !Array.isArray(n)) {
        return {
          type: n.type,
          PseudoCode: n.data.PseudoCode 
        };
      }
      return n;
    });
  } else if (typeof node === 'object' && node !== null) {
    return {
      type: node.type,
      PseudoCode: node.data.PseudoCode
    };
  }
  return node;
}


// Enable CORS
app.use(cors());

// Enable body-parser for JSON
app.use(bodyParser.json());

// Sample GET API
app.get("/api", (req, res) => {
  res.json({ message: "Hellooooo !!!" });
});

// Sample POST API to receive two objects
app.post("/api/receive",async (req, res) => {
  const NODES = req.body.NODES;
  const EDGES = req.body.EDGES;
  // Check if both objects are received
  if (NODES && EDGES) {

    let Nodes = updateNodesSequentially(NODES,EDGES)
    Nodes = Nodes.map(cleanNodes)


    try {
      console.log("Loading ....");
      const response = await generateCode(`Convert this into c++ code ${JSON.stringify( Nodes)} (Note that you only can respond with the code nothing else and do not use makdown to format and do not use escap charecter)`);
      res.json(response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(400).json({ message: "Error: Please send both objects" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
