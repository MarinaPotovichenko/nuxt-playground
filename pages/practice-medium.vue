<template>
    <div>
        <h2 class="font-weight-bold mb-4">Practice Medium</h2>

        <Task
            v-for="(item, index) in tasks"
            :key="item.id"
            :title="`${index + 1}. ${item.title}`"
            :description="item.description"
            :description-img="item.descriptionImg"
            :examples="item.examples"
            :solution="item.solution"
            :results="item.results"
        />
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Task } from '~/types/Task';
import { checkBST, getTreeByLayer } from '~/utils/binary-tree';

@Component({
    head: {
        title: 'Practice Medium',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class PracticeMedium extends Vue {
    tasks: Task[] = [
        {
            title: 'Trees: Is This a Binary Search Tree?',
            description: '',
            descriptionImg: '/static/binary-tree-task.png',
            examples: [],
            solution: `${getTreeByLayer.toString().split('\n').join('<br/>')} <br/> <br/> ${checkBST.toString().split('\n').join('<br/>')}`,
        }
    ]
}
</script>

