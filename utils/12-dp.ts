export function climbStairsOne(n) {
    let amount = 0;

    function countFun(n) {

        if (n < 0) {
            return;
        }

        if (n === 0) {
            amount += 1;
            return;
        }

        countFun(n - 1);
        countFun(n - 2);
    }

    countFun(n);

    return amount;

};

// 0 1 2 3 4
//         l=1 r=0
//         temp
//       l=l+r
//          r=temp
//       l  r

export function climbStairsTwo(n) {

    let l = 1;
    let r = 0;

    for (let i = 0; i < n; i++) {
        let temp = l;
        l = l + r;
        r = temp;
    }

    return l;
};

export var minCostClimbingStairs = function (cost) {
    // 1. make a des-n tree.
    //                        ()
    //              1                100
    //          100     1          1     1
    //      1      1   1   1    ...
    //
    // Time: O(2^n) Memo: O(1)

    // 2. des-n tree + hashmap
    // Time: O(n) Memo: O(1)

    // 3. DP - bottom-up - cost[i] = min cost
    // [10,15,20] 0
    //         20
    //      15
    //  25

    cost.push(0)
    for (let i = cost.length - 3; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);

    }

    return Math.min(cost[0], cost[1]);
};

export function maxRob(nums) {
    let prev = 0;
    let max = 0;

    for (let num of nums) {
        let tmp = Math.max(num + prev, max);
        prev = max;
        max = tmp;
    }

    return max;
};


export function rob2(nums) {

    if (!nums.length) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }


    function helper(i, length) {


        let prev = 0;
        let max = 0;

        for (let j = i; j < length; j++) {
            let tmp = Math.max(nums[j] + prev, max);
            prev = max;
            max = tmp;
        }
        return max;

    }

    return Math.max(helper(0, nums.length - 1), helper(1, nums.length))
};


export function longestPalindrome(s) {

    // let reversedS = s.split('').reverse().join('');

    //     for(let i = 0; i < s.length; i++){
    //         let pal = s[i];

    //         for(let j = i + 1; j < s.length - 1; j++) {
    //             pal += s[j];

    //             if(reversedS.includes(pal) && pal.length > longest.length) {
    //                 longest = pal;
    //             }
    //         }
    //     }


    let longest = '';
    let strLen = s.length;

    for (let i = 0; i < strLen; i++) {


        let l = i;
        let r = strLen % 2 === 0 ? i + 1 : i;

        while (l >= 0 && r < strLen && s[l] === s[r]) {

            let pal = s.substring(l, r + 1);

            if (longest.length < pal.length) {
                longest = pal;
            }

            l -= 1;
            r += 1;
        }
    }

    return longest;

};


export function countSubstrings(s) {
    let pals = [];
    let strLen = s.length;

    function addPals(l, r) {
        while (l >= 0 && r < strLen && s[l] === s[r]) {
            if (l !== r) {
                let substr = s.substr(l, r + 1);
                pals.push(substr);
            }

            r += 1;
            l -= 1;
        }
    }

    for (let i = 0; i < strLen; i++) {
        pals.push(s[i]);
        addPals(i, i + 1);
        addPals(i, i);
    }

    return pals.length;
};


export function numDecodings(s) {
    let dp = {};

    [...s].forEach((num, index) => {
        dp[index] = -1;
    });

    if (s[0] === '0') {
        return 0;
    }

    function dfs(i) {

        if (i <= 0) { // проверяем, дошли ли до начала слова, т.к у нас есть проверка, что этот символ не 0 и в нужном диапазоне, возвращаем 1
            return 1;
        }

        if (dp[i] !== -1) { // если уже посещали этот индекс, возвращаем его значение
            return dp[i];
        }

        let l = 0;
        let r = 0;

        if (s[i] !== '0') {
            l = dfs(i - 1); // результат на символ левее, если сейчас не 0
        }

        if (s[i - 1] !== '0' && s[i - 1] <= '2' && !(s[i - 1] === '2' && s[i] > 6)) {
            r = dfs(i - 2); // результат на два символа левее, если на один символ левее 0
        }

        dp[i] = l + r; // суммируем результаты прошлых, либо нули, если в рекурсию не зашли

        return dp[i]; //возаращем текущий
    }

    return dfs(s.length - 1);
};

export function coinChange(coins, amount) {

    let dp = {};
    dp[0] = 0;
    for (let i = 1; i < amount + 1; i++) {
        dp[i] = amount + 1;
    }

    for (let i = 1; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            }

        }

    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
};


export function maxProduct(nums) {

    //     let dp = {};

    //     nums.forEach((num, index) => {
    //         dp[index] = -1000;
    //     });

    //     for(let i = nums.length - 1; i >= 0; i--) {
    //         let product = 1;
    //         dp[i] = i === nums.length - 1? nums[i] : dp[i+1];

    //        for(let j = i; j < nums.length; j++) {

    //           product *= nums[j];
    //            dp[i] = Math.max(dp[i],  product);

    //         }
    //     }

    //     return dp[0];

    let res = 0;
    let minn = 1;
    let maxn = 1;

    for (let n of nums) {
        maxn = Math.max(minn * n, n, maxn * n);
        minn = Math.min(minn * n, n, maxn * n);

        res = Math.max(res, maxn);
    }

    return res;

};


export function wordBreakMySolution(s, wordDict) {
    let word = '';
    let str = '';
    [...s].forEach((letter, index) => {
        word += letter;

        if (wordDict.includes(word)) {
            str += word;
            word = '';
        }
    })


    return s === str;
};


