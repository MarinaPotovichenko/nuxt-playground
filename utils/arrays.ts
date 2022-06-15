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
