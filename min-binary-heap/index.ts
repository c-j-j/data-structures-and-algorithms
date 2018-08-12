class Heap {
  private heap: number[];
  constructor() {
    this.heap = [];
  }

  insertKey(key: number) {
    let index = this.heap.length;
    this.heap[index] = key;

    while (index !== 0 && this.parent(index) > this.heap[index]) {
      this.swap(index, Heap.parentIndex(index));
      index = Heap.parentIndex(index);
    }
  }

  deleteKey(key: number) {
    this.decreaseKey(key, -100);
    this.extractMin();
  }

  extractMin() {
    //foo
    const root = this.heap[0];
    const last = this.heap.pop();
    this.heap[0] = last;
    this.minHeapify(0);
  }

  getMin() {
    return this.heap[0];
  }

  decreaseKey(index: number, newValue: number) {
    this.heap[index] = newValue;
    while (index !== 0 && this.parent(index) > this.heap[index]) {
      this.swap(index, Heap.parentIndex(index));
      index = Heap.parentIndex(index);
    }
  }

  get() {
    return this.heap;
  }

  private parent(index: number) {
    return this.heap[(index - 1) / 2];
  }

  private static parentIndex(index: number) {
    return (index - 1) / 2;
  }

  private swap(a: number, b: number) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }

  private static leftIndex(index: number) {
    return 2 * index + 1;
  }

  private static rightIndex(index: number) {
    return 2 * index + 2;
  }

  private minHeapify(index: number) {
    const left = Heap.leftIndex(index);
    const right = Heap.rightIndex(index);
    let smallest = index;
    if (left < this.heap.length && this.heap[left] < this.heap[index]) {
      smallest = left;
    }
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== index) {
      this.swap(index, smallest);
      this.minHeapify(smallest);
    }
  }
}

const heap = new Heap();

heap.insertKey(3);
heap.insertKey(2);
heap.deleteKey(1);
console.log(heap.get());

heap.insertKey(15);
heap.insertKey(5);
heap.insertKey(4);
heap.insertKey(45);
console.log(heap.get());

console.log(heap.extractMin());
console.log(heap.getMin());
heap.decreaseKey(2, 1);
console.log(heap.getMin());
