/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

 var longestCommonSubsequence = function(text1, text2) {

    var longestCommonRecursive = function(i,j) {
         if (i === text1.length || j === text2.length) {
            return 0;
        }
        
        if(text1[i] === text2[j]) {
            return 1 + longestCommonRecursive(i+1,j+1)
        } else {
            return Math.max(longestCommonRecursive(i+1,j),longestCommonRecursive(i,j+1))
        }
        
    }

    return longestCommonRecursive(0,0)

};

longestCommonSubsequence('abcpsko','oiuhap')
