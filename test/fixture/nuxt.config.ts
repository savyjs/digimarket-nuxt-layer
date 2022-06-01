import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    modules: [
        // Using package name
        '~/../..',
    ],
    content: {
        base: '/content'
    }
})
