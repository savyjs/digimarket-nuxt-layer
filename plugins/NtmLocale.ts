import {defineNuxtPlugin} from "nuxt/app";
import {createI18n, useI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'

export default defineNuxtPlugin(nuxtApp => {

    let appConfig = useAppConfig()
    let defaultLocale = appConfig?.digimarket?.lang || 'en'

    const rtlDictionary = appConfig?.digimarket?.rtlDictionary || {
        en: false,
        fa: true
    }

    const messages = {fa, en}
    const options = {
        legacy: false,
        locale: defaultLocale,
        messages
    };
    const i18n = createI18n(options)
    i18n.install(nuxtApp.vueApp)
    nuxtApp.provide("$i18n", i18n);
    watch(i18n.global.locale, (newVal) => {
        let rtl = useRtl()
        rtl.value = !!rtlDictionary[newVal] ?? false
    })

})