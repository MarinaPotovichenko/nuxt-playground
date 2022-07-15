import {isDate} from '@vue/shared';

export function getInvertedTree(node) {
    let l = node.left;
    let r = node.right;

    if (l && r && Object.keys(l).length && Object.keys(r).length) {

        node.left = r;
        node.right = l;

        getInvertedTree(node.left);
        getInvertedTree(node.right);
    }

    return node;
}

export function getMaxDepthDFS(node) {
    if (!(node && Object.keys(node).length)) {
        return 0;
    }

    let l = getMaxDepthDFS(node.left);
    let r = getMaxDepthDFS(node.right);

    let max = l > r ? l : r;


    return 1 + max;
}

export function getMaxDepthBFS(node) {
    if (!(node && Object.keys(node).length)) {
        return 0;
    }

    let lvl = 0;
    let q = [node];
    let current;

    while (q.length) {
        let tmp = [...q];
        tmp.forEach(() => {

            current = q.shift();
            if (current.left) {
                q.push(current.left);
            }

            if (current.right) {
                q.push(current.right);
            }
        })

        lvl += 1;
    }


    return lvl;
}


export function getMaxDepthIterativeDFS(node) {
    let res = 0;
    let stack = [[node, 1]];

    while (stack.length) {
        let [curr, depth] = stack.pop();

        if (curr) {
            res = res > depth ? res : depth;
            stack.push([curr.left, depth + 1]);
            stack.push([curr.right, depth + 1]);
        }
    }

    return res;
}



export function isSameTreeBFS(t1, t2) {
    let isSame = true;
    let q1 = [t1];
    let q2 = [t2];

    while (q1.length) {
        let c1 = q1.shift();
        let c2 = q2.shift();

        if (c1 && c2) {
            if (c1.data !== c2.data) {
                isSame = false;
            } else {
                q1.push(c1.left);
                q1.push(c1.right);
                q2.push(c2.left);
                q2.push(c2.right);
            }

        } else if (!c1 && !c2) {

        } else {
            isSame = false;
        }
    }

    return isSame;
}

export function isSameTreeDFS(t1, t2) {
    let isSame = true;

    if (t1 && t2 && t1.data === t2.data) {
        isSame = isSame && isSameTreeDFS(t1.right, t2.right);
        isSame = isSame && isSameTreeDFS(t1.left, t2.left);
    } else if (!t1 && !t2) {
        return true;
    } else {
        return false;
    }

    return isSame;
}

export function isSameTreeIterativeDFS(t1, t2) {
    let isSame = true;
    let stack = [[t1, t2]];

    while (stack.length) {
        let [c1, c2] = stack.pop();

        if (c1 && c2) {

            if (c1.data !== c2.data) {
                isSame = false;
            } else {
                stack.push([c1.right, c2.right]);
                stack.push([c1.left, c2.left]);
            }

        } else if (!c1 && !c2) {

        } else {
            isSame = false;
        }
    }

    return isSame;
}

export function isSubTreeExist(t1, t2) {
    if (!t2) {
        return true;
    }

    if (!t1) {
        return false;
    }

    if (isSameTreeDFS(t1, t2)) {
        return true;
    }

    return isSubTreeExist(t1.left, t2) || isSubTreeExist(t1.right, t2);
}

export function getLowestCommonAncestor(t1, v1, v2) {
    let LCA = null;
    let curr = t1;

    while (curr && Object.keys(curr)) {
        if (v1 > curr.data && v2 > curr.data) {
            curr = curr.right;
        } else if (v1 < curr.data && v2 < curr.data) {
            curr = curr.left;
        }
        LCA = curr.data;
    }

    return LCA;
}
