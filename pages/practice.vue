<template>
    <div>
        <h2 class="font-weight-bold mb-4">Practice</h2>

        <Task
            v-for="(item, index) in tasks"
            :key="item.id"
            :title="`${index + 1}. ${item.title}`"
            :description="item.description"
            :examples="item.examples"
            :solution="item.solution"
            :results="item.results"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getFactorial } from '~/utils/factorial';
import { stringReverse } from '~/utils/string-reverse';
import { subtractProductAndSum } from '~/utils/subtract';

interface Task {
    title: string;
    description: string;
    examples: string[];
    solution: string;
    results: string[];
}

@Component({
    head: {
        title: 'Practice',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Practice extends Vue {
    tasks: Task[] = [
        {
            title: 'Factorial',
            description:
                'Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.',
            examples: ['Input: 4 <br> Output: 24', 'Input: 8 <br> Output: 40320'],
            solution: getFactorial.toString().split('\n').join('<br/>'),
            results: [
                `Input: 1 <br> Output: ${getFactorial(1)}`,
                `Input: 4 <br> Output: ${getFactorial(4)}`,
                `Input: 8 <br> Output: ${getFactorial(8)}`,
                `Input: 18 <br> Output: ${getFactorial(18)}`,
            ]
        },
        {
            title: 'String reverse',
            description:
                'Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.',
            examples: ['Input: coderbyte <br> Output: etybredoc', 'Input: I Love Code <br> Output: edoC evoL I'],
            solution: stringReverse.toString().split('\n').join('<br/>'),
            results: [
                `Input: coderbyte <br> Output: ${stringReverse('coderbyte')}`,
                `Input: Test string <br> Output: ${stringReverse('Test string')}`,
            ]
        },
        {
            title: 'Subtract the Product and Sum of Digits of an Integer',
            description:
                'Given an integer number n, return the difference between the product of its digits and the sum of its digits.',
            examples: ['Input: 234 <br> Output: 15', 'Input: 4421 <br> Output: 21'],
            solution: subtractProductAndSum.toString().split('\n').join('<br/>'),
            results: [
                `Input: 234 <br> Output: ${subtractProductAndSum(234)}`,
                `Input: 44213 <br> Output: ${subtractProductAndSum(44213)}`,
            ]
        },
    ];
}
</script>
