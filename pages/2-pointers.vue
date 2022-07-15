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
import { isValidPalindrome, maxArea, threeSum, trap } from '~/utils/2-pointers';
import { Task } from '~/types/Task';
import { twoSum2 } from '~/utils/1-arrays';

@Component({
    head: {
        title: 'Practice Pointers',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class PracticeArray extends Vue {
    tasks: Task[] = [
        {
            title: 'Valid Palindrome',
            description:
                'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.Given a string s, return true if it is a palindrome, or false otherwise.',
            examples: [
                'Input: s = "A man, a plan, a canal: Panama" <br> Output: true',
                'Input: s = "race a car" <br> Output: false',
            ],
            solution: isValidPalindrome.toString().split('\n').join('<br/>'),
            remember: 'Use regexp to replace non-alphanumeric characters',
            results: [
                `Input: s = "A man, a plan, a canal: Panama" <br> Output: ${isValidPalindrome(
                    'A man, a plan, a canal: Panama'
                )}`,
                `Input: s = "race a car" <br> Output: ${isValidPalindrome('race a car')}`,
                `Input: s = " " <br> Output: ${isValidPalindrome(' ')}`,
            ],
        },
        {
            title: '167. Two Sum II - Input Array Is Sorted',
            description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.`,
            solution: twoSum2.toString().split('\n').join('<br/>'),
            remember: `
                    1. O(m*n) time
    <br> 2. O(m*n) time, but O(1) если будем использовать текущий массив, и записывать остаток, а птом находить этот остаток
    <br> 3. O(n) если проходить по циклу, испольозвать указатель слева и справа, и двигать его пока не найдем сумму или колво. Двигать - если сумма больше, двигаем конец меньше, если меньше - то начало ближе к концу.

                `,
        },
        {
            title: '15. 3Sum',
            description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.`,
            solution: threeSum.toString().split('\n').join('<br/>'),
            remember: `
                    1. O(m*n) time
    <br> 2. O(m*n) time, but O(1) если будем использовать текущий массив, и записывать остаток, а птом находить этот остаток
    <br> 3. O(n) если проходить по циклу, испольозвать указатель слева и справа, и двигать его пока не найдем сумму или колво. Двигать - если сумма больше, двигаем конец меньше, если меньше - то начало ближе к концу.

                `,
        },
        {
            title: 'Container with Most Water',
            descriptionImg: `pointers.PNG`,
            solution: maxArea.toString().split('\n').join('<br/>'),
            remember: `Указатели слева и права. Двигаем тот, что меньше, подсчитывая колво`,
        },
        {
            title: '42. Trapping Rain Water',
            descriptionImg: `pointers-1.PNG`,
            solution: trap.toString().split('\n').join('<br/>'),
            remember: `
            <br> общий смысл, имеем указатели, их максимум, и вычитаем, текущую длину, пока указатели не пересекутся.
            <br>левый и правый указатель, двигать тот, у которого макс меньше.
            <br> и проверять, изменился ли у него максимум и высчитывать разницу между максимумом и текущей позицией.

            `,
        },
    ];
}
</script>

