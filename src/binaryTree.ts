class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: number): number | null  {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode | null, value: number): number | null {
    if (node === null) {
      return null;
    }

    if (node.value === value) {
      return node.value;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  inorderTraversal(node: TreeNode | null = this.root, result: number[] = []): number[] {
    if (node !== null) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  printTree(node: TreeNode | null = this.root, prefix = "", isLeft = false) {
    if (node !== null) {
      console.log(
        prefix + (isLeft ? "├── " : "└── ") + node.value
      );
      this.printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
  }
}

const arrayToSort = [34, 84, 15, 0, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101];
const binaryTree = new BinaryTree();

for (const num of arrayToSort) {
  binaryTree.insert(num);
}

const searchResult = binaryTree.search(2);
console.log(searchResult);

const sortedArray = binaryTree.inorderTraversal();
console.log(sortedArray);

binaryTree.printTree();