class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 1. create a new node and assign it to newNode variable
   * 2. check if tree is empty, assign newNode as root
   * 3. if tree is not empty, assign current node as root
   * 4. run a while loop, when value is less than currentNode insert it at the left of the parent node
   * 5. if it's greater or equal to currentNode, insert it at the right of parent node
   *
   */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // go left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // go right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }

      return false;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(20);
tree.lookup(9);
// JSON.stringify();

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
