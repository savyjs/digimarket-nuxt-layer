import {defineNuxtConfig} from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    cs: [
        '~/assets/font-css/font-iran.css'
    ],
    modules: [
        // Using package name
        '@nuxt/content',
        // Relative to your project srcDir
        // '~/modules/vsd',
        '~/../..',
        // 'vuetify-strapi-page',
        // Providing options
    ],
    ntm: {
        logo: 'assets/dkala/logo.svg',
    },
    content: {
        base: '/content'
    }
})
