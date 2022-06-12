<template>
    <ul>
        <li>
            <div class="blue--text">
                {{node.data.title}}
            </div>

            <ol v-if="node.data.users">
                <template v-if="node.data.users.lead">
                    <li class="red--text">
                        {{node.data.users.lead.name}}
                    </li>
                </template>
                <template v-if="node.data.users.employees">
                    <li
                        v-for="user in node.data.users.employees"
                        :key="user.name"
                    >
                        {{user.name}}
                    </li>
                </template>

            </ol>

            <template v-if="node.child">
                <template v-for="child in node.child">
                    <Node
                        :node="child"
                        :key="child.data.title"
                    />
                </template>
            </template>
        </li>
    </ul>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';
// @ts-ignore
import { TreeNode } from '~/types/Tree.ts';

@Component({
    name: 'Node',
})
export default class TreeLayout extends Vue {
    @Prop({type: [TreeNode, null], default: null}) node!: TreeNode | null;
}
</script>

