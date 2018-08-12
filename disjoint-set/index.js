"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisjointSet = /** @class */ (function () {
    function DisjointSet() {
        this.nodes = [];
    }
    DisjointSet.prototype.makeSet = function (value) {
        if (!this.nodes.map(function (n) { return n.value; }).includes(value)) {
            var newNode = {
                value: value,
                parent: null,
                rank: 0
            };
            newNode.parent = newNode;
            this.nodes.push(newNode);
        }
    };
    DisjointSet.isRootNode = function (node) {
        return node.parent.value === node.value;
    };
    DisjointSet.prototype.find = function (value) {
        var node = this.nodes.find(function (n) { return n.value === value; });
        if (!node)
            throw Error("Invalid value");
        if (DisjointSet.isRootNode(node)) {
            return node;
        }
        else {
            var parent_1 = this.find(node.parent.value);
            DisjointSet.applyPathCompression(node, parent_1);
            return parent_1;
        }
    };
    DisjointSet.makeChildOfParent = function (child, parent) {
        child.parent = parent;
        child.rank = child.rank + 1;
    };
    DisjointSet.prototype.union = function (xValue, yValue) {
        var xRoot = this.find(xValue);
        var yRoot = this.find(yValue);
        if (xRoot.value === yRoot.value)
            return;
        xRoot.rank <= yRoot.rank
            ? DisjointSet.makeChildOfParent(xRoot, yRoot)
            : DisjointSet.makeChildOfParent(yRoot, xRoot);
    };
    DisjointSet.applyPathCompression = function (child, parent) {
        child.parent = parent;
    };
    return DisjointSet;
}());
exports.default = DisjointSet;
//# sourceMappingURL=index.js.map