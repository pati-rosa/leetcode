//Complexidade de tempo: O(n)
//Complexidade de espaco: O(1)

var merge = function(nums1, m, nums2, n) {
    for(let i=nums1.length -1; i>=0; i--) {
        if(nums1[m-1] === undefined) {
            nums1[i] = nums2[n-1]
            console.log(nums1)
            n--
        }else if (nums1[m-1]>nums2[n-1]) {
            nums1[i] = nums1[m-1]
            m--
        } else if(nums1[m-1]<nums2[n-1]){
             nums1[i] = nums2[n-1]
             n--
        } else if(nums1[m-1]===nums2[n-1]) {
            nums1[i] = nums2[n-1]
            n--
        }
    }
    return nums1
};


//Time Complexity: O(n) for + O(nlog(n)) sort = O(n + n log(n)) 
//Space Complexity: O(1)

var merge = function(nums1, m, nums2, n) {
    for (let i = m, j = 0; j < n; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);
};