
var TimeMap = function() {
    this.dict = new Map();
};

//key: val,time

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.dict.get(key)) {
        this.dict.set(key,[[value,timestamp]])
    }
    else {
        this.dict.get(key).push([value,timestamp])
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {    
    if (!this.dict.has(key)) {
        return "";
    }
    
    var lista = this.dict.get(key);
    
    let left = 0
    let right = lista.length - 1 
    let middle
    while (left <= right) { 
        middle = Math.floor((left + right) / 2)
        if (lista[middle] && lista[middle][1] === timestamp) {
            return lista[middle][0]
        }  
        if(lista[middle][1] > timestamp) {
            right = middle - 1
        } else if(lista[middle][1] < timestamp){
            left = middle + 1
        }    

    }

    if(lista[right]) {
       return lista[right][0]
    } else {
        return ""
    }
    
};
/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

//https://leetcode.com/problems/time-based-key-value-store/