
export function getUniqSolution(array, target) {
    let solutions = [];

    function dfs(i, curr, total) {
        if (total === target) {
            solutions.push([...curr]);
            return;
        }

        if (total > target || i >= array.length) {
            return;
        }

        curr.push(array[i]);
        dfs(i, curr, total + array[i]);

        curr.pop();
        dfs(i + 1, curr, total);
    }

    dfs(0, [], 0);

    return solutions;
}


export function isWordExist(board, word) {
    let path = {}

    function dfs(i, j, curr) {

        if (curr === word.length) {
            return true;
        }

        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || word[curr] !== board[i][j] || path[`${i}- ${j}`]) {
            return false;
        }

        path[`${i}- ${j}`] = true;
        curr += 1;

        let res = dfs(i - 1, j, curr) || dfs(i, j - 1, curr) || dfs(i + 1, j, curr) || dfs(i, j + 1, curr);
        return res
    }

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (dfs(r, c, 0)) return true;
        }
    }

    return false;
}

var solveNQueens = function (n) {
    let col = new Set();
    let pD = new Set(); // (r + c)
    let nD = new Set(); // (r - c)
    let res = [];

    let board = [];
    for (let i = 0; i < n; i++) {
        board.push([]);

        for (let j = 0; j < n; j++) {
            board[i].push('.');
        }
    }


    function backtracing(i) {
        console.log(i, board, col)
        if (i >= n) {
            let copy = [];

            for (let j = 0; j < n; j++) {
                copy.push(board[j].join(''));
            }
            res.push(copy);
            return;
        }

        for (let c = 0; c < n; c++) {
            if (col.has(c) || pD.has(i + c) || nD.has(i - c)) {
                continue;
            }


            col.add(c);
            pD.add(i + c);
            nD.add(i - c);
            board[i][c] = 'Q';

            backtracing(i + 1);

            col.delete(c);
            pD.delete(i + c);
            nD.delete(i - c);
            board[i][c] = '.';
        }

    }

    backtracing(0);

    return res;

};
