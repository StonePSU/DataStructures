class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    // start at the head;
    let currNode = this.head;
    let prev = currNode;

    while (currNode.next) {
      // store the current node as the previous node
      prev = currNode;
      // move to the next node;
      currNode = currNode.next;
    }

    // nullify the "next" property of prev, making it the tail
    prev.next = null;
    this.length -= 1;
    this.tail = prev;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currNode;
  }

  shift() {
    // shifting will remove the head and return the node that was removed;
    // if no nodes, return undefined
    if (this.length === 0) return undefined;

    // get the head
    let head = this.head;

    // change the head to the next node
    this.head = this.head.next;

    // decrement the length
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    // return the original head;
    return head;
  }

  unshift(val) {
    // unshift creates a new node and puts it at the head of the list

    // create a new node;
    let newHead = new Node(val);

    // if length is 0, make this the head and the tail
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      // make the next property of the new node the original head
      newHead.next = this.head;
      // make this the new node the new head;
      this.head = newHead;
    }
    // increment length
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;

    //initialize variables
    let counter = 0;
    let node = this.head;

    while (counter < index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(index, value) {
    let node = this.get(index);
    if (node === null) return false;

    node.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    // create a new node
    let newNode = new Node(value);
    // get the node prior to where the new node should be inserted
    let node = this.get(index - 1);

    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removeNode = prevNode.next;

    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    let head = this.head;
    let tail = this.tail;

    if (this.length < 2) return this;

    //         if (this.length === 2) {
    //             this.head = tail;
    //             this.tail = head;
    //             this.head.next = tail;
    //             return this;
    //         }

    let nextNode = this.head.next;
    let prevNode = this.head;
    while (nextNode !== this.tail) {
      let tempNext = nextNode.next;
      nextNode.next = prevNode;
      prevNode = nextNode;
      nextNode = tempNext;
    }

    this.head = tail;
    this.tail = head;
    this.tail.next = null;
    this.head.next = prevNode;
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list
  .push(1)
  .push(2)
  .push(3)
  .push(4);
