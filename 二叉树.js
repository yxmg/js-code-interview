/*
 * @Description: 简单二叉树
 * @Author: 管铭钊
 * @Date: 2021/4/25
 */
class TreeNode {
    left
    right
}

class binaryTree {
    constructor(depth) {
        const root = new TreeNode()
        binaryTree.createTreeNode(root, depth)
        return root
    }

    static createTreeNode(node, depth, currentDepth = 1) {
        if (currentDepth < depth) {
            node.left = new TreeNode()
            node.right = new TreeNode()

            binaryTree.createTreeNode(node.left, depth, currentDepth + 1)
            binaryTree.createTreeNode(node.right, depth, currentDepth + 1)
        }
    }
}

console.log(new binaryTree(3), "new binaryTree(3)")
