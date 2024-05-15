const TestNodes = [
    {
        "id": "Node_0",
        "type": "StartNode",
        "position": {
            "x": 58.153960212821914,
            "y": -115.579049022677
        },
        "data": {
            "label": "StartNode node"
        },
        "width": 120,
        "height": 80,
        "selected": true,
        "positionAbsolute": {
            "x": 58.153960212821914,
            "y": -115.579049022677
        },
        "dragging": false
    },
    {
        "id": "Node_1",
        "type": "ProcessNode",
        "position": {
            "x": 4.01035896497433,
            "y": 196.12026893577513
        },
        "data": {
            "label": "ProcessNode node"
        },
        "width": 230,
        "height": 70,
        "selected": false,
        "positionAbsolute": {
            "x": 4.01035896497433,
            "y": 196.12026893577513
        },
        "dragging": false
    },
    {
        "id": "Node_2",
        "type": "InputNode",
        "position": {
            "x": 3.2843306187123744,
            "y": 36.532872995044364
        },
        "data": {
            "label": "InputNode node"
        },
        "width": 230,
        "height": 70,
        "selected": false,
        "positionAbsolute": {
            "x": 3.2843306187123744,
            "y": 36.532872995044364
        },
        "dragging": false
    },
    {
        "id": "Node_3",
        "type": "DecisionNode",
        "position": {
            "x": 335.5069220514822,
            "y": 331.3518924256899
        },
        "data": {
            "label": "DecisionNode node"
        },
        "width": 212,
        "height": 212,
        "selected": false,
        "positionAbsolute": {
            "x": 335.5069220514822,
            "y": 331.3518924256899
        },
        "dragging": false
    },
    {
        "id": "Node_4",
        "type": "OutputNode",
        "position": {
            "x": 131.99472118896074,
            "y": 620.7705674973424
        },
        "data": {
            "label": "OutputNode node"
        },
        "width": 230,
        "height": 70,
        "selected": false,
        "positionAbsolute": {
            "x": 131.99472118896074,
            "y": 620.7705674973424
        },
        "dragging": false
    },
    {
        "id": "Node_5",
        "type": "OutputNode",
        "position": {
            "x": 534.9067678361903,
            "y": 621.7741764560762
        },
        "data": {
            "label": "OutputNode node"
        },
        "width": 230,
        "height": 70,
        "selected": false,
        "positionAbsolute": {
            "x": 534.9067678361903,
            "y": 621.7741764560762
        },
        "dragging": false
    },
    {
        "id": "Node_6",
        "type": "EndNode",
        "position": {
            "x": 403.2858993202086,
            "y": 878.0019721761938
        },
        "data": {
            "label": "EndNode node"
        },
        "width": 120,
        "height": 80,
        "selected": false,
        "positionAbsolute": {
            "x": 403.2858993202086,
            "y": 878.0019721761938
        },
        "dragging": false
    }
]


const TestEdges = [
    {
        "source": "Node_3",
        "sourceHandle": "dnb0",
        "target": "Node_4",
        "targetHandle": "ona",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_3dnb0-Node_4ona"
    },
    {
        "source": "Node_3",
        "sourceHandle": "dnb1",
        "target": "Node_5",
        "targetHandle": "ona",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_3dnb1-Node_5ona"
    },
    {
        "source": "Node_5",
        "sourceHandle": "onb",
        "target": "Node_6",
        "targetHandle": "en",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_5onb-Node_6en"
    },
    {
        "source": "Node_4",
        "sourceHandle": "onb",
        "target": "Node_6",
        "targetHandle": "en",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_4onb-Node_6en"
    },
    {
        "source": "Node_1",
        "sourceHandle": "pnb",
        "target": "Node_3",
        "targetHandle": "dna",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_1pnb-Node_3dna"
    },
    {
        "source": "Node_2",
        "sourceHandle": "inb",
        "target": "Node_1",
        "targetHandle": "pna",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_2inb-Node_1pna"
    },
    {
        "source": "Node_0",
        "sourceHandle": "sn",
        "target": "Node_2",
        "targetHandle": "ina",
        "type": "smoothstep",
        "id": "reactflow__edge-Node_0sn-Node_2ina"
    }
]

export {TestNodes, TestEdges};