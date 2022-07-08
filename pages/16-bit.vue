<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Bit
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
import { hammingWeight, countBits, reverseBits, missingNumberSum, missingNumberWithBit, getSum } from '~/utils/16-bit';

@Component({
    head: {
        title: 'Bit',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Bit extends Vue {
    tasks: Task[] = [
        {
            title: '191. Number of 1 Bits',
            descriptionImg: 'bit.PNG',
            solution: `
            ${hammingWeight.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
               n &= (n - 1); ИЛИ curr & 0b1; - получить последний бит.
            `,
        },
        {
            title: '338. Counting Bits',
            descriptionImg: 'bit-1.PNG',
            solution: `
            ${countBits.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Суть - каждые n*2 элементов в конце повторяются. Надо найти этот промежуток и брать предыдущее значение.
               2 запомнить = 1. пройтись от 1 до колва, при каджый итерации высчитыватьь колво 1 с помощью операции n &= n-1 либо DP, где каждое значение 1 + DP с offset-om. Offset определяется, явлется ли текущее i = offset * 2
            `,
        },
        {
            title: '190. Reverse Bits',
            descriptionImg: 'bit-2.PNG',
            solution: `
            ${reverseBits.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                1 - перевести в строку как-то и ревернуть return Number.parseInt(n.toString(2).split('').reverse().join('').padEnd(32, "0"),2);

                2 - Использовать битовые сдвиги. получить последний бит, результат сдвинуть влево, добавить бит в конце через ИЛИ, сдвинуть копию  вправо >>> 0 (Исправить результаты меньше нуля (уничтожить знаковый бит))
            `,
        },
        {
            title: '268. Missing Number',
            descriptionImg: 'bit-3.PNG',
            solution: `
            ${missingNumberSum.toString().split('\n').join('<br/>')} <br><br>
            ${missingNumberWithBit.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                1 - перевести в строку как-то и ревернуть return Number.parseInt(n.toString(2).split('').reverse().join('').padEnd(32, "0"),2);

                2 - Использовать битовые сдвиги. получить последний бит, результат сдвинуть влево, добавить бит в конце через ИЛИ, сдвинуть копию  вправо >>> 0 (Исправить результаты меньше нуля (уничтожить знаковый бит))
            `,
        },
        {
            title: '371. Sum of Two Integers',
            description:
                'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
            solution: `
            ${getSum.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                //1. конвентировать в строку и перебирать с конца, сохраняя во временную переменную, если
                // было два 1, перенос на лево

                //2. Получить сперва, какие останутся единицы через ^. После чего получить временную переменную, где берем старые значения суммируемых чисел и получаем, какие единицы были увеличины и сдвигаем влево их и суммируем, пока временная переменная не равна 0, что значит, запоминающих в уме цифр не осталось.
            `,
        },
    ];
}
</script>
