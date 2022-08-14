<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Dynamic Programming
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
import {
    climbStairsOne,
    climbStairsTwo,
    coinChange,
    countSubstrings,
    findTargetSumWays,
    lengthOfLIS,
    longestCommonSubsequence,
    longestCommonSubsequenceDP,
    longestCommonSubsequenceRec,
    longestPalindrome,
    maxProduct,
    maxProfit,
    maxRob,
    minCostClimbingStairs,
    numDecodings,
    rob2,
    wordBreakDFS,
    wordBreakDP,
    wordBreakMySolution,
} from '~/utils/12-dp';

@Component({
    head: {
        title: 'Dynamic Programming',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class DynamicProgramming extends Vue {
    tasks: Task[] = [
        {
            title: 'Climbing Stairs',
            descriptionImg: 'bp.png',
            solution: `
            ${climbStairsOne.toString().split('\n').join('<br/>')} <br><br>
            ${climbStairsTwo.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            1. Составить дерево и посчитать колво (2^n) <br>
            2. Мемоизация. Построить только одну ветвь, сохранять в хешсете ноду и колво сколько мы уже посичтали, и проверять, есть ли у нас это уже значение (n) <br>
            3. Рекурсия. Бейс кейс, n < 0, n = 0 (прибавляем колво), вызываем ф-цию (n-1) и  (n-2), возвращаем колво (n) <br>
            4. Bottom up. Идти с конца, где последний шаг 0 и предпоследний 1, и посчитать фибоначи n-1 раз (слева в темп, слева элемент = л+п, право = темп) (n) <br>

            // 0 1 2 3 4
            //         l=1 r=0
            //         temp
            //       l=l+r
            //          r=temp
            //       l  r
            `,
        },
        {
            title: 'Min Cost Climbing Stairs',
            description: `
            You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

            You can either start from the step with index 0, or the step with index 1.

            Return the minimum cost to reach the top of the floor.
            `,
            solution: `
            ${minCostClimbingStairs.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
             // 1. make a des-n tree.
            //                        ()
            //              1                100
            //          100     1          1     1
            //      1      1   1   1    ...
            //
            // Time: O(2^n) Memo: O(1)

            // 2. des-n tree + hashmap
            // Time: O(n) Memo: O(1)

            // 3. DP - bottom-up - cost[i] = min cost
            // [10,15,20] 0
            //         20
            //      15
            //  25

            `,
        },
        {
            title: 'House Robber',
            descriptionImg: 'bp-1.png',
            solution: `
            ${maxRob.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Пройтись по массиву, сравнивая текущий макс и текущий эл + предыд сумму. В предыд писать получившийся макс, в макс писать предыд значение.
            `,
        },
        {
            title: 'House Robber 2',
            description: 'Такая же задача, но дома соеденены по кругу',
            solution: `
            ${rob2.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
               Пройтись решением из первой части по массиву без первого эл, без посл, выбрать макс.
            `,
        },
        {
            title: 'Longest Palindromic Substring',
            descriptionImg: 'bp-2.png',
            solution: `
            ${longestPalindrome.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
               1. brute-force. Двойной цикл, находим сабстроку, ищем включение в реверсивной строке O(n^2) <br>
               2. Цикл по буквам, есть индексы R L, где каждая буква становится центральной, и от нее в while делаются шаги в бок, проверяя, не вне массива ли мы и совпадают
               ли буквы слева и справа, если да и больше самого длинного слова, сохраняем его. Если массив четный, то вместо центрального, берутся соседние элементы
            `,
        },
        {
            title: 'Palindromic Substrings',
            descriptionImg: 'bp-3.png',
            solution: `
            ${countSubstrings.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
               Аналогично, но добавлять каждую букву + оба решения пройтись, что для нечетного колва, что и для четного.
               `,
        },
        {
            title: 'Decode Ways',
            descriptionImg: 'bp-5.png',
            solution: `
            ${numDecodings.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              Создаем хешсет (индекс = -1), куда будем суммировать колво значений. Проверяем, есть ли в начале ноль.
              DFS по индексу с конца массива к началу слова. Если ноль или меньше индекс, возвращаем 1.
              Если текущий индекс в хешсете не -1, возвращем его.
              Если не ноль текущий элемент строки s[i] - dfs и сохраняем рез1;
              Если не ноль след s[i-1] И проверяем, текущий и след элемент 10-26, то - dfs и сохраняем в res2;
                <br>
              суммируем резы и звписываем в хешсет по индексу, возвращаем в dfs хешсет по индексу.
               `,
        },
        {
            title: 'Coin Change',
            descriptionImg: 'bp-4.png',
            solution: `
            ${coinChange.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                1. top-down: recursive dfs, подсчитывая, кешируя монет надо, чтобы прийти к 0. <br>
                2. bottom-up: вычислить монеты для суммы = 1, до n, используя для каждой монеты (сумма - монета), записывая туда минимальное колво монет (будет определяться, либо текущее значение меньше, либо 1 + dp[i-coins[j]]
                - где индекс будет остаток разницей. Например, если мы найдем монету, которая при минусе будет 0, то мы будем сравнивать с кешированным элменетом 0, что получится 1 + 0 одна монета)

            `,
        },
        {
            title: 'Maximum Product Subarray',
            descriptionImg: 'bp-6.png',
            solution: `
            ${maxProduct.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Храним максимальное значение и минимальное, т.к они могут поменятсься при умножении и минус. Пройтись по элементам, получая минимальное между самим значением, умноженным на значение мин значения и макс. Получая макс. И сравнивая результат и текущий макс.
            `,
        },
        {
            title: 'Word Break',
            descriptionImg: 'bp-7.png',
            solution: `
            ${wordBreakMySolution.toString().split('\n').join('<br/>')} <br><br>
            ${wordBreakDFS.toString().split('\n').join('<br/>')} <br><br>
            ${wordBreakDP.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              1. Проходиться по строке, убирая найденные слова, если убрались все слова и строка пустая, значит, все нашли O(n) <br>
              2. Top-down: рекурсивный DFS, чтобы найти все варианты, проверяя на каждом шаге, слово + след буква - это тоже слово?
              если да, вызываем рекурсию на эту ветку. !!! Покроет варианты, если в словарь включены слова, отличающиеся окончанием.  <br>
              3. bottom-up: DP кеш массив, начиная с конца строки,проверять, есть ли такое слово, если да, записывать в dp[i] = dp[текущий индекс плюс длина найденного слова]
              чтобы проверить, есть ли уже слово начинающее с такого индекса, пишем значение.
              <br>
            `,
        },
        {
            title: 'Longest Increasing Subsequence',
            descriptionImg: 'bp-8.png',
            solution: `
            ${lengthOfLIS.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              bottom-up: DP кеш массив из 1, начиная с конца массива находить длину максимальной последовательности для каждого элемента.
              Как только нашли элемент, максимум будет сам элемент, после чего проходимся в цикле c текущего элемента обратно до конца. Если находим элемент, который больше текущего
              проверяем, чья последовательность больше, текущего элемента либо того, что нашли + 1, записываем в сам элемент. Находим максимум их всех максимумов.
              <br>
            `,
        },
        {
            title: 'Unique Paths',
            descriptionImg: 'bp-9.png',
            solution: `
            ${lengthOfLIS.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              bottom-up: DP кеш массив n*m, идти с конца. Каждый элемент - это сумма вариации элементов снизу и справа. Итого в первом элементе будет сумма.
            `,
        },
        {
            title: 'Longest Common Subsequence',
            descriptionImg: 'bp-10.png',
            solution: `
            ${longestCommonSubsequenceDP.toString().split('\n').join('<br/>')} <br><br>
            ${longestCommonSubsequenceRec.toString().split('\n').join('<br/>')} <br><br>
            ${longestCommonSubsequence.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                <br> Рекурсия. Бейс кейс - вышли за пределы. Если нашли такой элемент, возвращает 1 + рекурсия (i-1, j-1) чтобы проверять следующие элементы. Если не нашли, возвращаем максимум двух рекурсий( сдвиг по столбцу и сдвиг по строке) <br>

              bottom-up: DP кеш массив колву символов массива, с которым сравнивается, идти с конца. Каждый элемент - если буквы совпадают 1+dp[i+1][j+1], если нет, то максимум между нижним и правым в матрице значении. Итого в первом элементе будет сумма.
            `,
        },
        {
            title: '309. Best Time to Buy and Sell Stock with Cooldown',
            description: `
            You are given an array prices where prices[i] is the price of a given stock on the ith day.

            Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

            After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
            Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

            Example 1:
            Input: prices = [1,2,3,0,2]
            Output: 3
            Explanation: transactions = [buy, sell, cooldown, buy, sell]
            `,
            solution: `
            ${maxProfit.toString().split('\n').join('<br/>')} <br><br>

            `,
            remember: `
                Дерево решений, где мы можем либо купить и пропустить, либо продать и пропустить.
                Рекурсия DFS(index, true) + Caching DP(i, buy/sell). Бейс кейс - вышли за пределы. Либо данное значение уже есть в кеше - отдаем его.
                true = buy
                false = sell


                cooldown = dfs(i+1, operation)

                если покупаем или продаем, то получаем значение и берем макс между ним и cooldown, это кешируем.

                возвращаем кеш значение.
            `,
        },
        {
            title: '518. Coin Change 2',
            description: `
            You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

            Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

            You may assume that you have an infinite number of each kind of coin.

            The answer is guaranteed to fit into a signed 32-bit integer.

            Example 1:

            Input: amount = 5, coins = [1,2,5]
            Output: 4
            Explanation: there are four ways to make up the amount:
            5=5
            5=2+2+1
            5=2+1+1+1
            5=1+1+1+1+1
            `,
            solution: `
                ${maxProfit.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                5 4 3 2 1 0
            1        ...  1
            2       1 1 0 1
            5   1 0 0 0 0 1


            Проходимся справа снизу, определяя, текущая ячейка = текущее колво-монетка (получаем коорду) + если мы не используем эту мотнетку, используем предыд значение снизу.
            `,
        },

        {
            title: '518. Coin Change 2',
            description: `
           You are given an integer array nums and an integer target.

            You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

            For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
            Return the number of different expressions that you can build, which evaluates to target.



            Example 1:

            Input: nums = [1,1,1,1,1], target = 3
            Output: 5
            Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
            -1 + 1 + 1 + 1 + 1 = 3
            +1 - 1 + 1 + 1 + 1 = 3
            +1 + 1 - 1 + 1 + 1 = 3
            +1 + 1 + 1 - 1 + 1 = 3
            +1 + 1 + 1 + 1 - 1 = 3
            `,
            solution: `
                ${findTargetSumWays.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              Сохраняем кеш DP. Рекурсия + backtracking. Бейз кейсы - вышли за пределы, если сумма равна таркету, то возвр 1, иначе 0.

              Если есть в кеше значение, возвращаем его.

              Кешируем и после возвращаем сумму вызовов рекурсий (сдвинули указатель вправо, и вычли, и прибавили значение)
            `,
        },
    ];
}
</script>
