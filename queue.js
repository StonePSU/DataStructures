class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // add to the end of the list
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    let poppedNode = this.first;

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // reset the first node
      this.first = poppedNode.next;
      poppedNode.next = null;
    }

    this.length--;
    return poppedNode;
  }
}
