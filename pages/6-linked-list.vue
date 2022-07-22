<template>
    <div>
        <h2 class="font-weight-bold mb-4">Linked List</h2>

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
import { getReversedLLImproved, getMergedTwoSortedList, removeNthFromEnd } from '~/utils/6-linked-list';

export const tempLinkedList = {
    data: 1,
    node: {
        data: 2,
        node: {
            data: 3,
            node: {
                data: 4,
                node: {
                    data: 5,
                },
            },
        },
    },
};

export const tempLinkedList2 = {
    data: 1,
    node: {
        data: 2,
        node: {
            data: 3,
        },
    },
};

export const tempLinkedList3 = {
    data: 1,
    node: {
        data: 3,
        node: {
            data: 4,
        },
    },
};

export const tempLinkedList4 = {};

export const tempLinkedList5 = {
    data: 1,
};

@Component({
    head: {
        title: 'Practice Linked List',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class LinkedList extends Vue {
    tasks: Task[] = [
        {
            title: 'Reverse Linked List',
            description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
            descriptionImg: `linked-list-task.png`,
            solution: getReversedLLImproved.toString().split('\n').join('<br/>'),
            examples: [`Input: head = [1,2,3,4,5] <br> Output: [5,4,3,2,1]`],
            remember: `Solution 1 <br>
            1 -> 2 -> 3 <br>
            We need to make 1 -> null 2 -> 1 ... <br>
            In while current is head, save in temp next node, make current node = prev, prev = curr, do step curr = temp (which has 2 next node) <br>
            `,
            results: [`Input: head = [1,2,3,4,5]<br> Output: ${getReversedLLImproved(tempLinkedList)}`],
        },
        {
            title: 'Merge Two Sorted Lists',
            descriptionImg: `linked-list-task-2.png`,
            solution: getMergedTwoSortedList.toString().split('\n').join('<br/>'),
            examples: [
                `Input: list1 = [1,2,4], list2 = [1,3,4] <br> Output: [1,1,2,3,4,4]`,
                `Input: list1 = [], list2 = [] <br> Output: []`,
                `Input: list1 = [], list2 = [0] <br> Output: [0]`,
            ],
            remember: `Использовать фейковый старт dummy и tail=dummy для указателя. В while проверять значение, меньшее записыватьи шагать дальше в tail.next, каждую итерацию делать шаг по tail. В конце проверить, остался ли хвост по любому из массива, если да, записать в next и вернуть dummy.next чтобы первую фейк ноду пропустить`,
            results: [
                `Input: list1 = [1,2,4], list2 = [1,3,4] <br> Output: ${getMergedTwoSortedList(
                    tempLinkedList2,
                    tempLinkedList3
                )}`,
                `Input: list1 = [], list2 = [] Output: ${getMergedTwoSortedList(tempLinkedList4, tempLinkedList4)}`,
                `Input: list1 = [], list2 = [0] <br> Output: ${getMergedTwoSortedList(
                    tempLinkedList4,
                    tempLinkedList5
                )}`,
            ],
        },
        {
            title: 'Remove Nth Node From End of List',
            description: `Given the head of a linked list, remove the nth node from the end of the list and return its head.`,
            solution: removeNthFromEnd.toString().split('\n').join('<br/>'),

            remember: `
            Dummy - исп вспомогательную ноду впереди всей последовталеьности, чтобы вернуть обновленную последовательность. Сдвигаем правый указатель на то колво, сколько хотим с конца. Передвигаем оба указателя, пока правый не выйдет вне списка. Удаляем ноду и возвращаем dummy.next

            `,
        },
        {
            title: 'Copy List with Random Pointer',
            description: `
            A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

            Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

            For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

            Return the head of the copied linked list.

            The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

            val: an integer representing Node.val
            random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
            Your code will only be given the head of the original linked list.

            `,
            solution: removeNthFromEnd.toString().split('\n').join('<br/>'),

            remember: `
            Смапить хешмеп oldToNew - ключ-новая нода. Создать копии без связывания текущих нод. И потом связать.

            `,
        },
    ];
}
</script>
