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
import { canJump, canJumpGreegy, maxSubArray } from '~/utils/13-greedy';

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
    ];
}
</script>
