<template>
    <div>
        <h2 class="font-weight-bold mb-4">Practice Pointers</h2>

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
import { isValidPalindrome } from '~/utils/pointers';
import { Task } from '~/types/Task';

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
    ];
}
</script>

