class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class QueueNode {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  enqueue(val) {
      let newNode = new QueueNode(val);
      if (!this.first) {
          this.first = this.last = newNode;
      } else {
          this.last.next = newNode;
          this.last = newNode;
      }
      return ++this.size;
  }

  dequeue() {
      if (!this.first) return null;

      let temp = this.first;
      if (this.first === this.last) {
          this.last = null;
      }
      this.first = this.first.next;
      this.size--;
      return temp.value;
  }

  isEmpty() {
      return this.size === 0;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        // if value is less, go left
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        // if value is greater, go right
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        // if value already exists, return the tree
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const insertNode = (node, val) => {
      if (node === null) {
        return new Node(val);
      }

      if (val < node.val) {
        node.left = insertNode(node.left, val);
      } else if (val > node.val) {
        node.right = insertNode(node.right, val);
      }

      return node;
    };

    this.root = insertNode(this.root, val);

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current !== null) {
      if (val === current.val) {
        return current; 
      } else if (val < current.val) {
        current = current.left; 
      } else {
        current = current.right;
      }
    }

    return undefined;  // Value not found in the tree
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const searchNode = (node, val) => {
      if (node === null) {
        return undefined; //base case, value not found
      }

      if (val === node.val) {
        return node;
      } else if (val < node.val) {
        return searchNode(node.left, val);
      } else {
        return searchNode(node.right, val);
      }
    }

    return searchNode(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let result = [];

    const traversePreOrder = (node) => {
      if (node === null) return;

      result.push(node.val);
      traversePreOrder(node.left);
      traversePreOrder(node.right);
    };

    traversePreOrder(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let result = [];

    const traverseInOrder = (node) => {
      if (node === null) return;

      traverseInOrder(node.left);
      result.push(node.val);
      traverseInOrder(node.right);
    };

    traverseInOrder(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    const traversePostOrder = (node) => {
      if (node === null) return;

      traversePostOrder(node.left);
      traversePostOrder(node.right);
      result.push(node.val);
    }
    traversePostOrder(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = [];
    let queue = new Queue();

    if (this.root) {
      queue.enqueue(this.root);
    }

    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();

      result.push(currentNode.val);

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
