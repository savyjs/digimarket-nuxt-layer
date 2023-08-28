import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import {createVuetify} from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


export default defineNuxtPlugin((nuxt) => {
    createVuetify({
        ssr: true,
        components,
        directives
    }).install(nuxt.vueApp)
})
