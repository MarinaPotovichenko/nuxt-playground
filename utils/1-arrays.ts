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
var groupAnagrams = function (strs) {
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



var groupAnagrams1 = function (strs) {
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


var topKFrequent = function (nums, k) {
    let hashset = {};
    let freq = [];
    let res = [];


    nums.forEach((num, index) => {
        hashset[num] = hashset[num] ? hashset[num] + 1 : 1;
        freq.push([]);
    });

    Object.keys(hashset).forEach((key, index) => {
        freq[hashset[key]].push(key);
    });



    for (let i = freq.length - 1; i >= 0; i--) {
        for (let j = 0; j < freq[i].length; j++) {
            res.push(freq[i][j]);

            if (res.length === k) {
                return res;
            }
        }
    }

    return res;
};

