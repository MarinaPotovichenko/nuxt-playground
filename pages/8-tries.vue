<template>
    <div>
        <h2 class="font-weight-bold mb-4">Trie</h2>

        <Task
            v-for="(item, index) in tasks"
            :key="item.id"
            :title="`${index + 1}. ${item.title}`"
            :description="item.description"
            :description-img="item.descriptionImg"
            :examples="item.examples"
            :solution="item.solution"
            :results="item.results"
            :remember="item.remember"
        />
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import { Task } from '~/types/Task';
import { Trie, TrieNode } from '~/utils/8-tries';

@Component({
    head: {
        title: 'Practice Trie',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Tries extends Vue {
    tasks: Task[] = [
        {
            title: 'Implement Trie (Prefix Tree)',
            descriptionImg: `trie.png`,
            solution: `
            ${Trie.toString().split('\n').join('<br/>')} <br><br>
            ${TrieNode.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.insert.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.search.toString().split('\n').join('<br/>')} <br><br>
            ${Trie.prototype.startsWith.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Trie (try) - дерево, используемое для поиска и подстановки слов. <br>
            Каждый узел - ссылка на родителя, дата (одна буква), дети (хешсет) и признак, конец ли это слова. <br>
            Префикс - это часть слова.
            `,
        },
    ];

    created() {
        const trie = new Trie();
        trie.insert('ab');
        trie.insert('abe');
        trie.insert('abq');

        // console.log('final', trie);

        // console.log('search(abq)', trie.search('abq'));
        // console.log('search(abe)', trie.search('abe'));
        // console.log('search(a)', trie.search('a'));
        // console.log('search(ab)', trie.search('ab'));
        // console.log('search()', trie.search(''));
        // console.log('search(abqe)', trie.search('abqe'));

        // console.log('startsWith(abq)', trie.startsWith('abq'));
        // console.log('startsWith(abe)', trie.startsWith('abe'));
        // console.log('startsWith(a)', trie.startsWith('a'));
        // console.log('startsWith(ab)', trie.startsWith('ab'));
        // console.log('startsWith()', trie.startsWith(''));
        // console.log('startsWith(abqe)', trie.startsWith('abqe'));
    }
}
</script>
