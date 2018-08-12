"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = require("lodash/fp");
var DirectedGraph = /** @class */ (function () {
    function DirectedGraph() {
        this.edges = [];
    }
    DirectedGraph.prototype.addEdge = function (edge) {
        this.edges.push(edge);
    };
    DirectedGraph.prototype.getNextVertices = function (v) {
        return this.edges.filter(function (e) { return e.from === v; }).map(function (e) { return e.to; });
    };
    DirectedGraph.prototype.getVertices = function () {
        return fp_1.uniq(this.edges.map(function (e) { return e.from; }).concat(this.edges.map(function (e) { return e.to; })));
    };
    return DirectedGraph;
}());
exports.default = DirectedGraph;
//# sourceMappingURL=index.js.map