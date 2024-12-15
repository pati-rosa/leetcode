//https://leetcode.com/problems/balance-a-binary-search-tree/submissions/1479431643/
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    var inOrder = function(root,array) {
        if(!root){
             return null
        }
        inOrder(root.left,array)
        array.push(root.val)
        inOrder(root.right,array)
    }
    var balance = function(array,left,right) {

        if (left > right) return null;
        let middleIndex = Math.floor((left+right)/2)
        let root = new TreeNode(array[middleIndex])
        root.left = balance(array,left,middleIndex-1)
        root.right = balance(array,middleIndex+1,right)
        return root
    }

    let array = []
    inOrder(root,array)
    return balance(array,0,array.length-1)

};
//[1,2,3,4,5,6,7]
//[1,2,3,4]
//       4
//      / \
//     2   6
//    / \ / \
//   1  3 5 7