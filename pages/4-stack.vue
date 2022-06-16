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
import { Component, Vue } from 'nuxt-property-decorator'
import { Task } from '~/types/Task';
import { isParenthesesValid } from '~/utils/stack';

@Component({
    head: {
        title: 'Practice Stack',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Stack extends Vue {
    tasks: Task[] = [
        {
            title: 'Valid Parentheses',
            description:
                'Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.',
            examples: [
                'Input: s = "()" <br> Output: true <br/>',
                'Input: s = "()[]{}" <br> Output: true <br>',
                'Input: s = "(]" <br> Output: false <br>',
            ],
            solution: isParenthesesValid.toString().split('\n').join('<br/>'),
            remember: 'Use hashmap for saving {close brackets: open brackets} structure, use stack for pushing open brackets. When in cycle we see open type, we push it in stack. If we see close, checking prev value, if it was the same type of bracket, we pop it. If stack is empty or prev bracket is another type, it means its incorrect. ',
            results: [
                `Input: s = "()" <br> Output: ${isParenthesesValid("()")}`,
                `Input: s = ")(" <br> Output: ${isParenthesesValid(")(")}`,
                `Input: s = "()[]{}" <br> Output: ${isParenthesesValid("()[]{}")}`,
                `Input: s = "()[]{}" <br> Output: ${isParenthesesValid("()[]{}")}`,
                `Input: s = "{{}[][[[]]]}" <br> Output: ${isParenthesesValid("{{}[][[[]]]}")}`,
                `Input: s = "(]" <br> Output: ${isParenthesesValid("(]")}`,
                `Input: s = "{{}[][[[}]]}" <br> Output: ${isParenthesesValid("{{}[][[[}]]}")}`,
                `Input: s = "}" <br> Output: ${isParenthesesValid("}")}`,
                `Input: s = "([)]" <br> Output: ${isParenthesesValid("([)]")}`,
            ],
        },
    ];
}
</script>
