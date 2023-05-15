import {useState, useNuxtApp} from "nuxt/app";
import {ref, watch} from 'vue'

export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value)

export const useDefaultLocale = (fallback = 'en-US') => {
    const locale = ref(fallback)
    if (process.server) {
        // Learn more about the nuxtApp interface on https://v3.nuxtjs.org/docs/usage/nuxt-app#nuxtapp-interface-advanced
        const nuxtApp = useNuxtApp()
        const reqLocale = nuxtApp.ssrContext?.req?.headers['accept-language']?.split(',')[0]
        if (reqLocale) {
            locale.value = reqLocale
        }
    } else if (process.client) {
        const navLang = navigator.language
        if (navLang) {
            locale.value = navLang
        }
    }
    return locale
}

export const useLocales = () => {
    const locale = useLocale()
    const locales = ref([
        'en-US',
        'en-GB',
        'ko-KR',
        'zh-CN',
        'ar-EG',
        'fa-IR',
        'ja-JP-u-ca-japanese'
    ])
    if (!locales.value.includes(locale.value)) {
        locales.value.unshift(locale.value)
    }
    return locales
}

