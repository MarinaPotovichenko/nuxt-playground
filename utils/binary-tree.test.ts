import {checkBST} from '~/utils/binary-tree';
import {treeFalse} from '~/utils/BinaryTreeTask/TreeFalse';
import {treeTrue} from '~/utils/BinaryTreeTask/TreeTrue';

test('binary tree is wrong', () => {
    expect(checkBST(treeFalse)).toBe('false');
});

test('binary tree is true', () => {
    expect(checkBST(treeTrue)).toBe('true');
});
