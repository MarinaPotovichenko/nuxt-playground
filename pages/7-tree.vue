<template>
    <div>
        <h2 class="font-weight-bold mb-4">Tree</h2>

        <Task
            v-for="(item, index) in tasks"
            :key="item.id"
            :title="`${index + 1}. ${item.title}`"
            :description="item.description"
            :description-img="item.descriptionImg"
            :examples="item.examples"
            :solution="item.solution"
            :results="item.results"
            :remember="item.remember"
        />
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Task } from '~/types/Task';
import {
    getInvertedTree,
    getMaxDepthBFS,
    getMaxDepthDFS,
    getMaxDepthIterativeDFS,
    goodNodes,
    isSameTreeBFS,
    isSameTreeDFS,
    isSameTreeIterativeDFS,
    isSubTreeExist,
    validate,
} from '~/utils/7-tree';
import { treeTrue, treeDepth3, treeDepth4, treeDepth2, subtree, subtree2 } from '~/utils/BinaryTreeTask/TreeTrue';

@Component({
    head: {
        title: 'Practice Linked List',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Tree extends Vue {
    tasks: Task[] = [
        {
            title: 'Invert Binary Tree',
            descriptionImg: `tree.png`,
            solution: getInvertedTree.toString().split('\n').join('<br/>'),
            examples: [`Input: root = [4,2,7,1,3,6,9] <br> Output: [4,7,2,9,6,3,1]`],
            remember: `Рекурсия, спускаться по левому и правому вниз, меняя их местами`,
            results: [`Input: root = [4,2,7,1,3,6,9] <br> Output: ${getInvertedTree(treeTrue)}`],
        },
        {
            title: 'Count Good Nodes in Binary Tree',
            description: `

            Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

            Return the number of good nodes in the binary tree.

            Input: root = [3,1,4,3,null,1,5]
            Output: 4
            `,
            solution: goodNodes.toString().split('\n').join('<br/>'),
        },
        {
            title: '98. Validate Binary Search Tree',
            description: `
                Given the root of a binary tree, determine if it is a valid binary search tree (BST).

                A valid BST is defined as follows:

                The left subtree of a node contains only nodes with keys less than the node's key.
                The right subtree of a node contains only nodes with keys greater than the node's key.
                Both the left and right subtrees must also be binary search trees.
            `,
            solution: validate.toString().split('\n').join('<br/>'),
            remember: `
                Рекурсивный DFS. Проверяем каждый узел, попадает ли он в промежуток значений. Корень - от -бескон до +бескон. Левый от -бескон до значения родителя. Правый от значения родителя, до бскон. Каждую итерацию изменяем макс и мин.
            `,
        },
        {
            title: 'Maximum Depth of Binary Tree',
            descriptionImg: `tree-1.png`,
            solution: getMaxDepthDFS.toString().split('\n').join('<br/>'),
            examples: [
                `Input: root = [3,9,20,null,null,15,7] <br> Output: 3`,
                `Input: root = [1,null,2] <br> Output: 2`,
            ],
            remember: `
            1. Рекурсивно DFS, по левому и правому, забирая максимальный и прибавляя 1.
            2. Итеративно  DFS, добавляя в очередь [ноду, колво] и прибавляя 1, обновляя макс
            2. BFS слоями, сделали копию очереди - прошлись по ней, обновили колво, и снова. Пока while
            ---
            DFS (поиск в глубину). Базовый кейс - нет ноды, значит, вернуть 0. Вернуть максимум между длинами обоих веток (рекурсивный вызов функции) + 1
            <br> <br> BFS (поиск в ширину).  Базовый кейс - нет ноды, значит, вернуть 0. Создать переменную lvl=0, очередь Q = [root], current node. В цикле while(q.length), скопировать нашу очередь и пройтись по ней, удаляя первый элемент наст. очереди, проверяя есть ли справа или слева  элементы, если да, добавлять в очередь и после цикла прибавлять уровень на 1. Вернуть уровень
            <br>  <br>Iterative DFS (итеративный поиск в глубину). Используем стек, в котором будем [хранить ноду, значение глубины]. В while проходимся по стеку, беря последней элемент и удаляя его (pop). Если нода такая существует, сравниваем значение глубины, берем макс, и засовываем в стек правую и левую ноду, параметр глубины увеличиваем на одну у каждого. Возвращаем макс глубину`,
            results: [
                `Input: root = [4,2,7,1,3,6,9] <br> Output: ${getMaxDepthBFS(treeDepth3)}`,
                `Input: root = [4,2,7,1,3,6,9] <br> Output: ${getMaxDepthIterativeDFS(treeDepth3)}`,
                `Input: root = [] <br> Output: ${getMaxDepthDFS(treeDepth4)}`,
            ],
        },
        {
            title: 'Same Tree',
            descriptionImg: `tree-2.png`,
            solution: isSameTreeDFS.toString().split('\n').join('<br/>'),
            remember: `
            DFS (поиск в глубину). Базовый кейс - нет ноды, значит, вернуть 0. Вернуть максимум между длинами обоих веток (рекурсивный вызов функции) + 1
            <br> <br> BFS (поиск в ширину).  Базовый кейс - нет ноды, значит, вернуть 0. Создать переменную lvl=0, очередь Q = [root], current node. В цикле while(q.length), скопировать нашу очередь и пройтись по ней, удаляя первый элемент наст. очереди, проверяя есть ли справа или слева  элементы, если да, добавлять в очередь и после цикла прибавлять уровень на 1. Вернуть уровень
            <br>  <br>Iterative DFS (итеративный поиск в глубину). Используем стек, в котором будем [хранить ноду, значение глубины]. В while проходимся по стеку, беря последней элемент и удаляя его (pop). Если нода такая существует, сравниваем значение глубины, берем макс, и засовываем в стек правую и левую ноду, параметр глубины увеличиваем на одну у каждого. Возвращаем макс глубину`,
            results: [
                `Input: true <br> Output: ${isSameTreeDFS(treeDepth3, treeDepth3)}`,
                `Input: false <br> Output: ${isSameTreeDFS(treeDepth2, treeDepth3)}`,
                `Input: false <br> Output: ${isSameTreeBFS(treeDepth2, treeDepth3)}`,
                `Input: false <br> Output: ${isSameTreeBFS(treeDepth3, treeDepth2)}`,
                `Input: true <br> Output: ${isSameTreeBFS(treeDepth3, treeDepth3)}`,
                `Input: true <br> Output: ${isSameTreeIterativeDFS(treeDepth3, treeDepth3)}`,
                `Input: false <br> Output: ${isSameTreeIterativeDFS(treeDepth2, treeDepth3)}`,
            ],
        },
        {
            title: 'Subtree of Another Tree',
            descriptionImg: `tree-3.png`,
            solution: isSubTreeExist.toString().split('\n').join('<br/>'),
            remember: `Использовать ф-цию для определния одинакового дерева. Если основное пустое, сразу false. Если второе пустое, сразу true. Если вызываем функцию проверки и возвращает true, значит, true. В return вызываем эту же основную функцию, но отправляем туда право и лево, и корень сравнваемой функции`,
            results: [
                `Input: true <br> Output: ${isSubTreeExist(treeDepth4, treeDepth4)}`,
                `Input: true <br> Output: ${isSubTreeExist(treeDepth2, subtree)}`,
                `Input: false <br> Output: ${isSubTreeExist(treeDepth2, subtree2)}`,
            ],
        },
        // { // где-то зациклились, проверить
        //     title: 'Lowest Common Ancestor of a Binary Search Tree',
        //     descriptionImg: `tree-3.png`,
        //     solution: getLowestCommonAncestor.toString().split('\n').join('<br/>'),
        //     remember: ``,
        //     results: [
        //         `Input: 2, 7 <br> Output: ${getLowestCommonAncestor(treeDepth2, 2, 7)}`,
        //         `Input: 6, 9 <br> Output: ${getLowestCommonAncestor(treeDepth2, 6, 9)}`,
        //         `Input: 1, 9 <br> Output: ${getLowestCommonAncestor(treeDepth2, 1, 9)}`,
        //     ],
        // },
    ];
}
</script>
