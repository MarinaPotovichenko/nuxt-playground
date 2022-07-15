export function isValidPalindrome(str: string) {
    return str === str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
}

export function isValidPalindromeNotImproved(str: string) {
    const lowercaseReplacedStr = str.toLocaleLowerCase().replace(/[^a-z0-9]/g, '').split('');
    let isValid = true;
    lowercaseReplacedStr.forEach((curr, index) => {
        if (curr !== lowercaseReplacedStr[lowercaseReplacedStr.length - index - 1] && index < lowercaseReplacedStr.length - index - 1) {
            isValid = false;
        }
    });
    return isValid;
}

export function threeSum(nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    nums.sort((a, b) => {return a - b})

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > 0) return res;
        if (nums[i] === nums[i - 1]) continue;

        left = i + 1;
        right = nums.length - 1;
        let temp = 0;

        while (left < right) {
            temp = nums[left] + nums[right] + nums[i];
            if (temp === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (nums[left] == nums[left - 1]) {left++};

                while (nums[right] == nums[right + 1]) {right--};

            } else if (temp > 0) {right--}
            else if (temp < 0) {left++}
        }
    }
    return res;
};

export function maxArea(height) {
    // Указатели слева и права. Двигаем тот, что меньше, подсчитывая колво

    let l = 0;
    let r = height.length - 1;
    let max = 0;

    while (l < r) {
        let curr = Math.min(height[l], height[r]) * (r - l);

        max = Math.max(curr, max);

        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }

    return max;
};

export function trap(height) {
    // левый и правый указатель, двигать тот, у которого макс меньше.
    // и проверять, изменился ли у него максимум и высчитывать разницу между максимумом и текущей позицией.
    // общий смысл, имеем указатели, их максимум, и вычитаем, текущую длину, пока указатели не пересекутся.


    let total = 0;

    let l = 0;
    let maxL = height[l];
    let r = height.length - 1;
    let maxR = height[r];

    while (l !== r) {
        console.log(l, r, maxL, maxR, total)

        if (maxL < maxR) {
            l++;

            maxL = Math.max(maxL, height[l]);
            total += maxL - height[l];
        } else {


            r--;

            maxR = Math.max(maxR, height[r]);
            total += maxR - height[r];
        }



    }
    return total;
};
