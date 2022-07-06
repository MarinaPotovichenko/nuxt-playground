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
    lengthOfLIS,
    longestCommonSubsequenceDP,
    longestCommonSubsequenceRec,
    longestPalindrome,
    maxProduct,
    maxRob,
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
              Как только нашли элемент, максимум будет сам элемент, после чего проходимся в цикле до конца. Если находим элемент, который больше текущего
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
            `,
            remember: `
                <br> Рекурсия. Бейс кейс - вышли за пределы. Если нашли такой элемент, возвращает 1 + рекурсия (i-1, j-1) чтобы проверять следующие элементы. Если не нашли, возвращаем максимум двух рекурсий( сдвиг по столбцу и сдвиг по строке) <br>
              bottom-up: DP кеш массив колву символов массива, с которым сравнивается, идти с конца. Каждый элемент - количество совпадений подряд (1 + предыд значение dp). Если какую-то букву не нашли, там остается ноль. Итого в первом элементе будет сумма.
            `,
        },
    ];
}
</script>
