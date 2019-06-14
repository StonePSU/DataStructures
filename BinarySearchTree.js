class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    // if there is no root then the new node becomes the root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let checkNode = this.root;
    let keepChecking = true;

    while (keepChecking) {
      if (newNode.value === checkNode.value) return undefined;

      if (newNode.value < checkNode.value) {
        if (checkNode.left) {
          checkNode = checkNode.left;
        } else {
          checkNode.left = newNode;
          return this;
        }
      } else {
        if (checkNode.right) {
          checkNode = checkNode.right;
        } else {
          checkNode.right = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;

    while (current) {
      if (current.value === value) return current;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  breadthFirstSearch() {
    let queue = [];
    let visited = [];
    let tempNode;

    queue.push(this.root);

    while (queue.length > 0) {
      tempNode = queue[0];
      // push the left and right nodes into the queue
      if (tempNode.left) queue.push(tempNode.left);
      if (tempNode.right) queue.push(tempNode.right);

      visited.push(queue.shift().value);
    }

    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      visited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(current);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(current);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return visited;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst
  .insert(12)
  .insert(8)
  .insert(38)
  .insert(1)
  .insert(45)
  .insert(9);

//              10
//           8      12
//        1     9       38
//                          45
