<template>
    <v-app>
        <v-main>
            <v-navigation-drawer
                app
                permanent
                color="dark"
                class="pa-5"
                width="280"
            >
                <nuxt-link to="/">
                    <v-list>
                        <v-list-item>
                            <v-list-item-content>
                                <v-list-item-title class="text-h6">
                                    <v-icon
                                        large
                                        color="primary"
                                    >mdi-controller-classic-outline</v-icon>
                                    <span class="primary--text ml-4">Playground</span>
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                    <span class="primary--text ml-15">Vue.js - Nuxt.js - Vuetify</span>
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </nuxt-link>

                <v-list
                    dense
                    class="mt-5"
                >
                    <template v-for="item in items">
                        <nuxt-link
                            :to="item.link"
                            :key="item.title"
                        >
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon color="light">{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>
                                        <span class="light--text">
                                            {{ item.title }}
                                        </span>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </nuxt-link>
                    </template>
                </v-list>
            </v-navigation-drawer>

            <v-container
                class="pa-10 pl-15 pr-15"
                fluid
            >
                <nuxt></nuxt>
            </v-container>

            <div class="buttons">
                <v-btn
                    icon
                    @click="onHeartClick"
                >
                    <template v-if="heartStorage">
                        <v-icon color="secondary">mdi-heart</v-icon>
                    </template>
                    <template v-else>
                        <v-icon>mdi-heart-outline</v-icon>
                    </template>
                </v-btn>
                <v-btn
                    icon
                    @click="onGitHubClick"
                >
                    <v-icon>mdi-github</v-icon>
                </v-btn>
            </div>

            <div class="bottom light--text">2022 - Marina Potovichenko</div>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface MenuListItem {
    title: string;
    icon: string;
    link: string;
}

@Component({})
export default class DefaultLayout extends Vue {
    drawer = true;
    items: MenuListItem[] = [
        { title: 'Array', icon: 'mdi-list-status', link: '/1-array' },
        { title: 'Two Pointers', icon: 'mdi-list-status', link: '/2-pointers' },
        { title: 'Sliding Window', icon: 'mdi-list-status', link: '/3-sliding-window' },
        { title: 'Stack', icon: 'mdi-list-status', link: '/4-stack' },
        { title: 'Binary Search', icon: 'mdi-list-status', link: '/5-binary-search' },
        { title: 'Linked List', icon: 'mdi-list-status', link: '/6-linked-list' },
        { title: '(old) Practice Easy', icon: 'mdi-list-status', link: '/practice-easy' },
        { title: '(old) Practice Medium', icon: 'mdi-list-status', link: '/practice-medium' },
        { title: '(old) Users (Tree)', icon: 'mdi-account-group-outline', link: '/' },
    ];

    heartStorage = '';

    created() {
        this.heartStorage = localStorage.getItem('heart');
    }

    onHeartClick() {
        if (!this.heartStorage) {
            localStorage.setItem('heart', 'true');
            this.heartStorage = 'true';
            return;
        }

        localStorage.removeItem('heart');
        this.heartStorage = '';
    }

    onGitHubClick() {
        window.open('https://github.com/MarinaPotovichenko/nuxt-playground', '_blank');
    }
}
</script>

<style lang="scss" scoped>
.buttons {
    position: absolute;
    right: 30px;
    top: 20px;
}

.bottom {
    position: absolute;
    right: 30px;
    bottom: 20px;
}
</style>
