/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let nextGreaterMap = new Map();
     let stack = [];
 
     for (let num of nums2) {
         while ( stack[stack.length - 1] < num) { 
             nextGreaterMap.set(stack.pop(), num);
             console.log('nextGreaterMap',nextGreaterMap)
         }
 
         stack.push(num); 
         console.log('stack',stack)
     }
 
     while (stack.length) {
         nextGreaterMap.set(stack.pop(), -1);
     }
 
     return nums1.map(num => nextGreaterMap.get(num));
 };