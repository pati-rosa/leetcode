/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 // bank    00
 //  just one swap has to be done to the the strings turn equal


//bank
//kanb 
//aknb  i=0 j=1
//nakb  i=0 j=2
//bank  i=0 j=3
//knab  i=1 j=2
//kbna  i=1 j=3
var areAlmostEqual = function(s1, s2) {
    let aux
    for(let i=0; i<s2.length-1; i++) { //i=0
        console.log(s1)
        for(let j = i+1;j<s2.length -1;j++) {  //j=3
            let check = s2.split('')

            aux = check[i] //k
            check[i] = check[j] //[banb]
            check[j] = aux //[bank]
            console.log(check,s1)
            if(check.join('') === s1) {
                return true
            }
        }
    } 
    return false
};

//Complexidade de tempo: O(n^2)
//Complexidade de espaço: O(n)

var areAlmostEqual = function(s1, s2) {
    s1 = s1.split('')
    s2 = s2.split('')
    let countDif = 0
    //bank
    //kanb
    let diff
    if(s1 === s2) { return true}
    for(let i=0; i<s2.length-1; i++) { //i=0
        if(s1[i]!==s2[i]) {
            diff.push(i)
        }
        if(diff.length>2) {
            return false
        }
    } 
    if(diff.length===2) {
        s1[i] === 
    }
    
};