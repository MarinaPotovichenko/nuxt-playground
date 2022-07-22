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
import {
    getMaxProfit,
    lengthOfLongestSubstring,
    longestStrChain,
    maxSlidingWindow,
    minWindow,
    totalFruit,
} from '~/utils/3-sliding-window';
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
            remember: 'Два цикла, не проверять элементы, которые уже были по индексу в верхнем массиве',
            results: [
                `Input: prices = [7,1,5,3,6,4] <br> Output: ${getMaxProfit([7, 1, 5, 3, 6, 4])}`,
                `Input: prices = [7,6,4,3,1] <br> Output: ${getMaxProfit([7, 6, 4, 3, 1])}`,
            ],
        },
        {
            title: 'Fruit Into Baskets',
            description: `You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

                You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

                You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
                Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
                Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
                Given the integer array fruits, return the maximum number of fruits you can pick.`,
            solution: totalFruit.toString().split('\n').join('<br/>'),
            remember:
                'общий смысл, что надо определить самую длинную последовательность из двух видов фруктов. Если встречаем третий фрукт, находим самый ранний фрукт и сдвигаем начало последовательсти',
        },
        {
            title: 'Longest Substring Without Repeating Characters',
            description: `Given a string s, find the length of the longest substring without repeating characters.`,
            solution: lengthOfLongestSubstring.toString().split('\n').join('<br/>'),
            remember: `
                сдвигаем право, пока не наткнемся на другую букву, убираем левую часть из хеша до буквы, которая повторилась, и сдвигаем указатель
            `,
        },
        {
            title: 'Minimum Window Substring',
            description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

            The testcases will be generated such that the answer is unique.

            A substring is a contiguous sequence of characters within the string.
            Input: s = "ADOBECODEBANC", t = "ABC".
            Output: "BANC"`,
            solution: minWindow.toString().split('\n').join('<br/>'),
            remember:
                'Используем вспомогательную переменную, сколько надо букв в целом, сколько есть, сколько надо каких кокнернто букв хешпап и сколько у нас есть и каких. Проходимся по окну слева направо, увеличивая счетчики. Если мы нашли букву и сколько ее есть, равно сколько надо, увеличиваем общий счетчик. Двигаемся влево, пока не нашли всю комбинацию внутри. Как только нашли, сдвигаем слева наш указатель до того момента, пока у нас не уменьшится колво необходимых букв, значит. мы уже нашли минимальную последовательность с этими буквами',
        },
        {
            title: 'Sliding Window Maximum',
            description: `You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

            Return the max sliding window.`,
            solution: maxSlidingWindow.toString().split('\n').join('<br/>'),
            remember:
                'O(n). Чтобы не пересчитывать максимум каждый раз, использовать очередь, в которую будут добавляться элементы окна. Если текущий элемент больше, чем предыдущие максимумы, он становится первым в очереди, все остальные сдвигаются. Если текущий эл меньше чем предыд в очереди, то он добавляется в очередь. Если мы уже вышли из окна, и максимум не актуален, удаляем его. Если у нас окно уже равно тому размеру, что нам говорили исп, берем его максимум из очереди и сдвигаем справо.',
        },
        {
            title: 'Longest String Chain',
            description: `You are given an array of words where each word consists of lowercase English letters.

            wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.

            For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
            A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.

            Return the length of the longest possible word chain with words chosen from the given list of words. <br>

            Input: words = ["a","b","ba","bca","bda","bdca"]  <br>
            Output: 4 <br>
            Explanation: One of the longest word chains is ["a","ba","bda","bdca"].

`,
            solution: longestStrChain.toString().split('\n').join('<br/>'),
            remember: `
                Делаем вспомогательную функцию, которая будет определять, валидны ли две строки. Для этого проходимся одновремено по каждой, сдвигая указатели, если буквы нашлись, если нет, то будем проходиться по слову, которое длиннее на шаг вперед. Если разница в i и j в одну букву в середине либо в конце, то подходят, если больше, то нет.

                DP - проходимся по двух циклах по словам. Проверяем валидность, если валидно, записываем в dp[j] максимум  dp[j], dp[i] + 1.
                После чего находим максимум по dp.
                `,
        },
    ];
}
</script>

