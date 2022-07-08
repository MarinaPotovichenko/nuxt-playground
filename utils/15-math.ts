export function rotate(matrix) {
    let l = 0;
    let r = matrix.length - 1;
    let t = 0;
    let d = r;

    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            t = l;
            d = r;
            let temp = matrix[t][l + i];
            matrix[t][l + i] = matrix[d - i][l];
            matrix[d - i][l] = matrix[d][r - i];
            matrix[d][r - i] = matrix[t + i][r];
            matrix[t + i][r] = temp

        }
        l += 1;
        r -= 1;
    }

    return matrix;
};
