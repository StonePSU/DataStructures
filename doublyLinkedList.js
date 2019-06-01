class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create the new node
    let node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    // get the current tail and store it in a variable;
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // make the previous node the new tail;
      let newTail = oldTail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
    // decouple the old tail from the previous node
    oldTail.prev = null;
    // return the old tail
    return oldTail;
  }

  shift() {
    //method removes the head and returns it
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // make the old heads next node the new head
      this.head = oldHead.next;

      // decouple the old head and new head
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    // create the new node
    let newNode = new Node(val);

    // if there are no items in this list, make the new node the head and the tail
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // store the original head in a variable
      let oldHead = this.head;
      // set the prev property of the old head to the new node
      oldHead.prev = newNode;
      // set the next property of the new node to be the old head
      newNode.next = oldHead;
      // set the head to be the new node
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    // get the middle point
    let half = Math.floor((this.length - 1) / 2);

    if (index < 0 || index > this.length - 1) return null;

    // if the index specified is less than or equal to half the length, start at the head
    let counter;
    let currentNode;

    if (index <= half) {
      console.log("start from head");
      counter = 0;
      currentNode = this.head;

      for (let i = 0; i <= index; i++) {
        if (i === index) {
          return currentNode;
        }
        currentNode = currentNode.next;
      }
    } else {
      console.log("start from tail");
      counter = this.length - 1;
      currentNode = this.tail;

      for (let i = this.length - 1; i >= index; i--) {
        if (index === i) {
          return currentNode;
        }

        currentNode = currentNode.prev;
      }
    }
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    // edge cases
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    (removedNode.prev = null), (removedNode.next = null);
    (beforeNode.next = afterNode), (afterNode.prev = beforeNode);

    return removedNode;
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

let list = new DoublyLinkedList();
