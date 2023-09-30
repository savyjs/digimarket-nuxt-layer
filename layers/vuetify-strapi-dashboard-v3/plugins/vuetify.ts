import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify, ThemeDefinition} from "vuetify";
import {aliases, mdi} from 'vuetify/iconsets/mdi'
import {fa} from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {VSkeletonLoader} from 'vuetify/labs/VSkeletonLoader'
import {VOtpInput} from 'vuetify/labs/VOtpInput'

export default defineNuxtPlugin((nuxt) => {
    const light: ThemeDefinition = {
        dark: false,
        colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#6200EE',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
        },
    }

    createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
                fa,
            },
        },
        ssr: true,
        components: {...components, VOtpInput, VSkeletonLoader},
        directives,
        theme: {
            defaultTheme: 'dark',
            themes: {
                light,
            },
        }
    }).install(nuxt.vueApp)
})
