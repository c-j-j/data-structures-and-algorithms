class DisjointSet {
  constructor() {
    this.nodes = []
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
    return node.parent.value === node.value
  }

  find(value) {
    const node = this.nodes.find(n => n.value === value);
    if (!node) throw Error('Invalid value');

    if (DisjointSet.isRootNode(node)) {
      return node
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

    xRoot.rank <= yRoot.rank ?
      DisjointSet.makeChildOfParent(xRoot, yRoot) :
      DisjointSet.makeChildOfParent(yRoot, xRoot);
  }

  static applyPathCompression(child, parent) {
    child.parent = parent;
  }
}

const set = new DisjointSet();
set.makeSet(1);
set.makeSet(2);
set.makeSet(3);
set.makeSet(4);
set.makeSet(5);
set.makeSet(6);
set.makeSet(7);
set.makeSet(8);
set.makeSet(9);

console.log(set.nodes);

const foundParent = set.find(1);

console.log(`Found parent is ${foundParent.value}`);

console.log("Union 1,2");
console.log("Union 3,4");

set.union(1, 2);
set.union(3, 4);

console.log(`Found parent of 1 is ${set.find(1).value}`);
console.log(`Found parent of 2 is ${set.find(2).value}`);
console.log(`Found parent of 3 is ${set.find(3).value}`);
console.log(`Found parent of 4 is ${set.find(4).value}`);

console.log("Union 1,3");
set.union(1, 3);

console.log(`Found parent of 1 is ${set.find(1).value}`);
console.log(`Found parent of 2 is ${set.find(2).value}`);
console.log(`Found parent of 3 is ${set.find(3).value}`);
console.log(`Found parent of 4 is ${set.find(4).value}`);
