export function getTreeByLayer(node: Node, arr: any, type: string) {
    if (node) {
        if (type === 'push') {
            arr.push(node.data);
        } else {
            arr.unshift(node.data)
        }

        getTreeByLayer(node.left, arr, type);
        getTreeByLayer(node.right, arr, type);
    }
}

export function checkBST(tree: Node) {
    const helpArray = [];

    helpArray.push(tree.data);

    getTreeByLayer(tree.left, helpArray, 'push');
    getTreeByLayer(tree.right, helpArray, 'unshift');

    let prev = null;
    let correct = true;

    helpArray.forEach(curr => {
        if (prev && curr >= prev) {
            correct = false;
        }
        prev = curr;
    })

    return correct.toString();
}
