"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../disjoint-set/index");
var weighted_graph_1 = require("../weighted-graph");
// Kruskal's Algorithm
function findMinimumSpanningTree(graph) {
    var vertices = graph.getVertices();
    var set = new index_1.default();
    vertices.forEach(function (v) { return set.makeSet(v); });
    var minimumSpanningTree = [];
    graph.getSortedEdgesByWeight().forEach(function (e) {
        if (set.find(e.from) !== set.find(e.to)) {
            set.union(e.from, e.to);
            minimumSpanningTree.push(e);
        }
    });
    return minimumSpanningTree;
}
var graph = new weighted_graph_1.default();
graph.addEdge('a', 'b', 3);
graph.addEdge('a', 'e', 1);
graph.addEdge('e', 'b', 4);
graph.addEdge('b', 'c', 5);
graph.addEdge('c', 'd', 2);
graph.addEdge('e', 'c', 6);
graph.addEdge('e', 'd', 7);
console.log(findMinimumSpanningTree(graph));
//# sourceMappingURL=kruskals.js.map