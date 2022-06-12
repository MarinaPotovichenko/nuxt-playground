<template>
    <div class="description mb-4">{{ description }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Description extends Vue {
    @Prop({ type: String, default: '' }) description!: string;
}
</script>

<style lang="scss" scoped>
.description {
    opacity: 0.85;
}
</style>
