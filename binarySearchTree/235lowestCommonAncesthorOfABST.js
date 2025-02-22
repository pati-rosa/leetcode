//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    if((root.val >= p.val && root.val <= q.val) || (root.val >= q.val && root.val <= p.val)) {
     return root
    } 
 
     if(p.val <= root.val && q.val<= root.val) {
         return lowestCommonAncestor(root.left,p,q)
     } else {
         return lowestCommonAncestor(root.right,p,q)
     }
 
 };
 

 //Time complexity: LOG(N)