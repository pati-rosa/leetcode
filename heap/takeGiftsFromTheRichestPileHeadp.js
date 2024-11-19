/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    let maxHeap = new MaxPriorityQueue()
    //inserir itens na heap O(LOGN)
    for(let i=0;i<gifts.length;i++) {
        maxHeap.enqueue(gifts[i])
    }

    for(let i=0;i<k;i++) {
        let max = maxHeap.dequeue()
        let root = Math.floor(Math.sqrt(max.element))
        maxHeap.enqueue(root)
    }

    let sum = 0
    while(!maxHeap.isEmpty()) {
        let element = maxHeap.dequeue().element 
        sum = element + sum
    }

    return sum
}; 