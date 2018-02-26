import {uniq} from "lodash/fp";

type Edge = {
  from: string,
  to: string,
  weight: number
}

export default class WeightedGraph {
  private edges: Edge[];

  constructor() {
    this.edges = []
  }

  addEdge(from: string, to: string, weight: number) {
    this.edges.push({from, to, weight})
  }

  getVertices(): string[] {
    const allVertices = this.edges.map(e => e.from).concat(this.edges.map(e => e.to));
    return uniq(allVertices);
  }

  getSortedEdgesByWeight() {
    return this.edges.sort((a, b) => a.weight - b.weight);
  }
}