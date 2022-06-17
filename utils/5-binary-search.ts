export function getIndexOfTargetValue(arr: number[], target: number) {

    let l = 0;
    let mid = 0;
    let r = arr.length - 1;


    while (l <= r) {
        mid = (l + r) / 2;

        if (arr[mid] === target) {
            return mid;
        }

        //left
        if (arr[l] <= arr[mid]) {
            if (target >= arr[l] && target < arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            //right
            if (target < arr[mid] && target <= arr[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}
