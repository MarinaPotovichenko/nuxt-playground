<template>
    <div>
        <Tree :node="tree.root" />
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Tree } from '~/types/Tree.ts';

@Component({
    components: {
        Tree: () => import('~/components/ui/CustomTree/Tree.vue'),
    },
})
export default class OrgStucture extends Vue {
    @Prop({type: [Tree, null], default: null}) tree!: Tree | null;
}
</script>
