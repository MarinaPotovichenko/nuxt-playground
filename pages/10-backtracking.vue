<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Heap and Priority Queue (нет готовой реализации в js), поэтому откладываю вопрос
        </h2>

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
import { Trie, TrieNode } from '~/utils/8-tries';

@Component({
    head: {
        title: 'Practice Trie',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class HeapNPriorityQueue extends Vue {
    tasks: Task[] = [
        {
            title: 'Kth Largest Element in a Stream',
            description: `Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.
                        <br>Implement KthLargest class:
s                        <br><br>KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
                        <br><br>int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.`,
            examples: [
                `Input: ["KthLargest", "add", "add", "add", "add", "add"]<br>
                        [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]] <br> Output: [null, 4, 5, 5, 8, 8] <br><br>
                        Explanation<br>
                        KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);<br>
                        kthLargest.add(3);   // return 4<br>
                        kthLargest.add(5);   // return 5<br>
                        kthLargest.add(10);  // return 5<br>
                        kthLargest.add(9);   // return 8<br>
                        kthLargest.add(4);   // return 8<br>`,
            ],
            solution: `
            ${Trie.toString().split('\n').join('<br/>')} <br><br>
            ${TrieNode.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.insert.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.search.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.startsWith.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: ` `,
        },
    ];
}
</script>
