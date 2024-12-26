class TrieNode {
    constructor(parameters) {
        const ALPHABET_SIZE = 26
        this.words = new TrieNode[ALPHABET_SIZE +1]
        this.word
        this.c
        this.isEndOfWord
    }

    TrieNode(char){
        this.isEndOfWord = false
        this.c = char
        for(let i=0;i<ALPHABET_SIZE;i++) {
            children[i] = null
        }
    }

    root = new TrieNode

    getCharIdx(c) {
        return c.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)
    }

    insertWord(word){
        let node  = this.root
        for (let index = 0; index < word.length; index++) { 
            let char = word.charAt(index)
            let idx = this.getCharIdx(char)

            if(node.children[idx] === null) {
                node.children[idx] = new TrieNode(char)
            }
            node = node.children[idx]
        }
        node.isEndOfWord = true
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
