//https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    //O(N)ˆ2
    for(let i=0;i<k;i++) { //O(k)
        let max = gifts[0]
        let idx = 0
        for(let j=1;j<gifts.length;j++) { //O(N)
            if(gifts[j] > max){ 
                max = gifts[j]
                idx=j
            }            
        }
        let floor = Math.floor(Math.sqrt(max))
        gifts[idx]=floor
        console.log(gifts)
    }
    let sum = 0
    for(let i=0;i<gifts.length;i++) { //O(N)
        sum += gifts[i]
    }
    console.log(sum)
    return sum
}; //O(K*N) + O(N) => PEGA A DOMINANTE
//max = 25
//64 > 25 ? max =64
//9>64 ? max = 64
// [25,64,9,4,100], k = 4
// [25,64,9,4,10] k = 3
// [25,8,9,4,10] k=2
// [5,8,9,4,10] k=1
// [5,8,9,4,3] k=0 => 29

//4O(N)
