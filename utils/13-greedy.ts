export function maxSubArray(nums) {
    let r = 0;
    let l = 0;
    let max = nums[0];
    let curmax = nums[0];

    while (r < nums.length) {
        if (l === r) {
            curmax = nums[l];
            r += 1;
        } else if (nums[r] < 0 && curmax + nums[r] < 0 && r + 1 < nums.length) {
            r = r + 1;
            l = r;
            curmax = 0;
        } else {
            curmax = curmax + nums[r];
            max = Math.max(curmax, max);
            r += 1;
        }
    }

    return max;
};

export function canJump(nums) {
    let dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;

    for (let n = nums.length - 2; n >= 0; n--) {
        if (nums[n] === 0) {
            dp[n] = false;
        } else {
            for (let i = nums[n]; i >= 1; i--) {
                dp[n] = dp[n] || dp[n + i];
                if (dp[n + i]) {
                    break;
                }
            }

        }
    }

    return dp[0];
};

export function canJumpGreegy(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;
};



export var jump2DP = function (nums) {

    let dp = new Array(nums.length).fill(Infinity);

    dp[nums.length - 1] = 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        console.log(dp)
        if (i + nums[i] >= nums.length) {
            dp[i] = 1;
        } else {
            let tmp = nums[i];
            while (tmp) {
                dp[i] = Math.min(dp[i + tmp] + 1, dp[i]);
                tmp--;
            }
        }
    }

    return dp[0];
};


export var jump2Greedy = function (nums) {
    let res = 0;
    let r = 0;
    let l = 0;

    while (r < nums.length - 1) {
        let max = 0;
        for (let i = l; i < r + 1; i++) {
            max = Math.max(max, nums[i] + i);
        }

        l = r + 1;
        r = max;
        res++;

    }

    return res;
};
