import {defineNuxtConfig} from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '~/assets/font-css/fontiran.css'
    ],
    modules: [
        // Using package name
        '@nuxt/content',
        // Relative to your project srcDir
        '~/../..',
        // Providing options
    ],
    ntm: {
        logo: 'assets/dkala/logo.svg',
        title: 'NTM MARKET'
    },
    content: {
        base: '/content'
    }
})
