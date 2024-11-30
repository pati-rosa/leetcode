//https://leetcode.com/problems/search-in-a-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let node = root

    while(node) {
        if(val===node.val) {
            return node
        }
        if(val < node.val) {
            node = node.left
        } else if(val > node.val){
            node = node.right
        }
    }
    return null
};


//arvode balanceada: complexidade de tempo O(log n)
//arvode desbalanceada: complexidade de tempo O(n)
