import {defineNuxtPlugin} from "nuxt/app";
import {createI18n, useI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'
// @ts-ignore
import _ from "lodash";

export default defineNuxtPlugin(nuxtApp => {

    let appConfig = useAppConfig()
    let defaultLocale = appConfig?.digimarket?.lang || 'en'

    const rtlDictionary = appConfig?.digimarket?.rtlDictionary || {}

    let messages = appConfig?.digimarket?.messages || {fa, en}
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
    watch(i18n.global.locale, (newVal : string) => {
        let rtl = useRtl()
        rtl.value = !!rtlDictionary[newVal] ?? false
    })

})