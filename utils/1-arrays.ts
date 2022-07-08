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
