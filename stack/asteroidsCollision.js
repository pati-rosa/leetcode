/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

//stack = []
//[10,2,-5] asteroid
// stack é vazia stack.push() [10]
// asteroid > 0 -> stack.push() [10,2]
// asteroid <0 && stack[stack.length-1] < 0 -> stack.push()

// asteroid <0 && stack[stack.length-1] > 0{
//    Math.abs(asteroid) >  stack[stack.length-1] -> stack.pop() [10]
//}
// asteroid < 0 && stack[stack.length-1] > 0{
//    Math.abs(asteroid) <  stack[stack.length-1] -> faz nada
//}
//while
var asteroidCollision = function(asteroids) {
    let stack = []
    for(let asteroid of asteroids) { 

        let detroyed = false

        while(asteroid < 0 && stack[stack.length-1] > 0){
            if(Math.abs(asteroid) > stack[stack.length-1]) { 
                stack.pop() 
            }
            if(Math.abs(asteroid) < stack[stack.length-1]) {
                detroyed = true
                break //sai do while
            }
            if(Math.abs(asteroid) === stack[stack.length-1]) {
                detroyed = true
                stack.pop() 
                break //sai do while
            }
        }
        if (!detroyed) {
            stack.push(asteroid)
       }
    }

    return stack

};

//Complexidade de tempo: O(n)
//Complexidade de espaço: O(n)