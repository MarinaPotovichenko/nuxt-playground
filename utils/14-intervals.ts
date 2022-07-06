export function insert(intervals, newInterval) {
    let res = [];
    let added = false;

    intervals.forEach((int, index) => {

        if (int[0] > newInterval[1]) {
            if (!added) {
                res.push(newInterval);
                added = true;
            }
            res.push(int);
        } else if (int[1] < newInterval[0]) {
            res.push(int);
        } else {
            newInterval[0] = Math.min(newInterval[0], int[0]);
            newInterval[1] = Math.max(newInterval[1], int[1]);
        }
    })

    if (!added) {
        res.push(newInterval)
    }

    return res;
};

export function merge(intervals) {
    let res = [];
    let current = intervals[0]; //first int

    for (let i = 1; i < intervals.length + 1; i++) {
        if (!intervals[i] || current[1] < intervals[i][0]) {
            res.push(current);
            current = intervals[i];
        } else {
            current[0] = Math.min(intervals[i][0], current[0]);
            current[1] = Math.max(intervals[i][1], current[1]);
        }
    }

    // if they overlapping (check last position of current and first of next int)
    // if no - just add to res
    // if yes - currect start min of first positions
    // currct end it max if last positions

    return res;
};

export function eraseOverlapIntervals(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[1])

    let currentEnd = intervals[0][1];
    let res = 0;

    for (let int = 1; int < intervals.length; int++) {
        if (currentEnd > intervals[int][0]) {
            res += 1;
            currentEnd = Math.min(intervals[int][1], currentEnd);
        } else {
            currentEnd = intervals[int][1];
        }
    }


    return res;
};
