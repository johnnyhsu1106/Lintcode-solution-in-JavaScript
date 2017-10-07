class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// global variable;

let subtreeNode;
let min = Infinity;

const findSubtree = (root) => {
    if (root === null) {
        return;
    }
    findSubtreeHelper(root);
    return subtreeNode;
};

const findSubtreeHelper = (node) => {
    if (node === null) {
        return 0;
    }
    let left = findSubtreeHelper(node.left);
    let right = findSubtreeHelper(node.right);

    total = left + node.val + right;
    if (total <= min) {
        min = total;
        subtreeNode = node;
    }
    return total;
};



// const main = () => {
//
//     let root = new TreeNode(1);
//     root.left = new TreeNode(-5);
//     root.right = new TreeNode(2);
//     root.left.left = new TreeNode(0);
//     root.left.right = new TreeNode(2);
//     root.right.left = new TreeNode(-4);
//     root.right.right = new TreeNode(-5);
//
//     console.log(findSubtree(root));
// };
// main();