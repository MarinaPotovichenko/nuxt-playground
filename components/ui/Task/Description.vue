<template>
    <div class="description mb-4">
        <div v-if="description">
            {{ description }}
        </div>
        <img
            v-if="descriptionImg"
            :src="`/${descriptionImg}`"
            alt="img"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({})
export default class Description extends Vue {
    @Prop({ type: String, default: '' }) description!: string;
    @Prop({ type: String, default: '' }) descriptionImg!: string;
}
</script>

<style lang="scss" scoped>
.description {
    opacity: 0.85;

    img {
        width: 100%;
        max-width: 600px;
    }
}
</style>
