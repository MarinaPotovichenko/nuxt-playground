<template>
    <div class="examples">
        <template v-for="(example, index) in examples">
            <div
                :key="index"
                class="example pa-2 pr-4 pl-4 mb-4"
            >
                <span v-html="example" />
            </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Examples extends Vue {
    @Prop({ type: Array, default: () => ([]) }) examples!: string[];
}
</script>

<style lang="scss" scoped>
.examples {
    display: grid;
    grid-template-columns: calc(50% - 8px) calc(50% - 8px);
    grid-gap: 16px;

    p {
        opacity: 0.85;
    }

    .example {
        border-radius: 4px;
        background: $bg-blue-light;

        span {
            opacity: 0.85;
        }
    }
}
</style>
