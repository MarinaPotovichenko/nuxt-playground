export function getAmountOfIslands(grid) {
    let amount = 0;

    let poll = grid;
    let numberOfRows = poll.length;
    let numberOfColumns = poll[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function bfs(i, j) { //Breadth First Search
        let q = [[i, j]];
        poll[i][j] = "0";

        while (q.length) {
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
    /**
     * class Solution:
        def orangesRotting(self, grid: List[List[int]]) -> int:
            q = collections.deque()
            fresh = 0
            time = 0

            for r in range(len(grid)):
                for c in range(len(grid[0])):
                    if grid[r][c] == 1:
                        fresh += 1
                    if grid[r][c] == 2:
                        q.append((r, c))

            directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            while fresh > 0 and q:
                length = len(q)
                for i in range(length):
                    r, c = q.popleft()

                    for dr, dc in directions:
                        row, col = r + dr, c + dc
                        # if in bounds and nonrotten, make rotten
                        # and add to q
                        if (
                            row in range(len(grid))
                            and col in range(len(grid[0]))
                            and grid[row][col] == 1
                        ):
                            grid[row][col] = 2
                            q.append((row, col))
                            fresh -= 1
                time += 1
            return time if fresh == 0 else -1
     */



    // let gridCopy = [...grid];
    // let direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    // let ROWS = grid.length;
    // let COLS = grid[0].length;
    // let amount = 0;
    // let visited = {};

    // function bfs(i, j) {
    //     let q = [[i, j]];

    //     while (q.length) {
    //         let [ci, cj] = q.shift();

    //         if (ci >= 0 && cj >= 0 && ci < ROWS && cj < COLS && gridCopy[ci][cj] !== 0 && !visited[`${ci} ${cj}`]) { //&& gridCopy[ci][cj] !== 2
    //             visited[`${ci} ${cj}`] = true;
    //             gridCopy[ci][cj] = 2;
    //             amount = amount + 1;


    //             direction.forEach(dir => {
    //                 q.push([ci + dir[0], cj + dir[1]]);
    //             });
    //         }
    //     }
    // }


    // for (let i = 0; i < ROWS; i++) {
    //     for (let j = 0; j < COLS; j++) {
    //         if (gridCopy[i][j] === 2 && !visited[`${i} ${j}`] && amount === 0) {

    //             bfs(j, j);
    //         }
    //     }
    // }

    // for (let i = 0; i < ROWS; i++) {
    //     for (let j = 0; j < COLS; j++) {
    //         if (gridCopy[i][j] === 1) {
    //             return -1;
    //         }
    //     }
    // }


    // return amount;

};


const INF = 2 ** 31 - 1;
const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

export function wallsAndGates(rooms) {
    const queue = [];

    for (let i = 0; i < rooms.length; ++i) {
        for (let j = 0; j < rooms[0].length; ++j) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }

    let count = 1;

    while (queue.length) {
        let length = queue.length;

        while (length--) {
            [i, j] = queue.shift();

            for ([k, l] of DIRECTIONS) {
                k += i;
                l += j;
                if (inBounds(rooms, k, l) && rooms[k][l] === INF) {
                    rooms[k][l] = count;
                    queue.push([k, l]);
                }
            }
        }

        ++count;
    }
}

function inBounds(rooms, i, j) {
    return i >= 0 && j >= 0 && i < rooms.length && j < rooms[0].length;
}

export var topological = function (numCourses, prerequisites) {
    let adj = [];

    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    let res = [];
    let visited = new Set();

    function dfs(i) {
        if (visited.has(i)) {
            return;
        }

        for (let j = 0; j < adj[i].length; j++) {
            dfs(adj[i][j])
        }

        visited.add(i)
        res.push(i);
    }


    for (let i = 0; i < numCourses; i++) {
        dfs(i)
    }

    return res;
};

export var findOrder = function (numCourses, prerequisites) {
    let adj = [];

    for (let i = 0; i < numCourses; i++) {
        adj.push([]);
    }

    for (let i = 0; i < prerequisites.length; i++) {
        adj[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    let res = [];
    let visited = new Set();
    let cycle = new Set();

    function dfs(i) {
        if (cycle.has(i)) {
            return false;
        }

        if (visited.has(i)) {
            return true;
        }

        cycle.add(i);

        for (let j = 0; j < adj[i].length; j++) {
            if (!dfs(adj[i][j])) {
                return false;
            };
        }

        cycle.delete(i);
        visited.add(i)
        res.push(i);

        return true;
    }


    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return [];
        };
    }

    return res;
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


export var ladderLength = function (beginWord, endWord, wordList) {
    let adj = {};
    if (!wordList.includes(beginWord)) {
        wordList.push(beginWord);
    }


    for (let i = 0; i < wordList.length; i++) {
        adj[wordList[i]] = [];
    }

    for (let i = 0; i < wordList.length; i++) {
        for (let j = 0; j < wordList.length; j++) {
            if (isAPair(wordList[i], wordList[j])) {
                adj[wordList[i]].push(wordList[j]);
            }

        }
    }

    // можно заменить на хешмап, где ключом будет паттерн hot -> *ot - h*t - ho* таким образом сложность будет O(n*amountLetter^2)
    function isAPair(w1, w2) {
        if (w1.length !== w2.length) {
            return false;
        }

        let amount = 0;
        let i = 0;
        while (i < w1.length) {
            if (w1[i] === w2[i]) {
                amount++;
            }
        }

        return amount === w1.length - 1;
    }

    let visited = new Set();
    let steps = 1;

    visited.add(beginWord);

    let q = [beginWord];

    while (q.length) {
        let amount = q.length;
        for (let i = 0; i < amount; i++) {
            let curr = q.shift();

            if (curr === endWord) {
                return steps;
            }

            for (let j = 0; j < adj[curr].length; j++) {
                if (!visited.has(adj[curr][j])) {
                    q.push(adj[curr][j]);
                    visited.add(adj[curr][j]);
                }
            }

        }

        steps++;
    }

    return 0;

};

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


// UnionFind алгоритм - мы храним список вершин parents и rank (колво, сколько у вершины детей, изначально по 1). Фунция Union - соединяет ноды, находя родителей, если родители одинаковые у двух вершин, значит, они уже соеденены. Если нет, сравниваем родителей и соединяем к тому, кто больше по ранку (в списке родителей меньшего заменяем на того, кто больше, и ранк у большего увеличиваем на то колво, сколько у ребенка). Функция Find - берем родителя по ноде par[edge], проходимся в цикле while пока не найдем родителя, равному текущему элемента (при каждой итерации след родитель - равен родителю через один, и текущий элемент равен родителю, таким образом передвигаемся наверх по цепочке); Если наша функция union вернула false, что значит, мы нашли звенья с одним родителем и они соеденены, возвращаем это соединение.
export var findRedundantConnection = function (edges) {
    let par = [];
    let rank = [];

    for (let i = 0; i < edges.length + 1; i++) {
        par.push(i);
        rank.push(1);
    }

    function find(edge) {
        let p = par[edge];

        while (p !== par[p]) {
            par[p] = par[par[p]];
            p = par[p];
        }

        return p;
    };

    function union(e1, e2) {
        let p1 = find(e1);
        let p2 = find(e2);

        if (p1 === p2) {
            return false;
        }

        if (rank[p1] < rank[p2]) {
            p1, p2 = p2, p1;
        }

        par[p2] = p1;
        rank[p1] += rank[p2];
        console.log(par, rank);
        return true;
    };

    for (let i = 0; i < edges.length; i++) {
        if (!union(edges[i][0], edges[i][1])) {
            return edges[i];
        }
    }


    return [];
};


//
// We have:
// points[i] = [xi, yi]
// cost of connecting = |xi - xj| + |yi - yj|
//
// Find: min cost to connect all points

// ? can be < 0 coordinates
// ? cab be emty points arr?
// ? check correct array value [1, 1] or [n, k]
// ? points on the same potision?

// Solutions:
// 1. Brute force - take node and try to connect with every point and find min, and save this -> skip edges already visited
// Time: O()
// Memo: O()
// 2. Prims Algo - для нахождения минимального пути в undirected графе. Берется исписок смежности  adj list, в котором - граф : [стоимость до графа, граф]. Используется min heap для хранения минимального пути и visited. Пока у мы не посетим все ноды, получать минимальное из heap [cost, node], проверяем посещали ли уже, если нет, то складываем в общую стоимость его стоимость, добавляем в visited   и проходимся по его соседям, которые еще не посетили и добавляем их в heap;
// Time: O(n2logN)
// Space: O(n2)

// Test:
//

var minCostConnectPoints = function (points) {

};


/*

class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        N = len(grid)
        visit = set()
        minH = [[grid[0][0], 0, 0]]  # (time/max-height, r, c)
        directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

        visit.add((0, 0))
        while minH:
            t, r, c = heapq.heappop(minH)
            if r == N - 1 and c == N - 1:
                return t
            for dr, dc in directions:
                neiR, neiC = r + dr, c + dc
                if (
                    neiR < 0
                    or neiC < 0
                    or neiR == N
                    or neiC == N
                    or (neiR, neiC) in visit
                ):
                    continue
                visit.add((neiR, neiC))
                heapq.heappush(minH, [max(t, grid[neiR][neiC]), neiR, neiC])

*/


/* Bellman Ford alg - DFS - для нахождения минимального по стоимости пути в направленном взвешенном графе(вес на путях).Смысл - проходимся по каждому узлу и записываем мин стоимость, сколько нужно для того, чтобы попасть до этого узла.Исп темп хешмапа на каждой итерации dfs, чтоб сохранить ее текущую стоимость, изменять ее на мин, но использовать изначальные параметры стоимости, полученные на предыд шаге.
*/

export var findCheapestPrice = function (n, flights, src, dst, k) {
    let prices = {};

    for (let i = 0; i < n; i++) {
        prices[i] = Infinity;
    }

    prices[src] = 0;

    k++;

    while (k) {
        let temp = {...prices};

        for (let i = 0; i < flights.length; i++) {
            let s = flights[i][0];
            let d = flights[i][1];
            let p = flights[i][2];


            if (prices[s] === Infinity) {
                continue;
            }

            temp[d] = Math.min(prices[s] + p, temp[d]);

        }
        prices = {...temp};
        k--;
    }
    console.log(prices[dst], Infinity, prices[dst] === Infinity)
    return prices[dst] === Infinity ? -1 : prices[dst];
};
