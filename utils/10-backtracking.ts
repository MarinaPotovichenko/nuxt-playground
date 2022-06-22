
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

