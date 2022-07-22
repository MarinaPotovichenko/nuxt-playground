<template>
    <div>
        <h2 class="font-weight-bold mb-4">
            Graph
        </h2>

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
import {
    alienOrder,
    cloneGraph,
    findCheapestPrice,
    findOrder,
    findRedundantConnection,
    getAmountOfIslands,
    ladderLength,
    orangesRotting,
    pacificAtlantic,
    surroundedRegions,
    topological,
    validTree,
    wallsAndGates,
} from '~/utils/11-graph';

@Component({
    head: {
        title: 'Practice Graph',
    },
    components: {
        Task: () => import('~/components/ui/Task/Task.vue'),
    },
})
export default class Graph extends Vue {
    tasks: Task[] = [
        {
            title: 'Number of Islands',
            descriptionImg: 'graph.PNG',
            solution: `
            ${getAmountOfIslands.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Пройтись по каждой ачейке, найдя начало 1, от нее пройтись слоями через BFS, пока встречаются 1, по всем 4м направлениям, запоминая, что в такие ячейки заходили.
                Если в такую ячейку заходили, или вне поля, или 0, не пополняем очередь этой координатой. Как только поиск закончился, пополняем колво осторовов и  проходим по следующим буквам.
                Если туда заходили, не проходим рекурсией.
           `,
        },
        {
            title: 'Clone Graph',
            descriptionImg: 'graph-1.PNG',
            solution: `
            ${cloneGraph.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                В хешмапе хранить уже созданную копию такого узла по значению. Пройтись по dfs рекурсии.
                Если такой узел уже есть в мапе, то возвращаем его. Если нет, создаем новый узел с копией значения, пустым
                списком соседей, через цикл проходимся по соседям оригинала, добавляя результат dfs(nei) в массив
                соседей копии. Возвращаем копию
           `,
        },
        {
            title: 'Max Area of Island',
            descriptionImg: 'graph-2.PNG',
            solution: `
            ${pacificAtlantic.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Идти от обратного. Определить поочереди, какие из верхей строки и боковой могут стекать в Pacific ocean, проходя dfs,
                сохраняя элементы, не выходящие за края + не присутствующие в visited пасифик океана + текущий эл больше предыдущего. Аналогично для права и низа для
                Атлантического океана. После всего пройтись по одному из хешсетов, найти совпадения.
           `,
        },
        {
            title: 'Surrounded Regions',
            descriptionImg: 'graph-3.PNG',
            solution: `
            ${surroundedRegions.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                По аналогии с поиском острова, найти его, и понять, является он прилегающим к краям, если да, то его координаты не запоминаем.
                В конце закрашиваем те переменные, которые сохранили.
                ИЛИ
                От обратного, пройтись только по всем краям, не по всем элементам. Найти острова прилегающие, поменять элементы на Т.
                Пройтись по всему массиву, меняя О на Х, а Т на О (это лучше)
           `,
        },
        {
            title: 'Rotting Oranges',
            descriptionImg: 'graph-4.PNG',
            solution: `
            ${orangesRotting.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
                Посчитать кол-во свежих и сделать очередь с координатами несвежих.
                Проходится по очереди bfs в while, пока не закончились свежие и есть очередь. Приходится по всей очереди. Время увеличивается тогда, когда прошлись по всем несвежим апельсинам по всем сторонам в пределах зоны, поменяли их и уменьшили колво.
                <br>
                <br>
                ИЛИ
                <br>
                <br>
                (Если у нас может быть несколько апельсинов)
                Пройтись по всему массиву, подсчитать колво свежих апельсинов + добавить в очередь все не свежие.
                Цикл по очереди и проверка, что остались свежие ->
                Цикл по очереди по текущей длине без добавления, берем элемент,
                проходимся по всем направлениям, получая координаты
                проверяем, что эти координаты внутри поля и равен свежему,
                если так, то меняем его на несвежий и добавляем координаты в очередь, уменьшая колво свежих апельсинов.
                После внутреннего цикла увеличиваем колво времени.
                Возвращаем время, если свежих апельсинов 0, иначе -1
           `,
        },
        {
            title: 'Course Schedule ||',
            descriptionImg: 'graph-5.PNG',
            solution: `
            ${topological.toString().split('\n').join('<br/>')} <br><br>
            ${findOrder.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Topological Sort - в основном используется для планирования заданий на основе заданных зависимостей между заданиями. Для этого нужно adj list и проверки, что мы не в цикле.
            DFS - Проходимся по adj list, отправляем в dfs. Visited  и Cycle sets. В dfs поверяям, есть ли наш узел в цикле, значит, некорретный граф.  Если в visited - останавливаемся. Елси нет, добавляем в Cycle, что значит мы сейчас проходим цепочку с определенными элементам. Проходимся по всем узлам, проверяя, что вернет (fale -> return false). Если прошли цикл и все ок, удаляем текущий элемент из цикла, добавляем в visited и в результат. Завершаем true.

            O(E+V) = O(P + V)`,
        },
        {
            title: 'Walls and Gates',
            description: `

            You are given a m x n 2D grid initialized with these three possible values.

            -1 - A wall or an obstacle. 0 - A gate. INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647. Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.

            For example, given the 2D grid:

            INF  -1  0  INF
            INF INF INF  -1
            INF  -1 INF  -1
            0  -1 INF INF
            After running your function, the 2D grid should be:

            3  -1   0   1
            2   2   1  -1
            1  -1   2  -1
            0  -1   3   4

            `,
            solution: `
            ${wallsAndGates.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `От обратного - проставлять колво шагов от ворот в ячейки через BFS. Создать очередь, пройтись по матрице и добавить ворота, пока очередь есть - взять текущую длину очереди и столько раз пройтись по ней. Беря координату, прогоняя ее по 4м направлениям, если это внутри матрицы и не преграда, добавить в очередь. Time:  O(mn)  Space:  O(mn)`,
        },
        {
            title: 'Graph Valid Tree',
            descriptionImg: 'graph-6.PNG',
            solution: `
            ${validTree.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Создаем граф, связывая ноды друг с другом (проходим по всем ребрам, одно значение в массив по индексу, второе - во второе).
            DFS (передаем текущий эл и прошлый) - бейс кейсы, если уже встречали такую ноду. Если еще нет, добавляем. Проходимся по тем узлам, что связан конкретно этот.
            Если встречаем прошлый, то continue. Вызываем dfs (новой ноды,текущей), если false, возвращаем false.
            Если цикл весь прошел, то true.
            <br>
            Все корректно, если и поиск вернул true, и колво visited нод будет такое же, что и изначально ребер.
            `,
        },
        {
            title: 'Redundant Connection',
            descriptionImg: 'graph-7.PNG',
            solution: `
             ${findRedundantConnection.toString().split('\n').join('<br/>')} <br><br>`,
            remember: `
            // UnionFind алгоритм - мы храним список вершин parents и rank (колво, сколько у вершины детей). Фунция Union - соединяет ноды, находя родителей, если родители одинаковые у двух вершин, значит, они уже соеденены. Если нет, сравниваем родителей и соединяем к тому, кто больше по ранку (в списке родителей меньшего заменяем на того, кто больше, и ранк у большего увеличиваем на то колво, сколько у ребенка). Функция Find - берем родителя по ноде par[edge], проходимся в цикле while пока не найдем родителя, равному текущему элемента (при каждой итерации след родитель - равен родителю через один, и текущий элемент равен родителю, таким образом передвигаемся наверх по цепочке); Если наша функция union вернула false, что значит, мы нашли звенья с одним родителем и они соеденены, возвращаем это соединение.
            `,
        },
        {
            title: 'Redundant Connection',
            descriptionImg: `

            A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

            Every adjacent pair of words differs by a single letter.
            Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
            sk == endWord
            Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.



            Example 1:

            Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
            Output: 5

            `,
            solution: `
             ${ladderLength.toString().split('\n').join('<br/>')} <br><br>`,
            remember: `
                Соединить граф между словами. BFS от нашего слова. Vidited, первый элемент в очереди - наше слово. Проверять, наткнулись ли на нужное слово, если да, возвращаем колво шагов. Если прошлись по слою, увеличиваем шаг.

                Оптимизация - как ключ хранить паттерн со звездочкой. Хешмап, где ключом будет паттерн hot -> *ot - h*t - ho* таким образом сложность будет O(n*amountLetter^2)
            `,
        },
        {
            title: 'Alien Dictionary ',
            descriptionImg: 'graph-7.PNG',
            solution: `
            ${alienOrder.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Создать список смежности каждого уникального символа (a->[b]),
            перебор циклом по смежным словам, проверяя, является ли второе слово префиксом первого (возвращаем "")
            Проверяем по буквенно, если нашли несовпадение, добавляем в букву первого слово ссылку на второе.
            <br> Preorder DFS (почитать). Бейз кейс, что уже видели этот символ (вернуть visited[c])  visited = {}; // false = visited, true = current path
            , потом цикл DFS по соседям, проверяя вернул ли кто-то true, елси да, возвращаем. Помечаем visited = false и добавляем символ в массив результат. Возвращаем
            результат, реверс, джоин
            `,
        },
        {
            title: 'Min Cost to Connect All Points',
            description: `
            You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

            All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

            For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
            You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

            Example 1:

            Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
            Output: ["JFK","MUC","LHR","SFO","SJC"]
            `,
            solution: `
            Сортировка по алфавиту билетов - adj list - dfs (проверяем нашли или нет, не тупик ли) - backtracking (добавляем в рез, удаляем город, отправляем его в дфс, возвращаем в исходное положение город и рез)


            Сортировать билеты, чтобы были по алфавиту города прибытия. Сделать adj list - город-прибытие - у которого будут прибытия по порядку. DFS Backtracking - для прохода по графу. Base cases: колво городов в результате = колво билетов + 1 (возвращаем, что корректно работаботала функция, возвращаем результат) либо наш город прибытия отсутствует в списке городов, откуда есть билеты (некорретно, должны пробовать другой вариант, это тупик, не пройдем все города). Проходимся по городам прибытия с текущего города, Backtracking - удаляем город из списка, добавляем в результат и отправляем в dfs. dfs вернул true, возвращаем true. Иначе возвращаем обратно город и удаляем из результата, идем дальше. Если прошли по циклу, и нет, то вовзвращаем false;
           `,
        },
        {
            title: 'Min Cost to Connect All Points',
            description: `
            You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

            The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

            Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.
            `,
            solution: `
            Prims Algo - для нахождения минимального пути в undirected графе. Берется исписок смежности  adj list, в котором - граф : [стоимость до графа, граф]. Используется min heap для хранения минимального пути и visited. Пока у мы не посетим все ноды, получать минимальное из heap [cost, node], проверяем посещали ли уже, если нет, то складываем в общую стоимость его стоимость, добавляем в visited   и проходимся по его соседям, которые еще не посетили и добавляем их в heap; O(n2logn)
            `,
        },
        {
            title: 'Network Delay Time',
            description: `
            // We have:
            // times[i] = (ui, vi, wi)
            // ui is the source node,
            // vi is the target node,
            // wi is the time
            // n - amount nodes
            // k - start signal node

            // Find and return value:
            // min time to get signal to all nodes
            // if can not be - -1


            // ? unconnected? - yes
            // ? cab be emty points arr or any nodes? - no
            // ? check correct array value [1, 1] or [n, k] - no
            // ? cycle? dublicates? - no?
            // ? time = 0?
            // ? directed graph?


            You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

            We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.
            `,
            solution: `
            "Djiktra Algo - нахождение мин пути в направленном графе по adjecency list, где нода: [нода, вес]. Используем minHeap для сохранения [вес пути, достигнуть до этой ноды, включая пре предыдущие шаги до текущей ноды, нода]. BFS. Пока не закончился heap,  pop мин значение heap, visited и сравниваем вес с такущим  максимумом. Добавляя последующие непосещенные в min heap, добавляя им вес текущего узлая. Проверить, прошли ли все
            // Time: O(elogv)
            // Space: O(v2)"
            `,
        },
        {
            title: 'Cheapest Flights Within K Stops',
            descriptionImg: `
            There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

            You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

            Example 1:

            Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
            Output: 700
            Explanation:
            The graph is shown above.
            The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
            Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops.
            `,
            solution: `
            ${findCheapestPrice.toString().split('\n').join('<br/>')} <br><br>
            `,
            remember: `
            Bellman Ford - мин путь в направленном с весами графе, могут быть отрицательны. DFS. На основ DP. Использует хешмап с весами от текущего 0, до остальных бесконечность и temp, который меняет


            "1) Этот шаг инициализирует расстояния от источника до всех вершин как бесконечные, а расстояние до самого источника как 0. Создайте массив dist[] размера |V| со всеми значениями как бесконечными, кроме dist[src], где src — исходная вершина.
            2) На этом шаге вычисляются кратчайшие расстояния. Выполните следующие |V|-1 раз, где |V| - количество вершин в данном графе.
            …..a) Сделайте следующее для каждого ребра u-v
            ………………Если dist[v] > dist[u] + вес ребра uv, то обновить dist[v]
            ………………….dist[v] = dist[u] + вес ребра uv
            3) Этот шаг сообщает, есть ли на графике отрицательный весовой цикл. Выполните следующие действия для каждого края u-v
            ……Если dist[v] > dist[u] + вес ребра uv, то «График содержит отрицательный весовой цикл» Идея шага 3 состоит в том, что шаг 2 гарантирует кратчайшие расстояния, если граф не содержит цикла с отрицательным весом. Если мы еще раз пройдемся по всем ребрам и получим более короткий путь для любой вершины, то получится цикл с отрицательным весом.
            // Time: O(VE)"
            `,
        },
    ];
}
</script>
