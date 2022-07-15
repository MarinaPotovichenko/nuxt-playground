export function getAmountOfIslands(grid) {
    let amount = 0;

    let poll = grid;
    console.log('grid', grid)
    let numberOfRows = poll.length;
    let numberOfColumns = poll[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function bfs(i, j) { //Breadth First Search
        let q = [[i, j]];
        poll[i][j] = "0";

        while (q.length) {
            console.log('q', ...q)
            let [row, col] = q.shift(); //can be change for depth first search

            directions.forEach(el => {
                let r = row + el[0];
                let c = col + el[1];
                if (r >= 0 && c >= 0 && r < numberOfRows && c < numberOfColumns && poll[r][c] === '1') {
                    q.push([r, c]);
                    poll[r][c] = "0";
                }
            })
        }
    }

    for (let r1 = 0; r1 < numberOfRows; r1++) {
        for (let c1 = 0; c1 < numberOfColumns; c1++) {
            if (poll[r1][c1] === '1') {
                bfs(r1, c1);
                amount += 1;
            }
        }
    }

    return amount;
}

export function cloneGraph(node) {
    if (!node) {
        return null;
    }

    let oldToNew = {};

    function dfs(node) {
        if (oldToNew[node.val]) {
            return oldToNew[node.val];
        }

        let newNode = {
            val: node.val,
            neighbors: []
        }

        oldToNew[node.val] = newNode;

        node.neighbors.forEach(nei => {
            newNode.neighbors.push(dfs(nei));
        });

        return newNode;
    }

    return dfs(node);
}

export function maxAreaOfIsland(grid) {
    let direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let maxAmount = 0;
    let visited = new Set();

    function bfs(i, j) {

        let amount = 1;

        let q = [[i, j]];


        while (q.length) {
            let [ci, cj] = q.shift();


            direction.forEach(c => {
                let checkI = ci + c[0];
                let checkJ = cj + c[1];

                if (checkI >= 0 && checkJ >= 0 &&
                    checkI < grid.length && checkJ < grid[0].length &&
                    !visited.has(`${checkI}-${checkJ}`) && grid[checkI][checkJ] === 1
                ) {
                    q.push([checkI, checkJ]);
                    amount += 1;
                }

            });
        }

        return amount;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1 && !visited.has(`${i}-${j}`)) {
                let currentAmount = bfs(i, j);

                if (currentAmount > maxAmount) {
                    maxAmount = currentAmount;
                }
            }

            visited.add(`${i}-${j}`)
        }
    }

    return maxAmount;
};

export function pacificAtlantic(heights) {
    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let atl = {};
    let pac = {};

    function canFlowBothWay(i, j, visited, prev) { //dfs
        if (i < 0 || j < 0 || i === heights.length || j === heights[0].length || visited[`${i}, ${j}`] || heights[i][j] < prev) {
            return;
        }

        visited[`${i}, ${j}`] = [i, j]

        dir.forEach(d => {
            canFlowBothWay(i + d[0], j + d[1], visited, heights[i][j]);
        })
    }

    for (let i = 0; i < heights.length; i++) {
        canFlowBothWay(i, 0, pac, heights[i][0]);
        canFlowBothWay(i, heights[0].length - 1, atl, heights[i][heights[0].length - 1]);

    }

    for (let j = 0; j < heights[0].length; j++) {
        canFlowBothWay(0, j, pac, heights[0][j]);
        canFlowBothWay(heights.length - 1, j, atl, heights[heights.length - 1][j]);

    }

    let res = [];

    Object.values(atl).forEach(val => {
        if (pac[`${val[0]}, ${val[1]}`]) {
            res.push(val);
        }
    })

    return res;
};

