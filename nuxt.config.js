export default {
    target: 'static',
    ssr: false,
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
        color: '#1cf2f3',
    },

    css: [{ src: '~/css/main.css' }],

    plugins: ['~/plugins/vuetify.ts'],

    build: {
        transpile: ['vue-cli-plugin-vuetify-preset-reply'],
    },

    components: true,

    buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],

    modules: ['@nuxtjs/axios', '@nuxtjs/vuetify'],

    axios: {},
};