export function wordBreakDFS(s, wordDict) {

    function dfs(i, word) { // pointer to letter, current word = s[0] + ... s[i]
        if (i >= s.length - 1 && word === '') { // base case 1 - good one - we are on the end of string and our helper variable is empty,
            //which means we could found all matches and we dont have any parts of string which we could not match
            return true;
        }

        if (i > s.length - 1) { // base case 2 - we out of string - btw, not sure about this case, but it works :D because we will try to go to last return dfs(i + 1, word) and we will out of bounds
            return false;
        }

        word += s[i]; // at start it will be empty, but we will add every letter to current word

        if (wordDict.includes(word) && i + 1 <= s.length && wordDict.includes(word + s[i + 1])) { //and will check it, if we find this word in dict and we will find this word plus one letter in dict, (cat and cats for example)
            // so we have to node in tree and we need to check strings withour 'cat' and without 'cats'
            return dfs(i + 1, '') || dfs(i + 2, '');                                           // we will return any true of this results, which means one of routs will work
        }


        if (wordDict.includes(word)) { //if we found only this word, okey, lets make our word empty and go to next letter to start to check new word
            return dfs(i + 1, '')
        }

        return dfs(i + 1, word) //we didn't find our word in dict, to just go next letter
    }

    return dfs(0, ''); // we will start from 0 pointer and from empty word
};

export function wordBreakDP(s, wordDict) {
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[s.length] = true; // если это конец слова, то все ок

    let word = '';
    for (let i = s.length - 1; i >= 0; i--) {
        word = s[i] + word;

        if (wordDict.includes(word) && i + word.length < dp.length) {
            // проверяем, нашли ли такое слово, если да, проверяем, не выходим ли за пределы строки.
            // в значение берем предыдущее начало слово и берем его значениею
            // если получится, что это не начало слова, тогда мы не сможем закончить и будет до начала
            // проливатьс false
            dp[i] = dp[i + word.length];
            word = ''
        } else {

            // если слово не в словаре, просто идем дальше
            dp[i] = false;
        }
    }

    return dp[0];
};

export function lengthOfLIS(nums) {
    let res = -1;
    let dp = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        let currMax = 1;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                currMax = Math.max(currMax, 1 + dp[j]);
            }
        }

        dp[i] = currMax;
        res = Math.max(res, currMax)
    }

    return res;
};

export function uniquePaths(m, n) {
    let visited = new Set();
    let dp = new Array(m).fill(new Array(n).fill(0));
    let dirs = [[0, 1], [1, 0]];
    dp[m - 1][n - 1] = 1;

    for (let i = m - 1; i >= -1; i--) {
        for (let j = n - 1; j >= -1; j--) {

            dirs.forEach(dir => {
                let di = i + dir[0];
                let dj = j + dir[1];

                if (di >= 0 && di < m && dj >= 0 && dj < n && !visited.has(di + '-' + dj)) {
                    dp[i][j] = dp[di][dj] + dp[i][j];
                    visited.add(di + '-' + dj);
                }
            })
        }
    }

    return dp[0][0];
};


export function longestCommonSubsequenceDP(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let res = 0;
    let dp = [];

    for (let i = 0; i < m; i++) {
        dp.push(0);
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[j] = j + 1 < m ? dp[j + 1] + 1 : 1;
            }

            res = Math.max(res, dp[j]);
        }
    }

    return res;
};

export function longestCommonSubsequenceRec(text1, text2) {
    let n = text1.length;
    let m = text2.length;

    function solve(i, j) {
        if (i < 0 || j < 0) {
            return 0;
        }

        if (text1[i] === text2[j]) {
            return 1 + solve(i - 1, j - 1);
        }

        return Math.max(solve(i - 1, j), solve(i, j - 1));
    }

    return solve(n - 1, m - 1);
};

export var longestCommonSubsequence = function (text1, text2) {
    let m = text1.length,
        n = text2.length,
        DP = new Array(m + 1).fill(0).map((_) => new Array(n + 1).fill(0));

    for (let x = m - 1; x >= 0; x--)
        for (let y = n - 1; y >= 0; y--) {
            if (text1[x] === text2[y]) {
                DP[x][y] = 1 + DP[x + 1][y + 1];
            } else {
                DP[x][y] = Math.max(DP[x + 1][y], DP[x][y + 1]);
            }
        }

    return DP[0][0];
};

export function maxProfit() {

    // class Solution:
    //     def maxProfit(self, prices: List[int]) -> int:
    //         # State: Buying or Selling?
    //         # If Buy -> i + 1
    //         # If Sell -> i + 2

    //         dp = {}  # key=(i, buying) val=max_profit

    //         def dfs(i, buying):
    //             if i >= len(prices):
    //                 return 0
    //             if (i, buying) in dp:
    //                 return dp[(i, buying)]

    //             cooldown = dfs(i + 1, buying)
    //             if buying:
    //                 buy = dfs(i + 1, not buying) - prices[i]
    //                 dp[(i, buying)] = max(buy, cooldown)
    //             else:
    //                 sell = dfs(i + 2, not buying) + prices[i]
    //                 dp[(i, buying)] = max(sell, cooldown)
    //             return dp[(i, buying)]

    //         return dfs(0, True)

}



// tree
//                      0
//              -1         +1
//          -1      +1
//
// cache[i] = amount of variations

/// Time O(2^n)
// Memo:

// tree + cache


export var findTargetSumWays = function (nums, target) {
    let dp = {};

    function backtracking(i, sum) {
        if (i === nums.length) {
            return sum === target ? 1 : 0;
        }

        if (dp[`${i}, ${sum}`]) {
            return dp[`${i}, ${sum}`];
        }

        dp[`${i}, ${sum}`] = backtracking(i + 1, sum - nums[i]) + backtracking(i + 1, sum + nums[i]);
        return dp[`${i}, ${sum}`];
    }

    return backtracking(0, 0);
};






