import {defineNuxtPlugin} from "nuxt/app";
import {createI18n, useI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'
import _ from "lodash";

export default defineNuxtPlugin(nuxtApp => {

    let appConfig = useAppConfig()
    let defaultLocale = appConfig?.vsd?.lang || 'en'

    const rtlDictionary = appConfig?.vsd?.rtlDictionary

    let messages = {fa, en}
    messages = _.merge(messages, appConfig?.messages)

    let options = {
        legacy: false,
        locale: defaultLocale,
        messages
    };
    let i18n = createI18n(options)
    i18n.install(nuxtApp.vueApp)

    nuxtApp.provide("i18n", i18n);
    nuxtApp.provide("useI18n", useI18n);
    watch(i18n.global.locale, (newVal) => {
        let rtl = useRt()
        rtl.value = !!rtlDictionary[newVal] ?? false
    })

})