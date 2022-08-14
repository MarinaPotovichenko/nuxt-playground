<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Greedy
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
import { canJump, canJumpGreegy, jump2DP, jump2Greedy, maxSubArray } from '~/utils/13-greedy';

@Component({
    head: {
        title: 'Greedy',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Greedy extends Vue {
    tasks: Task[] = [
        {
            title: 'Maximum Subarray',
            descriptionImg: 'greedy.PNG',
            solution: `
            ${maxSubArray.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Использовать два указателя, L R. Если видим отрицательное число, проверяем, сумма с ним будет меньше нуля, если да, значит сдвигаем оба указателя на новый элемент, пропуская отрицательный.
            `,
        },
        {
            title: 'Jump Game',
            descriptionImg: 'greedy.PNG',
            solution: `
            ${canJump.toString().split('\n').join('<br/>')} <br><br>
            ${canJumpGreegy.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                1. Не оптимальный - цикл в цикле<br>
                2. Рекурсивный DFS<br>
                3. DP - где каждый элемент, признак, можно ли до него допрыгнуть. С конца, последний элемент значит true. <br>
                4. Greedy. Переменная для хранения новой цели. С конца проходим, сдвигаем конец ближе, если с текущего индекса элемента + размер прыжка больше индекса текущей цели.
                Все ок, если цель пришла к первому индексу.
            `,
        },
        {
            title: 'Jump Game 2',
            description: `
            Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

            Each element in the array represents your maximum jump length at that position.

            Your goal is to reach the last index in the minimum number of jumps.

            You can assume that you can always reach the last index.

            Example 1:

            Input: nums = [2,3,1,1,4]
            Output: 2
            Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
            `,
            solution: `
            ${jump2DP.toString().split('\n').join('<br/>')} <br><br>
            ${jump2Greedy.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                1. Рекурсивный DFS<br>
                2. O(nm) DP - где каждый элемент колво, сколько минимум нужно прыжков до конца массива. Если не один шаг, то делаем от максимума до 0 прыжки, находя уже расчитыванный минимум dp+1. <br>
                3. O(n) Greedy. Разбиваем массив на слои, где слой - слой элементов, который можем покрыть после первого прыжка. Например:

                2 3 1 2 4
                l = r = 0

                2 - 3 1 - 2 4
                    l r

                l = r + 1
                r = max прыжок + i

                считаем колво слоев.

            `,
        },
        {
            title: '134. Gas Station',
            description: `
            There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

            You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

            Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
            `,
            solution: `
            def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
                if sum(gas) < sum(cost):
                    return -1

                res = 0
                total = 0
                for i in range(len(gas)):
                    total += gas[i] - cost[i]

                    if total < 0:
                        total = 0
                        res = i + 1

                return res
            `,
            remember: `
                Решения может не быть, если стоимость выше чем в сумме газа.

                Иначе, должны проходиться по массиву разницы газа и стоимости и прибавлять в тотал. Если тотал меньше нуля, сбрасываем до 0, двигаем начало.

            `,
        },
        {
            title: '846. Hand of Straights, 1296. Divide Array in Sets of K Consecutive Numbers',
            description: `
            Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.

            Return true if it is possible. Otherwise, return false.
            `,
            solution: `

            def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
                if len(hand) % groupSize:
                    return False

                count = {}
                for n in hand:
                    count[n] = 1 + count.get(n, 0)

                minH = list(count.keys())
                heapq.heapify(minH)
                while minH:
                    first = minH[0]
                    for i in range(first, first + groupSize):
                        if i not in count:
                            return False
                        count[i] -= 1
                        if count[i] == 0:
                            if i != minH[0]:
                                return False
                            heapq.heappop(minH)
                return True
            `,
            remember: `
                Хранить колво карт в хешмапе. Хранить наименьшее значение в массиве в minHeap. Проверять, можем ли составить последоватлеьность в разнице в единицу.

                Либо сортировать, и проходиться двумя циклами, меняя значения, которые уже брали на -1.

                O(nlogn)

            `,
        },
        {
            title: '846. Hand of Straights, 1296. Divide Array in Sets of K Consecutive Numbers',
            description: `
            Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.

            Return true if it is possible. Otherwise, return false.
            `,
            solution: `
            def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
                good = set()

                for t in triplets:
                    if t[0] > target[0] or t[1] > target[1] or t[2] > target[2]:
                        continue
                    for i, v in enumerate(t):
                        if v == target[i]:
                            good.add(i)
                return len(good) == 3
            `,
            remember: `
                Сет для хранения, какие индексы из тройки мы уже нашли нужные.

                Пройтись по тройкам, пропускать те, у кого хоть одно значение больше нужного.

                Если все ок, проверить, есть ли в тройке нужное значение, добавить в сет.

                Вернуть bool, является ли сет длинной 3.

            `,
        },
        {
            title: '763. Partition Labels',
            description: `
            You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

            Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

            Return a list of integers representing the size of these parts.



            Example 1:

            Input: s = "ababcbacadefegdehijhklij"
            Output: [9,7,8]
            Explanation:
            The partition is "ababcbaca", "defegde", "hijhklij".
            This is a partition so that each letter appears in at most one part.
            A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
            `,
            solution: `
             def partitionLabels(self, S: str) -> List[int]:
                count = {}
                res = []
                i, length = 0, len(S)
                for j in range(length):
                    c = S[j]
                    count[c] = j

                curLen = 0
                goal = 0
                while i < length:
                    c = S[i]
                    goal = max(goal, count[c])
                    curLen += 1

                    if goal == i:
                        res.append(curLen)
                        curLen = 0
                    i += 1
                return res
            `,
            remember: `
                Сет для хранения, какие какая буква встречается в посл раз.

                Проходиться по слову, находя, где посл позиция, где буква посторяется, проходиться по всему слову, подсчитывая буквы в нем и двигая end, елси буква встречается позже. Встретили end = значит, надо начинать новое слово.

                O(n) - timr
                memo O(26) = O(1)
            `,
        },
    ];
}
</script>
