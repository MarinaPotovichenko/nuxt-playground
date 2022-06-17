<template>
    <div>
        <h2 class="font-weight-bold mb-4">Stack</h2>

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
import { getReversedLLImproved, tempLinkedList } from '~/utils/6-linked-list';

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
    ];
}
</script>
