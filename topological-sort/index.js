"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directed_graph_1 = require("../directed-graph");
function topologicalSortWithVertex(current, stack, visited, graph) {
    visited.push(current);
    for (var _i = 0, _a = graph.getNextVertices(current); _i < _a.length; _i++) {
        var next = _a[_i];
        if (!visited.includes(next)) {
            topologicalSortWithVertex(next, stack, visited, graph);
        }
    }
    stack.unshift(current);
}
function topologicalSort(graph) {
    var stack = [];
    var visited = [];
    for (var _i = 0, _a = graph.getVertices(); _i < _a.length; _i++) {
        var current = _a[_i];
        if (!visited.includes(current)) {
            topologicalSortWithVertex(current, stack, visited, graph);
        }
    }
    return stack;
}
var graph = new directed_graph_1.default();
graph.addEdge({ from: "5", to: "2" });
graph.addEdge({ from: "5", to: "0" });
graph.addEdge({ from: "4", to: "0" });
graph.addEdge({ from: "4", to: "1" });
graph.addEdge({ from: "2", to: "3" });
graph.addEdge({ from: "3", to: "1" });
var sortedVertices = topologicalSort(graph);
console.log(sortedVertices);
//# sourceMappingURL=index.js.map