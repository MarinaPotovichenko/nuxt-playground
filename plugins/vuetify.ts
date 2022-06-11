import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import {preset} from 'vue-cli-plugin-vuetify-preset-reply/preset';

Vue.use(Vuetify)

export default ctx => {
    const vuetify = new Vuetify({
        // preset: preset,
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#1cf2f3',
                    secondary: '#139dbd',

                    darkness: '#232F34',
                    dark: '#344955',
                    medium: '#4A6572',
                    light: '#D2DBE0',
                    lightness: '#edf1f3',
                },
            },
        },
    })
    ctx.app.vuetify = vuetify
    ctx.$vuetify = vuetify.framework
}
