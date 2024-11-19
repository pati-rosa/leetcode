https://leetcode.com/problems/kth-largest-element-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b-a) 
    console.log(nums)
    return nums[k - 1]
};

//complexidade O(nlog)

//WITHOUT SORTING

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heap = new MaxPriorityQueue()

    for(let i=0;i<nums.length;i++) {
        heap.enqueue(nums[i])//O(logn)
    } //O(n)

    let kmax = 0

    while(k !== 0) { //O(k)
        kmax = heap.dequeue().element  //O(logn)
        k--
    }
    
    return kmax
};

//complexidade O(nlogn + klogn) = O(nlogn)  