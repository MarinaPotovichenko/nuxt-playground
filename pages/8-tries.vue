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
             Нода - хешсет с буквами и ссылками на детей и флаг, конец слова или нет. Добавление побуквенно, с проверкой, есть ли такая буква, если нет, то добавляем, если да, то идем по этому ребенку.
             Поиск - dfs рекурсивный (передаем индекс буквы слова и значение ноды), проходимся по слову от текущей позиции. Если буква не точка, идем по ребенку, проверив есть ли он, в конце функции проверяем кокнец ли слова. Если точка, проходимся по детям текущего узла, если  dfs return true. Если прошлись по всем детям и не нашли, false.
            `,
        },
    ];
}
</script>
