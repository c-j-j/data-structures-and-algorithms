var Heap = /** @class */ (function () {
    function Heap() {
        this.heap = [];
    }
    Heap.prototype.insertKey = function (key) {
        var index = this.heap.length;
        this.heap[index] = key;
        while (index !== 0 && this.parent(index) > this.heap[index]) {
            this.swap(index, Heap.parentIndex(index));
            index = Heap.parentIndex(index);
        }
    };
    Heap.prototype.deleteKey = function (key) {
        this.decreaseKey(key, -100);
        this.extractMin();
    };
    Heap.prototype.extractMin = function () {
        //foo
        var root = this.heap[0];
        var last = this.heap.pop();
        this.heap[0] = last;
        this.minHeapify(0);
    };
    Heap.prototype.getMin = function () {
        return this.heap[0];
    };
    Heap.prototype.decreaseKey = function (index, newValue) {
        this.heap[index] = newValue;
        while (index !== 0 && this.parent(index) > this.heap[index]) {
            this.swap(index, Heap.parentIndex(index));
            index = Heap.parentIndex(index);
        }
    };
    Heap.prototype.get = function () {
        return this.heap;
    };
    Heap.prototype.parent = function (index) {
        return this.heap[(index - 1) / 2];
    };
    Heap.parentIndex = function (index) {
        return (index - 1) / 2;
    };
    Heap.prototype.swap = function (a, b) {
        var tmp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = tmp;
    };
    Heap.leftIndex = function (index) {
        return 2 * index + 1;
    };
    Heap.rightIndex = function (index) {
        return 2 * index + 2;
    };
    Heap.prototype.minHeapify = function (index) {
        var left = Heap.leftIndex(index);
        var right = Heap.rightIndex(index);
        var smallest = index;
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
    };
    return Heap;
}());
var heap = new Heap();
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
//# sourceMappingURL=index.js.map