export function getMaxProfit(nums: number[]) {
    let biggestPrice = 0;

    nums.forEach((currOne, index) => {
        nums.forEach((currTwo, indexTwo) => {
            if (indexTwo > index && biggestPrice < currTwo - currOne) {
                biggestPrice = currTwo - currOne;
            }
        });
    });

    return biggestPrice;
}

export var totalFruit = function (fruits) {

    // [1,2,3,2,2]
    //  s
    //      e


    // общий смысл, что надо определить самую длинную последовательность из двух видов фруктов
    let s = 0;
    let e = 0;
    let max = 0;
    let basket = new Map();


    while (e < fruits.length) {
        basket.set(fruits[e], e) // сохраняем фрукт и индекс, когда в посл раз его видели

        if (basket.size > 2) {
            //если наткнулись на третий, значит, последовательность закончилась и надо удалить фрукт, который встречался раньше чего и сдвинуть указатель старта текущей последоватльеонсть в начало

            let min = 1000;
            let minKey = 1000;

            for (const [key, value] of basket) {

                if (value < min) {
                    min = value;
                    minKey = key;
                }
            }

            basket.delete(minKey);
            s = min + 1;
        }
        max = Math.max(max, e - s + 1);   // каждый раз проверяем расстояние последовательности и увеоличиваем шаг справо
        e++;
    }

    return max;
};

export var longestStrChain = function (words) {
    const len = words.length;
    words.sort((a, b) => a.length - b.length);
    // dp[i] meaning: the longest string chain length ending with sorted words[i]
    let dp = new Array(words.length).fill(1);

    // verify if a is a predecessor of word b
    const isValid = (a, b) => {
        if (b.length - a.length !== 1) {
            return false;
        }
        let lenOfA = a.length;
        let lenOfB = b.length;
        let i = 0;
        let j = 0;
        while (i < lenOfA && j < lenOfB) {
            if (a.charAt(i) === b.charAt(j)) {
                i++;
                j++;
            }
            else {
                j++
            }
        }
        // if the last char is diff, then i = j
        // if a char is different in the middle, then i = j - 1
        if (i === j - 1 || i === j) {
            return true;
        }
        else {
            return false;
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (isValid(words[i], words[j])) {
                dp[j] = Math.max(dp[j], dp[i] + 1);
            }
        }
    }
    let max = dp[0];
    for (let i = 0; i < dp.length; i++) {
        max = Math.max(max, dp[i]);
    }
    return max;
};

export var lengthOfLongestSubstring = function (s) {
    let l = 0;
    let r = 0;
    let max = 0;
    let letters = new Set();

    while (r < s.length) {
        while (letters.has(s[r])) {
            letters.delete(s[l]);
            l++;
        }

        letters.add(s[r]);


        max = Math.max(max, r - l + 1);
        r++;
    }

    return max;
};

export var minWindow = function (str, target) {
    const hash = target.split('').reduce((acc, val) => {
        if (!acc[val]) acc[val] = 0;
        acc[val] += 1;
        return acc;
    }, {})

    let start = 0;
    let min = Infinity;
    let matched = 0;
    let subStringStart = null;

    for (let i = 0; i < str.length; i++) {
        let rightChar = str[i];

        if (rightChar in hash) hash[rightChar] -= 1;
        if (hash[rightChar] >= 0) matched += 1;

        while (matched === target.length) {
            if (i - start + 1 < min) {
                subStringStart = start;
                min = i - start + 1;
            }

            let leftChar = str[start];
            start += 1;

            if (leftChar in hash) {
                if (hash[leftChar] === 0) matched -= 1;
                hash[leftChar] += 1;
            }
        }
    }
    return min === Infinity ? '' : str.substring(subStringStart, subStringStart + min);
};

export var maxSlidingWindow = function (nums, k) {
    let l = 0;
    let r = 0;
    let res = [];
    let q = [];

    while (r < nums.length) {
        while (q.length && nums[q[q.length - 1]] < nums[r]) {
            q.pop();
        }

        q.push(r);

        if (r + 1 >= k) {
            res.push(nums[q[0]])
            l++;
        }

        r++;
    }

    return res;
};
