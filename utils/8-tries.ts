export function TrieNode(key) {
    this.root = key;

    this.parent = null;

    this.children = {}; // <-hashset

    this.end = false;
}

export function Trie() {
    this.root = new TrieNode(null);
}

Trie.prototype.insert = function (word) {
    let curr = this.root;

    [...word].forEach(letter => {
        if (!curr.children[letter]) {
            curr.children[letter] = new TrieNode(letter);
        }

        curr = curr.children[letter];
    });

    curr.end = true;

    // not optimize, but works
    // function insertAWord(wordArr, curr) {
    //     let letter = wordArr[0];
    //     wordArr.shift();
    //     if (curr.children[letter]) {
    //         curr = curr.children[letter];
    //         insertAWord(wordArr, curr);
    //     } else {
    //         let newTrieNode = new TrieNode(letter);

    //         newTrieNode.parent = curr;
    //         curr.children[letter] = newTrieNode;

    //         if (!wordArr.length) {
    //             curr.children[letter].end = true;
    //             return;
    //         } else {
    //             curr = curr.children[letter];
    //             insertAWord(wordArr, curr);
    //         }
    //     }
    // }

    // insertAWord(wordArr, curr);
};

Trie.prototype.search = function (word) {
    let curr = this.root;
    let wordArr = [...word];

    while (wordArr.length) {
        let letter = wordArr.shift();

        if (!curr.children[letter]) {
            return false;
        }

        if (wordArr.length) {
            curr = curr.children[letter];
        }
    }
    return curr.end;

    // not optimize, but works
    // let curr = this;
    // let wordArr = [...word];

    // function search(wordArr, curr) {
    //     let letter = wordArr[0];
    //     wordArr.shift();

    //     if (curr.children[letter]) {
    //         if (!wordArr.length) {
    //             return curr.children[letter].end === true;
    //         }

    //         curr = curr.children[letter];
    //         return search(wordArr, curr);
    //     } else {
    //         return false;
    //     }
    // }

    // return search(wordArr, curr);
};

Trie.prototype.startsWith = function (word) {
    let curr = this.root;
    let wordArr = [...word];

    while (wordArr.length) {
        let letter = wordArr.shift();

        if (!curr.children[letter]) {
            return false;
        }

        if (wordArr.length) {
            curr = curr.children[letter];
        }
    }
    return true;

    // not optimize, but works
    // let curr = this;
    // let wordArr = [...word];

    // function search(wordArr, curr) {
    //     let letter = wordArr[0];
    //     wordArr.shift();

    //     if (curr.children[letter]) {

    //         if (!wordArr.length) {
    //             return true;
    //         }
    //         curr = curr.children[letter];
    //         return search(wordArr, curr);
    //     } else {
    //         return false;
    //     }
    // }

    // return search(wordArr, curr);
};
