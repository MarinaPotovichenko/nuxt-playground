export function doesContainDuplicates(nums: number[]) {
    let doesContain = false;
    let numsNew = nums.sort();
    numsNew.forEach((curr, index) => {
        if (index > 0 && curr === numsNew[index - 1]) {
            doesContain = true;
        }
    });

    return doesContain;
}

export function doesContainDuplicatesImproved(nums: number[]) {
    const tempObj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!tempObj[nums[i]]) {
            tempObj[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

export function isAnagramValid(s: string, t: string) {
    if (s.length === t.length) {
        const sArray = s.split('').sort();
        const tArray = t.split('').sort();
        return sArray.every((curr, index) => curr === tArray[index]);
    } else {
        return false;
    }
}

export function getIndexesForTargetSum(nums: number[], target: number) {
    let targetArray = [];

    nums.forEach((currOne, indexOne) => {
        nums.forEach((currTwo, indexTwo) => {
            if (currOne + currTwo === target) {
                targetArray = [indexTwo, indexOne]
            }
        });
    });

    return targetArray;
}

export function getIndexesForTargetSumImproved(nums: number[], target: number) {
    const tempObj = {};
    let targetArray = [];
    let tempDiff;

    nums.forEach((currOne, indexOne) => {
        tempDiff = target - currOne;

        if (tempObj[tempDiff] !== undefined) {
            targetArray = [tempObj[tempDiff], indexOne];
        } else {
            tempObj[currOne] = indexOne;
        }
    });

    return targetArray;
}


//вывести
export function groupAnagrams(strs) {
    let hashset = {};

    strs.forEach((str) => {
        let strSorted = [...str].sort().join("");

        if (hashset[strSorted]) {
            hashset[strSorted].push(str);
        } else {
            hashset[strSorted] = [str];
        }
    })

    return Object.keys(hashset).map(key => hashset[key]);
};



export function groupAnagrams1(strs) {
    let hashset = {};

    strs.forEach((str) => {
        let count = [];
        count.fill(0, 0, 26);

        str.forEach((letter) => {
            count[letter.charCodeAt(0) - "a".charCodeAt(0)] += 1;
        })

        hashset[count.toString()] = hashset[count.toString()] ? hashset[count.toString()].push(str) : [str];
    })

    return Object.values(hashset);
};

export function topKFrequent(nums, k) {
    let map = new Map();
    let res = [];
    let bucket = new Array(nums.length + 1);

    // storing frequency of numbers in a map
    for (let n of nums) {
        map.set(n, (map.has(n) ? 1 + map.get(n) : 1))
    }

    // Poppulate the bucket with numbers in frequency
    // as the index of the bucket
    for (let [key, value] of map.entries()) {
        if (!Array.isArray(bucket[value])) {
            bucket[value] = [];
        }
        bucket[value].push(key);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (Array.isArray(bucket[i])) {
            for (let n of bucket[i]) {
                res.push(n);
                if (res.length === k)
                    return res;
            }
        }
    }
};

export function productExceptSelf(nums) {

    // 1. O(n*m), O(n)
    // 2. умножить и поделить на нужный элемент O(n)
    // 3. Сперва получить постфикс значения - это с первого элемента перемножается
    // друг на друга и записывается в массив результат со сдвигом на один элемент вправо.
    // Аналогично с конца постфикс, но уже умножая на текущее значение в результате.

    let res = new Array(nums.length).fill(1);
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = pre;
        pre *= nums[i];
    }

    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= post;
        post *= nums[i];
    }

    return res;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
export function isValidSudoku(board) {
    // хешсет, где ключ строка, куб и столбец

    let validHashSet = {};

    // инициализировать тут хешсеты


    //c-1 - column = j
    //r-1 - row = i
    //cube-1-1 - i/3 - j/3

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                continue;
            }

            //check in cube
            let ci = Math.floor(i / 3);
            let cj = Math.floor(j / 3);

            if (!validHashSet[`cube-${ci}-${cj}`]) {
                validHashSet[`cube-${ci}-${cj}`] = new Set();
                validHashSet[`cube-${ci}-${cj}`].add(board[i][j]);
            } else if (!validHashSet[`cube-${ci}-${cj}`].has(board[i][j])) {
                console.log(`cube-${ci}-${cj}`, board[i][j], i, j)
                validHashSet[`cube-${ci}-${cj}`].add(board[i][j]);
            } else {
                return false;
            }

            //check in row
            //...
            //check in cols
            //...
        }
    }
    //      if(!validHashSet[`r-${i}`]) {
    //              validHashSet[`r-${i}`] = new Set();
    //           }

    //     // check in row

    //           if(!validHashSet[`c-${j}`]) {
    //              validHashSet[`c-${j}`] = new Set();
    //           } else if(validHashSet[`c-${j}`].has(board[i][j])) {
    //               return false;
    //           } else {
    //               validHashSet[`c-${j}`].add(board[i][j]);
    //           }

    //           //check in column

    //           if(validHashSet[`c-${j}`].has(board[i][j])) {
    //               return false;
    //           } else {
    //               validHashSet[`c-${j}`].add(board[i][j]);
    //           }
    return true;
};

export function longestConsecutive(nums) {
    //1. Cортировка, пройтись в цикле проверяя разницу элементов O(nlogn)
    //2. Проверить каждый элемент, является ли он началом последовательности (есть ли в массиве current-1 значение), если нет, то проверяем, есть ли у него последующие элементы, подсчитывая колво таких = O(2n) = O(n), потому что проходиться будем только дважды

    let max = 0;
    let amount = 0;

    for (let n of nums) {

        // это начало последовательности?
        if (!nums.includes(n - 1)) {
            amount = 0;

            while (nums.includes(n + amount)) {
                amount += 1;
            }
        }

        max = Math.max(max, amount);
    }

    return max;

};

export function twoSum2(numbers, target) {
    // 1. O(m*n) time
    // 2. O(m*n) time, but O(1) если будем использовать текущий массив, и записывать остаток, а птом находить этот остаток
    // 3. O(n) если проходить по циклу, испольозвать указатель слева и справа, и двигать его пока не найдем сумму или колво. Двигать - если сумма больше, двигаем конец меньше, если меньше - то начало ближе к концу.

    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        let currentSum = numbers[start] + numbers[end];

        if (currentSum > target) {
            end--;
        } else if (currentSum < target) {start++;}
        else {
            return [start + 1, end + 1];
        }
    }

    return [];
}

var isHappy = function (n) {
    let s = new Set();

    while (true) {
        let sp = n.toString().split('');
        n = 0;
        sp.forEach(num => n += num * num);

        if (n == 1) {
            return true;
        }

        if (s.has(n)) {
            return false;
        } else {
            s.add(n)
        }
    }

    return true;
};
