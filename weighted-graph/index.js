"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = require("lodash/fp");
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph() {
        this.edges = [];
    }
    WeightedGraph.prototype.addEdge = function (from, to, weight) {
        this.edges.push({ from: from, to: to, weight: weight });
    };
    WeightedGraph.prototype.getVertices = function () {
        var allVertices = this.edges
            .map(function (e) { return e.from; })
            .concat(this.edges.map(function (e) { return e.to; }));
        return fp_1.uniq(allVertices);
    };
    WeightedGraph.prototype.getSortedEdgesByWeight = function () {
        return this.edges.sort(function (a, b) { return a.weight - b.weight; });
    };
    return WeightedGraph;
}());
exports.default = WeightedGraph;
//# sourceMappingURL=index.js.map