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
 * @return {boolean}
*/


var isBalanced = function(root) {
    let maxDepth = 0
    
    var getHeight = (node) => {
        if(!node) {
            return 0
        }
        if(!node.left && !node.right) { //nó folha
            return 1
        }

        let height_left = getHeight(node.left) + 1
        let height_right = getHeight(node.right) + 1

        return Math.max(height_left,height_right)
    }

    if(!root) {
        return true
    }
    if(!root.left && !root.right) { //nó folha
        return true
    }

    let left = getHeight(root.left)
    let right = getHeight(root.right)

    if(right === -1 || left === -1){
        return false
    }

    if(Math.abs(left - right) <= 1) {
        return isBalanced(root.left) && isBalanced(root.right)
    }
        
    return false //nao balanceada
};