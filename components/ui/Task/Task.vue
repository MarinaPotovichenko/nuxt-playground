<template>
    <div class="task mb-10">
        <div class="about pa-4 mb-4">
            <p class="subtitle-1 secondary--text font-weight-medium">{{ title }}</p>
            <Description :description="description" />
        </div>
        <Examples :examples="examples" />
        <Solution :solution="solution" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
    components: {
        Examples: () => import('~/components/ui/Task/Examples.vue'),
        Description: () => import('~/components/ui/Task/Description.vue'),
        Solution: () => import('~/components/ui/Task/Solution.vue'),
    },
})
export default class Task extends Vue {
    @Prop({ type: String, default: '' }) title!: string;
    @Prop({ type: String, default: '' }) description!: string;
    @Prop({ type: String, default: '' }) solution!: string;
    @Prop({ type: Array, default: () => ({}) }) examples!: string[];
}
</script>

<style lang="scss" scoped>
.task {
    .about {
        border-radius: 4px;
        background: $bg-blue-light;
        border-left: 6px $secondary solid;
    }
}
</style>
