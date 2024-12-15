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

var inorderTraversal = function(root) {
    var transverse = function(root,result) {
        if(!root) {
            return result
        }
        
        transverse(root.left,result)
        result.push(root.val)
        transverse(root.right,result)
    }
    
    let result = []

    transverse(root,result)

    return result
};

//Table Test
//[1,null,2,3]
//transverse(1,[])
//  transverse(null,result) return []
//result.push(1)
//  transverse(2,[1])
//    transverse(3,[1])
//     transverse(null,[1]). return [1]
//      result.push(3)
//     transverse(null,[1,3]) return [1,3]
//  result.push(2)
//  transverse(null,[1,3,2])
//  return[1,3,2]