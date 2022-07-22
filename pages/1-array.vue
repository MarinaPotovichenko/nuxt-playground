<template>
    <div>
        <h2 class="font-weight-bold mb-4"> Array</h2>

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
import {
    doesContainDuplicatesImproved,
    isAnagramValid,
    getIndexesForTargetSumImproved,
    groupAnagrams,
    topKFrequent,
    productExceptSelf,
    isValidSudoku,
    longestConsecutive,
    twoSum2,
} from '~/utils/1-arrays';
import { Task } from '~/types/Task';

@Component({
    head: {
        title: 'Practice Array',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class PracticeArray extends Vue {
    tasks: Task[] = [
        {
            title: 'Contains Duplicate',
            description:
                'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
            examples: ['Input: nums = [1,2,3,1] <br> Output: true', 'Input: nums = [1,2,3,4] <br> Output: false'],
            solution: doesContainDuplicatesImproved.toString().split('\n').join('<br/>'),
            remember:
                'Add value as obj prop and check if it exist OR Sort array and compare two elements, next one should be more then prev',
            results: [
                `Input: [1,2,3,1] <br> Output: ${doesContainDuplicatesImproved([1, 2, 3, 1])}`,
                `Input: [1,2,3,4] <br> Output: ${doesContainDuplicatesImproved([1, 2, 3, 4])}`,
                `Input: [1,1,1,3,3,4,3,2,4,2] <br> Output: ${doesContainDuplicatesImproved([
                    1, 1, 1, 3, 3, 4, 3, 2, 4, 2,
                ])}`,
            ],
        },
        {
            title: 'Valid Anagram',
            description:
                'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
            examples: [
                'Input: s = "anagram", t = "nagaram" <br> Output: true',
                'Input: s = "rat", t = "car" <br> Output: false',
            ],
            solution: isAnagramValid.toString().split('\n').join('<br/>'),
            remember: 'Sort array and compare two arrays',
            results: [
                `Input: s = "anagram", t = "nagaram" <br> Output: ${isAnagramValid('anagram', 'nagaram')}`,
                `Input: s = "rat", t = "car" <br> Output: ${isAnagramValid('rat', 'car')}`,
            ],
        },
        {
            title: 'Two Sum',
            description:
                'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
            examples: [
                'Input: nums = [2,7,11,15], target = 9 <br> Output: [0,1]',
                'Input: nums = [3,2,4], target = 6 <br> Output: [1,2]',
            ],
            solution: getIndexesForTargetSumImproved.toString().split('\n').join('<br/>'),
            remember:
                'В цикле таргет минус текущий элемент, найти такой элемент в объекте. Если не нашли, то записать текущий в объект',
            results: [
                `Input: nums = [2,7,11,15], target = 9 <br> Output: ${getIndexesForTargetSumImproved(
                    [2, 7, 11, 15],
                    9
                )}`,
                `Input: nums = [3,2,4], target = 6 <br> Output: ${getIndexesForTargetSumImproved([3, 2, 4], 6)}`,
            ],
        },
        {
            title: '49. Group Anagrams',
            description:
                'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
            examples: [
                `Input: strs = ["eat","tea","tan","ate","nat","bat"]<br>
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
                'Input: nums = [3,2,4], target = 6 <br> Output: [1,2]',
            ],
            solution: groupAnagrams.toString().split('\n').join('<br/>'),
        },
        {
            title: '347. Top K Frequent Elements',
            description:
                'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
            examples: [
                `Input: nums = [1,1,1,2,2,3], k = 2 <br>Output: [1,2]`,
                'Input: nums = [3,2,4], target = 6 <br> Output: [1,2]',
            ],
            solution: topKFrequent.toString().split('\n').join('<br/>'),
            remember:
                'Bucket Sort. Когда используем индекс массива за колво и размер этого массива будет такое же +1, т.к в худшем случае каждый элемент повторится по 1му разу. И в значении хранить массив элементов, которые посторяются столько раз из хешмеп.',
        },
        {
            title: '238. Product of Array Except Self',
            description:
                'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
            examples: [`Input: nums = [1,2,3,4] <br> Output: [24,12,8,6]`],
            solution: productExceptSelf.toString().split('\n').join('<br/>'),
            remember: `
                 1. O(n*m), O(n)
                 2. Умножить все и поделить на нужный элемент O(n)
                 3. Сперва получить постфикс значения - это с первого элемента перемножается
                 друг на друга и записывается в массив результат со сдвигом на один элемент вправо.
                 Аналогично с конца постфикс, но уже умножая на текущее значение в результате.
                `,
        },
        {
            title: '36. Valid Sudoku',
            description: `
                Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

<br>Each row must contain the digits 1-9 without repetition.
<br>Each column must contain the digits 1-9 without repetition.
<br>Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
                `,
            solution: isValidSudoku.toString().split('\n').join('<br/>'),
            remember: `
                 хешсет, где ключ строка, куб и столбец
                `,
        },
        {
            title: '128. Longest Consecutive Sequence',
            description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.`,
            solution: longestConsecutive.toString().split('\n').join('<br/>'),
            remember: `
                    1. Cортировка, пройтись в цикле проверяя разницу элементов O(nlogn) <br>
                    2. Проверить каждый элемент, является ли он началом последовательности (есть ли в массиве current-1 значение), если нет, то проверяем, есть ли у него последующие элементы, подсчитывая колво таких = O(2n) = O(n), потому что проходиться будем только дважды
                `,
        },
        {
            title: 'Two Sum II - Input Array Is Sorted',
            description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.`,
            solution: twoSum2.toString().split('\n').join('<br/>'),
            remember: `
                   // 1. O(m*n) time
                    // 2. O(m*n) time, but O(n) если будем использовать текущий массив, и записывать остаток, а птом находить этот остаток
                    // 3. O(n) если проходить по циклу, испольозвать указатель слева и  справа, и двигать его пока не найдем сумму или колво. Двигать - если сумма больше, двигаем конец меньше, если меньше - то начало ближе к концу.
                `,
        },
    ];
}
</script>