export function surroundedRegions(board) {
    let ROWS = board.length;
    let COLS = board[0].length;
    let toColor = [];
    let visited = new Set();
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    function bfs(i, j) {
        let tempColor = [[i, j]];

        let q = [[i, j]];

        while (q.length) {
            let current = q.shift();


            if (current[0] < 0 || current[1] < 0 || current[0] === ROWS || current[1] === COLS) {
                return [];
            }


            if (board[current[0]][current[1]] === "O" && !visited.has(`${current[0]} ${current[1]}`)) {
                tempColor.push([current[0], current[1]]);
                visited.add(`${current[0]} ${current[1]}`);
                direction.forEach(dir => {
                    q.push([current[0] + dir[0], current[1] + dir[1]]);
                });

            }
        }

        return tempColor;
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === "O") {
                toColor = [...toColor, ...bfs(i, j)];
            }

            visited.add(`${i} ${j}`);
        }
    }

    toColor.forEach(el => {
        board[el[0]][el[1]] = "X";
    });

    return board;
};



export function orangesRotting(grid) {
    let gridCopy = [...grid];
    let direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let ROWS = grid.length;
    let COLS = grid[0].length;
    let amount = 0;
    let visited = {};

    function bfs(i, j) {
        let q = [[i, j]];

        while (q.length) {
            let [ci, cj] = q.shift();



            if (ci >= 0 && cj >= 0 && ci < ROWS && cj < COLS && gridCopy[ci][cj] !== 0 && !visited[`${ci} ${cj}`]) { //&& gridCopy[ci][cj] !== 2
                visited[`${ci} ${cj}`] = true;
                gridCopy[ci][cj] = 2;
                amount = amount + 1;


                direction.forEach(dir => {
                    q.push([ci + dir[0], cj + dir[1]]);

                });
            }
        }
    }


    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (gridCopy[i][j] === 2 && !visited[`${i} ${j}`] && amount === 0) {

                bfs(j, j);
            }
        }
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (gridCopy[i][j] === 1) {
                return -1;
            }
        }
    }


    return amount;

};

export function canFinish(numCourses, prerequisites) {
    let graph = [];
    let visited = new Set();
    let numCoursesDone = 0;

    function dfs(i) {
        if (visited.has(i)) {
            return false;
        }

        visited.add(i);
        numCoursesDone += 1;

        if (numCoursesDone === numCourses) {
            return true;
        }

        for (let j = 0; j < graph[i].length; j++) {
            return dfs(graph[i][j]);
        }
    }

    for (let i = 0; i < numCourses; i++) {
        graph.push([]);
    }

    for (let i = 0; i < numCourses; i++) {
        for (let j = 0; j < prerequisites.length; j++) {
            if (prerequisites[j][1] === i) {
                graph[i].push(prerequisites[j][0]);
            }
        }
    }

    return dfs(0);
};

export function validTree(n, edges) {
    if (!n) {
        return true;
    }

    let graph = [];
    let visited = new Set();

    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (let j = 0; j < edges.length; j++) {
        graph[edges[j][0]].push(edges[j][1]);
        graph[edges[j][1]].push(edges[j][0]);
    }

    function dfs(node, prev) {
        if (visited.has(node)) {
            return false;
        }

        visited.add(node);


        for (let i = 0; i < graph[node].length; i++) {
            if (prev === graph[node][i]) {
                continue;
            }
            if (!dfs(graph[node][i], node)) {
                return false;
            }
        }

        return true;
    }

    let res = dfs(0, -1)
    return visited.size === n && res;
}

export function alienOrder(words) {
    let graph = {};

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            graph[words[i][j]] = new Set();
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        if (word1.length > word2.length && (word1 + '').startsWith(word2)) {
            return "";
        }

        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            let c1 = word1[j];
            let c2 = word2[j];

            if (c1 !== c2) {
                graph[c1].add(c2);
                break;
            }
        }
    }

    let visited = {}; // false = visited, true = current path
    let res = [];

    function dfs(c) {
        if (visited[c]) {//
            return Boolean(visited[c]);
        }

        visited[c] = 'true';
        for (let nei of graph[c]) {
            if (dfs(nei)) {
                return true;
            }
        }

        visited[c] = 'false';
        res.push(c);
    }

    Object.keys(graph).forEach(c => {
        if (dfs(c)) {
            return "";
        }
    })

    return res.reverse().join('');
}
