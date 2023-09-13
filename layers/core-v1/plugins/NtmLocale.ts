import {defineNuxtPlugin} from "nuxt/app";
import {createI18n, useI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'
// @ts-ignore
import _ from "lodash";

export default defineNuxtPlugin(nuxtApp => {

    let appConfig = useAppConfig()
    let defaultLocale = appConfig?.digimarket?.i18n?.lang || 'en'

    const rtlDictionary = appConfig?.digimarket?.i18n?.rtlDictionary || {}

    let messages = appConfig?.digimarket?.i18n?.messages || {fa, en}
    messages = _.merge(messages, appConfig?.i18n?.messages)

    let options = {
        legacy: false,
        locale: defaultLocale,
        messages,
        missingWarn: appConfig?.digimarket?.i18n?.missingWarn || false
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