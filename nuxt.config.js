export default {
    target: 'static',
    mode: 'spa',
    head: {
        title: 'nuxt-playground',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    loading: {
        color: 'red',
    },

    css: [{ src: '~/css/main.css', lang: 'postcss' }],

    plugins: [],

    build: {
        postcss: {
            plugins: {
                'postcss-nested': {},
            },
        },
    },

    components: true,

    buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

    modules: ['@nuxtjs/axios'],

    axios: {},
};
