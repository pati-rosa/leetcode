//https://leetcode.com/problems/validate-binary-search-tree/description/

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

var isValidBST = function(root) {
    function validate(node, min, max) {
        if (!node) {
            return true; 
        }
        
        if (node.val <= min || node.val >= max) {
            console.log(node.val,min,max) //4,2,3

            return false; 
        }

        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }

    return validate(root, -Infinity, Infinity); 
};

//[5,3,7,2,4,null,null,1,4]

//validate(node=5,min= -inf, max =+inf)
//5<=-inf || 5>=+inf ? no
//validate(3,min= -inf, max =5) && validate(7, min=5, max=+inf);

//validate(node=3,min= -inf, max=5)
//3<-inf || 3>5 ? no
//validate(node=2, min=-inf, max=3) && validate(node=4, min=3, max=5);

//validate(4, min=3, max=5)
//4 <= 3 || 4 >= 5 no
//validate(null, min, node.val) && validate(null, node.val, max);

//validate(node=2, min=-inf, max=3)
//2<-inf || 2>3 no
//validate(1, min=-inf, 2) && validate(4,min=2, max=3);

//validate(1, min=-inf, 2)
//1<-inf || 1>2 ? no
//validate(null, min, node.val) && validate(null, node.val, max); //true

//validate(4,min=2, max=3);
//4<2 || 4>3 ? yes return false