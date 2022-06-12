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
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface Task {
    title: string;
    description: string;
    examples: string[];
    solution: string;
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
            solution: '123',
        },
    ];
}
</script>
