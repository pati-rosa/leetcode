/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    var maxDepthAux = function(node) {
        if (!node) { 
            return 0;
        }
        if (node.children.length === 0) { // returna 1 no nó folha
            return 1;
        }

        let max_depth = 0;
        for (let child of node.children) {  
            let depth = maxDepthAux(child);
            max_depth = Math.max(max_depth, depth); 
            console.log(max_depth)

        }
        return max_depth + 1; //soma 1 em cada nó intermediarios                                               
    }

    return maxDepthAux(root);//1
};

//Time complexity: O(n) where n is the number of nodes in the tree
//Space complexity: O(h) where h is the height of the tree

//[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//root = 1  depth = maxDepthAux(2) = 1 // max_depth=Math.max(0,1) = 1
//root = 2  return 1
//root = 3  depth = maxDepthAux(6) = 1
//root = 6  return 1
//root = 7  depth = maxDepthAux(11)
//root = 11 depth = maxDepthAux(14)
//root = 14 return 1

//root = 11 depth = 1+1 = 2 maxDepth = Math.max(2,0)
//root = 7 depth = 2+1=3 maxDepth = Math.max(3,0)
//root = 3 depth = 3+1=4  maxDepth = Math.max(4,0)

//root = 4 depth=maxDepthAux(8)
//root = 8 depth=maxDepthAux(12)
//root=12 depth = 1

//root = 8 depth = 1+1=2
//root = 4 depth = 2+1=3

//root = 5 maxDepthAux(9)
//root = 9 maxDepthAux(13)
//root= 13 return 1

//root=9 depth = 1+1 = 2 maxDepth = Math.max(4,2)

//root = 1

//root = 10 return 1
//


    
    