<template>
    <div class="task mb-10">
        <div class="about pa-4 mb-4">
            <p class="subtitle-1 secondary--text font-weight-medium">{{ title }}</p>
            <Description
                :description="description"
                :description-img="descriptionImg"
            />
        </div>
        <template v-if="examples.length">
            <p>Examples</p>
            <Examples :examples="examples" />
        </template>
        <Solution
            :solution="solution"
            class="mb-4"
        />
        <div
            v-if="remember"
            class="about pa-4 mb-4 type-red"
        >
            <p class="subtitle-1 secondary--text font-weight-medium">{{ Remember }}</p>
            <Description :description="remember" />
        </div>

        <template v-if="results.length">
            <p>Results</p>
            <Examples :examples="results" />
        </template>
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
    @Prop({ type: String, default: '' }) descriptionImg!: string;
    @Prop({ type: String, default: '' }) solution!: string;
    @Prop({ type: String, default: '' }) remember!: string;
    @Prop({ type: Array, default: () => [] }) examples!: string[];
    @Prop({ type: Array, default: () => [] }) results!: string[];
}
</script>

<style lang="scss" scoped>
.task {
    .about {
        border-radius: 4px;
        background: $bg-blue-light;
        border-left: 6px $secondary solid;
    }

    .type-red {
        border-color: $primary;
        background: $bg-pink-light;
    }
}

.task:not(:last-child) {
    border-bottom: 1px $secondary solid;
}
</style>
