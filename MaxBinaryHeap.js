class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp(index) {
    let parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0) {
      if (this.values[parentIndex] < this.values[index]) {
        // swap them
        [this.values[parentIndex], this.values[index]] = [
          this.values[index],
          this.values[parentIndex]
        ];
        this.bubbleUp(parentIndex);
      }
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
    return this;
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap
  .insert(41)
  .insert(39)
  .insert(33)
  .insert(18)
  .insert(27)
  .insert(12);
