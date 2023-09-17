# BinaryTree

## Description
This is a binary tree data structure written in Typescript.
``` typescript
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

└── 34
    ├── 15
    │   ├── 0
    │   │   └── 2
    │   │       └── 9
    │   └── 18
    │       └── 31
    └── 84
        ├── 79
        │   ├── 39
        └── 99
            ├── 88
            │   └── 89
            └── 100
                └── 101
```