<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Math
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
import { rotate } from '~/utils/15-math';

@Component({
    head: {
        title: 'Math',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Math extends Vue {
    tasks: Task[] = [
        {
            title: 'Rotate Image',
            descriptionImg: 'math.PNG',
            solution: `
            ${rotate.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Иметь 4 указателя top-down-left-right. Проходить while пока l < r. Если они равны, значит, мы достигли центра, который поворачивать не надо.
                В цикле слоями проходить по матрице, поворачивая по элементно, и сдвигая указатели лева и права вовнутрь - это внутренний цикл i < r - l.
                Внутри него лево-верх в темп, остальное поворачивать в обратном порядке, чтобы не исп доп переменные.
            `,
        },
        {
            title: 'Spiral Matrix',
            descriptionImg: 'math-1.PNG',
            solution: `
            ${rotate.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Общий смысл - уменьшаем наш прямоугольник, убирая строки, которые уже обработали.
                Иметь 4 указателя top-down-left-right. Проходить while пока l < r && t < d. Сперва пройтись по верхней строке, сдвинуть top, по правой, сдвинуть r. Проверить, можем ли выйти из цикла при том же условии, что и в while и тд.
            `,
        },
    ];
}
</script>
