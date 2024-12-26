class Name {
    constructor(parameters) {
        this.words = []
    }

    insertWord(word){
        this.words.push(word)
    } //Time complexity O(1)

    searchWord(word){
        for(let i=0;i<this.words.length;i++) {
            console.log(i,this.words[i])
            if(word === this.words[i]) {
                return true
            }
        }
        return false
    } //Time complexity O(N), sendo n o número de palavras adicionas 

    searchprefix(prefix) {
        let result = []
        for(let i=0;i<this.words.length;i++) {
            console.log(i,this.words[i])
            if(this.words[i].startsWith(prefix)) {
                result.push(this.words[i])
            }
        }
        return result
    } //Time complexity O(N), sendo n o número de palavras adicionas 
}

let words = new Name()


words.insertWord('banana')
words.insertWord('babaca')
words.insertWord('paz')
words.insertWord('panetone')
console.log(words)
let search = words.searchWord('paz')
console.log(search)
search = words.searchWord('pa')
console.log(search)
search = words.searchprefix('pa')
console.log(search)
