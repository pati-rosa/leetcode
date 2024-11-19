/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let heap = new MinPriorityQueue({ priority: (x) => x[0] })
    let array = new Set()
    for(let i=0;i<matrix.length;i++) {
        heap.enqueue([matrix[i][0],i,0]) //valor, linha, coluna
    } //O(LOGN)
    console.log(heap)

    let count = 0
    while(!heap.isEmpty()) {
        let [val, row,col] = heap.dequeue().element
        count++
        if(count === k) {
            return val
        }

        if(col+1<matrix.length) {
            heap.enqueue([matrix[row][col+1],row,col+1]) //valor, linha, coluna
        }
        // array.add(heap.dequeue())
    }
};