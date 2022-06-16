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
import { doesContainDuplicatesImproved, isAnagramValid, getIndexesForTargetSumImproved } from '~/utils/arrays';
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
            remember: 'Add value as obj prop and check if it exist OR Sort array and compare two elements, next one should be more then prev',
            results: [
                `Input: [1,2,3,1] <br> Output: ${doesContainDuplicatesImproved([1, 2, 3, 1])}`,
                `Input: [1,2,3,4] <br> Output: ${doesContainDuplicatesImproved([1, 2, 3, 4])}`,
                `Input: [1,1,1,3,3,4,3,2,4,2] <br> Output: ${doesContainDuplicatesImproved([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])}`,
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
            remember: 'Sort array and compare two arrays',
            results: [
                `Input: nums = [2,7,11,15], target = 9 <br> Output: ${getIndexesForTargetSumImproved([2, 7, 11, 15], 9)}`,
                `Input: nums = [3,2,4], target = 6 <br> Output: ${getIndexesForTargetSumImproved([3, 2, 4], 6)}`,
            ],
        },
    ];
}
</script>

