"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var directed_graph_1 = require("../directed-graph");
function dfs(vertex, toVisit, visiting, visited, graph) {
    var item = toVisit.shift();
    visiting.push(item);
    for (var _i = 0, _a = graph
        .getNextVertices(item)
        .filter(function (v) { return !visited.includes(v); }); _i < _a.length; _i++) {
        var next = _a[_i];
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
function DFS(graph) {
    var visiting = [];
    var visited = [];
    var toVisit = graph.getVertices();
    while (toVisit.length > 0) {
        if (dfs(toVisit[0], toVisit, visiting, visited, graph)) {
            return true;
        }
    }
    return false;
}
var graphWithoutLoop = new directed_graph_1.default();
graphWithoutLoop.addEdge({ from: "a", to: "b" });
graphWithoutLoop.addEdge({ from: "b", to: "c" });
graphWithoutLoop.addEdge({ from: "c", to: "d" });
graphWithoutLoop.addEdge({ from: "d", to: "e" });
console.log(DFS(graphWithoutLoop));
var graphWithLoop = new directed_graph_1.default();
graphWithLoop.addEdge({ from: "a", to: "b" });
graphWithLoop.addEdge({ from: "b", to: "c" });
graphWithLoop.addEdge({ from: "c", to: "d" });
graphWithLoop.addEdge({ from: "d", to: "a" });
console.log(DFS(graphWithLoop));
// TODO attempt this without the mutation?
//# sourceMappingURL=index.js.map