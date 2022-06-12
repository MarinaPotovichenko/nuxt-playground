<template>
    <div>
        <CardInfo
            :description="solution"
            action-title="Solution"
            is-code
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
    components: {
        CardInfo: () => import('~/components/ui/CardInfo.vue'),
    },
})
export default class Solution extends Vue {
    @Prop({ type: String, default: '' }) solution!: string;
}
</script>
