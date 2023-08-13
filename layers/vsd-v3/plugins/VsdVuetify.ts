import {defineNuxtPlugin} from "nuxt/app";

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
    })

    vuetify.install(nuxtApp.vueApp)
    nuxtApp.provide("vuetify", vuetify);

})