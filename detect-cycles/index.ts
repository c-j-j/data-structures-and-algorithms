import DirectedGraph from "../directed-graph";

function dfs(
  vertex: string,
  toVisit: string[],
  visiting: string[],
  visited: string[],
  graph: DirectedGraph
) {
  const item = toVisit.shift();
  visiting.push(item);

  for (let next of graph
    .getNextVertices(item)
    .filter(v => !visited.includes(v))) {
    if (visiting.includes(next)) {
      return true;
    }

    if (dfs(next, toVisit, visiting, visited, graph)) {
      return true;
    }
  }

  visiting.shift();
  visited.push(item);
  return false;
}

function DFS(graph: DirectedGraph) {
  const visiting = [];
  const visited = [];
  const toVisit = graph.getVertices();

  while (toVisit.length > 0) {
    if (dfs(toVisit[0], toVisit, visiting, visited, graph)) {
      return true;
    }
  }
  return false;
}

const graphWithoutLoop = new DirectedGraph();

graphWithoutLoop.addEdge({ from: "a", to: "b" });
graphWithoutLoop.addEdge({ from: "b", to: "c" });
graphWithoutLoop.addEdge({ from: "c", to: "d" });
graphWithoutLoop.addEdge({ from: "d", to: "e" });

console.log(DFS(graphWithoutLoop));

const graphWithLoop = new DirectedGraph();

graphWithLoop.addEdge({ from: "a", to: "b" });
graphWithLoop.addEdge({ from: "b", to: "c" });
graphWithLoop.addEdge({ from: "c", to: "d" });
graphWithLoop.addEdge({ from: "d", to: "a" });

console.log(DFS(graphWithLoop));

// TODO attempt this without the mutation?
