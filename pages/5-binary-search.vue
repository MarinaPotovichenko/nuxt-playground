<template>
    <div>
        <h2 class="font-weight-bold mb-4">Stack</h2>

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

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Task } from '~/types/Task';
import { getIndexOfTargetValue } from '~/utils/5-binary-search';

@Component({
    head: {
        title: 'Practice Binary Search',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class BinarySearch extends Vue {
    tasks: Task[] = [
        {
            title: 'Search in Rotated Sorted Array',
            description: `There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.`,
            examples: [
                'Input: nums = [4,5,6,7,0,1,2], target = 0 <br> Output: 4 <br/>',
                'Input: nums = [4,5,6,7,0,1,2], target = 3 <br> Output: -1 <br>',
                'Input: nums = [1], target = 0 <br> Output: -1 <br>',
            ],
            solution: getIndexOfTargetValue.toString().split('\n').join('<br/>'),
            remember: `Binary search  - we can get target value, getting the middle of arr, and after middle
             value of one of sides. For deciding what part to chose we need to <br>
            1. Set left = 0, right = length - 1. In start get middle as (r + l) / 2 <br>
            2. To check if the middle our target value, if yes - return id <br>
            3. Check if its left. Check correct order left part (l < mid position), if yes, check mid value
            if its inside of our left values, if yes, change r on mid -1, if not, put l as mid + 1 <br>
            4. If left is not in correct order, its right, check if middle value between values right
            part and move r or l position on mid +- 1, checking right side. <br>`,
            results: [
                `Input: nums = [4,5,6,7,0,1,2], target = 0 <br> Output: ${getIndexOfTargetValue(
                    [4, 5, 6, 7, 0, 1, 2],
                    0
                )}`,
                `Input: nums = [1], target = 0 <br> Output: ${getIndexOfTargetValue([1], 0)}`,
                `Input: nums = [4,5,6,7,0,1,2], target = 3 <br> Output: ${getIndexOfTargetValue(
                    [4, 5, 6, 7, 0, 1, 2],
                    3
                )}`,
            ],
        },
    ];
}
</script>
