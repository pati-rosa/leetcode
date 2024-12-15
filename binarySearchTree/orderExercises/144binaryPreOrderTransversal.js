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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var transversal = function(node,result) {
        if(!node) {
            return result
        }
        result.push(node.val)
        transversal(node.left,result)
        transversal(node.right,result)
    } 

    let result = []
    transversal(root,result)
    return result
};
//[1,null,2,3]
//transversal(1,[])
//result.push(1)
//transversal(null,[1]) return [1]
//transversal(2,[1])
//result.push(2) result [1,2]
//transversal(3,[1,2])
//result.push(3) 
    //transversal(null,[1,2,3])
    //transversal(null,[1,2,3])