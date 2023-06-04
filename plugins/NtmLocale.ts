import {defineNuxtPlugin} from "nuxt/app";
import {createI18n, useI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'

export default defineNuxtPlugin(nuxtApp => {


    const messages = {fa, en}
    const options = {
        legacy: false,
        messages
    };
    const i18n = createI18n(options)
    i18n.install(nuxtApp.vueApp)

})