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
var insertIntoBST = function(root, val) {
    
    let node = root
    
    while(true) {
        if(val>node.val) {
            if(!node.right) {
                node.right = new TreeNode(val,null,null)
                break
            }
            node = node.right

        } else if(val<node.val){
            if(!node.left) {
                node.left = new TreeNode(val,null,null)
                break
            }
            node = node.left
        }
    }


    return root
};

//BST
//Height = LOG(N) , N = node numbers
//Time complexity = N (árvore desbalanceada)
//LOG(N) (árvore balanceada)