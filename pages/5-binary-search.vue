<template>
    <div>
        <h2 class="font-weight-bold mb-4">Binary Search</h2>

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
import {
    findMedianSortedArrays,
    findMin,
    getIndexOfTargetValue,
    minEatingSpeed,
    searchMatrix,
} from '~/utils/5-binary-search';

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
        {
            title: 'Search a 2D Matrix',
            description: `
            Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

            Integers in each row are sorted from left to right.
            The first integer of each row is greater than the last integer of the previous row.
`,
            solution: `
            ${searchMatrix.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                найти строку, потом binary search
            `,
        },
        {
            title: 'Find Minimum in Rotated Sorted Array',
            description: `
           Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

            [4,5,6,7,0,1,2] if it was rotated 4 times.
            [0,1,2,4,5,6,7] if it was rotated 7 times.
            Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

            Given the sorted rotated array nums of unique elements, return the minimum element of this array.

            You must write an algorithm that runs in O(log n) time.
            `,
            solution: `
            ${findMin.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Минимальный всегда слева. Если массив отсортирован, берем левый эл, сравниваем с мин. Если нет, то считаем мид, проверяем с мин. Если мид больше левого, значит, еще меньше есть справа. Если нет, то идем влево.
            `,
        },
        {
            title: 'Koko Eating Bananas',
            description: `
            Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

            Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

            Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

            Return the minimum integer k such that she can eat all the bananas within h hours.

`,
            solution: `
            ${minEatingSpeed.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Binary search от 1 до макс колва бананов в корзинке.
            `,
        },
        {
            title: 'Median of Two Sorted Arrays',
            description: `
            Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

            The overall run time complexity should be O(log (m+n))
            `,
            solution: `
            ${findMedianSortedArrays.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            без смерживания, найти сперва половинки в обоях массивов, после чего взять самый правый элемент левой части и самый левый элемент правой части (если четное колво), если нечетное то наименьший
            `,
        },
    ];
}
</script>
