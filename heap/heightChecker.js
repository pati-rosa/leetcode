//https://leetcode.com/problems/height-checker/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let minHeap = new MinPriorityQueue()
    let count = 0
    for(let i=0; i<heights.length; i++) {
        minHeap.enqueue(heights[i])
    }

    for(let i=0; i<heights.length; i++) {
      if(minHeap.dequeue().element !== heights[i]) {
        count++
      }
    }
    return count
};