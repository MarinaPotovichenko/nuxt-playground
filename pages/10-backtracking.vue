<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Backtracking
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
import { getUniqSolution, isWordExist } from '~/utils/10-backtracking';

@Component({
    head: {
        title: 'Practice Backtracking',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class HeapNPriorityQueue extends Vue {
    tasks: Task[] = [
        {
            title: 'Kth Largest Element in a Stream',
            description: `Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
<br><br>
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
<br><br>
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.`,
            examples: [
                `Input: candidates = [2,3,6,7], target = 7<br>
Output: [[2,2,3],[7]]<br>
Explanation:<br>
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.<br>
7 is a candidate, and 7 = 7.<br>
These are the only two combinations.`,
            ],
            solution: `
            ${getUniqSolution.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `Алгоритм поиска с возвратом — это алгоритм решения проблем, который использует подход грубой силы для нахождения желаемого результата.
            Подход грубой силы пробует все возможные решения и выбирает желаемые/наилучшие решения. Термин «откат» предполагает,
            что если текущее решение не подходит, следует вернуться и попробовать другие решения. Таким образом, в этом подходе используется рекурсия.
            Этот подход используется для решения задач, которые имеют несколько решений. Если вам нужно оптимальное решение, вы должны выбрать динамическое программирование. <br><br> DFS для создания  дерева, где одна ветвь обычное значение, а другая предыдущее значение. [] => [2][] => [2][22][2] [] ...
            В рекурсию передается индекс элемента, пустой массив текущего решения, и общая сумма 0, котоаря наращивается по каждой ветке своя.
            `,
        },
        {
            title: 'Combination Sum',
            descriptionImg: 'bk.png',
            solution: `
            ${isWordExist.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `Пройтись по всей доске, итерируясь по слову. Базовые кейсы: если совпадает длина, то значит слово нашли. Если наткнулись на ненужную букву, либо вне зоны доски, либо уже на эту букву натыкались (ключи сохраняем), то возвращаем фолс. Рекурсия - сохраняем путь, прибавляем букву какую ищем, возвращаем вызов рекурсии, смотря буквы сверху-сниху-побокам через ИЛИ. Если ничего не нашлось, то не нашли`,
        },
    ];

    created() {
        // console.log(getUniqSolution([2, 3, 6, 7], 7));
        // console.log(
        //     isWordExist(
        //         [
        //             ['A', 'B', 'C', 'E'],
        //             ['S', 'F', 'C', 'S'],
        //             ['A', 'D', 'E', 'E'],
        //         ],
        //         'ABCCED'
        //     )
        // );
    }
}
</script>
