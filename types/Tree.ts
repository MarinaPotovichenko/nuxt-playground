interface ITreeNode<T> {
    data: T | null;
    parent: T | null;
    child: T | null;
}

export class TreeNode<T> implements ITreeNode<T> {
    data: T | null = null;
    parent: T | null = null;
    child: T | null = null;

    constructor(nodeData: T, childFieldName: string, parent: T | null = null,) {
        this.data = {...nodeData};
        this.parent = parent;

        if (nodeData[childFieldName] && nodeData[childFieldName].length) {
            this.child = nodeData[childFieldName].map((child) => new TreeNode(child, childFieldName, this));
        }
    }
}

// -----------------

interface ITree<T> {
    node: ITreeNode<T> | null;
    root: ITreeNode<T> | null;
}

export class Tree<T> implements ITree<T> {
    node: ITreeNode<T> | null = null;
    root: ITreeNode<T> | null = null;

    constructor(treeData: T, childFieldName: string) {
        this.node = new TreeNode(treeData, childFieldName);
        this.root = this.node;
    }
}
