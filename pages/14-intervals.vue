<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Intervals
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
import { eraseOverlapIntervals, insert, merge } from '~/utils/14-intervals';

@Component({
    head: {
        title: 'Intervals',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Intervals extends Vue {
    tasks: Task[] = [
        {
            title: 'Insert Interval',
            descriptionImg: 'intervals-1.PNG',
            solution: `
            ${insert.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              Если наш интервал после - просто добавлять текущий. Если пересекается, менять у текущего интервала
              начало и конец, беря минимум для начала, максимум для конца. Если наш интервал перед и не пересекается,
              то добавляем интервал, проверяя, что он не был добавлен, добавляем текущий элемент.
              Перед возвращеинем результата, проверяем, что интервал добавлен, т.к он может быть в конце.

            `,
        },
        {
            title: 'Merge Intervals',
            descriptionImg: 'intervals-2.PNG',
            solution: `
            ${merge.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Сохраняем текущий интервал. Проверяем, пересекается ли текущий и последующий либо мы уже вне массива, то сохраняем текущий в результате и меняем текущий на след. Если пересекаются, то берем мин для начала, максимум для конца.
            `,
        },
        {
            title: 'Non-overlapping Intervals',
            descriptionImg: 'intervals-3.PNG',
            solution: `
            ${eraseOverlapIntervals.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              Смысл - берем отрезки, заканчивающиеся раньше и убираем те, кто заканчиваются позже. Сортируем. Сохраняем значение конца текущего интервала. Проходим в цикле, проверяя, пересекается ли со следующим. Если да, значит, прибавляем к результату 1 и меняем конец на минимальный. Если нет, значит, сохраняем текущий конец.
            `,
        },
        {
            title: 'Meeting Rooms II. Подсчитать колво комнат, сколько нужно для конференций',
            descriptionImg: 'intervals-4.PNG',
            solution: `
            ${eraseOverlapIntervals.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
              Разделить интервалы на массив начал и массив концов. Проходиться параллельно, если начало меньше конца увеличиваем счетчик, сдвигаем вправо если только нашли конец равен началу  или меньше.
            `,
        },
    ];
}
</script>
