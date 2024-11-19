//https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/description/

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    let stack = []
    for(let element of folder) {
        let top = stack[stack.length -1] + '/' //catch the last element
        console.log(element.slice(0,top.length),top)
        if((top && element.slice(0,top.length) !== top) || stack.length === 0) {
            stack.push(element)
        }
    }
    return stack
};

//Time complexity = O(N)
//Space complexity = O(N)