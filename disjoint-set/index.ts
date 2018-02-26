type Node = {
  parent: Node,
  value: string
}

export default class DisjointSet {
  nodes: Array<Node>;

  constructor() {
    this.nodes = [];
  }

  makeSet(value) {
    if (!this.nodes.map(n => n.value).includes(value)) {
      const newNode = {
        value,
        parent: null,
        rank: 0
      };
      newNode.parent = newNode;
      this.nodes.push(newNode);
    }
  }

  static isRootNode(node) {
    return node.parent.value === node.value;
  }

  find(value) {
    const node = this.nodes.find(n => n.value === value);
    if (!node) throw Error("Invalid value");

    if (DisjointSet.isRootNode(node)) {
      return node;
    } else {
      const parent = this.find(node.parent.value);
      DisjointSet.applyPathCompression(node, parent);
      return parent;
    }
  }

  static makeChildOfParent(child, parent) {
    child.parent = parent;
    child.rank = child.rank + 1;
  }

  union(xValue, yValue) {
    const xRoot = this.find(xValue);
    const yRoot = this.find(yValue);

    if (xRoot.value === yRoot.value) return;

    xRoot.rank <= yRoot.rank
      ? DisjointSet.makeChildOfParent(xRoot, yRoot)
      : DisjointSet.makeChildOfParent(yRoot, xRoot);
  }

  static applyPathCompression(child, parent) {
    child.parent = parent;
  }
}
