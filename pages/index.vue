<template>
    <div>
        <h2 class="font-weight-bold">Users</h2>
        <p class="subtitle-1">Tree practice</p>

        <CardInfo description="Practise of ..." />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
    head: {
        title: 'Users',
    },
    components: {
        CardInfo: () => import('~/components/ui/CardInfo.vue'),
    },
})
export default class UsersTree extends Vue {}
</script>
