class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let pushedNode = new Node(val);
    if (this.length === 0) {
      this.first = pushedNode;
      this.last = pushedNode;
    } else {
      pushedNode.next = this.first;
      this.first = pushedNode;
    }

    this.length++;
    return this.length;
  }

  pop() {
    let poppedNode = this.first;

    // edge cases
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      // reset this.first to be the "next" node of the original first
      this.first = poppedNode.next;
    }

    this.length--;
    poppedNode.next = null;
    return poppedNode;
  }
}
