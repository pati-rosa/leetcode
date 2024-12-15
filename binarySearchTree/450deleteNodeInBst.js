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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }

    if(key < root.val){
        root.left = deleteNode(root.left,key)
    } else if(key > root.val){
        root.right = deleteNode(root.right,key)
    } else {
         if(!root.left){ 
        root = root.right
        } else if(!root.right){ 
            root = root.left
        }  else { 
            let it = root.right //4

            while(it.left) {
                it = it.left
            }
            root.val = it.val

            root.right = deleteNode(root.right, it.val)
        }
    }

    return root
};