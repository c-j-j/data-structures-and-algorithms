import { uniq } from "lodash/fp";

type Edge = {
  from: string;
  to: string;
};

export default class DirectedGraph {
  private edges: Edge[];

  constructor() {
    this.edges = [];
  }

  addEdge(edge: Edge) {
    this.edges.push(edge);
  }

  getNextVertices(v: string) {
    return this.edges.filter(e => e.from === v).map(e => e.to);
  }

  getVertices() {
    return uniq(this.edges.map(e => e.from).concat(this.edges.map(e => e.to)));
  }
}
