<template>
    <div>
        <h2 class="font-weight-bold mb-4"> Pointers</h2>

        <Task
            v-for="(item, index) in tasks"
            :key="item.id"
            :title="`${index + 1}. ${item.title}`"
            :description="item.description"
            :examples="item.examples"
            :solution="item.solution"
            :results="item.results"
            :remember="item.remember"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getMaxProfit } from '~/utils/sliding-window';
import { Task } from '~/types/Task';

@Component({
    head: {
        title: 'Practice Sliding Window',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class PracticeArray extends Vue {
    tasks: Task[] = [
        {
            title: 'Best Time to Buy and Sell Stock',
            description:
                'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
            examples: [
                'Input: prices = [7,1,5,3,6,4] <br> Output: 5 <br/> Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. ',
                'Input: prices = [7,6,4,3,1] <br> Output: 0 <br> Explanation: In this case, no transactions are done and the max profit = 0.',
            ],
            solution: getMaxProfit.toString().split('\n').join('<br/>'),
            remember: 'Sort array and compare two elements, next one should be more then prev',
            results: [
                `Input: prices = [7,1,5,3,6,4] <br> Output: ${getMaxProfit([7, 1, 5, 3, 6, 4])}`,
                `Input: prices = [7,6,4,3,1] <br> Output: ${getMaxProfit([7, 6, 4, 3, 1])}`,
            ],
        },
    ];
}
</script>

