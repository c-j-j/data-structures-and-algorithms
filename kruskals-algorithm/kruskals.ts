import DisjointSet from '../disjoint-set/index';
import WeightedGraph from '../weighted-graph'

// Kruskal's Algorithm
function findMinimumSpanningTree(graph: WeightedGraph) {
  const vertices = graph.getVertices();

  const set = new DisjointSet();

  vertices.forEach(v => set.makeSet(v));

  const minimumSpanningTree = [];

  graph.getSortedEdgesByWeight().forEach(e => {
    if (set.find(e.from) !== set.find(e.to)) {
      set.union(e.from, e.to);
      minimumSpanningTree.push(e);
    }
  });

  return minimumSpanningTree;
}

const graph = new WeightedGraph();

graph.addEdge('a', 'b', 3);
graph.addEdge('a', 'e', 1);
graph.addEdge('e', 'b', 4);
graph.addEdge('b', 'c', 5);
graph.addEdge('c', 'd', 2);
graph.addEdge('e', 'c', 6);
graph.addEdge('e', 'd', 7);

console.log(findMinimumSpanningTree(graph));
