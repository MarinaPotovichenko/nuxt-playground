interface ITreeNode<T> {
    data: T | null;
    parent: TreeNode<T> | null;
    child: TreeNode<T> | null;
}

export class TreeNode<T> implements ITreeNode<T> {
    data: T | null = null;
    parent: TreeNode<T> | null = null;
    child: TreeNode<T> | null = null;

    constructor(nodeData: T, childFieldName: string, parent: TreeNode<T> | null = null) {
        this.data = {...nodeData};
        this.parent = parent;

        if (nodeData[childFieldName] && nodeData[childFieldName].length) {
            this.child = nodeData[childFieldName].map((child) => new TreeNode<T>(child, childFieldName, this));
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
        this.node = new TreeNode<T>(treeData, childFieldName);
        this.root = this.node;
    }
}
