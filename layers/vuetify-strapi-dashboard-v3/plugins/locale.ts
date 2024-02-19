import {createI18n} from "vue-i18n";

import fa from '~/lang/fa.json'
import en from '~/lang/en.json'

export default defineNuxtPlugin(nuxtApp => {

    let appConfig = useAppConfig()
    let defaultLocale = appConfig?.vsd?.i18n?.lang || 'en'

    const rtlDictionary = appConfig?.vsd?.i18n?.rtlDictionary || {}

    let messages = {fa, en}
    messages = deepMerge(messages, appConfig?.messages);

    let options = {
        legacy: false,
        locale: defaultLocale,
        messages,
        missingWarn: appConfig?.digimarket?.i18n?.missingWarn || false
    };
    let i18n = createI18n(options)
    i18n.install(nuxtApp.vueApp)

    watch(i18n.global.locale, (newVal) => {
        let rtl = useRtl()
        rtl.value = typeof newVal == "string" ? !!rtlDictionary?.[newVal] : false
    })

})

function deepMerge(target: any, source: any): any {
    for (const key in source) {
        if (source.hasOwnProperty(key)) {
            if (source[key] instanceof Object && key in target) {
                deepMerge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}