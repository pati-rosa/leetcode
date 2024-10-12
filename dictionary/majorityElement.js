/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let frequency = new Map()
    let majorKey
    let actualFrequency

    for(let num of nums) {
        if(frequency.has(num)){
            actualFrequency = frequency.get(num)
            frequency.set(num, actualFrequency+1)
        }else {
            frequency.set(num, 1)
        }
        if(frequency.get(num) > frequency.get(majorKey) || !majorKey) {
            majorKey = num
        }
    }
    return majorKey
};
