import DirectedGraph from "../directed-graph";

function topologicalSortWithVertex(
  current: string,
  stack: any[],
  visited: any[],
  graph: DirectedGraph
) {
  visited.push(current);

  for (let next of graph.getNextVertices(current)) {
    if (!visited.includes(next)) {
      topologicalSortWithVertex(next, stack, visited, graph);
    }
  }
  stack.unshift(current);
}

function topologicalSort(graph: DirectedGraph) {
  const stack = [];
  const visited = [];

  for (let current of graph.getVertices()) {
    if (!visited.includes(current)) {
      topologicalSortWithVertex(current, stack, visited, graph);
    }
  }

  return stack;
}

const graph = new DirectedGraph();
graph.addEdge({ from: "5", to: "2" });
graph.addEdge({ from: "5", to: "0" });
graph.addEdge({ from: "4", to: "0" });
graph.addEdge({ from: "4", to: "1" });
graph.addEdge({ from: "2", to: "3" });
graph.addEdge({ from: "3", to: "1" });

const sortedVertices = topologicalSort(graph);

console.log(sortedVertices);
