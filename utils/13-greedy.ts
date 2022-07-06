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

