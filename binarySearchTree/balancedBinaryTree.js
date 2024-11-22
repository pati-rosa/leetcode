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
        
    return false 
};

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
    
    var getHeight = function(node) {

        if(!node) { // 1
            return 0
        }
        let height_left = getHeight(node.left)  
        let height_right = getHeight(node.right)

        if(height_right === -1 ) {
            return -1
        }

        if(height_left === -1 ) {
            return -1
        }

        if(Math.abs(height_left - height_right) > 1) {
            return -1
        }

        return Math.max(height_left,height_right) + 1
    }

    if(getHeight(root) === -1) {
        return false
    }
    return true
};

//[1,2,2,3,3,null,null,4,4]
//node=1
//left(2)
//right(2)

//node=2
//left(3)
//right(3)

//node(3)
//left(4)
//right(4)

//node=4 = 1
//left(null) = 0
//right(null) = 0
//Math.max(0,0) + 1 = 1
//Math.abs(0-0) = 0 < 1

//voltando no 3
//node 3 = 2
//left(4) = 1
//right(4) = 
//Math.max(1,1) + 1 = 2

//votando 2 = 3
//left(3) = 2
//right(3)  = 1
//Math.max(2,1) + 1 =  2+1 = 3

//node=3 = 1
//left(null) = 0
//right(null) = 0
//Math.max(0,0) + 1 = 1

//voltando node = 1
//left(2) = 3
//right(2) = 1
//Math.abs(3-1) = 2 > 1 return -1

//node =2 = 1
//left(null) = 0
//right(null) = 0
//Math.max(0,0) + 1 = 1


//node = 1 
//left = getHeight(2)
//right = getHeight(2)

//node = 2
//left = 3
//right =null

//node = 3
//left = 4
//right = null

//node = 4
//left = null = 0
//right = null = 0
//node 4 = Math.max(0,0) + 1
//Math.abs(0-0) = 0

//voltando para node 3 
//left = 4  //1
//right = null //0
//node3=Math.max(1,0) + 1 = 2
//Math.abs(1 - 0) = 1

//voltando para node 2
//left = 3
//right = null
//Math.abs(2 - 0) = 2 > 1 return -1
//Math.max(2,0) +1 = 3


