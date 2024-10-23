/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

var longestCommonSubsequence = function(text1, text2) {
    let memo = Array(text1.length).fill(null).map(() => Array(text2.length).fill(-1))
    var longestCommonRecursive = function(i,j) {
         if (i === text1.length || j === text2.length) {
            return 0;
        } 

        if(memo[i][j] !== -1)  {
            return memo[i][j]
        }
        if(text1[i] === text2[j]) {
            memo[i][j] = 1 + longestCommonRecursive(i+1,j+1)
        } else {
             memo[i][j] = Math.max(longestCommonRecursive(i+1,j),longestCommonRecursive(i,j+1))
        }
        return memo[i][j]
    }

    return longestCommonRecursive(0,0)

};

//In this question if we don't use memoization the execution time will be easily execed
//Time Complexity using mesmo: O(m*n), m is the length of text1 and  n the length of the text2
//Space Complexity: O(m*n) using a memo array of legth m*n, O(min(m,n)) is used for the recursive stack,
//O(m*n) is the dominante

// * If we dont use memoization the time complexity will be O(2ˆ(n+m)) because it create a binary tree of 
//recursive calls
