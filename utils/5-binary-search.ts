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

var findMedianSortedArrays = function (nums1, nums2) {

    // ? могут ли быть оба или один пустой массив
    // ? проверить порядок
    // ? то что цифры

    //1 - add el-t in the end and sort and find el-m O((n+m)log(n+m)) sorting
    //2 - merge into correct positions O(n*m)
    //3 - binary search -
    // без смерживания, найти сперва половинки в обоях массивов, после чего взять самый правый элемент левой части и самый левый элемент правой части (если четное колво), если нечетное то наименьший

    let A = nums1;
    let B = nums2;

    if (A.length > B.length) {
        A, B = B, A;
    }

    let total = nums1.length + nums2.length;
    let half = Math.floor(total / 2);
    let l = 0;
    let r = A.length - 1;
    let i = 0;
    let j = 0;

    //binary seach on smallest O(logN)

    while (true) {
        i = Math.floor((l + r) / 2); // A
        j = half - i - 2; //B

        let aleft = i >= 0 ? A[i] : -Infinity;
        let aright = i + 1 < A.length ? A[i + 1] : Infinity;
        let bleft = j >= 0 ? B[j] : -Infinity;
        let bright = j + 1 < B.length ? B[j + 1] : Infinity;

        if (aleft <= bright && bleft <= aright) {
            if (total % 2) {
                return Math.min(aright, bright)
            } else {
                return (Math.max(aleft, bleft) + Math.min(aright, bright)) / 2;
            }
        } else if (aleft > bright) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }

};


export var minEatingSpeed = function (piles, h) {
    let r = Math.max(...piles);
    let l = 1;
    let res = r;

    while (l <= r) {
        let mid = Math.floor((r + l) / 2);

        let hours = 0;
        let i = 0;
        while (i < piles.length) {
            hours += Math.ceil(piles[i] / mid);
            i++;
        }

        if (hours <= h) {
            res = Math.min(mid, res);
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return res;
};

